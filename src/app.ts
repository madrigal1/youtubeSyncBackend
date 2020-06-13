import express, { Request, Response, NextFunction } from 'express';
import { corsUrl, environment } from './config';
import cors from 'cors';
import Logger from './core/Logger';
import './database';
import { NotFoundError, ApiError, InternalError } from './core/ApiError';
import { NotFoundResponse } from './core/ApiResponse';
import routesV1 from './routes/v1';
import { createServer } from 'http';
import './sockets';

process.on('uncaughtExecption', (e) => {
    Logger.error(e);
})


const app = express();
export const server = createServer(app);


app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl }));

app.use('/v1', routesV1);

app.use((req, res, next) => next(new NotFoundResponse()));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        ApiError.handle(err, res);
    } else {
        if (environment == 'development') {
            Logger.debug(err);
            return res.status(500).send(err.message);
        }
        ApiError.handle(new InternalError(), res);

    }
})

export default app;

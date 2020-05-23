import express, { Request, Response, NextFunction } from 'express';
import { corsUrl, environment } from './config';
import cors from 'cors';
import Logger from './core/Logger';
import { NotFoundError, ApiError, InternalError } from './core/ApiError';
import { NotFoundResponse } from './core/ApiResponse';

process.on('uncaughtExecption', (e) => {
    Logger.error(e);
})


const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
app.use(cors({ origin: corsUrl }));


app.use((req, res, next) => next(new NotFoundResponse()));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        ApiError.handle(err, res);
    } else {
        if (environment == 'devlopment') {
            Logger.debug(err);
            return res.status(500).send(err.message);
        }
        ApiError.handle(new InternalError(), res);

    }
})

export default app;
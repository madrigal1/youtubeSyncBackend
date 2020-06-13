import app from "./app";
import { port, host } from "./config";
import Logger from "./core/Logger";

Logger.info('debug' + port);

app
    .listen(port || 3000, () => {
        Logger.info(`Server running on : ${port}`);
    })
    .on('error', (e) => Logger.error(e));
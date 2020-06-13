import app from "./app";
import { port, host } from "./config";
import Logger from "./core/Logger";


app
    .listen(parseInt(port), host, () => {
        Logger.info(`Server running on : ${port}`);
    })
    .on('error', (e) => Logger.error(e));
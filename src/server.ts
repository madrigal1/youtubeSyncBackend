import app from "./app";
import { port } from "./config";
import Logger from "./core/Logger";

app
    .listen(port, () => {
        Logger.info(`Server running on : ${port}`);
    })
    .on('error', (e) => Logger.error(e));
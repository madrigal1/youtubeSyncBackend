import app from "./app";
import { port } from "./config";
import Logger from "./core/Logger";

app
    .listen(port || 3000, () => {
        Logger.info(`Server running on : ${port}`);
    })
    .on('error', (e) => Logger.error(e));
export const port = process.env.PORT;
export const environment = process.env.NODE_ENV;

interface db {
    name: string;
    host: string;
    port: string;
    user: string;
    password: string;
}

export const db: db = {
    name: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    port: process.env.DB_PORT as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_USER_PWD as string,
}






export const corsUrl = process.env.CORS_URL;
export const logDirectory = process.env.LOG_DIR;

export const ytKey = process.env.YT_KEY



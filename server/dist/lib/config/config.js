"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = void 0;
function getConfig() {
    const server = {
        logger: {
            level: 'debug',
            serializers: {
                req: request => ({
                    method: request.raw.method,
                    url: request.raw.url,
                    hostname: request.hostname
                }),
                res: response => ({
                    statusCode: response.statusCode
                })
            }
        }
    };
    const db = {
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT),
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
    };
    const listen = {
        host: process.env.HOST,
        port: parseInt(process.env.PORT)
    };
    const storage = {
        url: process.env.SUPABASE_URL,
        secret: process.env.SUPABASE_SECRET
    };
    return {
        server,
        db,
        storage,
        listen,
        prefix: '/api',
        cookieName: process.env.COOKIE_NAME,
        cookieSecret: process.env.COOKIE_SECRET,
        redisUrl: process.env.REDIS_URL,
        corsOrigin: process.env.CORS_ORIGIN
    };
}
exports.getConfig = getConfig;

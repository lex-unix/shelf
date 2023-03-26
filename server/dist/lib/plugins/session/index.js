"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const session_1 = __importDefault(require("@fastify/session"));
const ioredis_1 = require("ioredis");
const store_1 = require("../../../utils/store");
const redisSession = (server, config, done) => {
    const { redisUrl, cookieSecret, cookieName } = config;
    const client = new ioredis_1.Redis(redisUrl);
    server.register(session_1.default, {
        store: new store_1.RedisStore({
            client
        }),
        cookieName: cookieName,
        secret: cookieSecret,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
            domain: process.env.NODE_ENV === 'production' ? 'kyivangels.com' : undefined
        }
    });
    server.decorate('authorize', (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.session.userId) {
            return reply.code(401).send({ message: 'User is not logged in' });
        }
    }));
    done();
};
exports.default = (0, fastify_plugin_1.default)(redisSession);

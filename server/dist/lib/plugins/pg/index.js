"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool_1 = require("../../../db/pool");
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const fastifyPg = (fastify, options, next) => {
    try {
        const pool = (0, pool_1.createPool)(options.db);
        fastify.decorate('db', pool);
        fastify.addHook('onClose', (instance, done) => {
            if (instance.db === pool) {
                instance.db.end().then(() => instance.log.info('DB connection closed'));
            }
            done();
        });
    }
    catch (err) {
        next(err);
    }
    next();
};
exports.default = (0, fastify_plugin_1.default)(fastifyPg);

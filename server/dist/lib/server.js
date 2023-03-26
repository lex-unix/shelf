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
const autoload_1 = __importDefault(require("@fastify/autoload"));
const node_path_1 = __importDefault(require("node:path"));
const cookie_1 = __importDefault(require("@fastify/cookie"));
const cors_1 = __importDefault(require("@fastify/cors"));
const plugin = (server, config, done) => __awaiter(void 0, void 0, void 0, function* () {
    server.register(cookie_1.default);
    server.register(cors_1.default, {
        origin: config.corsOrigin,
        credentials: true
    });
    server.register(autoload_1.default, {
        dir: node_path_1.default.join(__dirname, 'plugins'),
        options: config
    });
    server.register(autoload_1.default, {
        dir: node_path_1.default.join(__dirname, 'routes'),
        dirNameRoutePrefix: false,
        options: config
    });
    server.addHook('onRequest', (req) => __awaiter(void 0, void 0, void 0, function* () {
        if (req.headers['content-type'] === 'application/json' &&
            req.headers['content-length'] === '0') {
            req.headers['content-type'] = 'empty';
        }
    }));
    server.addContentTypeParser('empty', (_request, _body, next) => {
        next(null, {});
    });
    done();
});
exports.default = (0, fastify_plugin_1.default)(plugin);

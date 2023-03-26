"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const schema_1 = require("./schema");
const users_1 = __importDefault(require("../../models/users"));
const argon2 = __importStar(require("argon2"));
const users = (server, options, done) => {
    const model = (0, users_1.default)(server.db);
    server.route({
        method: 'POST',
        url: options.prefix + 'users/register',
        schema: schema_1.schema.register,
        handler: (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const isExistingUser = yield model.getUserByEmail(req.body.email);
            if (isExistingUser) {
                return reply
                    .code(409)
                    .send({ message: 'Email is used by another account', field: 'email' });
            }
            let hash;
            try {
                hash = yield argon2.hash(req.body.password);
                const user = yield model.registerUser(req.body, hash);
                req.session.userId = user.id;
                return { user };
            }
            catch (err) {
                server.log.error(err);
            }
        })
    });
    server.route({
        method: 'POST',
        url: options.prefix + 'users/login',
        schema: schema_1.schema.login,
        handler: (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield model.getUserByEmail(req.body.email);
            if (!user) {
                return reply
                    .code(404)
                    .send({ message: 'Email not found', field: 'email' });
            }
            if (!(yield argon2.verify(user.password, req.body.password))) {
                return reply
                    .code(401)
                    .send({ message: "Passwords don't match", field: 'password' });
            }
            req.session.userId = user.id;
            return { user };
        })
    });
    server.route({
        method: 'POST',
        url: options.prefix + 'users/logout',
        handler: (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield req.session.destroy();
                reply.code(205);
            }
            catch (err) {
                server.log.error(err);
            }
        })
    });
    server.route({
        method: 'GET',
        url: options.prefix + 'users/me',
        handler: (req) => __awaiter(void 0, void 0, void 0, function* () {
            if (!req.session.userId) {
                return { user: null };
            }
            const user = yield model.getUserById(req.session.userId);
            return { user };
        })
    });
    done();
};
exports.default = (0, fastify_plugin_1.default)(users);

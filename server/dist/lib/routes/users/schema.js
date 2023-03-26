"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
const User = fluent_json_schema_1.default.object()
    .prop('id', fluent_json_schema_1.default.string().required())
    .prop('name', fluent_json_schema_1.default.string().required())
    .prop('email', fluent_json_schema_1.default.string().required());
const register = {
    body: fluent_json_schema_1.default.object()
        .prop('name', fluent_json_schema_1.default.string().required())
        .prop('password', fluent_json_schema_1.default.string().required())
        .prop('email', fluent_json_schema_1.default.string().required()),
    response: {
        200: fluent_json_schema_1.default.object().prop('user', User),
        409: fluent_json_schema_1.default.object().prop('message', fluent_json_schema_1.default.string()).prop('field', fluent_json_schema_1.default.string())
    }
};
const login = {
    body: fluent_json_schema_1.default.object()
        .prop('username', fluent_json_schema_1.default.string().required())
        .prop('password', fluent_json_schema_1.default.string().required()),
    response: {
        200: fluent_json_schema_1.default.object().prop('user', User),
        404: fluent_json_schema_1.default.object().prop('message', fluent_json_schema_1.default.string()),
        401: fluent_json_schema_1.default.object().prop('message', fluent_json_schema_1.default.string()).prop('field', fluent_json_schema_1.default.string())
    }
};
const update = {
    body: fluent_json_schema_1.default.object().prop('user', fluent_json_schema_1.default.object()
        .prop('name', fluent_json_schema_1.default.string().required())
        .prop('email', fluent_json_schema_1.default.string().required())),
    response: {
        200: fluent_json_schema_1.default.object().prop('user', User),
        404: fluent_json_schema_1.default.object().prop('message', fluent_json_schema_1.default.string()),
        409: fluent_json_schema_1.default.object()
            .prop('message', fluent_json_schema_1.default.string().required())
            .prop('field', fluent_json_schema_1.default.string().required())
    }
};
exports.schema = {
    register,
    login,
    update
};

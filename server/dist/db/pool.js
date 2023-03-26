"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPool = void 0;
const pg_1 = require("pg");
const createPool = (config) => {
    return new pg_1.Pool(config);
};
exports.createPool = createPool;

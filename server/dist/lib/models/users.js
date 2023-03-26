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
Object.defineProperty(exports, "__esModule", { value: true });
function usersModel(db) {
    return {
        registerUser: function (user, hash) {
            return __awaiter(this, void 0, void 0, function* () {
                const sql = 'INSERT INTO Account (name, password, email) VALUES ($1, $2, $3) RETURNING id';
                const values = [user.name, hash, user.email];
                const result = yield db.query(sql, values);
                const { id } = result.rows[0];
                return yield this.getUserById(id);
            });
        },
        getUserById: function (id) {
            return __awaiter(this, void 0, void 0, function* () {
                const sql = 'SELECT id, name, email FROM UserAccount WHERE id = $1';
                const result = yield db.query(sql, [id]);
                return result.rows[0];
            });
        },
        getUserByEmail: function (email) {
            return __awaiter(this, void 0, void 0, function* () {
                const sql = 'SELECT id, name, email FROM UserAccount WHERE email = $1';
                const result = yield db.query(sql, [email]);
                return result.rows[0];
            });
        }
    };
}
exports.default = usersModel;

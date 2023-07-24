"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const verifyJwt = (jwtToken) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(jwtToken, secret, function (err, decoded) {
            if (err) {
                reject(err);
            }
            else {
                resolve(decoded);
            }
        });
    });
};
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=verify-jwt.js.map
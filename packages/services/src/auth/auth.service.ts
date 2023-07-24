import jwt, {decode} from "jsonwebtoken";
import * as console from "console";

export default class AuthService{
    constructor(private secret: string) {}

    decode(token: string) {
       return new Promise<any>((resolve, reject) => {
            jwt.verify(token, this.secret, function (err: any, decoded: any) {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }
}

export function createAuthService() {
    const secret = process.env.JWT_SECRET || '';
    return new AuthService(secret);
}
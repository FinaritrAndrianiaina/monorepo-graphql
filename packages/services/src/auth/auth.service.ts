import jwt, {decode} from "jsonwebtoken";
import * as console from "console";
import {PrismaClient} from "@ficommerce/generated/db"
import axios from "axios";
import {ProfileService} from "../profiles";

export default class AuthService {

    SERVICE_ROLE_KEY = process.env.SERVICE_ROLE_KEY || '';
    AUTH_URL = process.env.PUBLIC_AUTH_URL || 'http://localhost:9999';

    constructor(private secret: string, private prisma: PrismaClient, private profileService: ProfileService) {
    }

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

    async getProfileFromToken(token: string) {
        const decoded = await this.decode(token);
        if (decoded.aud === 'authenticated') {
            return await this.prisma.profiles.findUnique({where: {email: decoded.email}});
        } else {
            return null;
        }
    }

    signIn(login: string, password: string, type: string = 'email') {
        return axios.post(this.AUTH_URL + '/token?grant_type=password', {
            email: login, password
        }).then(res => res.data)
    }

    async signUp(login: string, password: string, type: string = 'email') {
        try {
            const {data} = await axios.post(this.AUTH_URL + '/signup', {
                email: login, password
            });
            await this.profileService.createProfile({
                email: data.user.email,
                fullName: data.user.email.split('@')[0],
                userName: data.user.email,
                id: data.user.id
            } as any);
            return data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}

export function createAuthService(prisma: PrismaClient, profileService: ProfileService) {
    const secret = process.env.JWT_SECRET || '';
    return new AuthService(secret, prisma, profileService);
}
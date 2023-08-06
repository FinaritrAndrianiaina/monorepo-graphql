import {AuthCheckerInterface, ResolverData} from "type-graphql";
import {ServerContext} from "./context";
import * as console from "console";

export class AuthChecker implements AuthCheckerInterface<ServerContext> {

    async check({root, args, context, info}: ResolverData<ServerContext>, roles: string[]) {
        console.log(context.token);
        if (!context.token) {
            return false;
        }
        try {
            const decoded = await context.services.authService.decode(context.token);
            console.log(decoded);
            context.user = await context.prisma.profiles.findUnique({where: {email: decoded.email}});
            return Boolean(context.user) && decoded.aud === 'authenticated';
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}
  
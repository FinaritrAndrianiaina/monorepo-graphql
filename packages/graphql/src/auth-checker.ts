import {AuthCheckerInterface, ResolverData} from "type-graphql";
import {ServerContext} from "./context";
import * as console from "console";

export class AuthChecker implements AuthCheckerInterface<ServerContext> {

    async check({root, args, context, info}: ResolverData<ServerContext>, roles: string[]) {
        if (!context.token) {
            return false;
        }
        try {
            const user = await context.services.authService.getProfileFromToken(context.token);
            context.user = user;
            return Boolean(context.user);
        } catch (e) {
            console.error(e);
            return false;
        }
    }
}
  
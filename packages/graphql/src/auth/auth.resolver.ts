import {Args, Ctx, FieldResolver, Mutation, Resolver, Root} from "type-graphql";
import {AuthorizationToken, LoginInformation} from "@ficommerce/shared";
import {ServerContext} from "../context";
import {Profiles} from "@ficommerce/generated/gql";
import * as console from "console";

@Resolver(AuthorizationToken)
export class AuthResolver {

    @Mutation(() => AuthorizationToken)
    signIn(@Args() loginInformation: LoginInformation, @Ctx() ctx: ServerContext) {
        return ctx.services.authService.signIn(loginInformation.login, loginInformation.password);
    }


    @Mutation(() => AuthorizationToken)
    signUp(@Args() signupInformation: LoginInformation, @Ctx() ctx: ServerContext) {
        return ctx.services.authService.signUp(signupInformation.login, signupInformation.password);
    }

    @FieldResolver(() => Profiles, {nullable: true})
    profile(@Root() parent: AuthorizationToken, @Ctx() ctx: ServerContext) {
        return ctx.services.authService.getProfileFromToken(parent.access_token!);
    }
}
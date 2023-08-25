import {Authorized, Ctx, FieldResolver, Mutation, Query, Resolver} from "type-graphql";
import {Products, Profiles} from "@ficommerce/generated/gql";
import {ServerContext} from "../context";

@Resolver(Profiles)
export class ProfilesResolver {

    @Authorized()
    @Query(() => Profiles)
    currentUser(@Ctx() ctx: ServerContext) {
        return ctx.user!;
    }

    @FieldResolver(returns => [Products])
    likedProducts(@Ctx() ctx: ServerContext) {
        return ctx.prisma.products.findMany({
            where: {
                profilesLiked: {
                    some: {
                        id: ctx.user!.id
                    }
                }
            }
        })
    }

}
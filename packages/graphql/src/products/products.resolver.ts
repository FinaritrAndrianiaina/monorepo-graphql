import {Args, Authorized, Ctx, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {FindManyProductsArgs, Products, Profiles} from "@ficommerce/generated/gql";
import {CreateOneProductsArgs, LikeProductArgs} from "@ficommerce/shared";
import {ServerContext} from "../context";

@Resolver(Products)
export class ProductsResolver {

    @Query(returns => [Products])
    async getManyProducts(@Args() manyProductsArgs: FindManyProductsArgs, @Ctx() ctx: ServerContext): Promise<Products[]> {
        return ctx.prisma.products.findMany({
            where: manyProductsArgs.where,
            take: manyProductsArgs.take,
            skip: manyProductsArgs.skip,
            orderBy: manyProductsArgs?.orderBy as any,
        });
    }

    @Authorized()
    @Mutation(returns => Products)
    async createOneProducts(@Args() createProductsArgs: CreateOneProductsArgs, @Ctx() ctx: ServerContext) {
        return ctx.services.productService.createProducts(createProductsArgs.data, ctx.user!);
    }

    @Authorized()
    @Mutation(returns => Products)
    async addProductToUserLiked(@Args() productToLikeArgs: LikeProductArgs, @Ctx() ctx: ServerContext) {
        return ctx.services.productService.likeProduct(productToLikeArgs.productId, ctx.user!);
    }

    @FieldResolver(returns => Profiles)
    owner(@Root() parent: Products, @Ctx() ctx: ServerContext) {
        return ctx.prisma.profiles.findUnique({where: {id: parent.profilesId}});
    }
}
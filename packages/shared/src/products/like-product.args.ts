import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class LikeProductArgs {

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    productId!: string;

}

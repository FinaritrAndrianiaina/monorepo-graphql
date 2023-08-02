import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import {CreateProductInput} from "./CreateProductInput";

@TypeGraphQL.ArgsType()
export class CreateOneProductsArgs {
    @TypeGraphQL.Field(_type => CreateProductInput, {
        nullable: false
    })
    data!: CreateProductInput;
}
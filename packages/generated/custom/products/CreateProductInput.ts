import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import {
    DecimalJSScalar,
} from "../../gql";

@TypeGraphQL.InputType("CreateProductInput", {})
export class CreateProductInput {

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    name!: string;

    @TypeGraphQL.Field(_type => DecimalJSScalar, {
        nullable: false
    })
    price!: Prisma.Decimal;

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    description!: string;

}

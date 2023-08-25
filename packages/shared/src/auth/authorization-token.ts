import * as TypeGraphQL from "type-graphql";
import {Profiles} from "@ficommerce/generated/dist/types/gql";

@TypeGraphQL.ObjectType('AuthorizationToken',{})
export class AuthorizationToken {

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    access_token?: string;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    token_type?: string;

    @TypeGraphQL.Field(_type => Number, {
        nullable: true
    })
    expires_in?: number;

    @TypeGraphQL.Field(_type => String, {
        nullable: true
    })
    refresh_token?: string;

    profile?: Profiles

    user?: {
        id: string,
        email: string
    }
}

@TypeGraphQL.ArgsType()
export class LoginInformation {

    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    login!: string;


    @TypeGraphQL.Field(_type => String, {
        nullable: false
    })
    password!: string;
}

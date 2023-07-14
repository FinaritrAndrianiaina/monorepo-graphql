import * as TypeGraphQL from "type-graphql";

export enum RecipeScalarFieldEnum {
  id = "id",
  title = "title",
  decription = "decription",
  creationDate = "creationDate"
}
TypeGraphQL.registerEnumType(RecipeScalarFieldEnum, {
  name: "RecipeScalarFieldEnum",
  description: undefined,
});

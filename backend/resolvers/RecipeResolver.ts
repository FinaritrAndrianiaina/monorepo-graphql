import {Arg, Query, Resolver} from "type-graphql";
import {Recipe} from "@ficommerce/generated";

@Resolver(Recipe)
export class RecipeResolver {

    @Query(returns => Recipe)
    async recipe(@Arg("id") id: string) {
        const recipe = new Recipe();
        Object.assign(recipe,{id: 1, creationDate: new Date(), description: "test", ingredients: ["test"], title: " test"});
        return recipe;
    }
}
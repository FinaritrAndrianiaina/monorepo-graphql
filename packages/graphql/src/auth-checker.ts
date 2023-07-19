import { AuthCheckerInterface, ResolverData } from "type-graphql";
import { ServerContext } from "./context";

export class AuthChecker implements AuthCheckerInterface<ServerContext> {
  
    check({ root, args, context, info }: ResolverData<ServerContext>, roles: string[]) {
     

      return false;
    }
  }
  
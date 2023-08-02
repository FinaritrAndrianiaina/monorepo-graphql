/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductsFullItem on Products {\n  id\n  price\n  createdAt\n  name\n  description\n  owner {\n    email\n  }\n}": types.ProductsFullItemFragmentDoc,
    "mutation CreateProducts($data: CreateProductInput!) {\n  createOneProducts(data: $data) {\n    ...ProductsFullItem\n  }\n}": types.CreateProductsDocument,
    "query GetManyProducts($where: ProductsWhereInput) {\n  getManyProducts(where: $where) {\n    ...ProductsFullItem\n  }\n}": types.GetManyProductsDocument,
    "fragment RecipeItem on Recipe {\n  id\n  title\n  description\n  createdAt\n}": types.RecipeItemFragmentDoc,
    "query FindAll {\n  findAll {\n    ...RecipeItem\n  }\n}": types.FindAllDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsFullItem on Products {\n  id\n  price\n  createdAt\n  name\n  description\n  owner {\n    email\n  }\n}"): (typeof documents)["fragment ProductsFullItem on Products {\n  id\n  price\n  createdAt\n  name\n  description\n  owner {\n    email\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateProducts($data: CreateProductInput!) {\n  createOneProducts(data: $data) {\n    ...ProductsFullItem\n  }\n}"): (typeof documents)["mutation CreateProducts($data: CreateProductInput!) {\n  createOneProducts(data: $data) {\n    ...ProductsFullItem\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetManyProducts($where: ProductsWhereInput) {\n  getManyProducts(where: $where) {\n    ...ProductsFullItem\n  }\n}"): (typeof documents)["query GetManyProducts($where: ProductsWhereInput) {\n  getManyProducts(where: $where) {\n    ...ProductsFullItem\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RecipeItem on Recipe {\n  id\n  title\n  description\n  createdAt\n}"): (typeof documents)["fragment RecipeItem on Recipe {\n  id\n  title\n  description\n  createdAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FindAll {\n  findAll {\n    ...RecipeItem\n  }\n}"): (typeof documents)["query FindAll {\n  findAll {\n    ...RecipeItem\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneRecipe: Recipe;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};

export type Query = {
  __typename?: 'Query';
  findAll: Array<Recipe>;
  recipe: Recipe;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};

export type Recipe = {
  __typename?: 'Recipe';
  creationDate: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type RecipeCreateInput = {
  creationDate?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type RecipeItemFragment = { __typename?: 'Recipe', id: string, title: string, description?: string | null, creationDate: any };

export type FindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuery = { __typename?: 'Query', findAll: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, creationDate: any }> };

export const RecipeItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]} as unknown as DocumentNode<RecipeItemFragment, unknown>;
export const FindAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"creationDate"}}]}}]} as unknown as DocumentNode<FindAllQuery, FindAllQueryVariables>;
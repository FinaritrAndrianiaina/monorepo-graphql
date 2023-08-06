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
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
};

export type CreateProductInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Decimal']['input'];
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addProductToUserLiked: Products;
  createOneProducts: Products;
  createOneRecipe: Recipe;
};


export type MutationAddProductToUserLikedArgs = {
  productId: Scalars['String']['input'];
};


export type MutationCreateOneProductsArgs = {
  data: CreateProductInput;
};


export type MutationCreateOneRecipeArgs = {
  data: RecipeCreateInput;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedUuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Order_ItemsListRelationFilter = {
  every?: InputMaybe<Order_ItemsWhereInput>;
  none?: InputMaybe<Order_ItemsWhereInput>;
  some?: InputMaybe<Order_ItemsWhereInput>;
};

export type Order_ItemsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Order_ItemsWhereInput = {
  AND?: InputMaybe<Array<Order_ItemsWhereInput>>;
  NOT?: InputMaybe<Array<Order_ItemsWhereInput>>;
  OR?: InputMaybe<Array<Order_ItemsWhereInput>>;
  id?: InputMaybe<UuidFilter>;
  order?: InputMaybe<OrdersRelationFilter>;
  orderId?: InputMaybe<UuidFilter>;
  product?: InputMaybe<ProductsRelationFilter>;
  productId?: InputMaybe<UuidFilter>;
};

export type Order_StatusRelationFilter = {
  is?: InputMaybe<Order_StatusWhereInput>;
  isNot?: InputMaybe<Order_StatusWhereInput>;
};

export type Order_StatusWhereInput = {
  AND?: InputMaybe<Array<Order_StatusWhereInput>>;
  NOT?: InputMaybe<Array<Order_StatusWhereInput>>;
  OR?: InputMaybe<Array<Order_StatusWhereInput>>;
  code?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrdersListRelationFilter>;
};

export type OrdersListRelationFilter = {
  every?: InputMaybe<OrdersWhereInput>;
  none?: InputMaybe<OrdersWhereInput>;
  some?: InputMaybe<OrdersWhereInput>;
};

export type OrdersOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrdersRelationFilter = {
  is?: InputMaybe<OrdersWhereInput>;
  isNot?: InputMaybe<OrdersWhereInput>;
};

export type OrdersWhereInput = {
  AND?: InputMaybe<Array<OrdersWhereInput>>;
  NOT?: InputMaybe<Array<OrdersWhereInput>>;
  OR?: InputMaybe<Array<OrdersWhereInput>>;
  customer?: InputMaybe<ProfilesRelationFilter>;
  customerId?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  orderItems?: InputMaybe<Order_ItemsListRelationFilter>;
  status?: InputMaybe<Order_StatusRelationFilter>;
  statusCode?: InputMaybe<StringFilter>;
};

export type Products = {
  __typename?: 'Products';
  _count?: Maybe<ProductsCount>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner: Profiles;
  price: Scalars['Decimal']['output'];
  profilesId: Scalars['String']['output'];
  stripeProductId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductsCount = {
  __typename?: 'ProductsCount';
  orders: Scalars['Int']['output'];
};


export type ProductsCountOrdersArgs = {
  where?: InputMaybe<Order_ItemsWhereInput>;
};

export type ProductsListRelationFilter = {
  every?: InputMaybe<ProductsWhereInput>;
  none?: InputMaybe<ProductsWhereInput>;
  some?: InputMaybe<ProductsWhereInput>;
};

export type ProductsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductsOrderByWithRelationInput = {
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orders?: InputMaybe<Order_ItemsOrderByRelationAggregateInput>;
  owner?: InputMaybe<ProfilesOrderByWithRelationInput>;
  price?: InputMaybe<SortOrder>;
  profilesId?: InputMaybe<SortOrder>;
  stripeProductId?: InputMaybe<SortOrderInput>;
};

export type ProductsRelationFilter = {
  is?: InputMaybe<ProductsWhereInput>;
  isNot?: InputMaybe<ProductsWhereInput>;
};

export enum ProductsScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Price = 'price',
  ProfilesId = 'profilesId',
  StripeProductId = 'stripeProductId',
  UpdatedAt = 'updatedAt'
}

export type ProductsWhereInput = {
  AND?: InputMaybe<Array<ProductsWhereInput>>;
  NOT?: InputMaybe<Array<ProductsWhereInput>>;
  OR?: InputMaybe<Array<ProductsWhereInput>>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<Order_ItemsListRelationFilter>;
  owner?: InputMaybe<ProfilesRelationFilter>;
  price?: InputMaybe<DecimalFilter>;
  profilesId?: InputMaybe<UuidFilter>;
  stripeProductId?: InputMaybe<StringNullableFilter>;
};

export type ProductsWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Profiles = {
  __typename?: 'Profiles';
  _count?: Maybe<ProfilesCount>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  likedProducts: Array<Products>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userName: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type ProfilesCount = {
  __typename?: 'ProfilesCount';
  customerOrders: Scalars['Int']['output'];
  userProducts: Scalars['Int']['output'];
};


export type ProfilesCountCustomerOrdersArgs = {
  where?: InputMaybe<OrdersWhereInput>;
};


export type ProfilesCountUserProductsArgs = {
  where?: InputMaybe<ProductsWhereInput>;
};

export type ProfilesOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrderInput>;
  customerOrders?: InputMaybe<OrdersOrderByRelationAggregateInput>;
  email?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userName?: InputMaybe<SortOrder>;
  userProducts?: InputMaybe<ProductsOrderByRelationAggregateInput>;
  website?: InputMaybe<SortOrderInput>;
};

export type ProfilesRelationFilter = {
  is?: InputMaybe<ProfilesWhereInput>;
  isNot?: InputMaybe<ProfilesWhereInput>;
};

export enum ProfilesScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  Email = 'email',
  FullName = 'fullName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserName = 'userName',
  Website = 'website'
}

export type ProfilesWhereInput = {
  AND?: InputMaybe<Array<ProfilesWhereInput>>;
  NOT?: InputMaybe<Array<ProfilesWhereInput>>;
  OR?: InputMaybe<Array<ProfilesWhereInput>>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  customerOrders?: InputMaybe<OrdersListRelationFilter>;
  email?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  userName?: InputMaybe<StringFilter>;
  userProducts?: InputMaybe<ProductsListRelationFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type ProfilesWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser: Profiles;
  findAll: Array<Recipe>;
  findManyProfiles: Array<Profiles>;
  getManyProducts: Array<Products>;
  recipe: Recipe;
};


export type QueryFindManyProfilesArgs = {
  cursor?: InputMaybe<ProfilesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProfilesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProfilesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProfilesWhereInput>;
};


export type QueryGetManyProductsArgs = {
  cursor?: InputMaybe<ProductsWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductsWhereInput>;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Recipe = {
  __typename?: 'Recipe';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type RecipeCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UuidFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductsFullItemFragment = { __typename?: 'Products', id: string, price: any, createdAt?: any | null, name: string, description: string, owner: { __typename?: 'Profiles', email: string } };

export type CreateProductsMutationVariables = Exact<{
  data: CreateProductInput;
}>;


export type CreateProductsMutation = { __typename?: 'Mutation', createOneProducts: { __typename?: 'Products', id: string, price: any, createdAt?: any | null, name: string, description: string, owner: { __typename?: 'Profiles', email: string } } };

export type LikeProductMutationVariables = Exact<{
  productId: Scalars['String']['input'];
}>;


export type LikeProductMutation = { __typename?: 'Mutation', addProductToUserLiked: { __typename?: 'Products', id: string, price: any, createdAt?: any | null, name: string, description: string, owner: { __typename?: 'Profiles', email: string } } };

export type GetManyProductsQueryVariables = Exact<{
  where?: InputMaybe<ProductsWhereInput>;
}>;


export type GetManyProductsQuery = { __typename?: 'Query', getManyProducts: Array<{ __typename?: 'Products', id: string, price: any, createdAt?: any | null, name: string, description: string, owner: { __typename?: 'Profiles', email: string } }> };

export type UserUsefulDetailsFragment = { __typename?: 'Profiles', email: string, fullName: string, userName: string, avatarUrl?: string | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'Profiles', email: string, fullName: string, userName: string, avatarUrl?: string | null, likedProducts: Array<{ __typename?: 'Products', name: string }> } };

export type RecipeItemFragment = { __typename?: 'Recipe', id: string, title: string, description?: string | null, createdAt: any };

export type FindAllQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllQuery = { __typename?: 'Query', findAll: Array<{ __typename?: 'Recipe', id: string, title: string, description?: string | null, createdAt: any }> };

export const ProductsFullItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductsFullItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Products"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<ProductsFullItemFragment, unknown>;
export const UserUsefulDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUsefulDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<UserUsefulDetailsFragment, unknown>;
export const RecipeItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<RecipeItemFragment, unknown>;
export const CreateProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductsFullItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductsFullItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Products"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<CreateProductsMutation, CreateProductsMutationVariables>;
export const LikeProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LikeProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProductToUserLiked"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductsFullItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductsFullItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Products"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<LikeProductMutation, LikeProductMutationVariables>;
export const GetManyProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetManyProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductsWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getManyProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductsFullItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProductsFullItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Products"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<GetManyProductsQuery, GetManyProductsQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserUsefulDetails"}},{"kind":"Field","name":{"kind":"Name","value":"likedProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserUsefulDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Profiles"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const FindAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecipeItem"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecipeItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Recipe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<FindAllQuery, FindAllQueryVariables>;
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/**
 * Links to projects
 * 
 * 
 * columns and relationships of "links"
 */
export type Links = {
  __typename?: 'links';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  project_id: Scalars['uuid'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** Boolean expression to filter rows from the table "links". All fields are combined with a logical 'AND'. */
export type Links_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Links_Bool_Exp>>>;
  _not?: Maybe<Links_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Links_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  project_id?: Maybe<Uuid_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** ordering options when selecting data from "links" */
export type Links_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "links" */
export type Links_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "links" */
export enum Links_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/**
 * All projects done are listed here
 * 
 * 
 * columns and relationships of "projects"
 */
export type Projects = {
  __typename?: 'projects';
  color: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  links: Array<Links>;
  logo: Scalars['String'];
  role: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  year: Scalars['Int'];
};


/**
 * All projects done are listed here
 * 
 * 
 * columns and relationships of "projects"
 */
export type ProjectsLinksArgs = {
  distinct_on?: Maybe<Array<Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Links_Order_By>>;
  where?: Maybe<Links_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  _not?: Maybe<Projects_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Projects_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  links?: Maybe<Links_Bool_Exp>;
  logo?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  subtitle?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  year?: Maybe<Int_Comparison_Exp>;
};

/** ordering options when selecting data from "projects" */
export type Projects_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  logo?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  subtitle?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  year?: Maybe<Order_By>;
};

/** primary key columns input for table: "projects" */
export type Projects_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Role = 'role',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Year = 'year'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "links" */
  links: Array<Links>;
  /** fetch data from the table: "links" using primary key columns */
  links_by_pk?: Maybe<Links>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "recommendations" */
  recommendations: Array<Recommendations>;
  /** fetch data from the table: "recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
};


/** query root */
export type Query_RootLinksArgs = {
  distinct_on?: Maybe<Array<Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Links_Order_By>>;
  where?: Maybe<Links_Bool_Exp>;
};


/** query root */
export type Query_RootLinks_By_PkArgs = {
  id: Scalars['bigint'];
};


/** query root */
export type Query_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** query root */
export type Query_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** query root */
export type Query_RootRecommendations_By_PkArgs = {
  id: Scalars['uuid'];
};

/**
 * Here are all client recommendations
 * 
 * 
 * columns and relationships of "recommendations"
 */
export type Recommendations = {
  __typename?: 'recommendations';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  photo: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** Boolean expression to filter rows from the table "recommendations". All fields are combined with a logical 'AND'. */
export type Recommendations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Recommendations_Bool_Exp>>>;
  _not?: Maybe<Recommendations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Recommendations_Bool_Exp>>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  photo?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** ordering options when selecting data from "recommendations" */
export type Recommendations_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  photo?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "recommendations" */
export type Recommendations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "recommendations" */
export enum Recommendations_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Photo = 'photo',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "links" */
  links: Array<Links>;
  /** fetch data from the table: "links" using primary key columns */
  links_by_pk?: Maybe<Links>;
  /** fetch data from the table: "projects" */
  projects: Array<Projects>;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table: "recommendations" */
  recommendations: Array<Recommendations>;
  /** fetch data from the table: "recommendations" using primary key columns */
  recommendations_by_pk?: Maybe<Recommendations>;
};


/** subscription root */
export type Subscription_RootLinksArgs = {
  distinct_on?: Maybe<Array<Links_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Links_Order_By>>;
  where?: Maybe<Links_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLinks_By_PkArgs = {
  id: Scalars['bigint'];
};


/** subscription root */
export type Subscription_RootProjectsArgs = {
  distinct_on?: Maybe<Array<Projects_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Projects_Order_By>>;
  where?: Maybe<Projects_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRecommendationsArgs = {
  distinct_on?: Maybe<Array<Recommendations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Recommendations_Order_By>>;
  where?: Maybe<Recommendations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecommendations_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type Get_ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_ProjectsQuery = (
  { __typename?: 'query_root' }
  & { projects: Array<(
    { __typename?: 'projects' }
    & Pick<Projects, 'id' | 'color' | 'logo' | 'role' | 'subtitle' | 'title' | 'year'>
    & { links: Array<(
      { __typename?: 'links' }
      & Pick<Links, 'id' | 'type' | 'url' | 'created_at' | 'updated_at' | 'project_id'>
    )> }
  )> }
);

export type Get_RecommendationsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_RecommendationsQuery = (
  { __typename?: 'query_root' }
  & { recommendations: Array<(
    { __typename?: 'recommendations' }
    & Pick<Recommendations, 'name' | 'id' | 'photo' | 'title' | 'content'>
  )> }
);

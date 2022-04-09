import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type Link = {
  __typename?: 'Link';
  featured: Scalars['Boolean'];
  id: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  links?: Maybe<Array<ProjectLink>>;
  logo?: Maybe<Scalars['String']>;
  role: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type ProjectLink = {
  __typename?: 'ProjectLink';
  id: Scalars['ID'];
  project?: Maybe<Project>;
  project_id?: Maybe<Scalars['Int']>;
  type: ProjectType;
  url: Scalars['String'];
};

export enum ProjectType {
  Android = 'Android',
  IoT = 'IoT',
  Web = 'Web',
  IOs = 'iOS'
}

export type Query = {
  __typename?: 'Query';
  link?: Maybe<Link>;
  links: Array<Link>;
  project?: Maybe<Project>;
  project_link?: Maybe<Array<ProjectLink>>;
  project_links: Array<ProjectLink>;
  project_types: Array<ProjectType>;
  projects: Array<Project>;
  recommendations: Array<Recommendation>;
};


export type QueryLinkArgs = {
  slug: Scalars['String'];
};


export type QueryLinksArgs = {
  featured?: InputMaybe<Scalars['Boolean']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProject_LinkArgs = {
  project: Scalars['ID'];
};

export type Recommendation = {
  __typename?: 'Recommendation';
  content: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  photo: Scalars['String'];
  title: Scalars['String'];
};

export type GetLinkQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLinkQuery = { __typename?: 'Query', link?: { __typename?: 'Link', id: string, url: string, title: string } | null };

export type GetLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLinksQuery = { __typename?: 'Query', links: Array<{ __typename?: 'Link', id: string, slug?: string | null, title: string, url: string }> };

export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: string, title: string, description: string, logo?: string | null, role: string, year: number, links?: Array<{ __typename?: 'ProjectLink', id: string, type: ProjectType, url: string }> | null }> };

export type LinkBaseFragment = { __typename?: 'ProjectLink', id: string, type: ProjectType, url: string };

export type GetRecommendationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecommendationsQuery = { __typename?: 'Query', recommendations: Array<{ __typename?: 'Recommendation', id: string, title: string, name: string, content: string, photo: string }> };

export const LinkBaseFragmentDoc = `
    fragment linkBase on ProjectLink {
  id
  type
  url
}
    `;
export const GetLinkDocument = `
    query GetLink($slug: String!) {
  link(slug: $slug) {
    id
    url
    title
  }
}
    `;
export const useGetLinkQuery = <
      TData = GetLinkQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetLinkQueryVariables,
      options?: UseQueryOptions<GetLinkQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLinkQuery, TError, TData>(
      ['GetLink', variables],
      fetcher<GetLinkQuery, GetLinkQueryVariables>(client, GetLinkDocument, variables, headers),
      options
    );
export const GetLinksDocument = `
    query GetLinks {
  links(featured: true) {
    id
    slug
    title
    url
  }
}
    `;
export const useGetLinksQuery = <
      TData = GetLinksQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetLinksQueryVariables,
      options?: UseQueryOptions<GetLinksQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetLinksQuery, TError, TData>(
      variables === undefined ? ['GetLinks'] : ['GetLinks', variables],
      fetcher<GetLinksQuery, GetLinksQueryVariables>(client, GetLinksDocument, variables, headers),
      options
    );
export const GetProjectsDocument = `
    query GetProjects {
  projects {
    id
    title
    description
    logo
    role
    year
    links {
      ...linkBase
    }
  }
}
    ${LinkBaseFragmentDoc}`;
export const useGetProjectsQuery = <
      TData = GetProjectsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetProjectsQueryVariables,
      options?: UseQueryOptions<GetProjectsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetProjectsQuery, TError, TData>(
      variables === undefined ? ['GetProjects'] : ['GetProjects', variables],
      fetcher<GetProjectsQuery, GetProjectsQueryVariables>(client, GetProjectsDocument, variables, headers),
      options
    );
export const GetRecommendationsDocument = `
    query GetRecommendations {
  recommendations {
    id
    title
    name
    content
    photo
  }
}
    `;
export const useGetRecommendationsQuery = <
      TData = GetRecommendationsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetRecommendationsQueryVariables,
      options?: UseQueryOptions<GetRecommendationsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetRecommendationsQuery, TError, TData>(
      variables === undefined ? ['GetRecommendations'] : ['GetRecommendations', variables],
      fetcher<GetRecommendationsQuery, GetRecommendationsQueryVariables>(client, GetRecommendationsDocument, variables, headers),
      options
    );
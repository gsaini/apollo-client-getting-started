export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  todos: Maybe<Array<Maybe<ToDo>>>;
};

export type Mutation = {
  updateTodo: Maybe<ToDo>;
};


export type MutationupdateTodoArgs = {
  id: Scalars['ID'];
  completed: Scalars['Boolean'];
};

export type ToDo = {
  id: Scalars['ID'];
  title: Maybe<Scalars['String']>;
  completed: Maybe<Scalars['Boolean']>;
};

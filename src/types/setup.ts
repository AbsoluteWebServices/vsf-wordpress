import ApolloClient, { ApolloClientOptions } from 'apollo-client';

export interface ClientInstance<T = any> extends ApolloClient<T> {
}

export interface ClientConfig {
  api: string;
}

export interface Config extends ClientConfig {
  client?: ClientInstance;
  customOptions?: ApolloClientOptions<any>;
}


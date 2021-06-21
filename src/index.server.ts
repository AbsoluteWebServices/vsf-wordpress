import { apiClientFactory } from '@vue-storefront/core';
import getWordpressPosts from './api/getWordpressPosts';
import { graphQLRequest, apolloClientFactory } from './helpers/graphQL';
import { ClientInstance, Config } from './types';

const defaultSettings = {
  api: '',
};

const onCreate = (settings: Config): { config: Config; client: ClientInstance } => {
  const config = { ...defaultSettings, ...settings };
  const requestLink = graphQLRequest(config);
  const client = apolloClientFactory({
    link: requestLink,
    ...settings.customOptions
  })

  return {
    config,
    client
  };
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: { getWordpressPosts }
});

export {
  createApiClient
};

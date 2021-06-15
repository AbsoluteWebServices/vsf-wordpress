import { apiClientFactory } from '@vue-storefront/core';
import getWordpressPosts from './api/getWordpressPosts';
import { graphQLRequest } from './helpers/graphQLRequest';
import { apolloClientFactory } from '@vue-storefront/magento-api/src/helpers/magentoLink/graphQl';

const defaultSettings = {
  api: '',
};

const onCreate = (settings) => {
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

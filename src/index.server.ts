import { ApiClientExtension, apiClientFactory } from '@absolute-web/vsf-core';
import getWordpressPosts from './api/getWordpressPosts';
import { graphQLRequest, apolloClientFactory } from './helpers/graphQL';
import { ClientInstance, Config, BlogPost } from './types';

const defaultSettings = {
  api: '',
  headers: {
    cacheTagsHeaderName: 'x-cache-tags'
  }
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

const cacheExtension: ApiClientExtension = {
  name: 'cacheExtension',
  hooks: (req, res) => ({
    afterCall: ({ configuration, response }) => {
      if (response && response.length) {
        const cacheTagsHeaderName = configuration.headers?.cacheTagsHeaderName || defaultSettings.headers.cacheTagsHeaderName;
        const tags = response.map(({ id }: BlogPost) => 'wp_' + id);

        res.header(cacheTagsHeaderName, tags.join(','));
      }
      return response;
    }
  }),
};

const { createApiClient } = apiClientFactory<any, any>({
  onCreate,
  api: { getWordpressPosts },
  extensions: [cacheExtension],
});

export {
  createApiClient
};

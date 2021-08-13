import { ApiClientMethods, IntegrationContext } from '@vue-storefront/core';
import { ClientInstance, Config, WordpressApiMethods } from './types';

declare module '@vue-storefront/core' {
  export interface Context {
    $wordpress: IntegrationContext<ClientInstance, Config, ApiClientMethods<WordpressApiMethods>>;
  }
}

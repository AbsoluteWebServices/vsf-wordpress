import { ApiClientMethods, IntegrationContext } from '@absolute-web/vsf-core';
import { ClientInstance, Config, WordpressApiMethods } from './types';

declare module '@absolute-web/vsf-core' {
  export interface Context {
    $wordpress: IntegrationContext<ClientInstance, Config, ApiClientMethods<{}>, ApiClientMethods<WordpressApiMethods>>;
  }
}

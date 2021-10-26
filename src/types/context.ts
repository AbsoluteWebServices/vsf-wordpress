import { ApiClientMethods, IntegrationContext } from '@absolute-web/vsf-core';
import { ClientInstance, Config } from './setup';
import { WordpressApiMethods } from './api';

export type Context = IntegrationContext<ClientInstance, Config, ApiClientMethods<WordpressApiMethods>>;

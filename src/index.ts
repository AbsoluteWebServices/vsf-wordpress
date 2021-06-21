import { track } from '@vue-storefront/core';

track('VSFWordpress');

export * from './types/setup';
export * from './types/api';
export * from './types/context';
export * from './types/composables';

export { default as useBlogPosts } from './composables/useBlogPosts';

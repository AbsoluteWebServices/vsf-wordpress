import { useVSFContext } from '@vue-storefront/core';
import { WordpressPosts, PostSearchParams } from '../types';

const useWordpressPosts = () => {
  const getPosts = async (params: PostSearchParams): Promise<WordpressPosts> => {
    const { $wordpress } = useVSFContext();
    return await $wordpress.api.getWordpressPosts(params);
  };
  return {
    getPosts
  };
};

export default useWordpressPosts;

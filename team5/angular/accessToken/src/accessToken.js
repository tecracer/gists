import config from 'config'

/* @ngInject */
export default ($httpProvider) => {

  /* @ngInject */
  const interceptor = function($q) {
    return {
      'request': function(config) {

        if(process.env.NODE_ENV === 'development') {
          config.headers['access-token'] = config.accessToken;
        }

        console.log(config.headers);

        return config;
      }
    };
  };
  $httpProvider.interceptors.push(interceptor);
};

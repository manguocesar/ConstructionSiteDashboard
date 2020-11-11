const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#82cdbf', '@border-radius-base': '4px' },
            
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
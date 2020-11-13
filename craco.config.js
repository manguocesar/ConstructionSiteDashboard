const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#82cdbf",
              "@border-radius-base": "4px",
              "@disabled-color": '#d9d9d9', // 失效色
            },

            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

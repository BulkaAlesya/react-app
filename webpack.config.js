const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

module.exports = (env) => env.NODE_ENV === 'development' ? devConfig : prodConfig;

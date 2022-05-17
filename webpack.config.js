// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
    node: {
        fs: "empty"
    },
        plugins: [
    new Dotenv()
]

};

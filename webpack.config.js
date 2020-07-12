var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC__DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC__DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: "SRC__DIR",
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
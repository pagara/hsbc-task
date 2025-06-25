const webpack = require("webpack");
const path = require("path");

process.env.NODE_ENV = "development";

module.exports = {
	entry: "./src/index",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"],
			},
			{
				test: /(\.css)$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
};

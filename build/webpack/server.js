const env = process.env.NODE_ENV || 'development';

module.exports = {
	name: 'server',
	target: 'node',
	entry: {
		server: [env === "production" ? "./src/server" : "./src/shared/middleware"]
	},
	output: {
		path: require('path').join(__dirname, "../../www"),
		filename: "[name].bundle.js",
		libraryTarget: 'commonjs2',
		publicPath: "/"
	},
	devtool: require("./extras").devtools,
	stats: require("./extras").stats,
	plugins: require("./plugins").server,
	resolveLoader: require("./extras").resolveLoader,
	module: require("./loaders").loaders,
	resolve: require("./extras").resolve
};



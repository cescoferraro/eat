const loaders = {
	rules: [
		{
			test: /\.css$/,
			loaders: ['isomorphic-style-loader', "raw-loader"]
		}
	]
};


module.exports = {
	loaders: loaders
};

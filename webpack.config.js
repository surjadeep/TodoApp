module.exports = {

  entry: "./client/todo.js",
  output: {
    filename: "./dist/todo.min.js"
  },
  module: {
    loaders: [
		{test:/\.js$/, loader: 'babel-loader', query: {presets:[ 'es2015', 'react', 'stage-2' ]},exclude: /node_modules/},
		{test:/\.jsx?$/, loader: 'babel-loader', query: {presets:[ 'es2015', 'react', 'stage-2' ]}, exclude: /node_modules/},
		{test: /\.scss/,loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  devServer: {
    contentBase: "./",
    hot: false,
    historyApiFallback: true
  }

}

module.exports = {
	devtool:'eval-source-map',
  entry: './app/index.js',
  output: {
    filename: 'app.js',
    path: __dirname + '/dist/'
  },
  module : {
  	loaders : [
  		 
  	] 
  },
  devServer:{
    contentBase : "./dist",
    open : true,
    port: '9000',
    inline: true
	}
};    
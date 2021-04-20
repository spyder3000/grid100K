const path = require('path');    

module.exports = {
    entry: './src/app.js', 
//    entry: './src/playground/96_redux-expensify.js',
//    entry: './src/playground/100_hoc.js',
    output: {
        path: path.join(__dirname, 'public'),       // needs to be an absolute path
        filename: 'bundle.js'
    }, 
    module: {
        rules: [{
            loader: 'babel-loader', 
            test: /\.js$/,               // checks file ends in .js 
            exclude: /node_modules/      // do NOT run babel through the files in node_modules 
        }, {
            test: /\.s?css$/,       // checks for .scss & .css files 
            use: [
                'style-loader', 
                'css-loader', 
                'sass-loader'
            ]      
        }]
    }, 
    devtool: 'cheap-module-eval-source-map', 
    devServer: {
        contentBase: path.join(__dirname, 'public'),   // config Webpack Dev server w/ path to public folder;  
        historyApiFallback: true,     // return this page for all 404 routes;  we want client to handle routing 
        port: 5000
    }
}; 
const path = require('path');    
const ExtractTextPlugin = require('extract-text-webpack-plugin');  

// ch 133 - convert module.exports from an object to a fn that returns the webpack config object;  
//             this gives us access to the env var;  
module.exports = (env) => {
    // console.log('env', env); 
    const isProduction = env === 'production';  // from package.json "build:prod": "webpack -p --env production",  (sets env var to production) 
    const CSSExtract = new ExtractTextPlugin('styles.css'); 
    
    return {
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
                use: CSSExtract.extract({
                    use: [
                        'css-loader', 
                        'sass-loader'
                    ]
                })      
            }]
        }, 
        plugins: [
            CSSExtract
        ], 
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map', 
        devServer: {
            contentBase: path.join(__dirname, 'public'),   // config Webpack Dev server w/ path to public folder;  
            historyApiFallback: true,     // return this page for all 404 routes;  we want client to handle routing 
            port: 5000 
//            proxy: { "/api/**": { target: 'http://localhost:3001', secure: false, changeOrigin: true }}
        }        
    }
}


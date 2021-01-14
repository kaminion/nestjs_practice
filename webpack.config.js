const { resolve } = require('path');

module.exports = {
    context : resolve(__dirname, 'client'),
    entry : ['./index.tsx'],
    output : {
        filename: 'client.bundle.tsx',
        path : resolve(__dirname, 'build'),
        publicPath:'/'
    },

    module: {
        rules : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env',
                        '@babel/preset-react']
                    },
                }
            } // end of obj
        ]//end of rules
    }//end of module



}; // Module EoO
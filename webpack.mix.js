const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            '@':  path.resolve('resources/js')
         }
       },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'svg-sprite-loader']
            }
        ]
    }
    });


    // loader: 'svg-sprite-loader',
    //             include:[
    //                 path.resolve(__dirname, 'resources/js/icons')
    //             ],
    //             options: {
    //                 name: 'icon-[name]',
    //                 publicPath: 'resources/js/icons' // notice this customization
    //             }

mix.js('resources/js/main.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

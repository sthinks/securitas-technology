const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.mp4$/,
                    use: 'file-loader',
                },
            ],
        },
    });
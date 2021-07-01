const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gogodan-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    }, // 옵션
    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/, //js와 jsx 파일에 룰을 적용하겠다.
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [],
            },
        }],
    }, //모듈 적용한 뒤 출력
    plugins: [
        new webpack.LoaderOptionsPlugin({ debug: true }),
    ],

    output: {
        path: path.join(__dirname, 'dist'), // C:\Users\domfam-06\WebstormProjects\untitled\react\2.끝말잇기\dist
        filename: 'app.js'
    } // 출력
};
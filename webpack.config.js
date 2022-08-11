const { VueLoaderPlugin } = require('vue-loader')

module.exports= {
    mode: 'development',
    entry: {
        app: './src/app.vue'
    },
    output: {
        filename: 'js/[name]/[name].js'
    },
    module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.css$/,
            loader: 'css-loader'
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
        ]
      },
      plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin()
      ]
}
module.exports = {
     entry: './src/app.vue',
     output: {
         path: 'C:\\Users\\slsi\\weather-app',
         filename: 'bundle.js'
     },
     module: {
        rules: [{ test: /\.vue$/, use: 'raw-loader' }],
      },
}
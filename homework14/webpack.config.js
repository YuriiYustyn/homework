const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: ["./src/scripts/index.js"],
   output: {
      path: __dirname + "/dist",
      filename: "bundle.js",
   },
   plugins: [
      new HtmlWebpackPlugin({
         filename: "index.html",
         template: "./src/index.html",
      }),
   ],
   module: {
      rules: [
         {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
               "file-loader",
               {
                  loader: "image-webpack-loader",
                  options: {
                     bypassOnDebug: true, // webpack@1.x
                     disable: true, // webpack@2.x and newer
                  },
               },
            ],
         },
         {
            test: /\.(mp3|aac|ogg)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'audios/'
                  }
               },
            ],
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
         },
      ],
   },
};
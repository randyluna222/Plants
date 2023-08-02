const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js', // Archivo de entrada de tu aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se generará el bundle
    filename: 'bundle.js', // Nombre del archivo bundle
  },
  module: {
    rules: [
      // Aquí puedes agregar reglas para transpilar código usando Babel, si lo necesitas
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html', // Plantilla HTML base
    }),
  ],
};

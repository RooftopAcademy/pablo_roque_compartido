const path = require('path');

module.exports = {
  entry: ['./src/app.ts','./src/helpers/boton-menu.ts','./src/helpers/toggleCardColorOnClick.ts','./src/models/carrito.ts','./src/helpers/validateContactForm.ts',
  './src/views/detalleView.ts','./src/views/productItem.ts','./src/views/productItemCarrito.ts','./src/models/producto.ts',
  './src/storeData.ts','./src/models/user.ts','./src/services/userApi.ts','./src/views/usuarioItem.ts','./src/views/listProductsPage.ts'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
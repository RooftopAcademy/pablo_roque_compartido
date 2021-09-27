const path = require('path');

module.exports = {
  entry: ['./src/app.ts','./src/boton-menu.ts','./src/carrito.ts','./src/contacto.ts',
    './src/detalleView.ts','./src/productItem.ts','./src/productItemCarrito.ts','./src/producto.ts',
    './src/UI.ts','./src/user.ts','./src/userApi.ts','./src/usuarioItem.ts'],
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
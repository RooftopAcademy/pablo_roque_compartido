/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _producto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto */ \"./src/producto.ts\");\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./src/user.ts\");\n\n\nvar UI = /** @class */ (function () {\n    function UI() {\n        this.products = [];\n        this.users = [];\n    }\n    UI.prototype.addProducts = function (products1) {\n        var _this = this;\n        products1.forEach(function (item) {\n            var product = new _producto__WEBPACK_IMPORTED_MODULE_0__.Producto();\n            product.id = item.id;\n            product.nombre = item.nombre;\n            product.descripcion = item.descripcion;\n            product.precio = item.precio;\n            product.img = item.img;\n            _this.products.push(product);\n        });\n    };\n    UI.prototype.addUsers = function (users) {\n        var _this = this;\n        users.forEach(function (usuario) {\n            var user = new _user__WEBPACK_IMPORTED_MODULE_1__.User();\n            user.id = usuario.id;\n            user.name = usuario.name;\n            user.username = user.username;\n            user.email = usuario.email;\n            _this.users.push(user);\n        });\n    };\n    UI.prototype.getProducts = function () {\n        return this.products;\n    };\n    UI.prototype.getUsers = function () {\n        return this.users;\n    };\n    return UI;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/UI.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes.ts\");\n\nfunction app() {\n    //  Array.from(rutas).forEach(ruta =>{\n    //      ruta.addEventListener('click',function(e: Event){\n    //          const pages = {\n    //             'file:///' : homePage,\n    //             'file:///listaproductos': ui.addProducts,\n    //             'file:///product-detail': detalleItemView,\n    //             'file:///users': ui.addUsers,\n    //             'file:///contacto': formPage,\n    //         }\n    //      })\n    //  });\n    //  validarFormulario();\n    window.location.hash = '#/';\n    (0,_routes__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash);\n    window.addEventListener('hashchange', function () {\n        (0,_routes__WEBPACK_IMPORTED_MODULE_0__.router)(window.location.hash);\n    });\n}\napp();\n\n\n//# sourceURL=webpack://08-09/./src/app.ts?");

/***/ }),

/***/ "./src/boton-menu.ts":
/*!***************************!*\
  !*** ./src/boton-menu.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu)\n/* harmony export */ });\nvar btnMenu = document.querySelector(\"#menu\");\nvar menuContent = document.querySelector(\".menu-content\");\nfunction Menu() {\n    btnMenu.addEventListener('click', function () {\n        menuContent.classList.toggle('menu-active');\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/boton-menu.ts?");

/***/ }),

/***/ "./src/carrito.ts":
/*!************************!*\
  !*** ./src/carrito.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carrito\": () => (/* binding */ Carrito)\n/* harmony export */ });\nvar Carrito = /** @class */ (function () {\n    function Carrito() {\n        this._productsCarrito = [];\n    }\n    Carrito.prototype.addCarrito = function (producto) {\n        this._productsCarrito.push(producto);\n    };\n    Carrito.prototype.borrarCarrito = function (id) {\n        var _this = this;\n        this._productsCarrito.forEach(function (producto) {\n            if (producto.id == id) {\n                var indice = _this._productsCarrito.indexOf(producto);\n                _this._productsCarrito.slice(indice);\n            }\n        });\n    };\n    return Carrito;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/carrito.ts?");

/***/ }),

/***/ "./src/contacto.ts":
/*!*************************!*\
  !*** ./src/contacto.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validarFormulario\": () => (/* binding */ validarFormulario)\n/* harmony export */ });\nvar nombre = document.getElementById(\"nombre\");\nvar apellido = document.getElementById(\"apellido\");\nvar consulta = document.getElementById(\"consulta\");\nvar formulario = document.getElementById(\"formulario\");\nfunction validarFormulario() {\n    formulario.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n        if (nombre.value === '') {\n            alert(\"El nombre es requerido\");\n        }\n        if (apellido.value === '') {\n            alert(\"El apellido es requerido\");\n        }\n        if (consulta.value === '') {\n            alert(\"La consulta es requerida\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/contacto.ts?");

/***/ }),

/***/ "./src/detalleView.ts":
/*!****************************!*\
  !*** ./src/detalleView.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"detalleItemView\": () => (/* binding */ detalleItemView)\n/* harmony export */ });\nfunction detalleItemView(product) {\n    return \"\\n        <div>\\n            <img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\">\\n        </div>\\n\\n        <div class=\\\"caracteristicas\\\">\\n            <p>\\n                Notebook Asus Zenbook 14 UX425EA-BM004T \\n                Intel Core i5 1135G7 8Gb SSD 512Gb 14\\\" \\n                Win10 \\n            </p>\\n        </div>\\n\\n        <div class=\\\"descripcion\\\">\\n            <h2>Descripcion</h2>\\n            <p>\\n                \" + product.descripcion + \"\\n            </p>\\n        </div>\\n\\n        <div class=\\\"boton\\\">\\n            <button>Comprar</button>\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/detalleView.ts?");

/***/ }),

/***/ "./src/formPage.ts":
/*!*************************!*\
  !*** ./src/formPage.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formPage\": () => (/* binding */ formPage)\n/* harmony export */ });\nfunction formPage() {\n    return \"\\n        <div class=\\\"titulo-contacto\\\">\\n            <h3>Contacto</h3>\\n        </div>\\n        <form action=\\\"\\\" class=\\\"form-contacto\\\" id=\\\"formulario\\\">\\n            <div>\\n                <label for=\\\"\\\">Nombre</label>\\n                <input type=\\\"text\\\" id=\\\"nombre\\\">\\n            </div>\\n            \\n            <div>\\n                <label for=\\\"\\\">Apellido</label>\\n                <input type=\\\"text\\\" id=\\\"apellido\\\">\\n            </div>\\n            \\n            <div>\\n                <label for=\\\"\\\">Email</label>\\n                <input type=\\\"email\\\" id=\\\"email\\\" required>\\n            </div>\\n\\n            <div>\\n                <label for=\\\"\\\">Consulta</label>\\n                <textarea name=\\\"\\\" id=\\\"\\\" cols=\\\"18\\\" rows=\\\"10\\\" id=\\\"consulta\\\"></textarea>\\n            </div>\\n\\n            <div>\\n                <input type=\\\"submit\\\" value=\\\"Enviar\\\">\\n            </div>\\n        \\n        </form> \\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/formPage.ts?");

/***/ }),

/***/ "./src/home.ts":
/*!*********************!*\
  !*** ./src/home.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\nfunction homePage() {\n    return \"\\n        <div>\\n            <h1>Bienvenidos a la pagina de inicio</h1>\\n            <p>\\n                Esta es una pagina de para realizar un ejemplo visto en clase,\\n                de como utilizar HTML y CSS para desarrollar una pagina web,\\n                como asi decorarla.\\n\\n            </p>\\n        </div>   \\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/home.ts?");

/***/ }),

/***/ "./src/productItem.ts":
/*!****************************!*\
  !*** ./src/productItem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productItemView\": () => (/* binding */ productItemView)\n/* harmony export */ });\nfunction productItemView(product) {\n    return \"\\n        <div class=\\\"caja\\\" id=\\\"\" + product.id + \"\\\">\\n            <a href=\\\"/detalleproducto\\\" class=\\\"enlace-detalle\\\"><img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\"></a>\\n            <h3>$\" + product.precio + \"</h3>\\n            <p>\\n                \" + product.nombre + \"\\n            </p>\\n            <input type=\\\"submit\\\" value=\\\"Agregar\\\" class=\\\"btn-agregar\\\">\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/productItem.ts?");

/***/ }),

/***/ "./src/productItemCarrito.ts":
/*!***********************************!*\
  !*** ./src/productItemCarrito.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productItemCarritoView\": () => (/* binding */ productItemCarritoView)\n/* harmony export */ });\nfunction productItemCarritoView(product) {\n    return \"\\n        <div class=\\\"caja\\\" id=\\\"\" + product.id + \"\\\">\\n            <a href=\\\"detalleproducto.html\\\"><img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\"></a>\\n            <h3>$\" + product.precio + \"</h3>\\n            <p>\\n                \" + product.nombre + \"\\n            </p>\\n            <input type=\\\"submit\\\" value=\\\"Borrar\\\" class=\\\"btn-borrar\\\">\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/productItemCarrito.ts?");

/***/ }),

/***/ "./src/producto.ts":
/*!*************************!*\
  !*** ./src/producto.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Producto\": () => (/* binding */ Producto),\n/* harmony export */   \"products1\": () => (/* binding */ products1)\n/* harmony export */ });\nvar Producto = /** @class */ (function () {\n    //id: number;\n    //_nombre: string;\n    //_descripcion: string;\n    //_precio: number;\n    //_img: string;\n    function Producto() {\n        this.id = 0;\n        this.nombre = '';\n        this.descripcion = '';\n        this.precio = 0;\n        this.img = '';\n    }\n    Object.defineProperty(Producto.prototype, \"id\", {\n        get: function () {\n            return this.id;\n        },\n        set: function (id) {\n            this.id = id;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"nombre\", {\n        get: function () {\n            return this.nombre;\n        },\n        set: function (nombre) {\n            this.nombre = nombre;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"descripcion\", {\n        get: function () {\n            return this.descripcion;\n        },\n        set: function (descripcion) {\n            this.descripcion = descripcion;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"precio\", {\n        get: function () {\n            return this.precio;\n        },\n        set: function (precio) {\n            this.precio = precio;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"img\", {\n        get: function () {\n            return this.img;\n        },\n        set: function (img) {\n            this.img = img;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Producto;\n}());\n\nvar products1 = [\n    {\n        id: 1,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"El nuevo ZenBook 14 es más portátil que nunca. Es más fino, ligero y compacto, sin embargo; los puertos HDMI, Thunderbolt™ 4 USB-C®, USB de tipo A y el lector de tarjetas micro-SD le dan una versatilidad inigualable. \",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 2,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 3,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 4,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 5,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 6,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 15000,\n        img: \"img/pc1.jpg\",\n    },\n];\n\n\n//# sourceURL=webpack://08-09/./src/producto.ts?");

/***/ }),

/***/ "./src/renderProductList.ts":
/*!**********************************!*\
  !*** ./src/renderProductList.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProductList\": () => (/* binding */ renderProductList)\n/* harmony export */ });\n/* harmony import */ var _productItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productItem */ \"./src/productItem.ts\");\n\nfunction renderProductList(arreglo) {\n    var divElement = document.createElement('div');\n    arreglo.forEach(function (product) {\n        var elemento = (0,_productItem__WEBPACK_IMPORTED_MODULE_0__.productItemView)(product);\n        divElement.classList.add('cajas');\n        divElement.id = 'product-list';\n        divElement.innerHTML += elemento;\n    });\n    return divElement;\n}\n\n\n//# sourceURL=webpack://08-09/./src/renderProductList.ts?");

/***/ }),

/***/ "./src/renderUserList.ts":
/*!*******************************!*\
  !*** ./src/renderUserList.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderUserList\": () => (/* binding */ renderUserList)\n/* harmony export */ });\n/* harmony import */ var _userApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userApi */ \"./src/userApi.ts\");\n/* harmony import */ var _usuarioItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarioItem */ \"./src/usuarioItem.ts\");\n\n\nvar contenido = document.getElementById('contenedor');\nvar url = \"https://jsonplaceholder.typicode.com/users\";\n(0,_userApi__WEBPACK_IMPORTED_MODULE_0__.getUsers)(url);\nconsole.log(_userApi__WEBPACK_IMPORTED_MODULE_0__.users);\nfunction renderUserList() {\n    // const ui = new UI()\n    // ui.addUsers(users)\n    // const arregloUsers = ui.getUsers()\n    _userApi__WEBPACK_IMPORTED_MODULE_0__.users.forEach(function (user) {\n        var elemento = (0,_usuarioItem__WEBPACK_IMPORTED_MODULE_1__.usuarioView)(user);\n        contenido.innerHTML += elemento;\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/renderUserList.ts?");

/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _boton_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boton-menu */ \"./src/boton-menu.ts\");\n/* harmony import */ var _formPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPage */ \"./src/formPage.ts\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.ts\");\n/* harmony import */ var _producto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto */ \"./src/producto.ts\");\n/* harmony import */ var _renderProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderProductList */ \"./src/renderProductList.ts\");\n/* harmony import */ var _renderUserList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderUserList */ \"./src/renderUserList.ts\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI */ \"./src/UI.ts\");\n/* harmony import */ var _userApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userApi */ \"./src/userApi.ts\");\n\n\n\n\n\n\n\n\nvar contenido = document.getElementById('contenedor');\nvar ui = new _UI__WEBPACK_IMPORTED_MODULE_6__.UI;\nui.addUsers(_userApi__WEBPACK_IMPORTED_MODULE_7__.users);\nvar arreglo_usuarios = ui.getUsers();\nfunction router(route) {\n    contenido.innerHTML = '';\n    switch (route) {\n        case '#/': {\n            (0,_boton_menu__WEBPACK_IMPORTED_MODULE_0__.Menu)();\n            return contenido.innerHTML = (0,_home__WEBPACK_IMPORTED_MODULE_2__.homePage)();\n        }\n        case '#/contacto': {\n            contenido.innerHTML = (0,_formPage__WEBPACK_IMPORTED_MODULE_1__.formPage)();\n            //validarFormulario()\n            return contenido.innerHTML;\n        }\n        case '#/listaproductos': {\n            return contenido.appendChild((0,_renderProductList__WEBPACK_IMPORTED_MODULE_4__.renderProductList)(_producto__WEBPACK_IMPORTED_MODULE_3__.products1));\n            //return console.log(\"lista de productos\")\n        }\n        case '#/users': {\n            return (0,_renderUserList__WEBPACK_IMPORTED_MODULE_5__.renderUserList)();\n        }\n        default:\n            return console.log('404 NOT FOUND');\n    }\n}\n\n\n//# sourceURL=webpack://08-09/./src/routes.ts?");

/***/ }),

/***/ "./src/user.ts":
/*!*********************!*\
  !*** ./src/user.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    // id: number;\n    // name: string;\n    // username: string;\n    // email: string;\n    function User() {\n        this.id = 0;\n        this.name = '';\n        this.username = '';\n        this.email = '';\n    }\n    Object.defineProperty(User.prototype, \"id\", {\n        get: function () {\n            return this.id;\n        },\n        set: function (id) {\n            this.id = id;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"name\", {\n        get: function () {\n            return this.name;\n        },\n        set: function (nombre) {\n            this.name = nombre;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"username\", {\n        get: function () {\n            return this.username;\n        },\n        set: function (apellido) {\n            this.username = apellido;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"email\", {\n        get: function () {\n            return this.email;\n        },\n        set: function (email) {\n            this.email = email;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return User;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/user.ts?");

/***/ }),

/***/ "./src/userApi.ts":
/*!************************!*\
  !*** ./src/userApi.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar users = [];\nfunction getUsers(url) {\n    return __awaiter(this, void 0, void 0, function () {\n        var respuesta;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(url)\n                        .then(function (response) { return response.json(); })\n                        .then(function (data) { return pushUsers(data); })\n                        .catch(function (err) { return console.log(err); })];\n                case 1:\n                    respuesta = _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nvar pushUsers = function (respuesta) {\n    for (var index = 0; index < respuesta.length; index++) {\n        users.push(respuesta[index]);\n    }\n    //   let body = document.getElementById('list-usuarios')\n    //   for (let index = 0; index < data.length; index++) {\n    //     body.innerHTML += usuarioView(data[index])  \n    //   }\n};\n\n\n//# sourceURL=webpack://08-09/./src/userApi.ts?");

/***/ }),

/***/ "./src/usuarioItem.ts":
/*!****************************!*\
  !*** ./src/usuarioItem.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usuarioView\": () => (/* binding */ usuarioView)\n/* harmony export */ });\nfunction usuarioView(usuario) {\n    return \"\\n        <div class=\\\"usuario\\\">\\n            <p>\\n                Id: \" + usuario.id + \"\\n                <br>\\n                Nombre: \" + usuario.name + \"\\n                <br>\\n                Apellido: \" + usuario.username + \"\\n                <br>\\n                Email:\" + usuario.email + \"\\n            </p>\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/usuarioItem.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/app.ts");
/******/ 	__webpack_require__("./src/boton-menu.ts");
/******/ 	__webpack_require__("./src/carrito.ts");
/******/ 	__webpack_require__("./src/contacto.ts");
/******/ 	__webpack_require__("./src/detalleView.ts");
/******/ 	__webpack_require__("./src/productItem.ts");
/******/ 	__webpack_require__("./src/productItemCarrito.ts");
/******/ 	__webpack_require__("./src/producto.ts");
/******/ 	__webpack_require__("./src/UI.ts");
/******/ 	__webpack_require__("./src/user.ts");
/******/ 	__webpack_require__("./src/userApi.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/usuarioItem.ts");
/******/ 	
/******/ })()
;
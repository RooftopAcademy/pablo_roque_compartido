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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storeData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeData */ \"./src/storeData.ts\");\n/* harmony import */ var _services_userApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/userApi */ \"./src/services/userApi.ts\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.ts\");\n\n\n\nvar App = /** @class */ (function () {\n    function App() {\n    }\n    App.prototype.loadRouter = function () {\n        this.router = _router__WEBPACK_IMPORTED_MODULE_2__.router;\n        console.log(\"hola\");\n        /**\n         * Url por defecto\n         */\n        window.location.hash = '#/';\n        /**\n         * Redirigiendo a la url por defecto\n         */\n        (0,_router__WEBPACK_IMPORTED_MODULE_2__.router)(window.location.hash);\n        /**\n         * Detecta el cambio de la url y despacha la accion al router\n         */\n        window.addEventListener('hashchange', function () {\n            /**\n             * Limpia la vista actual cuando cambia una ruta\n             */\n            /**\n             * Insertando el contenido de la pagina\n             */\n            (0,_router__WEBPACK_IMPORTED_MODULE_2__.router)(window.location.hash);\n        });\n    };\n    App.prototype.render = function (element, content) {\n        if (content === void 0) { content = ''; }\n        element.innerHTML = content;\n    };\n    App.prototype.setContainer = function (container) {\n        this.container = container;\n    };\n    return App;\n}());\nvar app = new App;\napp.setContainer(document.getElementById('app'));\napp.loadRouter();\n/**\n * Inicializa el store de datos\n */\nvar store = new _storeData__WEBPACK_IMPORTED_MODULE_0__.storeData;\n/**\n * Cargar la lista de usuarios\n */\nstore.addUsers(_services_userApi__WEBPACK_IMPORTED_MODULE_1__.users);\n\n\n//# sourceURL=webpack://08-09/./src/app.ts?");

/***/ }),

/***/ "./src/components/btnRedesSocialesComponent.ts":
/*!*****************************************************!*\
  !*** ./src/components/btnRedesSocialesComponent.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ btnRedesSocialesComponent)\n/* harmony export */ });\nfunction btnRedesSocialesComponent() {\n    return \"\\n    <div class=\\\"menu-content\\\">\\n        <span class=\\\"menu-item\\\" id=\\\"menu\\\">\\n            <img src=\\\"img/plus.svg\\\" alt=\\\"\\\">\\n        </span>\\n        <a href=\\\"#\\\" class=\\\"menu-item\\\">\\n            <img src=\\\"img/facebook.svg\\\" alt=\\\"\\\">\\n        </a>\\n        <a href=\\\"#\\\" class=\\\"menu-item\\\">\\n            <img src=\\\"img/instagram.svg\\\" alt=\\\"\\\">\\n        </a>\\n    </div>\\n\\n    \";\n}\n\n\n//# sourceURL=webpack://08-09/./src/components/btnRedesSocialesComponent.ts?");

/***/ }),

/***/ "./src/components/footerComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/footerComponent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ footerComponent)\n/* harmony export */ });\nfunction footerComponent() {\n    return \"\\n    <footer>Bienvenidos al ejemplo de Pablo Roque &copy;</footer>\\n    \";\n}\n\n\n//# sourceURL=webpack://08-09/./src/components/footerComponent.ts?");

/***/ }),

/***/ "./src/components/headerComponent.ts":
/*!*******************************************!*\
  !*** ./src/components/headerComponent.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerComponent)\n/* harmony export */ });\nfunction headerComponent() {\n    return \"\\n    <header>\\n        <input type=\\\"checkbox\\\" id=\\\"btn-menu\\\">\\n        <label for=\\\"btn-menu\\\" class=\\\"label-check\\\"><span class=\\\"material-icons material-icons-outlined\\\">reorder</span></label>\\n        <a href=\\\"#\\\"class=\\\"logo\\\"><span class=\\\"material-icons material-icons-outlined\\\">\\n            shopping_cart\\n            </span></a>\\n        <nav class=\\\"menu\\\">\\n            <ul>\\n                <li>\\n                    <a class=\\\"rutas\\\" href=\\\"#/\\\">Inicio</a>\\n                </li>\\n\\n                <li>\\n                    <a class=\\\"rutas\\\" href=\\\"#/listaproductos\\\">Lista de Productos</a>\\n                </li>\\n                <li>\\n                    <a class=\\\"rutas\\\" href=\\\"#/users\\\">Usuarios</a>\\n                </li>\\n\\n                <li>\\n                    <a class=\\\"rutas\\\" href=\\\"#/contacto\\\">Contacto</a>\\n                </li>\\n            </ul>\\n        </nav>\\n    </header>\\n    \";\n}\n\n\n//# sourceURL=webpack://08-09/./src/components/headerComponent.ts?");

/***/ }),

/***/ "./src/components/renderProductList.ts":
/*!*********************************************!*\
  !*** ./src/components/renderProductList.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProductList\": () => (/* binding */ renderProductList)\n/* harmony export */ });\n/* harmony import */ var _views_productItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/productItem */ \"./src/views/productItem.ts\");\n\nfunction renderProductList(arreglo) {\n    var divElement = document.createElement('div');\n    arreglo.forEach(function (product) {\n        var elemento = (0,_views_productItem__WEBPACK_IMPORTED_MODULE_0__.productItemView)(product);\n        divElement.classList.add('cajas');\n        divElement.id = 'product-list';\n        divElement.innerHTML += elemento;\n    });\n    return divElement;\n}\n\n\n//# sourceURL=webpack://08-09/./src/components/renderProductList.ts?");

/***/ }),

/***/ "./src/helpers/boton-menu.ts":
/*!***********************************!*\
  !*** ./src/helpers/boton-menu.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"btnRedesSociales\": () => (/* binding */ btnRedesSociales)\n/* harmony export */ });\nfunction btnRedesSociales() {\n    var btnMenu = document.querySelector(\"#menu\");\n    var menuContent = document.querySelector(\".menu-content\");\n    btnMenu.addEventListener('click', function () {\n        menuContent.classList.toggle('menu-active');\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/helpers/boton-menu.ts?");

/***/ }),

/***/ "./src/helpers/toggleCardColorOnClick.ts":
/*!***********************************************!*\
  !*** ./src/helpers/toggleCardColorOnClick.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleCardColorOnClick)\n/* harmony export */ });\nfunction toggleCardColorOnClick() {\n    var caja = document.querySelectorAll('.caja');\n    caja.forEach(function (element) {\n        element.addEventListener('click', function () {\n            element.classList.toggle('tarjeta');\n        });\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/helpers/toggleCardColorOnClick.ts?");

/***/ }),

/***/ "./src/helpers/validateContactForm.ts":
/*!********************************************!*\
  !*** ./src/helpers/validateContactForm.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateContactForm\": () => (/* binding */ validateContactForm)\n/* harmony export */ });\nfunction validateContactForm() {\n    var nombre = document.getElementById(\"nombre\");\n    var apellido = document.getElementById(\"apellido\");\n    var consulta = document.getElementById(\"consulta\");\n    var formulario = document.getElementById(\"formulario\");\n    formulario.addEventListener(\"submit\", function (e) {\n        e.preventDefault();\n        if (nombre.value === '') {\n            alert(\"El nombre es requerido\");\n        }\n        if (apellido.value === '') {\n            alert(\"El apellido es requerido\");\n        }\n        if (consulta.value === '') {\n            alert(\"La consulta es requerida\");\n        }\n    });\n}\n\n\n//# sourceURL=webpack://08-09/./src/helpers/validateContactForm.ts?");

/***/ }),

/***/ "./src/models/carrito.ts":
/*!*******************************!*\
  !*** ./src/models/carrito.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Carrito\": () => (/* binding */ Carrito)\n/* harmony export */ });\nvar Carrito = /** @class */ (function () {\n    function Carrito() {\n        this._productsCarrito = [];\n    }\n    Carrito.prototype.addCarrito = function (producto) {\n        this._productsCarrito.push(producto);\n    };\n    Carrito.prototype.borrarCarrito = function (id) {\n        var _this = this;\n        this._productsCarrito.forEach(function (producto) {\n            if (producto.id == id) {\n                var indice = _this._productsCarrito.indexOf(producto);\n                _this._productsCarrito.slice(indice);\n            }\n        });\n    };\n    return Carrito;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/models/carrito.ts?");

/***/ }),

/***/ "./src/models/producto.ts":
/*!********************************!*\
  !*** ./src/models/producto.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Producto\": () => (/* binding */ Producto),\n/* harmony export */   \"products1\": () => (/* binding */ products1)\n/* harmony export */ });\nvar Producto = /** @class */ (function () {\n    function Producto() {\n        this.id = 0;\n        this.nombre = '';\n        this.descripcion = '';\n        this.precio = 0;\n        this.img = '';\n    }\n    Object.defineProperty(Producto.prototype, \"id\", {\n        get: function () {\n            return this.id;\n        },\n        set: function (id) {\n            this.id = id;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"nombre\", {\n        get: function () {\n            return this.nombre;\n        },\n        set: function (nombre) {\n            this.nombre = nombre;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"descripcion\", {\n        get: function () {\n            return this.descripcion;\n        },\n        set: function (descripcion) {\n            this.descripcion = descripcion;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"precio\", {\n        get: function () {\n            return this.precio;\n        },\n        set: function (precio) {\n            this.precio = precio;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Producto.prototype, \"img\", {\n        get: function () {\n            return this.img;\n        },\n        set: function (img) {\n            this.img = img;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Producto;\n}());\n\nvar products1 = [\n    {\n        id: 1,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"El nuevo ZenBook 14 es más portátil que nunca. Es más fino, ligero y compacto, sin embargo; los puertos HDMI, Thunderbolt™ 4 USB-C®, USB de tipo A y el lector de tarjetas micro-SD le dan una versatilidad inigualable. \",\n        precio: 5000,\n        img: \"img/pc1.jpg\",\n    },\n    {\n        id: 2,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 45000,\n        img: \"img/pc2.jpg\",\n    },\n    {\n        id: 3,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 28000,\n        img: \"img/pc3.jpg\",\n    },\n    {\n        id: 4,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 700,\n        img: \"img/pc3.jpg\",\n    },\n    {\n        id: 5,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 70000,\n        img: \"img/pc2.jpg\",\n    },\n    {\n        id: 6,\n        nombre: \"Nootbock Asus\",\n        descripcion: \"Zenboock 14 UX42X\",\n        precio: 10000,\n        img: \"img/pc1.jpg\",\n    },\n];\n\n\n//# sourceURL=webpack://08-09/./src/models/producto.ts?");

/***/ }),

/***/ "./src/models/user.ts":
/*!****************************!*\
  !*** ./src/models/user.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nvar User = /** @class */ (function () {\n    function User() {\n        this.id = 0;\n        this.name = '';\n        this.username = '';\n        this.email = '';\n    }\n    Object.defineProperty(User.prototype, \"id\", {\n        get: function () {\n            return this.id;\n        },\n        set: function (id) {\n            this.id = id;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"name\", {\n        get: function () {\n            return this.name;\n        },\n        set: function (nombre) {\n            this.name = nombre;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"username\", {\n        get: function () {\n            return this.username;\n        },\n        set: function (apellido) {\n            this.username = apellido;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(User.prototype, \"email\", {\n        get: function () {\n            return this.email;\n        },\n        set: function (email) {\n            this.email = email;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return User;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/models/user.ts?");

/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _helpers_boton_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/boton-menu */ \"./src/helpers/boton-menu.ts\");\n/* harmony import */ var _helpers_validateContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/validateContactForm */ \"./src/helpers/validateContactForm.ts\");\n/* harmony import */ var _views_formPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/formPage */ \"./src/views/formPage.ts\");\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home */ \"./src/views/home.ts\");\n/* harmony import */ var _views_listProductsPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/listProductsPage */ \"./src/views/listProductsPage.ts\");\n/* harmony import */ var _helpers_toggleCardColorOnClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/toggleCardColorOnClick */ \"./src/helpers/toggleCardColorOnClick.ts\");\n\n\n\n\n\n\nvar app = document.getElementById(\"app\");\nvar routes = {\n    '#/': function () {\n        app.innerHTML = (0,_views_home__WEBPACK_IMPORTED_MODULE_3__.homePage)();\n        (0,_helpers_boton_menu__WEBPACK_IMPORTED_MODULE_0__.btnRedesSociales)();\n    },\n    '#/contacto': function () {\n        app.innerHTML = (0,_views_formPage__WEBPACK_IMPORTED_MODULE_2__.formPage)();\n        (0,_helpers_validateContactForm__WEBPACK_IMPORTED_MODULE_1__.validateContactForm)();\n    },\n    '#/listaproductos': function () {\n        app.innerHTML = (0,_views_listProductsPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        (0,_helpers_toggleCardColorOnClick__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    },\n    //'#/users' : () => renderUserList()\n};\nfunction router(route) {\n    if (routes[route]) {\n        routes[route]();\n    }\n    return routes[route]();\n}\n\n\n//# sourceURL=webpack://08-09/./src/router.ts?");

/***/ }),

/***/ "./src/services/userApi.ts":
/*!*********************************!*\
  !*** ./src/services/userApi.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"users\": () => (/* binding */ users),\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar users = [];\nfunction getUsers(url) {\n    return __awaiter(this, void 0, void 0, function () {\n        var respuesta;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, fetch(url)\n                        .then(function (response) { return response.json(); })\n                        .then(function (data) { return pushUsers(data); })\n                        .catch(function (err) { return console.log(err); })];\n                case 1:\n                    respuesta = _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nvar pushUsers = function (respuesta) {\n    for (var index = 0; index < respuesta.length; index++) {\n        users.push(respuesta[index]);\n    }\n};\n\n\n//# sourceURL=webpack://08-09/./src/services/userApi.ts?");

/***/ }),

/***/ "./src/storeData.ts":
/*!**************************!*\
  !*** ./src/storeData.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storeData\": () => (/* binding */ storeData)\n/* harmony export */ });\n/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/producto */ \"./src/models/producto.ts\");\n/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/user */ \"./src/models/user.ts\");\n\n\n/**\n * Esta clase almacena los productos y los usuarios\n */\nvar storeData = /** @class */ (function () {\n    function storeData() {\n        this.products = [];\n        this.users = [];\n    }\n    storeData.prototype.addProducts = function (products1) {\n        var _this = this;\n        products1.forEach(function (item) {\n            var product = new _models_producto__WEBPACK_IMPORTED_MODULE_0__.Producto();\n            product.id = item.id;\n            product.nombre = item.nombre;\n            product.descripcion = item.descripcion;\n            product.precio = item.precio;\n            product.img = item.img;\n            _this.products.push(product);\n        });\n    };\n    storeData.prototype.addUsers = function (users) {\n        var _this = this;\n        users.forEach(function (usuario) {\n            var user = new _models_user__WEBPACK_IMPORTED_MODULE_1__.User();\n            user.id = usuario.id;\n            user.name = usuario.name;\n            user.username = user.username;\n            user.email = usuario.email;\n            _this.users.push(user);\n        });\n    };\n    storeData.prototype.getProducts = function () {\n        return this.products;\n    };\n    storeData.prototype.getUsers = function () {\n        return this.users;\n    };\n    return storeData;\n}());\n\n\n\n//# sourceURL=webpack://08-09/./src/storeData.ts?");

/***/ }),

/***/ "./src/views/detalleView.ts":
/*!**********************************!*\
  !*** ./src/views/detalleView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"detalleItemView\": () => (/* binding */ detalleItemView)\n/* harmony export */ });\nfunction detalleItemView(product) {\n    return \"\\n        <div>\\n            <img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\">\\n        </div>\\n\\n        <div class=\\\"caracteristicas\\\">\\n            <p>\\n                Notebook Asus Zenbook 14 UX425EA-BM004T \\n                Intel Core i5 1135G7 8Gb SSD 512Gb 14\\\" \\n                Win10 \\n            </p>\\n        </div>\\n\\n        <div class=\\\"descripcion\\\">\\n            <h2>Descripcion</h2>\\n            <p>\\n                \" + product.descripcion + \"\\n            </p>\\n        </div>\\n\\n        <div class=\\\"boton\\\">\\n            <button>Comprar</button>\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/detalleView.ts?");

/***/ }),

/***/ "./src/views/formPage.ts":
/*!*******************************!*\
  !*** ./src/views/formPage.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formPage\": () => (/* binding */ formPage)\n/* harmony export */ });\n/* harmony import */ var _components_footerComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/footerComponent */ \"./src/components/footerComponent.ts\");\n/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headerComponent */ \"./src/components/headerComponent.ts\");\n\n\nfunction formPage() {\n    return \"\\n        \" + (0,_components_headerComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() + \"\\n        <section class=\\\"contacto\\\">\\n            <div class=\\\"titulo-contacto\\\">\\n                <h3>Contacto</h3>\\n            </div>\\n            <form action=\\\"\\\" class=\\\"form-contacto\\\" id=\\\"formulario\\\">\\n                <div>\\n                    <label for=\\\"\\\">Nombre</label>\\n                    <input type=\\\"text\\\" id=\\\"nombre\\\">\\n                </div>\\n                \\n                <div>\\n                    <label for=\\\"\\\">Apellido</label>\\n                    <input type=\\\"text\\\" id=\\\"apellido\\\">\\n                </div>\\n                \\n                <div>\\n                    <label for=\\\"\\\">Email</label>\\n                    <input type=\\\"email\\\" id=\\\"email\\\" required>\\n                </div>\\n\\n                <div>\\n                    <label for=\\\"\\\">Consulta</label>\\n                    <textarea name=\\\"\\\" cols=\\\"18\\\" rows=\\\"10\\\" id=\\\"consulta\\\"></textarea>\\n                </div>\\n\\n                <div>\\n                    <input type=\\\"submit\\\" value=\\\"Enviar\\\">\\n                </div>\\n            \\n            </form>\\n        </section>\\n        \" + (0,_components_footerComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() + \"\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/formPage.ts?");

/***/ }),

/***/ "./src/views/home.ts":
/*!***************************!*\
  !*** ./src/views/home.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _components_btnRedesSocialesComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/btnRedesSocialesComponent */ \"./src/components/btnRedesSocialesComponent.ts\");\n/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headerComponent */ \"./src/components/headerComponent.ts\");\n/* harmony import */ var _components_footerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footerComponent */ \"./src/components/footerComponent.ts\");\n\n\n\nfunction homePage() {\n    return \"\\n    \" + (0,_components_headerComponent__WEBPACK_IMPORTED_MODULE_1__[\"default\"])() + \"\\n    \" + (0,_components_btnRedesSocialesComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"])() + \"\\n    <section class=\\\"inicio\\\" id=\\\"contenedor\\\">\\n        <div>\\n            <h1>Bienvenidos a la pagina de inicio</h1>\\n            <p>\\n                Esta es una pagina de para realizar un ejemplo visto en clase,\\n                de como utilizar HTML y CSS para desarrollar una pagina web,\\n                como asi decorarla.\\n\\n            </p>\\n        </div>\\n    </section>\\n    \" + (0,_components_footerComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])() + \"\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/home.ts?");

/***/ }),

/***/ "./src/views/listProductsPage.ts":
/*!***************************************!*\
  !*** ./src/views/listProductsPage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ listProductsPage)\n/* harmony export */ });\n/* harmony import */ var _components_renderProductList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/renderProductList */ \"./src/components/renderProductList.ts\");\n/* harmony import */ var _models_producto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/producto */ \"./src/models/producto.ts\");\n/* harmony import */ var _components_headerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/headerComponent */ \"./src/components/headerComponent.ts\");\n/* harmony import */ var _components_footerComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footerComponent */ \"./src/components/footerComponent.ts\");\n\n\n\n\nfunction listProductsPage() {\n    var contenido = (0,_components_renderProductList__WEBPACK_IMPORTED_MODULE_0__.renderProductList)(_models_producto__WEBPACK_IMPORTED_MODULE_1__.products1);\n    return \"\\n        \" + (0,_components_headerComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])() + \"\\n        <section class=\\\"listado\\\">\\n            \" + contenido.innerHTML + \"\\n        </section>\\n        \" + (0,_components_footerComponent__WEBPACK_IMPORTED_MODULE_3__[\"default\"])() + \"\\n    \";\n}\n\n\n//# sourceURL=webpack://08-09/./src/views/listProductsPage.ts?");

/***/ }),

/***/ "./src/views/productItem.ts":
/*!**********************************!*\
  !*** ./src/views/productItem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productItemView\": () => (/* binding */ productItemView)\n/* harmony export */ });\nfunction productItemView(product) {\n    return \"\\n        <div class=\\\"caja\\\" id=\\\"\" + product.id + \"\\\">\\n            <a href=\\\"/detalleproducto\\\" class=\\\"enlace-detalle\\\"><img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\"></a>\\n            <h3>$\" + product.precio + \"</h3>\\n            <p>\\n                \" + product.nombre + \"\\n            </p>\\n            <input type=\\\"submit\\\" value=\\\"Agregar\\\" class=\\\"btn-agregar\\\">\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/productItem.ts?");

/***/ }),

/***/ "./src/views/productItemCarrito.ts":
/*!*****************************************!*\
  !*** ./src/views/productItemCarrito.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productItemCarritoView\": () => (/* binding */ productItemCarritoView)\n/* harmony export */ });\nfunction productItemCarritoView(product) {\n    return \"\\n        <div class=\\\"caja\\\" id=\\\"\" + product.id + \"\\\">\\n            <a href=\\\"detalleproducto.html\\\"><img src=\\\"\" + product.img + \"\\\" alt=\\\"\\\"></a>\\n            <h3>$\" + product.precio + \"</h3>\\n            <p>\\n                \" + product.nombre + \"\\n            </p>\\n            <input type=\\\"submit\\\" value=\\\"Borrar\\\" class=\\\"btn-borrar\\\">\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/productItemCarrito.ts?");

/***/ }),

/***/ "./src/views/usuarioItem.ts":
/*!**********************************!*\
  !*** ./src/views/usuarioItem.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"usuarioView\": () => (/* binding */ usuarioView)\n/* harmony export */ });\nfunction usuarioView(usuario) {\n    return \"\\n        <div class=\\\"usuario\\\">\\n            <p>\\n                Id: \" + usuario.id + \"\\n                <br>\\n                Nombre: \" + usuario.name + \"\\n                <br>\\n                Apellido: \" + usuario.username + \"\\n                <br>\\n                Email:\" + usuario.email + \"\\n            </p>\\n        </div>\\n    \";\n}\n;\n\n\n//# sourceURL=webpack://08-09/./src/views/usuarioItem.ts?");

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
/******/ 	__webpack_require__("./src/helpers/boton-menu.ts");
/******/ 	__webpack_require__("./src/helpers/toggleCardColorOnClick.ts");
/******/ 	__webpack_require__("./src/models/carrito.ts");
/******/ 	__webpack_require__("./src/helpers/validateContactForm.ts");
/******/ 	__webpack_require__("./src/views/detalleView.ts");
/******/ 	__webpack_require__("./src/views/productItem.ts");
/******/ 	__webpack_require__("./src/views/productItemCarrito.ts");
/******/ 	__webpack_require__("./src/models/producto.ts");
/******/ 	__webpack_require__("./src/storeData.ts");
/******/ 	__webpack_require__("./src/models/user.ts");
/******/ 	__webpack_require__("./src/services/userApi.ts");
/******/ 	__webpack_require__("./src/views/usuarioItem.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/views/listProductsPage.ts");
/******/ 	
/******/ })()
;
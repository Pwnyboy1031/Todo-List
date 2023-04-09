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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoButton\": () => (/* binding */ addTodoButton),\n/* harmony export */   \"displayTodoInput\": () => (/* binding */ displayTodoInput),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar),\n/* harmony export */   \"updateSidebar\": () => (/* binding */ updateSidebar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n// find layout\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst main = document.getElementById(\"main\");\r\nconst addTodoButton = document.createElement(\"button\");\r\nconst submitBtn = document.createElement(\"button\");\r\naddTodoButton.setAttribute(\"id\", \"addTodo\");\r\naddTodoButton.innerText = \"+\";\r\nmain.appendChild(addTodoButton);\r\n\r\n\r\n\r\nfunction updateSidebar() {\r\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\r\n        let project = document.createElement(\"h2\");\r\n        project.setAttribute(\"id\", _index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].title);\r\n        project.setAttribute(\"class\", \"project\")\r\n        project.innerText = `${_index_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].title}`;\r\n        sidebar.appendChild(project);\r\n    }\r\n};\r\n\r\nfunction updateProjectView() {\r\n    \r\n}\r\n\r\nfunction displayTodoInput() {\r\n    // display form with overlay\r\n    overlay.style.display = \"flex\";\r\n    const form = document.createElement(\"form\");\r\n    form.setAttribute(\"id\", \"newTodoForm\");\r\n\r\n    // title\r\n    const lblTitle = document.createElement(\"label\");\r\n    lblTitle.innerText = \"Title\";\r\n    const titleInput = document.createElement(\"input\");\r\n    titleInput.setAttribute(\"id\", \"todoTitle\");\r\n\r\n    // description\r\n    const lblDescription = document.createElement(\"label\");\r\n    lblDescription.innerText = \"Description\";\r\n    const descriptionInput = document.createElement(\"textarea\");\r\n    descriptionInput.style.height = \"10vh\";\r\n    descriptionInput.setAttribute(\"id\", \"todoDescription\");\r\n\r\n    // due date\r\n    const lblDue = document.createElement(\"label\");\r\n    lblDue.innerText = \"Due Date\";\r\n    const dueDateInput = document.createElement(\"input\");\r\n    dueDateInput.setAttribute(\"type\", \"date\");\r\n    dueDateInput.setAttribute(\"id\", \"todoDueDate\");\r\n\r\n    // submit\r\n    submitBtn.innerText = \"Create Task\";\r\n\r\n    form.appendChild(lblTitle);\r\n    form.appendChild(titleInput);\r\n    form.appendChild(lblDue);\r\n    form.appendChild(dueDateInput);\r\n    form.appendChild(lblDescription);\r\n    form.appendChild(descriptionInput);\r\n    form.appendChild(submitBtn);\r\n    \r\n    overlay.appendChild(form);\r\n}\r\n\r\nsubmitBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const title = document.querySelector(\"#todoTitle\").value;\r\n    const dueDate = document.querySelector(\"#todoDueDate\").value;\r\n    const description = document.querySelector(\"#todoDescription\").value;\r\n\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)(title, dueDate, description);\r\n    overlay.style.display = \"none\";\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewTodo\": () => (/* binding */ createNewTodo),\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\r\n\r\n\r\n\r\nlet myProjects = []; \r\n\r\n\r\n\r\nfunction init(defaultProjects) {\r\n    let defaultProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Daily\", \"Your daily To-do list.\");\r\n    let defaultGroceries = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Groceries\", \"Shopping List for the week\", null);\r\n    let toDo1 = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDo(\"Walk the dog\", \"Take fido for a walk\", \"March 5\", \"Urgent\");\r\n    myProjects.push(defaultProject, defaultGroceries);\r\n    console.log(defaultProject);\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateSidebar)();\r\n \r\n}\r\n\r\n// create a new to do and add it to projects\r\nfunction createNewTodo(title, dueDate, description) {\r\n    const newToDo = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDo(title, dueDate, description);\r\n    console.log(newToDo);\r\n\r\n    // this needs to add new todo to project based on the selected h2\r\n    document.querySelector(\".selected\")\r\n};\r\n\r\n// display new todo input\r\n_dom__WEBPACK_IMPORTED_MODULE_2__.addTodoButton.addEventListener(\"click\", (e) => {\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayTodoInput)();\r\n});\r\n\r\nsidebar.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"project\")) {\r\n        let projects = document.querySelectorAll(\".project\");\r\n    // remove selected  from all other projects elements\r\n    projects.forEach(project => {\r\n        project.classList.remove(\"selected\");\r\n    })\r\n\r\n    // add selected class to target\r\n    e.target.classList.add(\"selected\");\r\n    }\r\n    \r\n})\r\n\r\ninit(myProjects);\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(title, description, list = []) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.list = list;\r\n    }\r\n\r\n    addToDo(todo) {\r\n        this.list.push(todo);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDo\": () => (/* binding */ toDo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nclass toDo extends _project__WEBPACK_IMPORTED_MODULE_0__.Project {\r\n    constructor(title, description, dueDate, priority) {\r\n        super(title, description);\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/toDo.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
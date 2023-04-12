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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoButton\": () => (/* binding */ addTodoButton),\n/* harmony export */   \"displayProjectInput\": () => (/* binding */ displayProjectInput),\n/* harmony export */   \"displayTodoInput\": () => (/* binding */ displayTodoInput),\n/* harmony export */   \"newProjectBtn\": () => (/* binding */ newProjectBtn),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar),\n/* harmony export */   \"updateSidebar\": () => (/* binding */ updateSidebar)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\n\r\n\r\n// find layout\r\nconst sidebar = document.getElementById(\"sidebar\");\r\nconst overlay = document.getElementById(\"overlay\");\r\nconst main = document.getElementById(\"main\");\r\nconst addTodoButton = document.createElement(\"button\");\r\nconst submitBtn = document.createElement(\"button\");\r\nconst projectSubmit = document.createElement(\"button\");\r\naddTodoButton.setAttribute(\"id\", \"addTodo\");\r\naddTodoButton.innerText = \"+\";\r\nmain.appendChild(addTodoButton);\r\nconst newProjectBtn = document.createElement(\"button\");\r\nnewProjectBtn.setAttribute(\"id\", \"newProject\");\r\nnewProjectBtn.innerText = \"New Project\";\r\nconst titleInput = document.createElement(\"input\");\r\n\r\n\r\n\r\nfunction updateSidebar() {\r\n    const sidebar = document.querySelector(\"#sidebar\");\r\n    sidebar.innerHTML = \"\";\r\n    const projectList = document.createElement(\"ul\");\r\n\r\n    for (const projectTitle in _project_js__WEBPACK_IMPORTED_MODULE_1__.projectDictionary) {\r\n        const project = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectDictionary[projectTitle];\r\n        const listItem = document.createElement(\"li\");\r\n        listItem.textContent = projectTitle;\r\n        listItem.setAttribute(\"class\", \"project\")\r\n        projectList.appendChild(listItem);\r\n    }\r\n\r\n    sidebar.appendChild(projectList);\r\n    \r\n    sidebar.appendChild(newProjectBtn);\r\n};\r\n\r\nfunction displayTodoInput() {\r\n    // display form with overlay\r\n    overlay.style.display = \"flex\";\r\n    const form = document.createElement(\"form\");\r\n    form.setAttribute(\"id\", \"newTodoForm\");\r\n\r\n    // title\r\n    const lblTitle = document.createElement(\"label\");\r\n    lblTitle.innerText = \"Title\";\r\n    \r\n    titleInput.setAttribute(\"id\", \"todoTitle\");\r\n\r\n    // description\r\n    const lblDescription = document.createElement(\"label\");\r\n    lblDescription.innerText = \"Description\";\r\n    const descriptionInput = document.createElement(\"textarea\");\r\n    descriptionInput.style.height = \"10vh\";\r\n    descriptionInput.setAttribute(\"id\", \"todoDescription\");\r\n\r\n    // due date\r\n    const lblDue = document.createElement(\"label\");\r\n    lblDue.innerText = \"Due Date\";\r\n    const dueDateInput = document.createElement(\"input\");\r\n    dueDateInput.setAttribute(\"type\", \"date\");\r\n    dueDateInput.setAttribute(\"id\", \"todoDueDate\");\r\n\r\n    // submit\r\n   \r\n    submitBtn.innerText = \"Create Task\";\r\n    \r\n    \r\n\r\n    form.appendChild(lblTitle);\r\n    form.appendChild(titleInput);\r\n    form.appendChild(lblDue);\r\n    form.appendChild(dueDateInput);\r\n    form.appendChild(lblDescription);\r\n    form.appendChild(descriptionInput);\r\n    form.appendChild(submitBtn);\r\n    \r\n    overlay.appendChild(form);\r\n\r\n    \r\n};\r\n\r\nfunction displayProjectInput() {\r\n    // display form with overlay\r\n    overlay.style.display = \"flex\";\r\n    const form = document.createElement(\"form\");\r\n    form.setAttribute(\"id\", \"newProjectForm\");\r\n\r\n    // title\r\n    const lblTitle = document.createElement(\"label\");\r\n    lblTitle.innerText = \"Title\";\r\n    \r\n    titleInput.setAttribute(\"id\", \"projectTitle\");\r\n\r\n    // submit\r\n    projectSubmit.innerText = \"Create Project\";\r\n\r\n    form.appendChild(lblTitle);\r\n    form.appendChild(titleInput);\r\n    form.appendChild(projectSubmit);\r\n    \r\n    overlay.appendChild(form);\r\n    \r\n}\r\n\r\nsubmitBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const title = document.querySelector(\"#todoTitle\").value;\r\n    const dueDate = document.querySelector(\"#todoDueDate\").value;\r\n    const description = document.querySelector(\"#todoDescription\").value;\r\n\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createNewTodo)(title, dueDate, description);\r\n    \r\n    // clear input values, hide overlay\r\n    document.querySelector(\"#todoTitle\").value = \"\";\r\n    document.querySelector(\"#todoDueDate\").value = \"\";\r\n    document.querySelector(\"#todoDescription\").value = \"\";\r\n    overlay.style.display = \"none\";\r\n});\r\n\r\nprojectSubmit.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    const projectTitle = document.getElementById(\"projectTitle\").value;\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createNewProject)(projectTitle);\r\n\r\n    // clear input values, hide overlay\r\n    overlay.style.display = \"none\";\r\n    document.getElementById(\"projectTitle\").value = \"\";\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"createNewTodo\": () => (/* binding */ createNewTodo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ \"./src/toDo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _mainLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainLoad */ \"./src/mainLoad.js\");\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n    const defaultProjects = [\r\n        new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Daily\", \"Your daily To-do list.\"),\r\n        new _project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Groceries\", \"Shopping List for the week\", []),\r\n    ];\r\n    defaultProjects.forEach((project => {\r\n        const projectInstance = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(project.title, project.description, project.list);\r\n        projectInstance.addProjectToDictionary();\r\n    }));\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateSidebar)();\r\n}\r\n\r\n// create a new project and add it to the dictionary\r\nfunction createNewProject(title) {\r\n    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title, \"\", []);\r\n    newProject.addProjectToDictionary();\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateSidebar)();\r\n    document.querySelector(\"#projectTitle\").value = \"\";\r\n\r\n}\r\n\r\n// create a new to do and add it to projects\r\nfunction createNewTodo(title, dueDate, description) {\r\n    const newToDo = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDo(title, dueDate, description);\r\n\r\n    // this needs to add new todo to project based on the selected h2\r\n    const projectName = document.querySelector(\".selected\").textContent;\r\n    const workingProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectDictionary[projectName];\r\n    workingProject.addToDo(newToDo);\r\n};\r\n\r\n\r\n// display new todo input\r\n_dom__WEBPACK_IMPORTED_MODULE_2__.addTodoButton.addEventListener(\"click\", (e) => {\r\n    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayTodoInput)();\r\n});\r\n\r\nsidebar.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"project\")) {\r\n        let projects = document.querySelectorAll(\".project\");\r\n    // remove selected  from all other projects elements\r\n    projects.forEach(project => {\r\n        project.classList.remove(\"selected\");\r\n    })\r\n\r\n    // add selected class to target\r\n    e.target.classList.add(\"selected\");\r\n\r\n    // load main\r\n    (0,_mainLoad__WEBPACK_IMPORTED_MODULE_3__.mainLoad)();\r\n    }\r\n    \r\n})\r\n\r\n_dom__WEBPACK_IMPORTED_MODULE_2__.newProjectBtn.addEventListener(\"click\", (e) => {\r\n    ;(0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayProjectInput)();\r\n});\r\n\r\ninit();\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/mainLoad.js":
/*!*************************!*\
  !*** ./src/mainLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainLoad\": () => (/* binding */ mainLoad)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nfunction mainLoad() {\r\n    // reset main content\r\n    const main = document.getElementById(\"main\");\r\n    main.innerHTML = \"\";\r\n    \r\n\r\n    const projectName = document.querySelector(\".selected\").textContent;\r\n    const workingProject = _project__WEBPACK_IMPORTED_MODULE_0__.projectDictionary[projectName];\r\n\r\n    for (let todo in workingProject.list) {\r\n        const workingTodo = document.createElement(\"div\");\r\n        workingTodo.setAttribute(\"class\", \"mainTodo\");\r\n        workingTodo.setAttribute(\"id\", `${workingProject.list[todo].title}`);\r\n\r\n        // title \r\n        const title = document.createElement(\"div\");\r\n        title.setAttribute(\"class\", \"todoTitle\");\r\n        title.textContent = workingProject.list[todo].title;\r\n        workingTodo.appendChild(title);\r\n\r\n        // description\r\n        const description = document.createElement(\"div\");\r\n        description.setAttribute(\"class\", \"todoDescription\");\r\n        description.textContent = workingProject.list[todo].description;\r\n        workingTodo.appendChild(description);\r\n\r\n        // due date\r\n        const dueDate = document.createElement(\"div\");\r\n        dueDate.setAttribute(\"class\", \"todoDueDate\");\r\n        dueDate.textContent = workingProject.list[todo].dueDate;\r\n        workingTodo.appendChild(dueDate);\r\n\r\n        // checkbox\r\n        const checkbox = document.createElement(\"input\");\r\n        checkbox.type = \"checkbox\";\r\n        checkbox.setAttribute(\"class\", \"todoCheckbox\");\r\n        workingTodo.appendChild(checkbox);\r\n\r\n\r\n        main.appendChild(workingTodo);\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/mainLoad.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"projectDictionary\": () => (/* binding */ projectDictionary)\n/* harmony export */ });\nlet projectDictionary = {};\r\n\r\nclass Project {\r\n    constructor(title, description, list = []) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.list = list;\r\n    }\r\n\r\n    addToDo(todo) {\r\n        this.list.push(todo);\r\n    }\r\n\r\n    addProjectToDictionary() {\r\n        projectDictionary[this.title] = this;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDo\": () => (/* binding */ toDo)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\nclass toDo extends _project__WEBPACK_IMPORTED_MODULE_0__.Project {\r\n    constructor(title, dueDate, description, priority) {\r\n        super(title, description);\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/toDo.js?");

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
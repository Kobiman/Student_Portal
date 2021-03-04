/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/app/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/html-tags/html-tags.json":
/*!***********************************************!*\
  !*** ./node_modules/html-tags/html-tags.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"a\",\"abbr\",\"address\",\"area\",\"article\",\"aside\",\"audio\",\"b\",\"base\",\"bdi\",\"bdo\",\"blockquote\",\"body\",\"br\",\"button\",\"canvas\",\"caption\",\"cite\",\"code\",\"col\",\"colgroup\",\"data\",\"datalist\",\"dd\",\"del\",\"details\",\"dfn\",\"dialog\",\"div\",\"dl\",\"dt\",\"em\",\"embed\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"i\",\"iframe\",\"img\",\"input\",\"ins\",\"kbd\",\"keygen\",\"label\",\"legend\",\"li\",\"link\",\"main\",\"map\",\"mark\",\"math\",\"menu\",\"menuitem\",\"meta\",\"meter\",\"nav\",\"noscript\",\"object\",\"ol\",\"optgroup\",\"option\",\"output\",\"p\",\"param\",\"picture\",\"pre\",\"progress\",\"q\",\"rb\",\"rp\",\"rt\",\"rtc\",\"ruby\",\"s\",\"samp\",\"script\",\"section\",\"select\",\"slot\",\"small\",\"source\",\"span\",\"strong\",\"style\",\"sub\",\"summary\",\"sup\",\"svg\",\"table\",\"tbody\",\"td\",\"template\",\"textarea\",\"tfoot\",\"th\",\"thead\",\"time\",\"title\",\"tr\",\"track\",\"u\",\"ul\",\"var\",\"video\",\"wbr\"]");

/***/ }),

/***/ "./node_modules/html-tags/index.js":
/*!*****************************************!*\
  !*** ./node_modules/html-tags/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./html-tags.json */ "./node_modules/html-tags/html-tags.json");


/***/ }),

/***/ "./node_modules/svg-tags/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/svg-tags/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__( /*! ./svg-tags.json */ "./node_modules/svg-tags/lib/svg-tags.json" );

/***/ }),

/***/ "./node_modules/svg-tags/lib/svg-tags.json":
/*!*************************************************!*\
  !*** ./node_modules/svg-tags/lib/svg-tags.json ***!
  \*************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"a\",\"altGlyph\",\"altGlyphDef\",\"altGlyphItem\",\"animate\",\"animateColor\",\"animateMotion\",\"animateTransform\",\"circle\",\"clipPath\",\"color-profile\",\"cursor\",\"defs\",\"desc\",\"ellipse\",\"feBlend\",\"feColorMatrix\",\"feComponentTransfer\",\"feComposite\",\"feConvolveMatrix\",\"feDiffuseLighting\",\"feDisplacementMap\",\"feDistantLight\",\"feFlood\",\"feFuncA\",\"feFuncB\",\"feFuncG\",\"feFuncR\",\"feGaussianBlur\",\"feImage\",\"feMerge\",\"feMergeNode\",\"feMorphology\",\"feOffset\",\"fePointLight\",\"feSpecularLighting\",\"feSpotLight\",\"feTile\",\"feTurbulence\",\"filter\",\"font\",\"font-face\",\"font-face-format\",\"font-face-name\",\"font-face-src\",\"font-face-uri\",\"foreignObject\",\"g\",\"glyph\",\"glyphRef\",\"hkern\",\"image\",\"line\",\"linearGradient\",\"marker\",\"mask\",\"metadata\",\"missing-glyph\",\"mpath\",\"path\",\"pattern\",\"polygon\",\"polyline\",\"radialGradient\",\"rect\",\"script\",\"set\",\"stop\",\"style\",\"svg\",\"switch\",\"symbol\",\"text\",\"textPath\",\"title\",\"tref\",\"tspan\",\"use\",\"view\",\"vkern\"]");

/***/ }),

/***/ "./node_modules/tsx-create-element/dist/es6/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/tsx-create-element/dist/es6/index.js ***!
  \***********************************************************/
/*! exports provided: createElement, mount, findElementByChildPositions, focusActiveElement, setActiveElement, getActiveElementInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findElementByChildPositions", function() { return findElementByChildPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusActiveElement", function() { return focusActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveElement", function() { return setActiveElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveElementInfo", function() { return getActiveElementInfo; });
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-tags */ "./node_modules/html-tags/index.js");
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html_tags__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg-tags */ "./node_modules/svg-tags/lib/index.js");
/* harmony import */ var svg_tags__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_tags__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Decamelizes a string with/without a custom separator (hyphen by default).
 * from: https://ourcodeworld.com/articles/read/608/how-to-camelize-and-decamelize-strings-in-javascript
 *
 * @param str String in camelcase
 * @param separator Separator for the new decamelized string.
 */
function decamelize(str, separator = '-') {
    return str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();
}
function createElement(tag, attrs, ...children) {
    if (typeof tag === 'function') {
        const fn = tag;
        const props = attrs;
        props.children = children;
        return fn(props);
    }
    else {
        const ns = tagNamespace(tag);
        const el = ns ? document.createElementNS(ns, tag) : document.createElement(tag);
        const map = attrs;
        let ref;
        for (let name in map) {
            if (name && map.hasOwnProperty(name)) {
                let value = map[name];
                if (name === 'className' && value !== void 0) {
                    setAttribute(el, ns, 'class', value.toString());
                }
                else if (name === 'disabled' && !value) {
                    //do nothhing, omit this attribute
                }
                else if (value === null || value === undefined) {
                    continue;
                }
                else if (value === true) {
                    setAttribute(el, ns, name, name);
                }
                else if (typeof value === 'function') {
                    if (name === 'ref') {
                        ref = value;
                    }
                    else {
                        el[name.toLowerCase()] = value;
                    }
                }
                else if (typeof value === 'object') {
                    setAttribute(el, ns, name, flatten(value));
                }
                else {
                    setAttribute(el, ns, name, value.toString());
                }
            }
        }
        if (children && children.length > 0) {
            appendChildren(el, children);
        }
        if (ref) {
            ref(el);
        }
        return el;
    }
}
function setAttribute(el, ns, name, value) {
    if (ns) {
        el.setAttributeNS(null, name, value);
    }
    else {
        el.setAttribute(name, value);
    }
}
function flatten(o) {
    const arr = [];
    for (let prop in o)
        arr.push(`${decamelize(prop, '-')}:${o[prop]}`);
    return arr.join(';');
}
function addChild(parentElement, child) {
    if (child === null || child === undefined || typeof child === "boolean") {
        return;
    }
    else if (Array.isArray(child)) {
        appendChildren(parentElement, child);
    }
    else if (isElement(child)) {
        parentElement.appendChild(child);
    }
    else {
        parentElement.appendChild(document.createTextNode(child.toString()));
    }
}
function appendChildren(parentElement, children) {
    children.forEach(child => addChild(parentElement, child));
}
function isElement(el) {
    //nodeType cannot be zero https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    return !!el.nodeType;
}
function mount(element, container) {
    container.innerHTML = '';
    if (element) {
        addChild(container, element);
    }
}
function findElementByChildPositions(childPositions, container) {
    let element = container || document.body;
    let childPosition;
    while (element && childPositions.length) {
        childPosition = childPositions.shift();
        element = element.children.item(childPosition);
    }
    if (element) {
        return element;
    }
    ;
}
function focusActiveElement(element, activeElementInfo) {
    element.focus();
    element.scrollTop = activeElementInfo.scrollTop;
    const input = element;
    if (input.setSelectionRange && activeElementInfo && activeElementInfo.selectionStart != null && activeElementInfo.selectionEnd != null) {
        input.setSelectionRange(activeElementInfo.selectionStart, activeElementInfo.selectionEnd, activeElementInfo.selectionDirection);
    }
}
function setActiveElement(activeElementInfo, container) {
    if (activeElementInfo) {
        const element = findElementByChildPositions(activeElementInfo.childPositions, container);
        if (element) {
            focusActiveElement(element, activeElementInfo);
        }
    }
}
function getActiveElementInfo(container) {
    let element = document.activeElement;
    const { scrollTop, selectionDirection, selectionEnd, selectionStart } = element;
    const activeElementInfo = {
        childPositions: [],
        scrollTop,
        selectionDirection,
        selectionEnd,
        selectionStart
    };
    while (element && element !== document.body && element !== container) {
        activeElementInfo.childPositions.unshift(getChildPosition(element));
        element = element.parentElement;
    }
    if ((element === document.body || element === container) && activeElementInfo.childPositions.length)
        return activeElementInfo;
}
function getChildPosition(element) {
    let childPosition = 0;
    while (element = element.previousElementSibling)
        childPosition++;
    return childPosition;
}
function tagNamespace(tag) {
    //issue: this won't disambiguate certain tags which exist in both svg and html: <a>, <title> ...
    if (tag === 'svg' || (svg_tags__WEBPACK_IMPORTED_MODULE_1___default.a.indexOf(tag) >= 0 && !(html_tags__WEBPACK_IMPORTED_MODULE_0___default.a.indexOf(tag) >= 0))) {
        return "http://www.w3.org/2000/svg";
    }
}


/***/ }),

/***/ "./out/BindingList2.js":
/*!*****************************!*\
  !*** ./out/BindingList2.js ***!
  \*****************************/
/*! exports provided: BindingList2, Interpolate, InterpolateSelect, MapValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingList2", function() { return BindingList2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interpolate", function() { return Interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolateSelect", function() { return InterpolateSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapValue", function() { return MapValue; });
class BindingList2 {
    bindCollection(self) {
        const elements = document.querySelectorAll("[data-repeat]");
        if (elements && elements.length > 0) {
            elements.forEach(function (element) {
                var html = "";
                var attr = element.getAttribute("data-repeat");
                if (Array.isArray(self[attr])) {
                    self[attr].forEach((item) => {
                        let template = element.cloneNode(true);
                        html += new Interpolate().interpolate(self, template, item);
                    });
                }
                // else {
                //   throw new Error("Content should be an Array of objects.");
                // }
                element.innerHTML = html;
                if (element.children.length > 0) {
                    for (var c = 0; c < element.children.length; c++) {
                        new MapValue().map(element.children[c], self);
                    }
                }
            });
        }
    }
    bind(self, id) {
        const element = document.getElementById(id);
        if (element) {
            var html = "";
            var attr = element.getAttribute("data-repeat");
            if (Array.isArray(self[attr])) {
                self[attr].forEach((item) => {
                    let template = element.cloneNode(true);
                    html += new Interpolate().interpolate(self, template, item);
                });
            }
            element.innerHTML = html;
            if (element.children.length > 0) {
                for (var c = 0; c < element.children.length; c++) {
                    new MapValue().map(element.children[c], self);
                }
            }
        }
    }
}
class Interpolate {
    interpolate(self, template, obj) {
        let child = null;
        if (template.children.length > 0) {
            child = template.children[0];
        }
        else {
            child = template;
        }
        const tag = child.getAttribute("binding");
        if (tag) {
            if (child.tagName === "SELECT") {
                child.value = obj[tag];
            }
            else if (child.type === "checkbox") {
                child.value = obj[tag];
                let v = obj[tag];
                if (v === true) {
                    child.outerHTML = child.outerHTML.replace(">", `checked=${v} value=${v}>`);
                }
            }
            else {
                child.textContent = obj[tag];
            }
        }
        if (child.children.length > 0) {
            this.interpolateChild(self, child, obj);
        }
        return template.outerHTML;
    }
    interpolateChild(self, template, obj) {
        for (var c = 0; c < template.children.length; c++) {
            const child = template.children[c];
            const tag = child.getAttribute("binding");
            if (tag) {
                if (child.tagName === "SELECT") {
                    child.value = obj[tag];
                    this.bindSelect(self, child);
                }
                else if (child.type === "checkbox") {
                    child.value = obj[tag];
                    let v = obj[tag];
                    if (v) {
                        child.outerHTML = child.outerHTML.replace(">", `checked=${v} value=${v}>`);
                    }
                }
                else {
                    child.textContent = obj[tag];
                }
            }
            else if (child.children.length > 0) {
                this.interpolate(self, child, obj);
            }
        }
        return template.outerHTML;
    }
    bindSelect(self, element) {
        var html = "";
        var attr = element.getAttribute("data-repeat");
        if (Array.isArray(self[attr])) {
            self[attr].forEach((item) => {
                if (element.tagName === "SELECT") {
                    html += new InterpolateSelect().interpolate(element, item);
                }
            });
        }
        else {
            throw new Error("Content should be an Array of objects.");
        }
        element.innerHTML = html;
    }
}
class InterpolateSelect {
    interpolate(template, obj) {
        let child = null;
        if (template.children.length > 0) {
            child = template.children[0];
        }
        const tag = child.getAttribute("binding");
        if (tag) {
            child.value = obj[tag];
            child.innerHTML = obj[tag];
        }
        return template.innerHTML;
    }
}
class MapValue {
    map(c, self) {
        var html = "";
        var attr = c.getAttribute("data-repeat");
        if (attr != null) {
            if (Array.isArray(self[attr])) {
                self[attr].forEach((item) => {
                    html += new Interpolate().interpolate(self, c.innerHTML, item);
                });
            }
            else {
                throw new Error("Content should be an Array of objects.");
            }
            c.innerHTML = html;
        }
    }
}
//# sourceMappingURL=BindingList2.js.map

/***/ }),

/***/ "./out/app.js":
/*!********************!*\
  !*** ./out/app.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _views_frontpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/frontpage */ "./out/views/frontpage.js");
/* harmony import */ var _views_student_addStudent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/student/addStudent */ "./out/views/student/addStudent.js");
/* harmony import */ var _viewModels_AddStudentVm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewModels/AddStudentVm */ "./out/viewModels/AddStudentVm.js");
/* harmony import */ var _views_student_stage1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/student/stage1 */ "./out/views/student/stage1.js");
/* harmony import */ var _views_student_stage2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/student/stage2 */ "./out/views/student/stage2.js");
/* harmony import */ var _views_student_stage3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/student/stage3 */ "./out/views/student/stage3.js");
/* harmony import */ var _views_student_studentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/student/studentList */ "./out/views/student/studentList.js");
/* harmony import */ var _viewModels_StudentListVm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewModels/StudentListVm */ "./out/viewModels/StudentListVm.js");
/* harmony import */ var _views_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/header */ "./out/views/header.js");
/* harmony import */ var _views_mountCourse_mountCourse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/mountCourse/mountCourse */ "./out/views/mountCourse/mountCourse.js");
/* harmony import */ var _viewModels_mountCourseVm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewModels/mountCourseVm */ "./out/viewModels/mountCourseVm.js");
/* harmony import */ var _views_institutionView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/institutionView */ "./out/views/institutionView.js");
/* harmony import */ var _viewModels_InstitutionVm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./viewModels/InstitutionVm */ "./out/viewModels/InstitutionVm.js");
/* harmony import */ var _views_schoolView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/schoolView */ "./out/views/schoolView.js");
/* harmony import */ var _viewModels_schoolVm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./viewModels/schoolVm */ "./out/viewModels/schoolVm.js");
/* harmony import */ var _views_departmentView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/departmentView */ "./out/views/departmentView.js");
/* harmony import */ var _viewModels_departmentVm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./viewModels/departmentVm */ "./out/viewModels/departmentVm.js");
/* harmony import */ var _views_programView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/programView */ "./out/views/programView.js");
/* harmony import */ var _viewModels_programVm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./viewModels/programVm */ "./out/viewModels/programVm.js");
/* harmony import */ var _viewModels_courseVm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./viewModels/courseVm */ "./out/viewModels/courseVm.js");
/* harmony import */ var _views_courseView__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/courseView */ "./out/views/courseView.js");
/* harmony import */ var _views_lookupView__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/lookupView */ "./out/views/lookupView.js");
/* harmony import */ var _viewModels_lookupVm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./viewModels/lookupVm */ "./out/viewModels/lookupVm.js");
/* harmony import */ var _views_lecturerView__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/lecturerView */ "./out/views/lecturerView.js");
/* harmony import */ var _viewModels_lecturerVm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./viewModels/lecturerVm */ "./out/viewModels/lecturerVm.js");
/* harmony import */ var _viewModels_mountedCourseVm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./viewModels/mountedCourseVm */ "./out/viewModels/mountedCourseVm.js");
/* harmony import */ var _views_mountCourse_mountedCoursesView__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/mountCourse/mountedCoursesView */ "./out/views/mountCourse/mountedCoursesView.js");
/* harmony import */ var _services_commonService__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/commonService */ "./out/services/commonService.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./css/style.css */ "./out/css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _views_registration_registeredCoursesView__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/registration/registeredCoursesView */ "./out/views/registration/registeredCoursesView.js");
/* harmony import */ var _services_courseRegistrationService__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/courseRegistrationService */ "./out/services/courseRegistrationService.js");
/* harmony import */ var _viewModels_registeredCoursesVm__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./viewModels/registeredCoursesVm */ "./out/viewModels/registeredCoursesVm.js");
/* harmony import */ var _views_registration_registerCourseView__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/registration/registerCourseView */ "./out/views/registration/registerCourseView.js");
/* harmony import */ var _viewModels_registerCourseVm__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./viewModels/registerCourseVm */ "./out/viewModels/registerCourseVm.js");
/* harmony import */ var _views_uploadResultView__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./views/uploadResultView */ "./out/views/uploadResultView.js");




































class App {
    static render(view, domlocation) {
        view.render(domlocation);
    }
    static navigate(pathName) {
        if (this.currentPath !== pathName) {
            window.history.pushState({}, pathName, window.location.origin + pathName);
            var view = this.routes[pathName]();
            this.render(view, "route-outlet");
            this.currentPath = pathName;
        }
    }
    static register() {
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("/app/sw.js")
                    .then((reg) => {
                    console.log("Registered", reg);
                })
                    .catch((err) => {
                    console.log("Registration failed", err);
                });
            });
            let deferredPrompt;
            window.addEventListener("beforeinstallprompt", (e) => {
                e.preventDefault();
                deferredPrompt = e;
                //btnAdd.style.display = 'block';
                let btn = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_29__["createElement"])("button", { id: "btnAdd" }, "Add");
                btn.addEventListenner("click", (e) => {
                    deferredPrompt.userChoice.then((choice) => {
                        console.log("User accepted the A2HS prompt");
                    });
                    deferredPrompt = null;
                });
                document.appendChild(btn);
            });
        }
    }
    static navigateChild(pathName) {
        if (this.currentPath !== pathName) {
            window.history.pushState({}, pathName, window.location.origin + pathName);
            this.currentPath = pathName;
        }
    }
}
App.baseUri = "https://localhost:44319";
App.currentPath = "";
App.commonService = new _services_commonService__WEBPACK_IMPORTED_MODULE_27__["CommonService"]();
App.courseRegistrationService = new _services_courseRegistrationService__WEBPACK_IMPORTED_MODULE_31__["CourseRegistrationService"]();
App.addStudentVm = new _viewModels_AddStudentVm__WEBPACK_IMPORTED_MODULE_2__["AddStudentVm"]();
//private static mountCourseViewModel = new MountCourseViewModel(App.commonService);
App.routes = {
    "": () => new _views_frontpage__WEBPACK_IMPORTED_MODULE_0__["FrontPageView"](),
    "/app/#addStudent": () => new _views_student_addStudent__WEBPACK_IMPORTED_MODULE_1__["AddStudentView"](App.addStudentVm),
    "/app/#frontPage": () => new _views_frontpage__WEBPACK_IMPORTED_MODULE_0__["FrontPageView"](),
    "/app/#studentList": () => new _views_student_studentList__WEBPACK_IMPORTED_MODULE_6__["StudentListView"](new _viewModels_StudentListVm__WEBPACK_IMPORTED_MODULE_7__["StudentListVm"]()),
    "/app/#mountCourse": () => new _views_mountCourse_mountCourse__WEBPACK_IMPORTED_MODULE_9__["MountCourseView"](new _viewModels_mountCourseVm__WEBPACK_IMPORTED_MODULE_10__["MountCourseViewModel"](App.commonService)),
    "/app/#addStudent/stage1": () => new _views_student_stage1__WEBPACK_IMPORTED_MODULE_3__["Stage1"](App.addStudentVm),
    "/app/#addStudent/stage2": () => new _views_student_stage2__WEBPACK_IMPORTED_MODULE_4__["Stage2"](App.addStudentVm),
    "/app/#addStudent/stage3": () => new _views_student_stage3__WEBPACK_IMPORTED_MODULE_5__["Stage3"](App.addStudentVm),
    "/app/#institution": () => new _views_institutionView__WEBPACK_IMPORTED_MODULE_11__["InstitutionView"](new _viewModels_InstitutionVm__WEBPACK_IMPORTED_MODULE_12__["InstitutionVm"]()),
    "/app/#school": () => new _views_schoolView__WEBPACK_IMPORTED_MODULE_13__["SchoolView"](new _viewModels_schoolVm__WEBPACK_IMPORTED_MODULE_14__["SchoolVm"](App.commonService)),
    "/app/#department": () => new _views_departmentView__WEBPACK_IMPORTED_MODULE_15__["DepartmentView"](new _viewModels_departmentVm__WEBPACK_IMPORTED_MODULE_16__["DepartmentVm"]()),
    "/app/#program": () => new _views_programView__WEBPACK_IMPORTED_MODULE_17__["ProgramView"](new _viewModels_programVm__WEBPACK_IMPORTED_MODULE_18__["ProgramViewModel"]()),
    "/app/#course": () => new _views_courseView__WEBPACK_IMPORTED_MODULE_20__["CourseView"](new _viewModels_courseVm__WEBPACK_IMPORTED_MODULE_19__["CourseVm"]()),
    "/app/#lookup": () => new _views_lookupView__WEBPACK_IMPORTED_MODULE_21__["LookupView"](new _viewModels_lookupVm__WEBPACK_IMPORTED_MODULE_22__["LookupVm"]()),
    "/app/#lecturer": () => new _views_lecturerView__WEBPACK_IMPORTED_MODULE_23__["LecturerView"](new _viewModels_lecturerVm__WEBPACK_IMPORTED_MODULE_24__["LecturerVm"]()),
    "/app/#mountedCourses": () => new _views_mountCourse_mountedCoursesView__WEBPACK_IMPORTED_MODULE_26__["MountedCoursesView"](new _viewModels_mountedCourseVm__WEBPACK_IMPORTED_MODULE_25__["MountedCourseVm"](App.commonService)),
    //"/app/#courseRegistration": () => new CourseRegistrationView(new CourseRegistrationVm()),
    "/app/#registeredCourses": () => new _views_registration_registeredCoursesView__WEBPACK_IMPORTED_MODULE_30__["RegisteredCoursesView"](new _viewModels_registeredCoursesVm__WEBPACK_IMPORTED_MODULE_32__["RegisteredCoursesVm"](App.courseRegistrationService)),
    "/app/#registerCourses": () => new _views_registration_registerCourseView__WEBPACK_IMPORTED_MODULE_33__["RegisterCourseView"](new _viewModels_registerCourseVm__WEBPACK_IMPORTED_MODULE_34__["RegisterCourseVm"](App.courseRegistrationService)),
    "/app/#uploadResults": () => new _views_uploadResultView__WEBPACK_IMPORTED_MODULE_35__["UploadResultView"]()
};
App.register();
App.navigate("/app/#frontPage");
new _views_header__WEBPACK_IMPORTED_MODULE_8__["HeaderView"]().render("header");
window.onpopstate = () => {
    App.navigate(window.location.pathname);
};
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./out/confirm/confirm.js":
/*!********************************!*\
  !*** ./out/confirm/confirm.js ***!
  \********************************/
/*! exports provided: Confirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirm", function() { return Confirm; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class Confirm {
    constructor(options) {
        this.options = options;
    }
    open() {
        let html = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, this.options.title),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, this.options.message),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-primary" }, this.options.okText),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default" }, this.options.cancelText))))))));
        this.options = Object.assign({}, {
            title: "",
            message: "",
            okText: "OK",
            cancelText: "Cancel",
            onok: function () { },
            oncancel: function () {
                document.getElementById("route-outlet").removeChild(html);
            },
        }, this.options);
        let button = html.getElementsByTagName("button");
        button[0].addEventListener("click", (e) => {
            e.preventDefault();
            this.options.onok();
            this.options.oncancel();
        });
        button[1].addEventListener("click", (e) => {
            e.preventDefault();
            this.options.oncancel();
        });
        document.getElementById("route-outlet").appendChild(html);
    }
    close() {
        this.options.oncancel();
    }
}
{
    /* <div class="confirm-window">
            <div class="confirm-titlebar">
              <span class="confirm-title">{this.options.title}</span>
              <button class="confirm-close">&times;</button>
            </div>
          </div>
          <div class="confirm-content">{this.options.message}</div>
          <div class="confirm-buttons">
            <button class="sp-btn sp-btn-default btn-small">{this.options.okText}</button>
            <button class="sp-btn sp-btn-primary btn-small">{this.options.cancelText}</button>
          </div> */
}
//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ "./out/css/style.css":
/*!***************************!*\
  !*** ./out/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./out/group.js":
/*!**********************!*\
  !*** ./out/group.js ***!
  \**********************/
/*! exports provided: _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
class _ {
    static groupBy(array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return groups;
    }
    static getElementByAttribute(element, attr) {
        let result = null;
        element.querySelectorAll("[binding]").forEach(function (elem) {
            var attribute = elem.getAttribute("binding");
            if (attribute === attr) {
                result = elem;
                return;
            }
        });
        return result;
    }
    static formatDate(dateObj) {
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        return day + "-" + month + "-" + year;
    }
    ;
}
//# sourceMappingURL=group.js.map

/***/ }),

/***/ "./out/loader/ballLoader.js":
/*!**********************************!*\
  !*** ./out/loader/ballLoader.js ***!
  \**********************************/
/*! exports provided: BallLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallLoader", function() { return BallLoader; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class BallLoader {
    static show() {
        let el = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "wrapper", id: "loader" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "loading-dots" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "bounce1" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "bounce2" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "bounce3" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Loading"))));
        document.getElementById("route-outlet").appendChild(el);
        // setTimeout(() => {
        //   document.getElementById("header").removeChild(el);
        // }, 3000);
    }
    static hide() {
        let el = document.getElementById("loader");
        document.getElementById("route-outlet").removeChild(el);
    }
}
//# sourceMappingURL=ballLoader.js.map

/***/ }),

/***/ "./out/models/Course.js":
/*!******************************!*\
  !*** ./out/models/Course.js ***!
  \******************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
}
//# sourceMappingURL=Course.js.map

/***/ }),

/***/ "./out/models/SelectedCourse.js":
/*!**************************************!*\
  !*** ./out/models/SelectedCourse.js ***!
  \**************************************/
/*! exports provided: SelectedCourse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedCourse", function() { return SelectedCourse; });
class SelectedCourse {
    constructor() {
        this.scoring = false;
    }
}
//# sourceMappingURL=SelectedCourse.js.map

/***/ }),

/***/ "./out/models/department.js":
/*!**********************************!*\
  !*** ./out/models/department.js ***!
  \**********************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
class Department {
}
//# sourceMappingURL=department.js.map

/***/ }),

/***/ "./out/models/institution.js":
/*!***********************************!*\
  !*** ./out/models/institution.js ***!
  \***********************************/
/*! exports provided: Institution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Institution", function() { return Institution; });
class Institution {
}
//# sourceMappingURL=institution.js.map

/***/ }),

/***/ "./out/models/lecturer.js":
/*!********************************!*\
  !*** ./out/models/lecturer.js ***!
  \********************************/
/*! exports provided: Lecturer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lecturer", function() { return Lecturer; });
class Lecturer {
}
//# sourceMappingURL=lecturer.js.map

/***/ }),

/***/ "./out/models/lookup.js":
/*!******************************!*\
  !*** ./out/models/lookup.js ***!
  \******************************/
/*! exports provided: Lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lookup", function() { return Lookup; });
class Lookup {
}
//# sourceMappingURL=lookup.js.map

/***/ }),

/***/ "./out/models/program.js":
/*!*******************************!*\
  !*** ./out/models/program.js ***!
  \*******************************/
/*! exports provided: Program */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Program", function() { return Program; });
class Program {
    constructor() {
        this.specializations = [];
    }
}
//# sourceMappingURL=program.js.map

/***/ }),

/***/ "./out/models/school.js":
/*!******************************!*\
  !*** ./out/models/school.js ***!
  \******************************/
/*! exports provided: School */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "School", function() { return School; });
class School {
}
//# sourceMappingURL=school.js.map

/***/ }),

/***/ "./out/models/student.js":
/*!*******************************!*\
  !*** ./out/models/student.js ***!
  \*******************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
class Student {
    get IndexNumber() {
        return this.indexNumber;
    }
    set IndexNumber(value) {
        this.indexNumber = value;
    }
    get ReferenceNumber() {
        return this.referenceNumber;
    }
    set ReferenceNumber(v) {
        this.referenceNumber = v;
    }
    get Surname() {
        return this.surname;
    }
    set Surname(v) {
        this.surname = v;
    }
    get Othernames() {
        return this.othernames;
    }
    set Othernames(v) {
        this.othernames = v;
    }
    get Title() {
        return this.title;
    }
    set Title(v) {
        this.title = v;
    }
    get Gender() {
        return this.gender;
    }
    set Gender(v) {
        this.gender = v;
    }
    get DateofBirth() {
        return this.dateofBirth;
    }
    set DateofBirth(v) {
        this.dateofBirth = v;
    }
    get Country() {
        return this.country;
    }
    set Country(v) {
        this.country = v;
    }
    get Region() {
        return this.region;
    }
    set Region(v) {
        this.region = v;
    }
    get HomeTown() {
        return this.homeTown;
    }
    set HomeTown(v) {
        this.homeTown = v;
    }
    get Disability() {
        return this.disability;
    }
    set Disability(v) {
        this.disability = v;
    }
    get Address1() {
        return this.address1;
    }
    set Address1(v) {
        this.address1 = v;
    }
    get Address2() {
        return this.address2;
    }
    set Address2(v) {
        this.address2 = v;
    }
    get PersonalEmail() {
        return this.personalEmail;
    }
    set PersonalEmail(v) {
        this.personalEmail = v;
    }
    get StudentType() {
        return this.studentType;
    }
    set StudentType(v) {
        this.studentType = v;
    }
    get MaritalStatus() {
        return this.maritalStatus;
    }
    set MaritalStatus(v) {
        this.maritalStatus = v;
    }
    get EnrolmentOption() {
        return this.enrolmentOption;
    }
    set EnrolmentOption(v) {
        this.enrolmentOption = v;
    }
    get ResidentialStatus() {
        return this.residentialStatus;
    }
    set ResidentialStatus(v) {
        this.residentialStatus = v;
    }
    get ProgramOfStudy() {
        return this.programOfStudy;
    }
    set ProgramOfStudy(v) {
        this.programOfStudy = v;
    }
    get Specialization() {
        return this.specialization;
    }
    set Specialization(v) {
        this.specialization = v;
    }
    get ProgramStatus() {
        return this.programStatus;
    }
    set ProgramStatus(v) {
        this.programStatus = v;
    }
    get UniversityEmail() {
        return this.universityEmail;
    }
    set UniversityEmail(v) {
        this.universityEmail = v;
    }
    get Level() {
        return this.level;
    }
    set Level(v) {
        this.level = v;
    }
    get DateOfEntry() {
        return this.dateOfEntry;
    }
    set DateOfEntry(v) {
        this.dateOfEntry = v;
    }
    get PamentOption() {
        return this.pamentOption;
    }
    set PamentOption(v) {
        this.pamentOption = v;
    }
    get Contact1() {
        return this.contact1;
    }
    set Contact1(v) {
        this.contact1 = v;
    }
    get Contact2() {
        return this.contact2;
    }
    set Contact2(v) {
        this.contact2 = v;
    }
}
//# sourceMappingURL=student.js.map

/***/ }),

/***/ "./out/services/commonService.js":
/*!***************************************!*\
  !*** ./out/services/commonService.js ***!
  \***************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CommonService {
    constructor() {
        this.lookups = [];
        this.lecturers = [];
        this.departments = [];
        this.programs = [];
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Lookup/GetLookups`);
                if (!res.ok) {
                }
                else {
                    const data = yield res.json();
                    this.lookups = data.value;
                }
            }
            catch (error) { }
        });
        this.getLecturers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Lecturer/GetLecturers`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lecturers = data.value;
            }
            catch (error) { }
        });
        this.getDepartmentsWithCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Department/GetDepartmentsWithCourses`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
            }
            catch (error) { }
        });
        this.getPrograms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Program/GetPrograms`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.programs = data.value;
            }
            catch (error) { }
        });
        this.getLookups();
        this.getLecturers();
        this.getPrograms();
        this.getDepartmentsWithCourses();
    }
}
//# sourceMappingURL=commonService.js.map

/***/ }),

/***/ "./out/services/courseRegistrationService.js":
/*!***************************************************!*\
  !*** ./out/services/courseRegistrationService.js ***!
  \***************************************************/
/*! exports provided: CourseRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRegistrationService", function() { return CourseRegistrationService; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CourseRegistrationService {
    constructor() {
        this.hasRegisterd = false;
        this.mountedCourses = [];
        this.getStudent = (indexNumber) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Student/GetStudent/${indexNumber}`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.student = data.value;
                this.getSchoolByProgram(this.student.programOfStudy);
            }
            catch (error) { }
        });
        this.getSchoolByProgram = (program) => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/School/GetSchoolByProgram/${program}`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.school = data.value;
                this.getRegisteredCourses(this.school.academicYear, this.school.semester, this.student.indexNumber);
                this.getMountedCourses(this.school.academicYear, this.school.semester, this.student.programOfStudy, this.student.level);
            }
            catch (error) { }
        });
        this.getRegisteredCourses = (academicYear, semester, indexNumber) => __awaiter(this, void 0, void 0, function* () {
            let request = { academicYear: academicYear, semester: semester, indexNumber: indexNumber };
            const options = {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Department/GetRegisteredCourses`, options)
                .then((res) => res.json())
                .then((res) => {
                var _a;
                this.registeredCourses = res.value;
                //this.registeredCourses.map((x) => new RegisteredCoursesRow().render(x));
                if (((_a = this.registeredCourses) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.hasRegisterd = true;
                    //new RegisteredCoursesView(new RegisteredCoursesVm(this)).render(this.elementId);
                    //new RegisterCourseView(new RegisterCourseVm(this)).render(this.elementId);
                }
            });
        });
        this.getMountedCourses = (academicYear, semester, program, level) => __awaiter(this, void 0, void 0, function* () {
            let request = { academicYear: academicYear, semester: semester, program: program, level: level };
            const options = {
                method: "POST",
                body: JSON.stringify(request),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Department/GetMountedCoursesForRegistration`, options)
                .then((res) => res.json())
                .then((res) => {
                this.mountedCourses = res.value;
            });
        });
        this.getStudent("UE20000119");
    }
    setElementId(elementId) {
        this.elementId = elementId;
    }
}
//# sourceMappingURL=courseRegistrationService.js.map

/***/ }),

/***/ "./out/toast/toast.js":
/*!****************************!*\
  !*** ./out/toast/toast.js ***!
  \****************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class Toast {
    constructor() { }
    static success(message) {
        let el = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "toast toast-success" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Success"),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: "margin-top: 10px;" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, message))));
        document.getElementById("header").appendChild(el);
        setTimeout(() => {
            document.getElementById("header").removeChild(el);
        }, 3000);
    }
    static warning(message) {
        let el = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "toast toast-warning" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Warning"),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: "margin-top: 10px;" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, message))));
        document.getElementById("header").appendChild(el);
        setTimeout(() => {
            document.getElementById("header").removeChild(el);
        }, 3000);
    }
    static error(message) {
        let el = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "toast toast-error" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Error"),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { style: "margin-top: 10px;" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, message))));
        document.getElementById("header").appendChild(el);
        setTimeout(() => {
            document.getElementById("header").removeChild(el);
        }, 3000);
    }
}
//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./out/validator.js":
/*!**************************!*\
  !*** ./out/validator.js ***!
  \**************************/
/*! exports provided: Validator, Error, Rules, ValidationResult, Required, MinLength, Email, Number, Phone, Nameformat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validator", function() { return Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rules", function() { return Rules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationResult", function() { return ValidationResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Required", function() { return Required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinLength", function() { return MinLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return Number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nameformat", function() { return Nameformat; });
class Validator {
    constructor() {
        this.rules = [];
        this.hasErrors = false;
    }
    validator() { }
    addRules(rules) {
        this.rules = [];
        for (var rule of rules) {
            this.rules.push(rule);
        }
        return this;
    }
    group(errors) {
        const propertyNames = errors.map((r) => r.propertyName).filter((x, i, a) => x && a.indexOf(x) === i);
        const groupedErrors = [];
        for (let propertyName of propertyNames) {
            groupedErrors.push(new ValidationResult(propertyName, errors.filter((x) => x.propertyName === propertyName)));
        }
        return groupedErrors;
    }
    validate() {
        const errors = [];
        for (const rule of this.rules) {
            for (const r of rule.rules) {
                var error = r.validate();
                if (error) {
                    errors.push(new Error(rule.propertyName, error));
                }
            }
        }
        if (errors.length > 0) {
            this.hasErrors = true;
        }
        else {
            this.hasErrors = false;
        }
        return this.group(errors);
    }
}
class Error {
    constructor(propertyName, error) {
        this.propertyName = propertyName;
        this.error = error;
    }
}
class Rules {
    constructor(propertyName, rules) {
        this.propertyName = propertyName;
        this.rules = rules;
    }
}
class ValidationResult {
    constructor(propertyName, errors) {
        this.propertyName = propertyName;
        this.errors = errors;
    }
}
class Required {
    constructor(value) {
        this.value = value;
    }
    validate() {
        if (!this.value)
            return "Value is required.";
        else if (this.value.trim() === "")
            return "Value is required.";
    }
}
class MinLength {
    constructor(value, params) {
        this.value = value;
        this.params = params;
    }
    validate() {
        var _a;
        if (((_a = this.value) === null || _a === void 0 ? void 0 : _a.trim().length) < this.params)
            return "Value does not meet minimum length.";
    }
}
class Email {
    constructor(value) {
        this.value = value;
    }
    validate() {
        if (this.value !== "") {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.value))
                return "Value must match regular expression.";
        }
    }
}
class Number {
    constructor(value, params) {
        this.value = value;
    }
    validate() {
        var re = /^[0-9]*$/;
        if (!re.test(this.value.toString()))
            return "Value must match regular expression.";
    }
}
class Phone {
    validate() {
    }
}
class Nameformat {
    validate() {
    }
}
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ "./out/viewModelHelper.js":
/*!********************************!*\
  !*** ./out/viewModelHelper.js ***!
  \********************************/
/*! exports provided: ViewModelHelper, Properties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModelHelper", function() { return ViewModelHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Properties", function() { return Properties; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./out/app.js");

class ViewModelHelper {
    constructor() {
        this.addPropertyChangeNotification = (object) => {
            var elements = [];
            elements = document.querySelectorAll("[binding]");
            elements.forEach(function (element) {
                var propToBind = element.getAttribute("binding").split(".");
                if (propToBind[0] === object.constructor.name) {
                    new Properties().addScopeProp(object, propToBind, elements);
                    if (element.type === "text" || element.type === "textarea") {
                        element.onkeyup = function () {
                            object[propToBind[1]] = element.value;
                        };
                    }
                    else if (element.type === "checkbox") {
                        element.onchange = function () {
                            object[propToBind[1]] = element.checked;
                        };
                    }
                    else {
                        element.onchange = function () {
                            object[propToBind[1]] = element.value;
                        };
                    }
                }
            });
            return object;
        };
        this.notificationPropertyChange = (object, elements) => {
            elements.forEach(function (element) {
                let propToBind = element.getAttribute("binding").split(".");
                new Properties().addScopeProp(object, propToBind, elements);
                if (element.type === "text" || element.type === "textarea") {
                    element.onkeyup = function () {
                        object[propToBind] = element.value;
                    };
                }
                else if (element.type === "checkbox") {
                    element.onchange = function () {
                        object[propToBind] = element.checked;
                    };
                }
                else {
                    element.onchange = function () {
                        object[propToBind] = element.value;
                    };
                }
            });
            return object;
        };
    }
    addEventListener(self, tag) {
        const elements = document.querySelectorAll(`[${tag}]`);
        elements.forEach(function (element) {
            element.addEventListener("click", (evt) => {
                evt.preventDefault();
                var route = element.getAttribute(tag);
                _app__WEBPACK_IMPORTED_MODULE_0__["App"].navigate(route);
            });
        });
    }
    showErrors(results) {
        const elements = document.querySelectorAll("[errors]");
        elements.forEach(function (element) {
            element.innerHTML = "";
        });
        results.forEach(function (r) {
            elements.forEach(function (element) {
                r.errors.forEach(function (e) {
                    if (element.getAttribute("errors") === r.propertyName) {
                        element.innerHTML += `<p class="error">${e.error}</p>`;
                    }
                });
            });
        });
    }
}
class Properties {
    constructor() {
        this.addScopeProp = (object, prop, elements) => {
            if (!object.hasOwnProperty(prop)) {
                var value;
                Object.defineProperty(object, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function (element) {
                            let propName = prop.split(".");
                            if (propName[0] === object.constructor.name) {
                                if (element.getAttribute("binding") === propName[1]) {
                                    if (element.type && (element.type === "text" || element.type === "textarea")) {
                                        element.value = newValue;
                                    }
                                    else if (!element.type) {
                                        element.innerHTML = newValue;
                                    }
                                }
                            }
                        });
                    },
                    get: function () {
                        return value;
                    },
                    enumerable: true,
                });
            }
        };
    }
}
//# sourceMappingURL=viewModelHelper.js.map

/***/ }),

/***/ "./out/viewModels/AddStudentVm.js":
/*!****************************************!*\
  !*** ./out/viewModels/AddStudentVm.js ***!
  \****************************************/
/*! exports provided: AddStudentVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentVm", function() { return AddStudentVm; });
/* harmony import */ var _models_student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/student */ "./out/models/student.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app */ "./out/app.js");




class AddStudentVm {
    constructor() {
        this.maritalStatus = ["Single", "Married", "Widoowed"];
        this.bindData = () => {
            this.student = this.viewModelHelper.addPropertyChangeNotification(this.student);
        };
        this.save = (rules) => {
            var errors = this.validator.addRules(rules).validate();
            this.viewModelHelper.showErrors(errors);
            if (!this.validator.hasErrors) {
                const options = {
                    method: "POST",
                    body: JSON.stringify(this.student),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                    },
                };
                debugger;
                fetch(`${_app__WEBPACK_IMPORTED_MODULE_3__["App"].baseUri}/api/Student/AddStudent`, options)
                    .then((res) => res.json())
                    .then((res) => {
                    debugger;
                    this.student = new _models_student__WEBPACK_IMPORTED_MODULE_0__["Student"]();
                    _app__WEBPACK_IMPORTED_MODULE_3__["App"].navigate("/app/#studentList");
                });
            }
        };
        this.student = new _models_student__WEBPACK_IMPORTED_MODULE_0__["Student"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_2__["Validator"]();
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
    }
    stage1_rules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("IndexNumber", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.IndexNumber), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.IndexNumber, 8)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Othernames", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Othernames), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Othernames, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("ReferenceNumber", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.ReferenceNumber), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.ReferenceNumber, 8)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Surname", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Surname), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Surname, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("DateofBirth", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.DateofBirth)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Gender", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Gender)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("MaritalStatus", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.MaritalStatus)]),
        ];
    }
    stage2_rules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Country", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Country), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Country, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Region", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Region), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Region, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("HomeTown", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.HomeTown), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.HomeTown, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Address1", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Address1), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Address1, 3)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Address2", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Address1), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Address1, 3)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Contact1", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Contact1), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Contact1, 10)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("PersonalEmail", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.PersonalEmail), new _validator__WEBPACK_IMPORTED_MODULE_2__["Email"](this.student.PersonalEmail)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("UniversityEmail", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Email"](this.student.UniversityEmail)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("ResidentialStatus", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.ResidentialStatus)]),
        ];
    }
    stage3_rules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("ProgramOfStudy", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.ProgramOfStudy), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.ProgramOfStudy, 5)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("ProgramStatus", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.ProgramStatus), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.ProgramStatus, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("Level", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.Level), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.Level, 3)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("StudentType", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.StudentType), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.StudentType, 3)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("EnrolmentOption", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.EnrolmentOption), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.student.EnrolmentOption, 4)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("DateOfEntry", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.student.DateOfEntry)]),
        ];
    }
    validate(route, rules) {
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            _app__WEBPACK_IMPORTED_MODULE_3__["App"].navigate(route);
        }
    }
}
//# sourceMappingURL=AddStudentVm.js.map

/***/ }),

/***/ "./out/viewModels/InstitutionVm.js":
/*!*****************************************!*\
  !*** ./out/viewModels/InstitutionVm.js ***!
  \*****************************************/
/*! exports provided: InstitutionVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionVm", function() { return InstitutionVm; });
/* harmony import */ var _models_institution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/institution */ "./out/models/institution.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class InstitutionVm {
    constructor() {
        this.institution = new _models_institution__WEBPACK_IMPORTED_MODULE_0__["Institution"]();
        this.institutions = [];
        this.getInstitutions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Institution/GetInstitutions`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.institutions = data.value;
                this.bindList("institutions");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_2__["Validator"]();
        this.getInstitutions();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.name), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.institution.name, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("city", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.city)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("code", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.code)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("country", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.country)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("email", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.email), new _validator__WEBPACK_IMPORTED_MODULE_2__["Email"](this.institution.email)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("telephone", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.telephone)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("postalAddress", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.institution.postalAddress)]),
        ];
    }
    bind() {
        this.institution = this.viewModelHelper.addPropertyChangeNotification(this.institution);
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            const options = {
                method: "POST",
                body: JSON.stringify(this.institution),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Institution/AddInstitution`, options)
                .then((res) => res.json())
                .then((res) => {
                this.institution = new _models_institution__WEBPACK_IMPORTED_MODULE_0__["Institution"]();
                this.bind();
                this.getInstitutions();
                _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].hide();
                let frm = document.getElementsByTagName("form")[0];
                frm.reset();
            });
        }
        else {
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, id);
    }
}
//# sourceMappingURL=InstitutionVm.js.map

/***/ }),

/***/ "./out/viewModels/StudentListVm.js":
/*!*****************************************!*\
  !*** ./out/viewModels/StudentListVm.js ***!
  \*****************************************/
/*! exports provided: StudentListVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListVm", function() { return StudentListVm; });
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class StudentListVm {
    constructor() {
        this.students = [];
        this.getStudents = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_1__["App"].baseUri}/api/Student/GetStudents`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.students = data.value;
                new _BindingList2__WEBPACK_IMPORTED_MODULE_0__["BindingList2"]().bindCollection(this);
            }
            catch (error) {
            }
        });
        this.getStudents();
    }
}
//# sourceMappingURL=StudentListVm.js.map

/***/ }),

/***/ "./out/viewModels/courseVm.js":
/*!************************************!*\
  !*** ./out/viewModels/courseVm.js ***!
  \************************************/
/*! exports provided: CourseVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseVm", function() { return CourseVm; });
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _models_Course__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Course */ "./out/models/Course.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class CourseVm {
    constructor() {
        this.course = new _models_Course__WEBPACK_IMPORTED_MODULE_3__["Course"]();
        this.departments = [];
        this.courses = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Department/GetDepartments`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.departments.unshift({
                    departmentId: "",
                    name: "Please Select Department",
                    code: "",
                    schoolId: "",
                    schoolName: "",
                });
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getCourses = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Course/GetCourses`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.courses = data.value;
                new _BindingList2__WEBPACK_IMPORTED_MODULE_0__["BindingList2"]().bind(this, "courses");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_2__["Validator"]();
        this.getDepartments();
        this.getCourses();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.course.name), new _validator__WEBPACK_IMPORTED_MODULE_2__["MinLength"](this.course.name, 2)]),
            //new Rules("category", [new Required(this.course.category)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("code", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.course.code)]),
            new _validator__WEBPACK_IMPORTED_MODULE_2__["Rules"]("credit", [new _validator__WEBPACK_IMPORTED_MODULE_2__["Required"](this.course.credit)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let department = this.departments.find((x) => x.name === this.course.department);
            this.course.departmentId = department.departmentId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.course),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Course/AddCourse`, options)
                .then((res) => res.json())
                .then((res) => {
                this.course = new _models_Course__WEBPACK_IMPORTED_MODULE_3__["Course"]();
                this.bind();
                this.getCourses();
                _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].hide();
            });
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_0__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.course = this.viewModelHelper.addPropertyChangeNotification(this.course);
    }
}
//# sourceMappingURL=courseVm.js.map

/***/ }),

/***/ "./out/viewModels/departmentVm.js":
/*!****************************************!*\
  !*** ./out/viewModels/departmentVm.js ***!
  \****************************************/
/*! exports provided: DepartmentVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentVm", function() { return DepartmentVm; });
/* harmony import */ var _models_department__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/department */ "./out/models/department.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class DepartmentVm {
    constructor() {
        this.department = new _models_department__WEBPACK_IMPORTED_MODULE_0__["Department"]();
        this.departments = [];
        this.schools = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Department/GetDepartments`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getSchools = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/School/GetSchools`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.schools = data.value;
                this.schools.unshift({
                    name: "Please Select School",
                    academicYear: "",
                    semester: "",
                    institutionId: "",
                    institutionName: "",
                    schoolId: "",
                });
                new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, "schools");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_2__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
        this.getDepartments();
        this.getSchools();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.department.name), new _validator__WEBPACK_IMPORTED_MODULE_1__["MinLength"](this.department.name, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("code", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.department.code)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let school = this.schools.find((x) => x.name === this.department.schoolName);
            this.department.schoolId = school.schoolId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.department),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Department/AddDepartment`, options)
                .then((res) => res.json())
                .then((res) => {
                this.department = new _models_department__WEBPACK_IMPORTED_MODULE_0__["Department"]();
                this.bind();
                this.getDepartments();
                _toast_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__["BallLoader"].hide();
            });
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.department = this.viewModelHelper.addPropertyChangeNotification(this.department);
    }
}
//# sourceMappingURL=departmentVm.js.map

/***/ }),

/***/ "./out/viewModels/lecturerVm.js":
/*!**************************************!*\
  !*** ./out/viewModels/lecturerVm.js ***!
  \**************************************/
/*! exports provided: LecturerVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturerVm", function() { return LecturerVm; });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _models_lecturer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lecturer */ "./out/models/lecturer.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class LecturerVm {
    constructor() {
        this.lecturer = new _models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"]();
        this.departments = [];
        this.lecturers = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Department/GetDepartments`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.departments.unshift({
                    departmentId: "",
                    name: "Please Select Department",
                    code: "",
                    schoolId: "",
                    schoolName: "",
                });
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getLecturers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Lecturer/GetLecturers`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lecturers = data.value;
                this.bindList("lecturers");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]();
        this.getDepartments();
        this.getLecturers();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.name)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("department", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.department)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("staffId", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.staffId)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("telephone", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.telephone)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("email", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.email), new _validator__WEBPACK_IMPORTED_MODULE_0__["Email"](this.lecturer.email)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("address", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lecturer.address)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let department = this.departments.find((x) => x.name === this.lecturer.department);
            this.lecturer.departmentId = department.departmentId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.lecturer),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Lecturer/AddLecturer`, options)
                .then((res) => res.json())
                .then((res) => {
                this.lecturer = new _models_lecturer__WEBPACK_IMPORTED_MODULE_2__["Lecturer"]();
                this.bind();
                this.getLecturers();
                _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].hide();
            });
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.lecturer = this.viewModelHelper.addPropertyChangeNotification(this.lecturer);
    }
}
//# sourceMappingURL=lecturerVm.js.map

/***/ }),

/***/ "./out/viewModels/lookupVm.js":
/*!************************************!*\
  !*** ./out/viewModels/lookupVm.js ***!
  \************************************/
/*! exports provided: LookupVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupVm", function() { return LookupVm; });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _models_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lookup */ "./out/models/lookup.js");
/* harmony import */ var _models_institution__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/institution */ "./out/models/institution.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./out/app.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








class LookupVm {
    constructor() {
        this.lookup = new _models_lookup__WEBPACK_IMPORTED_MODULE_2__["Lookup"]();
        this.institutions = [];
        this.lookups = [];
        this.lookupTypes = [
            { name: "" },
            { name: "ENROLLMENT OPTION" },
            { name: "COURSE CATEGORY" },
            { name: "LEVEL" },
            { name: "SEMESTER" },
            { name: "ACADEMIC YEAR" },
        ];
        this.getInstitutions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_5__["App"].baseUri}/api/Institution/GetInstitutions`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.institutions = data.value;
                var institution = new _models_institution__WEBPACK_IMPORTED_MODULE_3__["Institution"]();
                institution.name = "Please Select Institution";
                this.institutions.unshift(institution);
                this.bindList("institutions");
            }
            catch (error) { }
        });
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_5__["App"].baseUri}/api/Lookup/GetLookups`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.lookups = data.value;
                new _BindingList2__WEBPACK_IMPORTED_MODULE_4__["BindingList2"]().bind(this, "lookups");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]();
        this.getInstitutions();
        this.getLookups();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lookup.name)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("type", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lookup.type)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("institution", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.lookup.institution)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let institution = this.institutions.find((x) => x.name === this.lookup.institution);
            this.lookup.institution = institution.institutionId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.lookup),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_7__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_5__["App"].baseUri}/api/Lookup/AddLookup`, options)
                .then((res) => res.json())
                .then((res) => {
                this.lookup = new _models_lookup__WEBPACK_IMPORTED_MODULE_2__["Lookup"]();
                this.bind();
                this.getLookups();
                _toast_toast__WEBPACK_IMPORTED_MODULE_6__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_7__["BallLoader"].hide();
            });
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_4__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.lookup = this.viewModelHelper.addPropertyChangeNotification(this.lookup);
    }
}
//# sourceMappingURL=lookupVm.js.map

/***/ }),

/***/ "./out/viewModels/mountCourseVm.js":
/*!*****************************************!*\
  !*** ./out/viewModels/mountCourseVm.js ***!
  \*****************************************/
/*! exports provided: MountCourseViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountCourseViewModel", function() { return MountCourseViewModel; });
/* harmony import */ var _models_SelectedCourse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/SelectedCourse */ "./out/models/SelectedCourse.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group */ "./out/group.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class MountCourseViewModel {
    constructor(commonService) {
        this.commonService = commonService;
        this.mountedCourse = new _models_SelectedCourse__WEBPACK_IMPORTED_MODULE_0__["SelectedCourse"]();
        this.enrollmentOptions = [];
        this.levels = [];
        this.lecturers = [];
        this.courses = [];
        this.selectedCourses = [];
        this.categories = [];
        this.programs = [];
        this.lookups = [];
        this.specializations = [];
        this.departments = [];
        this.muntedCourseList = [];
        this.getCourses = (department) => __awaiter(this, void 0, void 0, function* () {
            let d = this.departments.find((x) => x.name === department);
            this.courses = d.courses;
            this.mountedCourse.department = department;
            this.setProgramsInDepartment(d.departmentId);
        });
        this.setProgramsInDepartment = (departmentId) => {
            this.programs = this.commonService.programs.filter((x) => x.departmentId === departmentId);
        };
        this.addCourse = (course) => {
            let rules = this.setupRules();
            var errors = this.validator.addRules(rules).validate();
            this.viewModelHelper.showErrors(errors);
            if (!this.validator.hasErrors) {
                let selectedCourse = {
                    enrollmentOption: this.mountedCourse.enrollmentOption,
                    course: course,
                    courseCode: this.courses.find((x) => x.name === course).code,
                    credit: this.courses.find((x) => x.name === course).credit,
                    specialization: this.mountedCourse.specialization,
                    category: this.getSpecialization(this.mountedCourse.level, this.mountedCourse.specialization).type,
                    level: this.mountedCourse.level,
                    scoring: this.mountedCourse.scoring,
                    assignedTo: this.mountedCourse.assignedTo,
                    department: this.mountedCourse.department,
                    program: this.mountedCourse.program,
                };
                let c = this.selectedCourses.find((x) => x.level === selectedCourse.level &&
                    x.enrollmentOption === selectedCourse.enrollmentOption &&
                    x.courseCode === selectedCourse.courseCode &&
                    x.course === selectedCourse.course);
                if (!c) {
                    this.selectedCourses.push(selectedCourse);
                    let groups = _group__WEBPACK_IMPORTED_MODULE_4__["_"].groupBy(this.selectedCourses, function (course) {
                        return {
                            enrollmentOption: course.enrollmentOption,
                            category: course.category,
                            program: course.program,
                            level: course.level,
                        };
                    });
                    let courses = Object.keys(groups).map(function (group) {
                        let j = JSON.parse(group);
                        let g = groups[group];
                        return {
                            enrollmentOption: j.enrollmentOption,
                            level: j.level,
                            program: j.program,
                            category: j.category,
                            mountedCourses: g,
                        };
                    });
                    return courses;
                }
                else {
                    _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].warning("Course Already Exist");
                }
                return null;
            }
        };
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_3__["Validator"]();
        //this.getMountedCourses();
    }
    getEnrollmentOption() {
        this.enrollmentOptions = this.commonService.lookups.filter((x) => x.type === "ENROLLMENT OPTION");
        this.departments = this.commonService.departments;
        return this.enrollmentOptions;
    }
    getLecturers() {
        return this.commonService.lecturers;
    }
    getLevels() {
        return this.commonService.lookups.filter((x) => x.type === "LEVEL");
    }
    getDepartments() {
        this.departments = this.commonService.departments;
        return this.departments;
    }
    getSpecializations(level) {
        let program = this.commonService.programs.find((x) => x.name === this.mountedCourse.program);
        this.specializations = program.specializations.filter((x) => x.level === level);
    }
    getSpecialization(level, name) {
        let program = this.commonService.programs.find((x) => x.name === this.mountedCourse.program);
        return program.specializations.find((x) => x.level === level && x.name === name);
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("enrollmentOption", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.enrollmentOption)]),
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("specialization", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.specialization)]),
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("level", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.level)]),
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("assignedTo", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.assignedTo)]),
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("department", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.department)]),
            new _validator__WEBPACK_IMPORTED_MODULE_3__["Rules"]("program", [new _validator__WEBPACK_IMPORTED_MODULE_3__["Required"](this.mountedCourse.program)]),
        ];
    }
    removeCourse(rowIndex) {
        this.selectedCourses.splice(rowIndex, 1);
    }
    bind() {
        this.mountedCourse = this.viewModelHelper.addPropertyChangeNotification(this.mountedCourse);
    }
    save() {
        if (this.selectedCourses.length === 0) {
        }
        else {
            let courses = this.selectedCourses.map((x) => this.mapCourses(x));
            let j = JSON.stringify(courses);
            const options = {
                method: "POST",
                body: j,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            fetch("https://localhost:44359/api/Department/MountCourse", options)
                .then((res) => res.json())
                .then((res) => {
                this.selectedCourses = [];
                _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].success(res.message);
            });
        }
    }
    mapCourses(x) {
        let department = this.departments.find((d) => d.name === x.department);
        return new Object({
            EnrollmentOption: x.enrollmentOption,
            Category: x.category,
            Specialization: x.specialization,
            Level: x.level,
            Scoring: x.scoring,
            CourseName: x.course,
            CourseCode: x.courseCode,
            Credit: x.credit,
            ProgramId: this.commonService.programs.find((p) => p.name === x.program).programId,
            Semester: department.semester,
            AssignedTo: x.assignedTo,
            AcademicYear: department.academicYear,
            AssignedBy: "hhj",
        });
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_2__["BindingList2"]().bind(this, id);
    }
}
//# sourceMappingURL=mountCourseVm.js.map

/***/ }),

/***/ "./out/viewModels/mountedCourseVm.js":
/*!*******************************************!*\
  !*** ./out/viewModels/mountedCourseVm.js ***!
  \*******************************************/
/*! exports provided: MountedCourseVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountedCourseVm", function() { return MountedCourseVm; });
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _views_mountCourse_mountedCoursesView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/mountCourse/mountedCoursesView */ "./out/views/mountCourse/mountedCoursesView.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group */ "./out/group.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class MountedCourseVm {
    constructor(commonService) {
        this.commonService = commonService;
        this.programs = [];
        this.courseList = [];
        this.enrollmentOptions = [];
        this.categories = [];
        this.levels = [];
        this.scoring = [{ name: "Please Select Scoring" }, { name: "" }, { name: "True" }, { name: "False" }];
        this.filter = {};
        this.querys = [];
        this.getMountedCourses = () => __awaiter(this, void 0, void 0, function* () {
            if (this.request.academicYear && this.request.program) {
                const options = {
                    method: "POST",
                    body: JSON.stringify(this.request),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                    },
                };
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_3__["BallLoader"].show();
                yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_5__["App"].baseUri}/api/Department/GetMountedCourses`, options)
                    .then((res) => res.json())
                    .then((res) => {
                    this.courseList = res.value;
                    for (let c of this.courseList) {
                        if (c.scoring === true) {
                            c.isScoring = "True";
                        }
                        else if (c.scoring === false) {
                            c.isScoring = "False";
                        }
                    }
                    let groups = _group__WEBPACK_IMPORTED_MODULE_4__["_"].groupBy(this.courseList, function (course) {
                        return {
                            enrollmentOption: course.enrollmentOption,
                            category: course.category,
                            program: course.program,
                            level: course.level,
                        };
                    });
                    let courses = Object.keys(groups).map(function (group) {
                        let j = JSON.parse(group);
                        let g = groups[group];
                        return {
                            enrollmentOption: j.enrollmentOption,
                            level: j.level,
                            program: j.program,
                            category: j.category,
                            mountedCourses: g,
                        };
                    });
                    new _views_mountCourse_mountedCoursesView__WEBPACK_IMPORTED_MODULE_2__["MountedRow"](courses, this).render();
                    _loader_ballLoader__WEBPACK_IMPORTED_MODULE_3__["BallLoader"].hide();
                    //this.bindList("courses");
                    //App.navigate('/app/studentList');
                });
            }
        });
        this.getPrograms = () => {
            this.programs = this.commonService.programs;
        };
        this.getLookups = () => {
            this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
            this.semesters.unshift({ name: "" });
            this.semesters.unshift({ name: "Please Select Semester" });
            this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
            this.enrollmentOptions = this.commonService.lookups.filter((x) => x.type === "ENROLLMENT OPTION");
            this.enrollmentOptions.unshift({ name: "" });
            this.enrollmentOptions.unshift({ name: "Please Select Enrollment Option" });
            this.categories = this.commonService.lookups.filter((x) => x.type === "COURSE CATEGORY");
            this.categories.unshift({ name: "" });
            this.categories.unshift({ name: "Please Select Category" });
            this.levels = this.commonService.lookups.filter((x) => x.type === "LEVEL");
            this.levels.unshift({ name: "" });
            this.levels.unshift({ name: "Please Select Level" });
        };
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.getLookups();
        this.getPrograms();
        this.request = {};
    }
    getLecturers() {
        return this.commonService.lecturers;
    }
    bind() {
        this.request = this.viewModelHelper.addPropertyChangeNotification(this.request);
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_0__["BindingList2"]().bind(this, id);
    }
    search() {
        this.courses = this.courseList.filter((a) => this.executeQuery(a, this.querys));
        this.bindList("courses");
    }
    IsEqualTo(source, propertyName, parameter) {
        return source[propertyName] === parameter;
    }
    buidQuery(propertyName, parameter) {
        var item = this.querys.find((x) => x.propertyName === propertyName);
        if (item != null) {
            var index = this.querys.indexOf(item);
            this.querys.splice(index, 1);
        }
        if (parameter != "") {
            this.querys.push({ propertyName: propertyName, parameter: parameter });
        }
        this.search();
    }
    executeQuery(source, querys) {
        var result = true;
        for (var query of querys) {
            result = result && this.IsEqualTo(source, query.propertyName, query.parameter);
        }
        return result;
    }
}
//# sourceMappingURL=mountedCourseVm.js.map

/***/ }),

/***/ "./out/viewModels/programVm.js":
/*!*************************************!*\
  !*** ./out/viewModels/programVm.js ***!
  \*************************************/
/*! exports provided: ProgramViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramViewModel", function() { return ProgramViewModel; });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _models_program__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/program */ "./out/models/program.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class ProgramViewModel {
    constructor() {
        this.program = new _models_program__WEBPACK_IMPORTED_MODULE_2__["Program"]();
        this.departments = [];
        this.programs = [];
        this.getDepartments = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Department/GetDepartments`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.departments = data.value;
                this.departments.unshift({
                    departmentId: "",
                    name: "Please Select Department",
                    code: "",
                    schoolId: "",
                    schoolName: "",
                });
                this.bindList("departments");
            }
            catch (error) { }
        });
        this.getPrograms = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Program/GetPrograms`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.programs = data.value;
                this.bindList("programs");
            }
            catch (error) { }
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_0__["Validator"]();
        this.getDepartments();
        this.getPrograms();
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.program = this.viewModelHelper.addPropertyChangeNotification(this.program);
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("department", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.program.department)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.program.name)]),
            new _validator__WEBPACK_IMPORTED_MODULE_0__["Rules"]("duration", [new _validator__WEBPACK_IMPORTED_MODULE_0__["Required"](this.program.duration)]),
        ];
    }
    addSpecialization(data) {
        this.program.specializations.push(data);
    }
    removeSpecialization(index) {
        this.program.specializations.splice(index, 1);
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let department = this.departments.find((x) => x.name === this.program.department);
            this.program.departmentId = department.departmentId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.program),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Program/AddProgram`, options)
                .then((res) => res.json())
                .then((res) => {
                this.program = new _models_program__WEBPACK_IMPORTED_MODULE_2__["Program"]();
                this.bind();
                this.getPrograms();
                _toast_toast__WEBPACK_IMPORTED_MODULE_4__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_5__["BallLoader"].hide();
            });
        }
    }
}
//# sourceMappingURL=programVm.js.map

/***/ }),

/***/ "./out/viewModels/registerCourseVm.js":
/*!********************************************!*\
  !*** ./out/viewModels/registerCourseVm.js ***!
  \********************************************/
/*! exports provided: RegisterCourseVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCourseVm", function() { return RegisterCourseVm; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./out/app.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class RegisterCourseVm {
    constructor(_courseRegistrationService) {
        this._courseRegistrationService = _courseRegistrationService;
        this.selectedCourses = [];
        this.addCourse = (courseCode) => {
            let mountedCourse = this.courseList.find((x) => x.courseCode === courseCode);
            let selectedCourse = {
                courseCode: courseCode,
                studentId: this._courseRegistrationService.student.studentId,
                mountedCoureId: mountedCourse.mountedCoureId,
                indexNumber: this._courseRegistrationService.student.indexNumber,
                semester: mountedCourse.semester,
                academicYear: mountedCourse.academicYear,
                approved: false,
            };
            this.selectedCourses.push(selectedCourse);
        };
        this.removeCourse = (courseCode) => {
            let selectedCourse = this.selectedCourses.find((x) => x.courseCode === courseCode);
            if (selectedCourse) {
                let index = this.selectedCourses.indexOf(selectedCourse);
                this.selectedCourses.splice(index, 1);
            }
        };
        this.save = () => __awaiter(this, void 0, void 0, function* () {
            if (this.selectedCourses.length === 0) {
            }
            else {
                let courses = this.selectedCourses.map((x) => new Object({
                    studentId: x.studentId,
                    mountedCoureId: x.mountedCoureId,
                    indexNumber: x.indexNumber,
                    semester: x.semester,
                    academicYear: x.academicYear,
                    approved: x.approved,
                }));
                let j = JSON.stringify(courses);
                const options = {
                    method: "POST",
                    body: j,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "*/*",
                    },
                };
                fetch(`${_app__WEBPACK_IMPORTED_MODULE_0__["App"].baseUri}/api/Department/RegisterCourse`, options)
                    .then((res) => res.json())
                    .then((res) => {
                    this.selectedCourses = [];
                    _toast_toast__WEBPACK_IMPORTED_MODULE_1__["Toast"].success(res.message);
                });
            }
        });
    }
    getRegisteredCourses() {
        return this._courseRegistrationService.mountedCourses;
    }
}
//# sourceMappingURL=registerCourseVm.js.map

/***/ }),

/***/ "./out/viewModels/registeredCoursesVm.js":
/*!***********************************************!*\
  !*** ./out/viewModels/registeredCoursesVm.js ***!
  \***********************************************/
/*! exports provided: RegisteredCoursesVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredCoursesVm", function() { return RegisteredCoursesVm; });
/* harmony import */ var _views_registration_registeredCoursesRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/registration/registeredCoursesRow */ "./out/views/registration/registeredCoursesRow.js");

class RegisteredCoursesVm {
    constructor(_mainvm) {
        this._mainvm = _mainvm;
    }
    getRegisteredCourses() {
        let r = new _views_registration_registeredCoursesRow__WEBPACK_IMPORTED_MODULE_0__["RegisteredCoursesRow"]();
        this._mainvm.registeredCourses.map((x) => r.render(x));
    }
}
//# sourceMappingURL=registeredCoursesVm.js.map

/***/ }),

/***/ "./out/viewModels/schoolVm.js":
/*!************************************!*\
  !*** ./out/viewModels/schoolVm.js ***!
  \************************************/
/*! exports provided: SchoolVm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolVm", function() { return SchoolVm; });
/* harmony import */ var _models_school__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/school */ "./out/models/school.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validator */ "./out/validator.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");
/* harmony import */ var _BindingList2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../BindingList2 */ "./out/BindingList2.js");
/* harmony import */ var _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader/ballLoader */ "./out/loader/ballLoader.js");
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toast/toast */ "./out/toast/toast.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app */ "./out/app.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class SchoolVm {
    constructor(commonService) {
        this.commonService = commonService;
        this.school = new _models_school__WEBPACK_IMPORTED_MODULE_0__["School"]();
        this.institutionList = [];
        this.institutions = [];
        this.schools = [];
        this.lookups = [];
        this.semesters = [];
        this.academicYears = [];
        this.getSchools = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/School/GetSchools`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.schools = data.value;
                new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, "schools");
            }
            catch (error) { }
        });
        this.getInstitutions = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/Institution/GetInstitutions`);
                if (!res.ok) {
                }
                const data = yield res.json();
                this.institutionList = data.value;
                this.institutions = this.institutionList.map((x) => ({ institutionNane: x.name, code: x.code }));
                this.institutions.unshift({ institutionNane: "Please select institution", code: "" });
                new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, "institutions");
            }
            catch (error) { }
        });
        this.getLookups = () => __awaiter(this, void 0, void 0, function* () {
            this.semesters = this.commonService.lookups.filter((x) => x.type === "SEMESTER");
            this.academicYears = this.commonService.lookups.filter((x) => x.type === "ACADEMIC YEAR");
        });
        this.viewModelHelper = new _viewModelHelper__WEBPACK_IMPORTED_MODULE_2__["ViewModelHelper"]();
        this.validator = new _validator__WEBPACK_IMPORTED_MODULE_1__["Validator"]();
        this.getInstitutions();
        this.getSchools();
        this.getLookups();
    }
    setupRules() {
        return [
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("name", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.school.name), new _validator__WEBPACK_IMPORTED_MODULE_1__["MinLength"](this.school.name, 2)]),
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("academicYear", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.school.academicYear)]),
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("semester", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.school.semester)]),
            new _validator__WEBPACK_IMPORTED_MODULE_1__["Rules"]("institutionName", [new _validator__WEBPACK_IMPORTED_MODULE_1__["Required"](this.school.institutionName)]),
        ];
    }
    save() {
        let rules = this.setupRules();
        var errors = this.validator.addRules(rules).validate();
        this.viewModelHelper.showErrors(errors);
        if (!this.validator.hasErrors) {
            let institution = this.institutionList.find((x) => x.name === this.school.institutionName);
            this.school.institutionId = institution.institutionId;
            const options = {
                method: "POST",
                body: JSON.stringify(this.school),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                },
            };
            _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].show();
            fetch(`${_app__WEBPACK_IMPORTED_MODULE_6__["App"].baseUri}/api/School/AddSchool`, options)
                .then((res) => res.json())
                .then((res) => {
                this.school = new _models_school__WEBPACK_IMPORTED_MODULE_0__["School"]();
                this.bind();
                this.getSchools();
                _toast_toast__WEBPACK_IMPORTED_MODULE_5__["Toast"].success(res.message);
                _loader_ballLoader__WEBPACK_IMPORTED_MODULE_4__["BallLoader"].hide();
            });
        }
    }
    bindList(id) {
        new _BindingList2__WEBPACK_IMPORTED_MODULE_3__["BindingList2"]().bind(this, id);
    }
    bind() {
        this.school = this.viewModelHelper.addPropertyChangeNotification(this.school);
    }
}
//# sourceMappingURL=schoolVm.js.map

/***/ }),

/***/ "./out/views/ProgramModal.js":
/*!***********************************!*\
  !*** ./out/views/ProgramModal.js ***!
  \***********************************/
/*! exports provided: ProgramModal, SpecializationView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramModal", function() { return ProgramModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecializationView", function() { return SpecializationView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class ProgramModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Program"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Department"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "schools", binding: "Program.department", value: this._vm.program.department, "data-repeat": "departments" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "department" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "Program.name", type: "text", value: this._vm.program.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Duration"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "Program.duration", type: "number", placeholder: "Duration" }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "duration" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "Add" }, "Add")),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Specialization")),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", { id: "specialization" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-table" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "specializations", "data-repeat": "specializations" })))),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        let addSpecialization = () => {
            new SpecializationView().render("specializations");
            var rows = document.getElementById("specializations").rows;
            let sp = {
                name: "",
                type: "",
                level: "",
            };
            let elements = rows[rows.length - 1].querySelectorAll("[binding]");
            sp = this._vm.viewModelHelper.notificationPropertyChange(sp, elements);
            this._vm.addSpecialization(sp);
            rows[rows.length - 1].querySelectorAll("[click]")[0].onclick = removeRow;
        };
        let removeRow = (evt) => {
            evt.preventDefault();
            let row = evt.target.parentElement;
            if (document.getElementById("specializations").rows.length > 1) {
                document.getElementById("specializations").deleteRow(row.rowIndex);
                this._vm.removeSpecialization(row.rowIndex);
            }
        };
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        addSpecialization();
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("programs");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "duration" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "specializations" })));
                doc.removeChild(temp);
            }
        });
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        let add = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            addSpecialization();
        });
        this._vm.bind();
        this._vm.bindList("schools");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
        document.getElementById("Add").onclick = add;
    }
}
class SpecializationView {
    constructor() { }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "name", type: "text", placeholder: "Name", style: "margin-bottom: 0px;" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "type", type: "text", placeholder: "Type", style: "margin-bottom: 0px;" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "type" })),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "level", type: "text", placeholder: "Level", style: "margin-bottom: 0px;" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "level" })),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", click: "" }, "DEL"))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
    }
}
//# sourceMappingURL=ProgramModal.js.map

/***/ }),

/***/ "./out/views/courseModal.js":
/*!**********************************!*\
  !*** ./out/views/courseModal.js ***!
  \**********************************/
/*! exports provided: CourseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModal", function() { return CourseModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class CourseModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Course"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Department"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "departments", binding: "Course.department", value: this._vm.course.department, "data-repeat": "departments" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "department" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "Course.name", type: "text", value: this._vm.course.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Code"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Course.code", value: this._vm.course.code }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "code" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Credit"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "number", binding: "Course.credit", value: this._vm.course.credit }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "credit" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("courses");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "duration" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "specializations" })));
                doc.removeChild(temp);
            }
        });
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        this._vm.bind();
        this._vm.bindList("departments");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
    }
}
//# sourceMappingURL=courseModal.js.map

/***/ }),

/***/ "./out/views/courseView.js":
/*!*********************************!*\
  !*** ./out/views/courseView.js ***!
  \*********************************/
/*! exports provided: CourseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseView", function() { return CourseView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _courseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./courseModal */ "./out/views/courseModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class CourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Course"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addCourse" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Code"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Credit")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "courses", "data-repeat": "courses" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseName" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "code" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "credit" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _courseModal__WEBPACK_IMPORTED_MODULE_1__["CourseModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addCourse").onclick = showModal;
    }
}
//# sourceMappingURL=courseView.js.map

/***/ }),

/***/ "./out/views/departmentModal.js":
/*!**************************************!*\
  !*** ./out/views/departmentModal.js ***!
  \**************************************/
/*! exports provided: DepartmentModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModal", function() { return DepartmentModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class DepartmentModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Department"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "School"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "schools", binding: "Department.schoolName", value: this._vm.department.schoolName, "data-repeat": "schools" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "schoolName" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "Department.name", type: "text", value: this._vm.department.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Code"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Department.code", value: this._vm.department.code }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "code" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("departments");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "code" })));
                doc.removeChild(temp);
            }
        });
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        this._vm.bind();
        this._vm.bindList("schools");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
    }
}
//# sourceMappingURL=departmentModal.js.map

/***/ }),

/***/ "./out/views/departmentView.js":
/*!*************************************!*\
  !*** ./out/views/departmentView.js ***!
  \*************************************/
/*! exports provided: DepartmentView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentView", function() { return DepartmentView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _departmentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./departmentModal */ "./out/views/departmentModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class DepartmentView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Department"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addDepartment" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Code")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "departments", "data-repeat": "departments" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "code" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _departmentModal__WEBPACK_IMPORTED_MODULE_1__["DepartmentModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addDepartment").onclick = showModal;
    }
}
//# sourceMappingURL=departmentView.js.map

/***/ }),

/***/ "./out/views/frontpage.js":
/*!********************************!*\
  !*** ./out/views/frontpage.js ***!
  \********************************/
/*! exports provided: FrontPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontPageView", function() { return FrontPageView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./out/app.js");


class FrontPageView {
    constructor() {
        this.render = (elementId) => {
            let temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "showcase" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-container" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Training the next generation of experts"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Providing cutting-edge research to support Ghana and Africa\u2019s development on energy and natural resources."),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-primary-2", id: "signin" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Sign in")))));
            var doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            var btn = document.getElementById("signin");
            btn.addEventListener("click", (evt) => {
                evt.preventDefault();
                _app__WEBPACK_IMPORTED_MODULE_1__["App"].navigate("/app/#addStudent/stage1");
            });
        };
    }
}
//# sourceMappingURL=frontpage.js.map

/***/ }),

/***/ "./out/views/header.js":
/*!*****************************!*\
  !*** ./out/views/header.js ***!
  \*****************************/
/*! exports provided: HeaderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderView", function() { return HeaderView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewModelHelper */ "./out/viewModelHelper.js");


class HeaderView {
    constructor() {
        this.render = (elementId) => {
            var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", id: "check" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { for: "check" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { id: "open-slide" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", { width: "30", height: "30" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M0,5 30,5", stroke: "#2bab0d", "stroke-width": "5" }),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M0,14 30,14", stroke: "#2bab0d", "stroke-width": "5" }),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", { d: "M0,23 30,23", stroke: "#2bab0d", "stroke-width": "5" }))),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-times", id: "cancel" })),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "side-menu", class: "sp-side-nav" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", { id: "btn-close" }, "USP "),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-home" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-side-nav-2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", null, "Students "),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#addStudent/stage1" }, "Add Student")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#studentList" }, "Student List")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#mountCourse" }, "Mount Course")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#mountedCourses" }, "Mounted Courses")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#registerCourses" }, "Register Courses")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#registeredCourses" }, "Registered Courses"))))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-home" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", null, "Setup "),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#institution" }, "Institution")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#school" }, "School")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#department" }, "Department")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#lecturer" }, "Lecturer")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#program" }, "Program")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#course" }, "Course")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#lookup" }, "Lookup"))))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-home" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", null, "USP "),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { route: "/app/#uploadResults" }, "Item 1")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 2")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 3")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 3"))))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-home" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { id: "side-menu2", class: "sp-side-nav-2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("header", null, "USP "),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 1")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 2")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 3")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", { href: "#" }, "Item 3")))))))));
            //     var temp = <div class="sp-header"><div class="sp-container">
            //     <div id="branding">
            //        <h1>
            //            <span id="open-slide" class="open-slide">
            //              <a href="#">
            //                  <svg width="30" height="30">
            //                      <path d="M0,5 30,5" stroke="#fff"
            //                      stroke-width="5"/>
            //                      <path d="M0,14 30,14" stroke="#fff"
            //                      stroke-width="5"/>
            //                      <path d="M0,23 30,23" stroke="#fff"
            //                      stroke-width="5"/>
            //                  </svg>
            //              </a>
            //            </span>
            //            <span class="sp-highlight">UENR</span> Portal
            //         </h1>
            //     </div>
            //    <nav>
            //        <ul>
            //            <li><a id="home">Home</a></li>
            //            <li><a>About</a></li>
            //            <li><a>Services</a></li>
            //            <li><a href="#">Services</a></li>
            //            <li><a href="#">Investers</a></li>
            //            <li><a href="#">Contact</a></li>
            //        </ul>
            //    </nav>
            //    <div id="side-menu" class="side-nav">
            //        <a href="#" id="btn-close" class="btn-close">&times;</a>
            //        <a href="#">Home</a>
            //        <a href="#">About</a>
            //        <a href="#">Services</a>
            //        <a href="#">Contacts</a>
            //    </div>
            //   </div>
            //   </div>;
            var doc = document.getElementById(elementId);
            doc.innerHTML = "";
            doc.innerHTML = temp.outerHTML;
            var btn = document.getElementById("open-slide");
            btn.addEventListener("click", (evt) => {
                evt.preventDefault();
                document.getElementById("side-menu").style.left = "0px";
                document.getElementById("route-outlet").style.marginLeft = "100px";
            });
            var btnclose = document.getElementById("btn-close");
            btnclose.addEventListener("click", (evt) => {
                evt.preventDefault();
                document.getElementById("side-menu").style.left = "-150px";
                document.getElementById("route-outlet").style.marginLeft = "0px";
            });
            new _viewModelHelper__WEBPACK_IMPORTED_MODULE_1__["ViewModelHelper"]().addEventListener(this, "route");
        };
    }
}
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "./out/views/institutionModal.js":
/*!***************************************!*\
  !*** ./out/views/institutionModal.js ***!
  \***************************************/
/*! exports provided: InstitutionModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionModal", function() { return InstitutionModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class InstitutionModal {
    constructor(_vm) {
        this._vm = _vm;
        this.render = (elementId) => {
            const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Institution"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", { class: "mountcourses-form" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { id: "surname", binding: "Institution.name", type: "text", value: this._vm.institution.name }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Code"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.code", value: this._vm.institution.code }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "code" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Postal Address"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.postalAddress", value: this._vm.institution.postalAddress }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "postalAddress" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Email"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.email", value: this._vm.institution.email }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "email" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Country"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.country", value: this._vm.institution.country }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "country" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "City"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.city", value: this._vm.institution.city }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "city" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Telephone"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Institution.telephone", value: this._vm.institution.telephone }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "telephone" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                        "Save ",
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
            const doc = document.getElementById(elementId);
            //doc.textContent = "";
            doc.appendChild(temp);
            let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                doc.removeChild(temp);
            });
            let save = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                this._vm.save();
                if (!this._vm.validator.hasErrors) {
                    let tr = document.getElementById("institutions");
                    tr.textContent = "";
                    tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "code" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "country" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "city" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "email" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "telephone" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "postalAddress" })));
                    doc.removeChild(temp);
                }
            });
            this._vm.bind();
            document.getElementById("close").onclick = hideModal;
            document.getElementById("Save").onclick = save;
        };
    }
}
//# sourceMappingURL=institutionModal.js.map

/***/ }),

/***/ "./out/views/institutionView.js":
/*!**************************************!*\
  !*** ./out/views/institutionView.js ***!
  \**************************************/
/*! exports provided: InstitutionView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstitutionView", function() { return InstitutionView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _institutionModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./institutionModal */ "./out/views/institutionModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class InstitutionView {
    constructor(_vm) {
        this._vm = _vm;
        this.render = (elementId) => {
            var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Institution"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addInstitution" }, "Add")),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table strech" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Code"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Country"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "City"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Email"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Telephone"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Postal Address")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "institutions", "data-repeat": "institutions" },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "code" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "country" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "city" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "email" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "telephone" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "postalAddress" }))))))))));
            const doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                new _institutionModal__WEBPACK_IMPORTED_MODULE_1__["InstitutionModal"](this._vm).render("route-outlet");
            });
            document.getElementById("addInstitution").onclick = showModal;
        };
    }
}
//# sourceMappingURL=institutionView.js.map

/***/ }),

/***/ "./out/views/lecturerModal.js":
/*!************************************!*\
  !*** ./out/views/lecturerModal.js ***!
  \************************************/
/*! exports provided: LecturerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturerModal", function() { return LecturerModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class LecturerModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Lecturer"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Department"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "departments", binding: "Lecturer.department", value: this._vm.lecturer.department, "data-repeat": "departments" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "department" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Lecturer.name", value: this._vm.lecturer.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "StaffId"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Lecturer.staffId", value: this._vm.lecturer.staffId }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "staffId" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Telephone"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Lecturer.telephone", value: this._vm.lecturer.telephone }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "telephone" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Email"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Lecturer.email", value: this._vm.lecturer.email }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "email" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Address"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Lecturer.address", value: this._vm.lecturer.address }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "address" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("lecturers");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "staffId" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "telephone" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "email" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "address" })));
                doc.removeChild(temp);
            }
        });
        this._vm.bind();
        this._vm.bindList("departments");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
    }
}
//# sourceMappingURL=lecturerModal.js.map

/***/ }),

/***/ "./out/views/lecturerView.js":
/*!***********************************!*\
  !*** ./out/views/lecturerView.js ***!
  \***********************************/
/*! exports provided: LecturerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LecturerView", function() { return LecturerView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _lecturerModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lecturerModal */ "./out/views/lecturerModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LecturerView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Lecturer"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addLecturer" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table strech striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "StaffId"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Telephone"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Email"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Address")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "lecturers", "data-repeat": "lecturers" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "staffId" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "telephone" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "email" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "address" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _lecturerModal__WEBPACK_IMPORTED_MODULE_1__["LecturerModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addLecturer").onclick = showModal;
    }
}
//# sourceMappingURL=lecturerView.js.map

/***/ }),

/***/ "./out/views/lookupModal.js":
/*!**********************************!*\
  !*** ./out/views/lookupModal.js ***!
  \**********************************/
/*! exports provided: LookupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupModal", function() { return LookupModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class LookupModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Lookup"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Institution"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "institutions", binding: "Lookup.institution", value: this._vm.lookup.institution, "data-repeat": "institutions" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "institution" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Type"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "lookupTypes", binding: "Lookup.type", value: this._vm.lookup.type, "data-repeat": "lookupTypes" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "type" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "Lookup.name", type: "text", value: this._vm.lookup.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("lookups");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "type" })));
                doc.removeChild(temp);
            }
        });
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        this._vm.bind();
        this._vm.bindList("institutions");
        this._vm.bindList("lookupTypes");
        document.getElementById("close").onclick = hideModal;
        document.getElementById("Save").onclick = save;
    }
}
//# sourceMappingURL=lookupModal.js.map

/***/ }),

/***/ "./out/views/lookupView.js":
/*!*********************************!*\
  !*** ./out/views/lookupView.js ***!
  \*********************************/
/*! exports provided: LookupView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupView", function() { return LookupView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _lookupModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lookupModal */ "./out/views/lookupModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class LookupView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Lookup"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addLookup" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Type")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "lookups", "data-repeat": "lookups" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "type" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _lookupModal__WEBPACK_IMPORTED_MODULE_1__["LookupModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addLookup").onclick = showModal;
    }
}
//# sourceMappingURL=lookupView.js.map

/***/ }),

/***/ "./out/views/mountCourse/mountCourse.js":
/*!**********************************************!*\
  !*** ./out/views/mountCourse/mountCourse.js ***!
  \**********************************************/
/*! exports provided: MountCourseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountCourseView", function() { return MountCourseView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _mountCourseModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mountCourseModal */ "./out/views/mountCourse/mountCourseModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class MountCourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Mount Courses"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "mountCourese" }, "Mount"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary btn-small" }, "Save")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table strech" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "EnrollmentOption"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Program"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Level"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Category")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "selectedCourses", "data-repeat": "selectedCourses" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "enrollmentOption" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "course" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "category" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "level" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null))))))))));
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _mountCourseModal__WEBPACK_IMPORTED_MODULE_1__["MountCourseModal"](this._vm).render("route-outlet");
        });
        let save = (evt) => {
            evt.preventDefault();
            this._vm.save();
            let doc = document.getElementById("selectedCourses");
            doc.textContent = "";
            let tr = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null)));
            doc.appendChild(tr);
        };
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        document.getElementById("mountCourese").onclick = showModal;
        document.getElementById("Save").onclick = save;
        this._vm.bindList("selectedCourses");
    }
}
//# sourceMappingURL=mountCourse.js.map

/***/ }),

/***/ "./out/views/mountCourse/mountCourseModal.js":
/*!***************************************************!*\
  !*** ./out/views/mountCourse/mountCourseModal.js ***!
  \***************************************************/
/*! exports provided: MountCourseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountCourseModal", function() { return MountCourseModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _selectedCourse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedCourse */ "./out/views/mountCourse/selectedCourse.js");
/* harmony import */ var _confirm_confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../confirm/confirm */ "./out/confirm/confirm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class MountCourseModal {
    constructor(_vm) {
        this._vm = _vm;
        this.render = (elementId) => {
            let temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "modal-btn", id: "close" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", { class: "fa fa-times" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Mount Courses"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { binding: "SelectedCourse.enrollmentOption", value: this._vm.mountedCourse.enrollmentOption },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select EnrollmentOption"),
                                        this._vm.getEnrollmentOption().map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "enrollmentOption" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "departments", binding: "SelectedCourse.department", value: this._vm.mountedCourse.department },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Department"),
                                        this._vm.getDepartments().map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "department" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "programs", binding: "SelectedCourse.program", value: this._vm.mountedCourse.program },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Program")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "program" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row-col-1-3-1" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "levels", binding: "SelectedCourse.level", value: this._vm.mountedCourse.level },
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Level"),
                                            this._vm.getLevels().map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "level" })),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "specializations", binding: "SelectedCourse.specialization", value: this._vm.mountedCourse.specialization },
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Category")),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "category" })),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content margin-0" },
                                            "Scoring",
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { id: "scoring", type: "checkbox", binding: "SelectedCourse.scoring", value: this._vm.mountedCourse.scoring }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" })),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "scoring" }))),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "lecturers", binding: "SelectedCourse.assignedTo", value: this._vm.mountedCourse.assignedTo },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Lecturer"),
                                        this._vm.getLecturers().map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "assignedTo" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-table" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "allCourses" })))))))));
            const doc = document.getElementById(elementId);
            //doc.textContent = "";
            doc.appendChild(temp);
            let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                //App.navigate("/app/#mountCourse");
                let elem = document.getElementById("modal");
                let doc = document.getElementById("route-outlet");
                doc.removeChild(elem);
            });
            let addCourse = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                //new MountedCourseView(this._vm).render();
                let courses = this._vm.addCourse(evt.target.value);
                if (courses.length > 0) {
                    let doc = document.getElementById("selectedCourses");
                    doc.textContent = "";
                    for (let course of courses) {
                        let tr = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, course.enrollmentOption),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, course.program),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, course.level),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, course.category)));
                        doc.appendChild(tr);
                        let innertable = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { colspan: "4" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "EnrollmentOption"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Courses"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Category"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Level"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Scoring"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "AssignedTo"),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Action")),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null)))));
                        for (let c of course.mountedCourses) {
                            let input = "";
                            if (c.scoring) {
                                input = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", checked: c.scoring, value: c.scoring, disabled: "true" });
                            }
                            else {
                                input = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", value: c.scoring, disabled: "true" });
                            }
                            innertable.getElementsByTagName("tbody")[0].appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", { style: "background:#f2f2f2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.enrollmentOption),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                                    c.courseCode,
                                    " - ",
                                    c.course,
                                    " - ",
                                    c.credit),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.category),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.level),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                                        input,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" }))),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.assignedTo),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small" }, "Del"))));
                            doc.appendChild(innertable);
                        }
                        let remove = innertable.getElementsByTagName("button")[0];
                        remove.addEventListener("click", (e) => {
                            e.preventDefault();
                            let options = {
                                title: "Confirm",
                                message: "Are you sure you want to delete ?",
                                okText: "Yes",
                                cancelText: "No",
                                onok: () => {
                                    let row = e.target.parentElement.parentElement;
                                    document.getElementById("selectedCourses").deleteRow(row.rowIndex);
                                    this._vm.removeCourse(row.rowIndex);
                                },
                            };
                            new _confirm_confirm__WEBPACK_IMPORTED_MODULE_2__["Confirm"](options).open();
                        });
                    }
                }
            });
            let getSpecializations = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                let value = evt.target.value;
                this._vm.getSpecializations(value);
                this._vm.mountedCourse["level"] = value;
                let specializations = document.getElementById("specializations");
                specializations.textContent = "";
                specializations.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null));
                this._vm.specializations.map((x) => specializations.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, x.name)));
            });
            let getCourses = (evt) => __awaiter(this, void 0, void 0, function* () {
                evt.preventDefault();
                yield this._vm.getCourses(evt.target.value);
                let allCourses = document.getElementById("allCourses");
                allCourses.textContent = "";
                this._vm.courses.map((x) => allCourses.appendChild(new _selectedCourse__WEBPACK_IMPORTED_MODULE_1__["SelectedCourseView"]().render(x)));
                const elements = document.querySelectorAll("[click]");
                elements.forEach(function (element) {
                    element.onclick = addCourse;
                });
                let programs = document.getElementById("programs");
                programs.textContent = "";
                programs.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null));
                this._vm.programs.map((x) => programs.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)));
            });
            this._vm.bind();
            document.getElementById("close").onclick = hideModal;
            document.getElementById("departments").onchange = getCourses;
            document.getElementById("levels").onchange = getSpecializations;
            //document.getElementById("scoring").onchange = setScoring;
        };
    }
}
//# sourceMappingURL=mountCourseModal.js.map

/***/ }),

/***/ "./out/views/mountCourse/mountedCoursesView.js":
/*!*****************************************************!*\
  !*** ./out/views/mountCourse/mountedCoursesView.js ***!
  \*****************************************************/
/*! exports provided: MountedCoursesView, MountedRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountedCoursesView", function() { return MountedCoursesView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountedRow", function() { return MountedRow; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../group */ "./out/group.js");
/* harmony import */ var _confirm_confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../confirm/confirm */ "./out/confirm/confirm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class MountedCoursesView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Mounted Courses"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row-col-2-5", id: "lessFilters" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "academicYears", binding: "Object.academicYear" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Academic Year"),
                            this._vm.academicYears.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "programs", binding: "Object.program" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Please Select Program"),
                            this._vm.programs.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "showFilters" }, "More"))),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row-col-3", id: "moreFilters" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "enrollmentOption" }, this._vm.enrollmentOptions.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "category" }, this._vm.categories.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "semester" }, this._vm.semesters.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "level" }, this._vm.levels.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "isScoring" }, this._vm.scoring.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "hideFilters" }, "Less"))),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table strech" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "EnrollmentOption"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Course"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Level"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Category")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "courses", "data-repeat": "courses" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null))))))))));
        let getCourses = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            yield this._vm.getMountedCourses();
        });
        let showFilters = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            document.getElementById("moreFilters").style.removeProperty("display");
            document.getElementById("lessFilters").style.display = "none";
        });
        let hideFilters = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            document.getElementById("moreFilters").style.display = "none";
            document.getElementById("lessFilters").style.removeProperty("display");
        });
        let buildQuery = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            let tr = document.getElementById("courses");
            tr.textContent = "";
            let row = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "enrollmentOption" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseName" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "level" }),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "category" })));
            tr.appendChild(row);
            let el = evt.target;
            this._vm.buidQuery(el.id, el.value);
        });
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        document.getElementById("moreFilters").style.display = "none";
        document.getElementById("submit").onclick = getCourses;
        document.getElementById("showFilters").onclick = showFilters;
        document.getElementById("hideFilters").onclick = hideFilters;
        document.getElementById("enrollmentOption").onchange = buildQuery;
        document.getElementById("category").onchange = buildQuery;
        document.getElementById("semester").onchange = buildQuery;
        document.getElementById("level").onchange = buildQuery;
        document.getElementById("isScoring").onchange = buildQuery;
        this._vm.bind();
    }
}
class MountedRow {
    constructor(courses, _vm) {
        this.courses = courses;
        this._vm = _vm;
    }
    render() {
        let tr = document.getElementById("courses");
        tr.textContent = "";
        for (let course of this.courses) {
            let checkbox = course.scoring ? (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "scoring", checked: course.scoring, value: course.scoring, disabled: "true" })) : (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "scoring", value: course.scoring, disabled: "true" }));
            let row = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "enrollmentOption" }, course.enrollmentOption),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseName" }, course.courseName),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "level" }, course.level),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "category" }, course.category)));
            tr.appendChild(row);
            let innertable = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { colspan: "4" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "EnrollmentOption"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Courses"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Category"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Level"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Scoring"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "AssignedTo"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Action")),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null)))));
            for (let c of course.mountedCourses) {
                let input = "";
                if (c.scoring) {
                    input = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", checked: c.scoring, value: c.scoring, disabled: "true" });
                }
                else {
                    input = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", value: c.scoring, disabled: "true" });
                }
                innertable.getElementsByTagName("tbody")[0].appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", { style: "background:#f2f2f2" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.enrollmentOption),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                        c.courseCode,
                        " - ",
                        c.courseName,
                        " - ",
                        c.credit),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.category),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.level),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                            input,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" }))),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, c.assignedTo),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small" }, "Del"))));
                tr.appendChild(innertable);
            }
            let deleteRow = innertable.getElementsByTagName("button")[0];
            deleteRow.addEventListener("click", (e) => {
                e.preventDefault();
                let options = {
                    title: "Confirm",
                    message: "Are you sure you want to delete ?",
                    okText: "Yes",
                    cancelText: "No",
                    onok: () => {
                        let row = e.target.parentElement.parentElement;
                        document.getElementById("courses").deleteRow(row.rowIndex);
                    },
                };
                new _confirm_confirm__WEBPACK_IMPORTED_MODULE_2__["Confirm"](options).open();
            });
            let assignedTo = _group__WEBPACK_IMPORTED_MODULE_1__["_"].getElementByAttribute(innertable, "assignedTo");
            if (assignedTo) {
                assignedTo.addEventListener("click", (e) => {
                    e.preventDefault();
                    let originalValue = e.target.textContent;
                    let elem = e.target;
                    let tdAssignedTo = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", { class: "assignedTo" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "lecturers", binding: "SelectedCourse.assignedTo" }, this._vm.getLecturers().map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x.name }, x.name)))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "tr-btn-primary" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", { class: "fa fa-check" })),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "tr-btn-default" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", { class: "fa fa-times" }))));
                    if (elem.tagName === "TD") {
                        elem.textContent = "";
                        elem.appendChild(tdAssignedTo);
                        let btns = tdAssignedTo.getElementsByTagName("button");
                        //SaveButton
                        btns[0].addEventListener("click", (e) => {
                            e.preventDefault();
                            let newValue = e.target.parentElement.parentElement.getElementsByTagName("select")[0].value;
                            let row = e.target.parentElement.parentElement;
                            assignedTo.removeChild(row);
                            assignedTo.innerText = newValue;
                        });
                        //CancelButton
                        btns[1].addEventListener("click", (e) => {
                            e.preventDefault();
                            let row = e.target.parentElement.parentElement;
                            assignedTo.removeChild(row);
                            assignedTo.innerText = originalValue;
                        });
                    }
                });
            }
        }
    }
}
//# sourceMappingURL=mountedCoursesView.js.map

/***/ }),

/***/ "./out/views/mountCourse/selectedCourse.js":
/*!*************************************************!*\
  !*** ./out/views/mountCourse/selectedCourse.js ***!
  \*************************************************/
/*! exports provided: SelectedCourseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedCourseView", function() { return SelectedCourseView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class SelectedCourseView {
    constructor() { }
    render(x) {
        return (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: true }, x.name),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", click: x.name, binding: x.name, value: x.name }, "Add"))));
    }
}
//# sourceMappingURL=selectedCourse.js.map

/***/ }),

/***/ "./out/views/programView.js":
/*!**********************************!*\
  !*** ./out/views/programView.js ***!
  \**********************************/
/*! exports provided: ProgramView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramView", function() { return ProgramView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _ProgramModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgramModal */ "./out/views/ProgramModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class ProgramView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Program"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addProgram" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Duration"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Specializations")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "programs", "data-repeat": "programs" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "duration" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "specializations" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _ProgramModal__WEBPACK_IMPORTED_MODULE_1__["ProgramModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addProgram").onclick = showModal;
    }
}
//# sourceMappingURL=programView.js.map

/***/ }),

/***/ "./out/views/registration/registerCourseRow.js":
/*!*****************************************************!*\
  !*** ./out/views/registration/registerCourseRow.js ***!
  \*****************************************************/
/*! exports provided: RegisterCourseRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCourseRow", function() { return RegisterCourseRow; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class RegisterCourseRow {
    constructor(_vm) {
        this._vm = _vm;
        this.tr = document.getElementById("courseList");
        this.tr.textContent = "";
    }
    render(registeredCourse) {
        let checkBox = "";
        if (registeredCourse.category === "GENERAL" || registeredCourse.category === "OPTION(RESTRICTIVE)") {
            checkBox = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "selected", checked: "true", disabled: true });
        }
        else {
            checkBox = Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "selected" });
        }
        let element = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                registeredCourse.courseCode,
                " - ",
                registeredCourse.courseName,
                " - ",
                registeredCourse.credit),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, registeredCourse.category),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                    checkBox,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" })))));
        let elements = element.querySelectorAll("[binding]");
        elements.forEach((e) => {
            if (e.tagName === "INPUT") {
                let el = e;
                el.addEventListener("change", (e) => {
                    e.preventDefault();
                    let courseCode = element.cells[0].textContent;
                    if (el.checked) {
                        this._vm.addCourse(courseCode);
                    }
                    else if (!el.checked) {
                        this._vm.removeCourse(courseCode);
                    }
                });
            }
        });
        this.tr.append(element);
    }
}
//# sourceMappingURL=registerCourseRow.js.map

/***/ }),

/***/ "./out/views/registration/registerCourseView.js":
/*!******************************************************!*\
  !*** ./out/views/registration/registerCourseView.js ***!
  \******************************************************/
/*! exports provided: RegisterCourseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCourseView", function() { return RegisterCourseView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _registerCourseRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registerCourseRow */ "./out/views/registration/registerCourseRow.js");


class RegisterCourseView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var registerCourseView = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Register Courses"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Courses"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Category"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Select")),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "courseList", "data-repeat": "courseList" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseCode" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseName" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "credit" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "category" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content", style: "margin-bottom: 0px;margin-top: 0px;padding-top: 0px;" },
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "selected" }),
                                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" })))))))))));
        let submit = registerCourseView.getElementsByTagName("button")[0];
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            this._vm.save();
        });
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(registerCourseView);
        let registeredCourses = this._vm.getRegisteredCourses();
        let r = new _registerCourseRow__WEBPACK_IMPORTED_MODULE_1__["RegisterCourseRow"](this._vm);
        registeredCourses.map((x) => r.render(x));
    }
}
//# sourceMappingURL=registerCourseView.js.map

/***/ }),

/***/ "./out/views/registration/registeredCoursesRow.js":
/*!********************************************************!*\
  !*** ./out/views/registration/registeredCoursesRow.js ***!
  \********************************************************/
/*! exports provided: RegisteredCoursesRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredCoursesRow", function() { return RegisteredCoursesRow; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../group */ "./out/group.js");


class RegisteredCoursesRow {
    constructor() {
        this.tr = document.getElementById("courseList");
        this.tr.textContent = "";
    }
    render(registeredCourse) {
        let element = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, _group__WEBPACK_IMPORTED_MODULE_1__["_"].formatDate(new Date(registeredCourse.registrationDate))),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, registeredCourse.courseCode),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, registeredCourse.courseCode),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, registeredCourse.courseName),
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, registeredCourse.credit)));
        // let elements = element.querySelectorAll("[binding]");
        // elements.forEach((e) => {
        //   if (e.tagName === "INPUT") {
        //     let el = e as HTMLInputElement;
        //     el.addEventListener("change", (e) => {
        //       e.preventDefault();
        //       let courseCode = element.cells[0].textContent;
        //       if (el.checked) {
        //         this._vm.addCourse(courseCode);
        //       } else if (!el.checked) {
        //         this._vm.removeCourse(courseCode);
        //       }
        //     });
        //   }
        // });
        this.tr.append(element);
    }
}
//# sourceMappingURL=registeredCoursesRow.js.map

/***/ }),

/***/ "./out/views/registration/registeredCoursesView.js":
/*!*********************************************************!*\
  !*** ./out/views/registration/registeredCoursesView.js ***!
  \*********************************************************/
/*! exports provided: RegisteredCoursesView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredCoursesView", function() { return RegisteredCoursesView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class RegisteredCoursesView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var registeredCoursesView = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Registered Courses"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Date"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Academic Year"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Course Code"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Course"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Credit")),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "courseList" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "registrationDate" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "approved" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseCode" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "courseName" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "credit" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "category" })))))))));
        // let submit = registerCourseView.getElementsByTagName("button")[0] as HTMLButtonElement;
        // submit.addEventListener("click", (e) => {
        //   e.preventDefault();
        // });
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(registeredCoursesView);
        this._vm.getRegisteredCourses();
    }
}
//# sourceMappingURL=registeredCoursesView.js.map

/***/ }),

/***/ "./out/views/schoolModal.js":
/*!**********************************!*\
  !*** ./out/views/schoolModal.js ***!
  \**********************************/
/*! exports provided: SchoolModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolModal", function() { return SchoolModal; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class SchoolModal {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourse-model", id: "modal" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "modal-content" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "School"),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Institution"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "institutions", binding: "School.institutionName", value: this._vm.school.institutionName, "data-repeat": "institutions" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "institutionNane" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "institutionName" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Name"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { binding: "School.name", type: "text", value: this._vm.school.name }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "name" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Academic Year"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "academicYears", binding: "School.academicYear", value: this._vm.school.academicYear, "data-repeat": "academicYears" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "academicYear" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Semester"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "semesters", binding: "School.semester", value: this._vm.school.semester, "data-repeat": "semesters" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { binding: "name" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "semester" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                    "Save ",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", id: "close" }, "Cancel"))))))));
        const doc = document.getElementById(elementId);
        doc.appendChild(temp);
        let hideModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            doc.removeChild(temp);
        });
        let save = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            this._vm.save();
            if (!this._vm.validator.hasErrors) {
                let tr = document.getElementById("schools");
                tr.textContent = "";
                tr.appendChild(Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "academicYear" }),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "semester" })));
                doc.removeChild(temp);
            }
        });
        this._vm.bindList("institutions");
        this._vm.bindList("semesters");
        this._vm.bindList("academicYears");
        this._vm.bind();
        document.getElementById("Save").onclick = save;
        document.getElementById("close").onclick = hideModal;
    }
}
//# sourceMappingURL=schoolModal.js.map

/***/ }),

/***/ "./out/views/schoolView.js":
/*!*********************************!*\
  !*** ./out/views/schoolView.js ***!
  \*********************************/
/*! exports provided: SchoolView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolView", function() { return SchoolView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _schoolModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schoolModal */ "./out/views/schoolModal.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class SchoolView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "School"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "addSchool" }, "Add")),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Name"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Academic Year"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Semester")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { id: "schools", "data-repeat": "schools" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "name" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "academicYear" }),
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "semester" }))))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
        let showModal = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            new _schoolModal__WEBPACK_IMPORTED_MODULE_1__["SchoolModal"](this._vm).render("route-outlet");
        });
        document.getElementById("addSchool").onclick = showModal;
    }
}
//# sourceMappingURL=schoolView.js.map

/***/ }),

/***/ "./out/views/student/addStudent.js":
/*!*****************************************!*\
  !*** ./out/views/student/addStudent.js ***!
  \*****************************************/
/*! exports provided: AddStudentView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentView", function() { return AddStudentView; });
class AddStudentView {
    constructor(addStudentVm) {
        this._addStudentVm = addStudentVm;
    }
    render(elementId) {
        //App.navigate('/app/addStudent/stage1');
        //new HeaderComponent().render('header');
        //this.addEventListener(this);
    }
}
//# sourceMappingURL=addStudent.js.map

/***/ }),

/***/ "./out/views/student/stage1.js":
/*!*************************************!*\
  !*** ./out/views/student/stage1.js ***!
  \*************************************/
/*! exports provided: Stage1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage1", function() { return Stage1; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class Stage1 {
    constructor(_vm) {
        this._vm = _vm;
        this.render = (elementId) => {
            const temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Personal Details"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", { class: "sp-form" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "left" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Index Number"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { id: "indexNumber", binding: "Student.IndexNumber", type: "text", value: this._vm.student.IndexNumber }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "IndexNumber" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Reference Number"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.ReferenceNumber", value: this._vm.student.ReferenceNumber }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "ReferenceNumber" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Title"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Title", value: this._vm.student.Title })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Surname"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Surname", value: this._vm.student.Surname }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Surname" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Othernames"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Othernames", value: this._vm.student.Othernames }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Othernames" }))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "right" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Date Of Birth"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "date", id: "sp-date", binding: "Student.DateofBirth", value: this._vm.student.DateofBirth }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "DateofBirth" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Gender"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Gender", value: this._vm.student.Gender }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Gender" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "MaritalStatus"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { binding: "Student.MaritalStatus", value: this._vm.student.MaritalStatus }, this._vm.maritalStatus.map((x) => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", { value: x }, x)))),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "MaritalStatus" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", { class: "check-content" },
                                    "Disability",
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "checkbox", binding: "Student.Disability", checked: this._vm.student.Disability, value: this._vm.student.Disability }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", { class: "checkmark" })))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default", disabled: "disabled" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-chevron-circle-left" }),
                                " Back"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Next", class: "sp-btn sp-btn-primary", click: "/app/#addStudent/stage2" },
                                "Next ",
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-chevron-circle-right" })))))));
            const doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            this._vm.bindData();
            let onclick = (evt) => {
                evt.preventDefault();
                var route = element.getAttribute("click");
                this._vm.validate(route, this._vm.stage1_rules());
            };
            const element = document.getElementById("Next");
            element.onclick = onclick;
            //new ViewModelBase().addEventListener('click');
        };
    }
}
//# sourceMappingURL=stage1.js.map

/***/ }),

/***/ "./out/views/student/stage2.js":
/*!*************************************!*\
  !*** ./out/views/student/stage2.js ***!
  \*************************************/
/*! exports provided: Stage2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage2", function() { return Stage2; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./out/app.js");


class Stage2 {
    constructor(addStudentVm) {
        this.render = (elementId) => {
            var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Contact Details"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", { class: "sp-form" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "left" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Country"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Country", value: this._vm.student.Country }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Country" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Region"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Region", value: this._vm.student.Region }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Region" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "HomeTown"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.HomeTown", value: this._vm.student.HomeTown }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "HomeTown" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Address1"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Address1", value: this._vm.student.Address1 })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Address2"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.StudentAddress2", value: this._vm.student.Address2 }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Address2" }))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "right" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Contact1"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Contact1", value: this._vm.student.Contact1 }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Contact1" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Contact2"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Contact2", value: this._vm.student.Contact2 }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Contact2" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "PersonalEmail"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.PersonalEmail", value: this._vm.student.PersonalEmail }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "PersonalEmail" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "University Email"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.UniversityEmail", value: this._vm.student.UniversityEmail }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "UniversityEmail" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Residential Status"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.ResidentialStatus", value: this._vm.student.ResidentialStatus }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "ResidentialStatus" }))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Back", class: "sp-btn sp-btn-default", click: "/app/#addStudent/stage1" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-chevron-circle-left" }),
                                " Back"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Next", class: "sp-btn sp-btn-primary", click: "/app/#addStudent/stage3" },
                                "Next ",
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-chevron-circle-right" })))))));
            const doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            this._vm.bindData();
            let onNextButtonClicked = (evt) => {
                evt.preventDefault();
                var route = next.getAttribute("click");
                this._vm.validate(route, this._vm.stage2_rules());
            };
            const next = document.getElementById("Next");
            next.onclick = onNextButtonClicked;
            let onBackButtonClicked = (evt) => {
                evt.preventDefault();
                var route = back.getAttribute("click");
                _app__WEBPACK_IMPORTED_MODULE_1__["App"].navigate(route);
            };
            const back = document.getElementById("Back");
            back.onclick = onBackButtonClicked;
            //new ViewModelHelper().addEventListener(this,'click');
        };
        this._vm = addStudentVm;
    }
}
//# sourceMappingURL=stage2.js.map

/***/ }),

/***/ "./out/views/student/stage3.js":
/*!*************************************!*\
  !*** ./out/views/student/stage3.js ***!
  \*************************************/
/*! exports provided: Stage3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage3", function() { return Stage3; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./out/app.js");


class Stage3 {
    constructor(addStudentVm) {
        this.render = (elementId) => {
            var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Academic Details"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", { class: "sp-form" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "left" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Program Of Study"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.ProgramOfStudy", value: this._vm.student.ProgramOfStudy }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "ProgramOfStudy" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Specialization"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Specialization", value: this._vm.student.Specialization }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Specialization" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "ProgramStatus"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.ProgramStatus", value: this._vm.student.ProgramStatus }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "ProgramStatus" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Level"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.Level", value: this._vm.student.Level }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "Level" }))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "right" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "StudentType"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.StudentType", value: this._vm.student.StudentType }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "StudentType" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Enrolment Option"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "text", binding: "Student.EnrolmentOption", value: this._vm.student.EnrolmentOption }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "EnrolmentOption" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "DateOfEntry"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { type: "date", binding: "Student.DateOfEntry", value: this._vm.student.DateOfEntry }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "DateOfEntry" }))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" }),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Back", class: "sp-btn sp-btn-default", click: "/app/#addStudent/stage2" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-chevron-circle-left" }),
                                " Back"),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { id: "Save", class: "sp-btn sp-btn-primary" },
                                "Submit ",
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", { class: "fa fa-save" })))))));
            const doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
            let onSaveButtonClicked = (evt) => {
                evt.preventDefault();
                this._vm.save(this._vm.stage3_rules());
            };
            const save = document.getElementById("Save");
            save.onclick = onSaveButtonClicked;
            let onBackButtonClicked = (evt) => {
                evt.preventDefault();
                var route = back.getAttribute("click");
                _app__WEBPACK_IMPORTED_MODULE_1__["App"].navigate(route);
            };
            const back = document.getElementById("Back");
            back.onclick = onBackButtonClicked;
            this._vm.bindData();
            //new ViewModelHelper().addEventListener(this,'click');
        };
        this._vm = addStudentVm;
    }
}
//# sourceMappingURL=stage3.js.map

/***/ }),

/***/ "./out/views/student/studentList.js":
/*!******************************************!*\
  !*** ./out/views/student/studentList.js ***!
  \******************************************/
/*! exports provided: StudentListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListView", function() { return StudentListView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");

class StudentListView {
    constructor(_vm) {
        this._vm = _vm;
    }
    render(elementId) {
        var temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Student List"),
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-form-col1" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped strech" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "IndexNumber"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Reference Number"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Surname"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Othernames"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Gender"),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, "Date of Birth")),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { "data-repeat": "students" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null,
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "indexNumber" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "referenceNumber" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "surname" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "othernames" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "gender" }),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", { binding: "dateofBirth" })))))))));
        const doc = document.getElementById(elementId);
        doc.textContent = "";
        doc.appendChild(temp);
    }
}
//# sourceMappingURL=studentList.js.map

/***/ }),

/***/ "./out/views/style.js":
/*!****************************!*\
  !*** ./out/views/style.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = () => ({
    container: {
        height: "100%",
        width: "100%",
    },
    inputsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    inputGroup: {
        padding: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    select: {
        padding: 2,
    },
    input: {
        padding: 2,
    },
    tableContainer: {
        width: "100%",
    },
    table: {
        padding: 2,
        width: "100%",
    },
    thead: {
        width: "100%",
    },
    tr: {
        width: "100%",
        padding: 2,
    },
    th: {
        textAlign: "center",
        fontWeight: "bold",
        padding: 5,
    },
    tbody: {
        width: "100%",
        padding: 5,
    },
    actionContainer: {
        width: "100%",
        padding: 2,
        display: "flex",
        justifyContent: "right",
    },
});
/* harmony default export */ __webpack_exports__["default"] = (styles);
//# sourceMappingURL=style.js.map

/***/ }),

/***/ "./out/views/uploadResultView.js":
/*!***************************************!*\
  !*** ./out/views/uploadResultView.js ***!
  \***************************************/
/*! exports provided: UploadResultView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadResultView", function() { return UploadResultView; });
/* harmony import */ var tsx_create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tsx-create-element */ "./node_modules/tsx-create-element/dist/es6/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./out/views/style.js");


class UploadResultView {
    constructor() {
        this.render = (elementId) => {
            const classes = Object(_style__WEBPACK_IMPORTED_MODULE_1__["default"])();
            const headers = ["indexNumbers", "Name", "Level", "courseCode", "classScore", "examScore", "Total"];
            let temp = (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-box" },
                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mc-row" },
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Upload Results"),
                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "mountcourses-form" },
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-row-col-4" },
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "department", name: "department" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Department")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "IndexNumber" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", { id: "coursecode", name: "coursecode" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", null, "Course Code")),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "IndexNumber" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", { readOnly: true, value: "2020/2021", id: "academicyear", name: "academicyear" }),
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { errors: "IndexNumber" })),
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null,
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "sp-btn-row" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-default btn-small", id: "showFilters" }, "Upload"),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", { class: "sp-btn sp-btn-primary btn-small", id: "submit" }, "Submit")))),
                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null,
                            Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", { class: "horizontal" },
                                Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", { class: "table striped stretch" },
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("thead", null,
                                        Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, headers.map(headerItem => (Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, headerItem))))),
                                    Object(tsx_create_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", { class: classes.tbody }))))))));
            var doc = document.getElementById(elementId);
            doc.textContent = "";
            doc.appendChild(temp);
        };
    }
}
//# sourceMappingURL=uploadResultView.js.map

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/icons/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/clipboard */ "./resources/js/utils/clipboard.js");
/* harmony import */ var _svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-icons */ "./resources/js/views/icons/svg-icons.js");
/* harmony import */ var _element_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element-icons */ "./resources/js/views/icons/element-icons.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Icons',
  data: function data() {
    return {
      svgIcons: _svg_icons__WEBPACK_IMPORTED_MODULE_1__["default"],
      elementIcons: _element_icons__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  },
  methods: {
    generateIconCode: function generateIconCode(symbol) {
      return "<svg-icon icon-class=\"".concat(symbol, "\" />");
    },
    generateElementIconCode: function generateElementIconCode(symbol) {
      return "<i class=\"el-icon-".concat(symbol, "\" />");
    },
    handleClipboard: function handleClipboard(text, event) {
      Object(_utils_clipboard__WEBPACK_IMPORTED_MODULE_0__["default"])(text, event);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".icons-container[data-v-51a156ee] {\n  margin: 10px 20px 0;\n  overflow: hidden;\n}\n.icons-container .icon-item[data-v-51a156ee] {\n  margin: 20px;\n  height: 85px;\n  text-align: center;\n  width: 100px;\n  float: left;\n  font-size: 30px;\n  color: #24292e;\n  cursor: pointer;\n}\n.icons-container span[data-v-51a156ee] {\n  display: block;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.icons-container .disabled[data-v-51a156ee] {\n  pointer-events: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/lib/loader.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "icons-container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "el-tabs",
        { attrs: { type: "border-card" } },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "Icons" } },
            _vm._l(_vm.svgIcons, function(item) {
              return _c(
                "div",
                {
                  key: item,
                  on: {
                    click: function($event) {
                      _vm.handleClipboard(_vm.generateIconCode(item), $event)
                    }
                  }
                },
                [
                  _c("el-tooltip", { attrs: { placement: "top" } }, [
                    _c("div", { attrs: { slot: "content" }, slot: "content" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.generateIconCode(item)) +
                          "\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "icon-item" },
                      [
                        _c("svg-icon", {
                          attrs: {
                            "icon-class": item,
                            "class-name": "disabled"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(item))])
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "Element-UI Icons" } },
            _vm._l(_vm.elementIcons, function(item) {
              return _c(
                "div",
                {
                  key: item,
                  on: {
                    click: function($event) {
                      _vm.handleClipboard(
                        _vm.generateElementIconCode(item),
                        $event
                      )
                    }
                  }
                },
                [
                  _c("el-tooltip", { attrs: { placement: "top" } }, [
                    _c("div", { attrs: { slot: "content" }, slot: "content" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.generateElementIconCode(item)) +
                          "\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "icon-item" }, [
                      _c("i", { class: "el-icon-" + item }),
                      _vm._v(" "),
                      _c("span", [_vm._v(_vm._s(item))])
                    ])
                  ])
                ],
                1
              )
            }),
            0
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("aside", [
      _c(
        "a",
        {
          attrs: {
            href:
              "https://panjiachen.github.io/vue-element-admin-site/guide/advanced/icon.html",
            target: "_blank"
          }
        },
        [_vm._v("Add and use\n    ")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/utils/clipboard.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/clipboard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handleClipboard; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);



function clipboardSuccess() {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$message({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  });
}

function clipboardError() {
  vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$message({
    message: 'Copy failed',
    type: 'error'
  });
}

function handleClipboard(_text, event) {
  var clipboard = new clipboard__WEBPACK_IMPORTED_MODULE_1___default.a(event.target, {
    text: function text() {
      return _text;
    }
  });
  clipboard.on('success', function () {
    clipboardSuccess();
    clipboard.destroy();
  });
  clipboard.on('error', function () {
    clipboardError();
    clipboard.destroy();
  });
  clipboard.onClick(event);
}

/***/ }),

/***/ "./resources/js/views/icons/element-icons.js":
/*!***************************************************!*\
  !*** ./resources/js/views/icons/element-icons.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var elementIcons = ['info', 'error', 'success', 'warning', 'question', 'back', 'arrow-left', 'arrow-down', 'arrow-right', 'arrow-up', 'caret-left', 'caret-bottom', 'caret-top', 'caret-right', 'd-arrow-left', 'd-arrow-right', 'minus', 'plus', 'remove', 'circle-plus', 'remove-outline', 'circle-plus-outline', 'close', 'check', 'circle-close', 'circle-check', 'circle-close-outline', 'circle-check-outline', 'zoom-out', 'zoom-in', 'd-caret', 'sort', 'sort-down', 'sort-up', 'tickets', 'document', 'goods', 'sold-out', 'news', 'message', 'date', 'printer', 'time', 'bell', 'mobile-phone', 'service', 'view', 'menu', 'more', 'more-outline', 'star-on', 'star-off', 'location', 'location-outline', 'phone', 'phone-outline', 'picture', 'picture-outline', 'delete', 'search', 'edit', 'edit-outline', 'rank', 'refresh', 'share', 'setting', 'upload', 'upload2', 'download', 'loading'];
/* harmony default export */ __webpack_exports__["default"] = (elementIcons);

/***/ }),

/***/ "./resources/js/views/icons/index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/icons/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=51a156ee&scoped=true& */ "./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/icons/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& */ "./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "51a156ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/icons/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/icons/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/icons/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/lib/loader.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=style&index=0&id=51a156ee&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_lib_loader_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_51a156ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=51a156ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/icons/index.vue?vue&type=template&id=51a156ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_51a156ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/icons/svg-icons.js":
/*!***********************************************!*\
  !*** ./resources/js/views/icons/svg-icons.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);



var req = __webpack_require__("./resources/js/icons/svg sync \\.svg$");

var requireAll = function requireAll(requireContext) {
  return requireContext.keys();
};

var re = /\.\/(.*)\.svg/;
var svgIcons = requireAll(req).map(function (i) {
  return i.match(re)[1];
});
/* harmony default export */ __webpack_exports__["default"] = (svgIcons);

/***/ })

}]);
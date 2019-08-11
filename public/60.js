(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/zip/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/zip/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_laravel_vue_fepos_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _api_article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/article */ "./resources/js/api/article.js");



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
  name: 'ExportZip',
  data: function data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false,
      filename: ''
    };
  },
  created: function created() {
    this.fetchData();
  },
  methods: {
    fetchData: function () {
      var _fetchData = Object(D_laravel_vue_fepos_node_modules_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, data;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.listLoading = true;
                _context.next = 3;
                return Object(_api_article__WEBPACK_IMPORTED_MODULE_3__["fetchList"])();

              case 3:
                _ref = _context.sent;
                data = _ref.data;
                this.list = data.items;
                this.listLoading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchData() {
        return _fetchData.apply(this, arguments);
      }

      return fetchData;
    }(),
    handleDownload: function handleDownload() {
      var _this = this;

      this.downloadLoading = true;
      Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(19), __webpack_require__.e(65)]).then(__webpack_require__.bind(null, /*! @/vendor/Export2Zip */ "./resources/js/vendor/Export2Zip.js")).then(function (zip) {
        var tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
        var filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
        var list = _this.list;

        var data = _this.formatJson(filterVal, list);

        zip.export_txt_to_zip(tHeader, data, _this.filename, _this.filename);
        _this.downloadLoading = false;
      });
    },
    formatJson: function formatJson(filterVal, jsonData) {
      return jsonData.map(function (v) {
        return filterVal.map(function (j) {
          return v[j];
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16& ***!
  \*******************************************************************************************************************************************************************************************************/
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
    { staticClass: "app-container" },
    [
      _c("el-input", {
        staticStyle: { width: "300px" },
        attrs: {
          placeholder: "Please enter the file name (default file)",
          "prefix-icon": "el-icon-document"
        },
        model: {
          value: _vm.filename,
          callback: function($$v) {
            _vm.filename = $$v
          },
          expression: "filename"
        }
      }),
      _vm._v(" "),
      _c(
        "el-button",
        {
          staticStyle: { "margin-bottom": "20px" },
          attrs: {
            loading: _vm.downloadLoading,
            type: "primary",
            icon: "document"
          },
          on: { click: _vm.handleDownload }
        },
        [_vm._v("\n    Export Zip\n  ")]
      ),
      _vm._v(" "),
      _c(
        "el-table",
        {
          directives: [
            {
              name: "loading",
              rawName: "v-loading",
              value: _vm.listLoading,
              expression: "listLoading"
            }
          ],
          attrs: {
            data: _vm.list,
            "element-loading-text": "拼命加载中",
            border: "",
            fit: "",
            "highlight-current-row": ""
          }
        },
        [
          _c("el-table-column", {
            attrs: { align: "center", label: "ID", width: "95" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v("\n        " + _vm._s(scope.$index) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Title" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v("\n        " + _vm._s(scope.row.title) + "\n      ")
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Author", width: "95", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [_c("el-tag", [_vm._v(_vm._s(scope.row.author))])]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { label: "Readings", width: "115", align: "center" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _vm._v(
                      "\n        " + _vm._s(scope.row.pageviews) + "\n      "
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("el-table-column", {
            attrs: { align: "center", label: "Date", width: "220" },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(scope) {
                  return [
                    _c("i", { staticClass: "el-icon-time" }),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(scope.row.display_time))])
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/article.js":
/*!*************************************!*\
  !*** ./resources/js/api/article.js ***!
  \*************************************/
/*! exports provided: fetchList, fetchArticle, fetchPv, createArticle, updateArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchList", function() { return fetchList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchArticle", function() { return fetchArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPv", function() { return fetchPv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createArticle", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateArticle", function() { return updateArticle; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/js/utils/request.js");

function fetchList(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/article/list',
    method: 'get',
    params: query
  });
}
function fetchArticle(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/article/detail',
    method: 'get',
    params: {
      id: id
    }
  });
}
function fetchPv(pv) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/article/pv',
    method: 'get',
    params: {
      pv: pv
    }
  });
}
function createArticle(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/article/create',
    method: 'post',
    data: data
  });
}
function updateArticle(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/article/update',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/js/views/zip/index.vue":
/*!******************************************!*\
  !*** ./resources/js/views/zip/index.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ebf28f16& */ "./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/views/zip/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/zip/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/zip/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/zip/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/zip/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ebf28f16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/zip/index.vue?vue&type=template&id=ebf28f16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ebf28f16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
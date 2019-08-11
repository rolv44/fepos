(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./resources/js/vendor/Export2Zip.js":
/*!*******************************************!*\
  !*** ./resources/js/vendor/Export2Zip.js ***!
  \*******************************************/
/*! exports provided: export_txt_to_zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "export_txt_to_zip", function() { return export_txt_to_zip; });
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable */
__webpack_require__(/*! script-loader!file-saver */ "./node_modules/script-loader/index.js!./node_modules/file-saver/dist/FileSaver.min.js");


function export_txt_to_zip(th, jsonData, txtName, zipName) {
  var zip = new jszip__WEBPACK_IMPORTED_MODULE_2___default.a();
  var txt_name = txtName || 'file';
  var zip_name = zipName || 'file';
  var data = jsonData;
  var txtData = "".concat(th, "\r\n");
  data.forEach(function (row) {
    var tempStr = '';
    tempStr = row.toString();
    txtData += "".concat(tempStr, "\r\n");
  });
  zip.file("".concat(txt_name, ".txt"), txtData);
  zip.generateAsync({
    type: "blob"
  }).then(function (blob) {
    saveAs(blob, "".concat(zip_name, ".zip"));
  }, function (err) {
    alert('导出失败');
  });
}

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
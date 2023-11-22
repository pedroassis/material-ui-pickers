(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pickers"],{

/***/ "../node_modules/@material-ui/pickers/package.json":
/*!*********************************************************!*\
  !*** ../node_modules/@material-ui/pickers/package.json ***!
  \*********************************************************/
/*! exports provided: name, version, private, description, main, module, keywords, sideEffects, license, bugs, homepage, repository, author, peerDependencies, peerDependenciesMeta, dependencies, scripts, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@material-ui/pickers\",\"version\":\"4.0.0-alpha.12\",\"private\":true,\"description\":\"React components, that implements material design pickers for material-ui v4\",\"main\":\"./src/index.ts\",\"module\":\"./src/index.ts\",\"keywords\":[\"material-ui\",\"pickers\",\"@material-ui/pickers\",\"datepicker\",\"timepicker\",\"date-picker\",\"time-picker\",\"react\",\"react-component\",\"material design\"],\"sideEffects\":false,\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/mui-org/material-ui-pickers/issues\"},\"homepage\":\"https://github.com/mui-org/material-ui-pickers\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/mui-org/material-ui-pickers\"},\"author\":{\"name\":\"Dmitriy Kovalenko\",\"email\":\"dmtr.kovalenko@outlook.com\"},\"peerDependencies\":{\"@material-ui/core\":\"^5.0.0-alpha.5\",\"@material-ui/lab\":\"^5.0.0-alpha.5\",\"@types/react\":\"^16.8.6\",\"date-fns\":\"^2.0.0\",\"dayjs\":\"^1.8.17\",\"luxon\":\"^1.21.3\",\"moment\":\"^2.24.0\",\"react\":\"^16.8.4\",\"react-dom\":\"^16.8.4\"},\"peerDependenciesMeta\":{\"@types/react\":{\"optional\":true},\"@material-ui/lab\":{\"optional\":true},\"date-fns\":{\"optional\":true},\"dayjs\":{\"optional\":true},\"luxon\":{\"optional\":true},\"moment\":{\"optional\":true}},\"dependencies\":{\"@date-io/date-fns\":\"^2.8.0\",\"@date-io/dayjs\":\"^2.8.0\",\"@date-io/luxon\":\"^2.8.0\",\"@date-io/moment\":\"^2.8.0\",\"clsx\":\"^1.0.2\",\"prop-types\":\"^15.7.2\",\"react-transition-group\":\"^4.4.1\",\"rifm\":\"^0.12.0\"},\"scripts\":{\"test\":\"jest\",\"test:typescript\":\"yarn rimraf src/__tests__/dist && tsc -p src/__tests__/tsconfig.json\",\"test:date-fns\":\"UTILS=date-fns yarn test\",\"test:dayjs\":\"UTILS=dayjs yarn test\",\"test:luxon\":\"UTILS=luxon yarn test\",\"test:moment\":\"UTILS=moment yarn test\",\"start\":\"rollup --config rollup.config.dev.js --watch & npx tsc --watch\",\"prebuild\":\"rimraf build\",\"build:prepare-files\":\"node prepare-build-files.js\",\"build:bundle\":\"rollup --config\",\"build:typescript\":\"tsc --project tsconfig.json && tsc -p tsconfig.adapters.json\",\"build\":\"yarn build:typescript && yarn build:bundle && yarn build:prepare-files\",\"build:analyze\":\"yarn build\",\"release\":\"yarn build && yarn publish --tag -f next build\"},\"devDependencies\":{\"@babel/core\":\"^7.9.6\",\"@babel/node\":\"^7.8.7\",\"@babel/plugin-proposal-class-properties\":\"^7.8.3\",\"@babel/plugin-transform-object-assign\":\"^7.8.3\",\"@babel/plugin-transform-react-constant-elements\":\"^7.7.4\",\"@babel/plugin-transform-runtime\":\"~7.6.0\",\"@babel/preset-env\":\"^7.9.6\",\"@babel/preset-react\":\"^7.9.4\",\"@babel/runtime\":\"^7.9.6\",\"@cypress/webpack-preprocessor\":\"^4.1.1\",\"@date-io/core\":\"^2.8.0\",\"@material-ui/core\":\"^5.0.0-alpha.5\",\"@material-ui/icons\":\"^5.0.0-alpha.4\",\"@material-ui/lab\":\"^5.0.0-alpha.5\",\"@rollup/plugin-babel\":\"^5.0.3\",\"@rollup/plugin-commonjs\":\"^14.0.0\",\"@rollup/plugin-node-resolve\":\"^8.4.0\",\"@testing-library/jest-dom\":\"^5.11.0\",\"@types/enzyme\":\"^3.10.5\",\"@types/enzyme-adapter-react-16\":\"^1.0.3\",\"@types/fs-extra\":\"^9.0.1\",\"@types/jest\":\"^25.2.1\",\"@types/luxon\":\"^1.24.3\",\"@types/prop-types\":\"^15.5.8\",\"@types/react\":\"^16.9.35\",\"@types/react-dom\":\"^16.9.8\",\"@types/react-transition-group\":\"^4.2.4\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-optimize-clsx\":\"^2.6.1\",\"babel-plugin-react-remove-properties\":\"^0.3.0\",\"codecov\":\"^3.7.2\",\"cross-env\":\"^7.0.2\",\"date-fns\":\"^2.12.0\",\"dayjs\":\"^1.8.27\",\"enzyme\":\"^3.11.0\",\"enzyme-adapter-react-16\":\"^1.15.2\",\"fs-extra\":\"^9.0.0\",\"full-icu\":\"^1.3.1\",\"jest\":\"^26.1.0\",\"luxon\":\"^1.23.0\",\"moment\":\"2.27.0\",\"react\":\"^16.13.0\",\"react-dom\":\"^16.13.0\",\"rollup\":\"^2.18.1\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-size-snapshot\":\"^0.12.0\",\"rollup-plugin-terser\":\"^6.1.0\",\"ts-jest\":\"^25.5.1\",\"typescript\":\"^3.9.6\"}}");

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DatePicker/DatePicker.ts":
/*!*************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DatePicker/DatePicker.ts ***!
  \*************************************************************************/
/*! exports provided: DatePicker, MobileDatePicker, DesktopDatePicker, StaticDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDatePicker", function() { return MobileDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopDatePicker", function() { return DesktopDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDatePicker", function() { return StaticDatePicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _DatePickerToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DatePickerToolbar */ "../node_modules/@material-ui/pickers/src/DatePicker/DatePickerToolbar.tsx");
/* harmony import */ var _wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrappers/ResponsiveWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wrappers/Wrapper */ "../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx");
/* harmony import */ var _shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/hooks/useValidation */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Picker/makePickerWithState */ "../node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");











var datePickerConfig = {
  useValidation: Object(_shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_7__["makeValidationHook"])(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__["validateDate"]),
  DefaultToolbarComponent: _DatePickerToolbar__WEBPACK_IMPORTED_MODULE_3__["DatePickerToolbar"],
  useInterceptProps: function useInterceptProps(_ref) {
    var _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'date'] : _ref$views,
        _ref$minDate = _ref.minDate,
        __minDate = _ref$minDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_8__["defaultMinDate"] : _ref$minDate,
        _ref$maxDate = _ref.maxDate,
        __maxDate = _ref$maxDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_8__["defaultMaxDate"] : _ref$maxDate,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["openTo", "views", "minDate", "maxDate"]);

    var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["useUtils"])();
    var minDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__["useParsedDate"])(__minDate);
    var maxDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_5__["useParsedDate"])(__maxDate);
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      views: views,
      openTo: openTo,
      minDate: minDate,
      maxDate: maxDate
    }, Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__["getFormatAndMaskByViews"])(views, utils), other);
  }
};
var DatePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_9__["makePickerWithStateAndWrapper"])(_wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponsiveWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiDatePicker'
}, datePickerConfig));
var MobileDatePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_9__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_6__["MobileWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiMobileDatePicker'
}, datePickerConfig));
var DesktopDatePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_9__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_6__["DesktopWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiDesktopDatePicker'
}, datePickerConfig));
var StaticDatePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_9__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_6__["StaticWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiStaticDatePicker'
}, datePickerConfig));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DatePicker/DatePickerToolbar.tsx":
/*!*********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DatePicker/DatePickerToolbar.tsx ***!
  \*********************************************************************************/
/*! exports provided: useStyles, DatePickerToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerToolbar", function() { return DatePickerToolbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/PickerToolbar */ "../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DatePicker/DatePickerToolbar.tsx";









var muiPickersComponentConfig = {
  name: 'MuiPickersDatePickerToolbar'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  root: {},
  dateTitleLandscape: {
    margin: 'auto 16px auto auto'
  },
  penIcon: {
    position: 'relative',
    top: 4
  }
}, muiPickersComponentConfig);
var DatePickerToolbar = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__["withDefaultProps"])(muiPickersComponentConfig, function (_ref) {
  var date = _ref.date,
      views = _ref.views,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      onChange = _ref.onChange,
      _ref$toolbarPlacehold = _ref.toolbarPlaceholder,
      toolbarPlaceholder = _ref$toolbarPlacehold === void 0 ? '––' : _ref$toolbarPlacehold,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE' : _ref$toolbarTitle,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["date", "views", "isLandscape", "isMobileKeyboardViewOpen", "toggleMobileKeyboardView", "toolbarFormat", "onChange", "toolbarPlaceholder", "toolbarTitle"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var classes = useStyles();
  var dateText = react__WEBPACK_IMPORTED_MODULE_3__["useMemo"](function () {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    if (Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__["isYearOnlyView"])(views)) {
      return utils.format(date, 'year');
    }

    if (Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_10__["isYearAndMonthViews"])(views)) {
      return utils.format(date, 'month');
    } // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1"
    // For other locales using strings like "June 1", without weekday


    return /en/.test(utils.getCurrentLocaleCode()) ? utils.format(date, 'normalDateWithWeekday') : utils.format(date, 'normalDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils, views]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    "data-mui-test": "datepicker-toolbar-date",
    align: isLandscape ? 'left' : 'center',
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.dateTitleLandscape, isLandscape)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, dateText));
});

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DatePicker/index.ts":
/*!********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DatePicker/index.ts ***!
  \********************************************************************/
/*! exports provided: DatePicker, MobileDatePicker, DesktopDatePicker, StaticDatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker */ "../node_modules/@material-ui/pickers/src/DatePicker/DatePicker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["DatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["MobileDatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["DesktopDatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["StaticDatePicker"]; });



/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangeDelimiter.tsx":
/*!***************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangeDelimiter.tsx ***!
  \***************************************************************************************/
/*! exports provided: DateRangeDelimiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeDelimiter", function() { return DateRangeDelimiter; });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");



var DateRangeDelimiter = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_2__["withDefaultProps"])({
  name: 'MuiPickersDateRangeDelimiter'
}, Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["styled"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__["default"])({
  margin: '0 16px'
}));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePicker.tsx":
/*!************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePicker.tsx ***!
  \************************************************************************************/
/*! exports provided: useDateRangeValidation, makeRangePicker, DateRangePicker, DesktopDateRangePicker, MobileDateRangePicker, StaticDateRangePicker, DateRangeDelimiter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDateRangeValidation", function() { return useDateRangeValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRangePicker", function() { return makeRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePicker", function() { return DateRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopDateRangePicker", function() { return DesktopDateRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDateRangePicker", function() { return MobileDateRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDateRangePicker", function() { return StaticDateRangePicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _wrappers_MobileWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wrappers/MobileWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _shared_withDateAdapterProp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/withDateAdapterProp */ "../node_modules/@material-ui/pickers/src/_shared/withDateAdapterProp.tsx");
/* harmony import */ var _wrappers_makeWrapperComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wrappers/makeWrapperComponent */ "../node_modules/@material-ui/pickers/src/wrappers/makeWrapperComponent.tsx");
/* harmony import */ var _wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../wrappers/ResponsiveWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _wrappers_DesktopTooltipWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wrappers/DesktopTooltipWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/DesktopTooltipWrapper.tsx");
/* harmony import */ var _wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../wrappers/Wrapper */ "../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx");
/* harmony import */ var _shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../_shared/hooks/useValidation */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts");
/* harmony import */ var _shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_shared/hooks/usePickerState */ "../node_modules/@material-ui/pickers/src/_shared/hooks/usePickerState.ts");
/* harmony import */ var _DateRangePickerView__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DateRangePickerView */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerView.tsx");
/* harmony import */ var _DateRangePickerInput__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./DateRangePickerInput */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerInput.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _DateRangeDelimiter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./DateRangeDelimiter */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangeDelimiter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeDelimiter", function() { return _DateRangeDelimiter__WEBPACK_IMPORTED_MODULE_21__["DateRangeDelimiter"]; });





var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePicker.tsx";

















var useDateRangeValidation = Object(_shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_16__["makeValidationHook"])(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_20__["validateDateRange"], {
  defaultValidationError: [null, null],
  isSameError: function isSameError(a, b) {
    return a[1] === b[1] && a[0] === b[0];
  }
});
function makeRangePicker(name, Wrapper) {
  var _this = this;

  var WrapperComponent = Object(_wrappers_makeWrapperComponent__WEBPACK_IMPORTED_MODULE_11__["makeWrapperComponent"])(Wrapper, {
    KeyboardDateInputComponent: _DateRangePickerInput__WEBPACK_IMPORTED_MODULE_19__["DateRangePickerInput"],
    PureDateInputComponent: _DateRangePickerInput__WEBPACK_IMPORTED_MODULE_19__["DateRangePickerInput"]
  });
  var rangePickerValueManager = {
    emptyValue: [null, null],
    parseInput: _helpers_date_utils__WEBPACK_IMPORTED_MODULE_20__["parseRangeInputValue"],
    areValuesEqual: function areValuesEqual(utils, a, b) {
      return utils.isEqual(a[0], b[0]) && utils.isEqual(a[1], b[1]);
    }
  };

  function RangePickerWithStateAndWrapper(_ref) {
    var calendars = _ref.calendars,
        value = _ref.value,
        onChange = _ref.onChange,
        _ref$mask = _ref.mask,
        mask = _ref$mask === void 0 ? '__/__/____' : _ref$mask,
        _ref$startText = _ref.startText,
        startText = _ref$startText === void 0 ? 'Start' : _ref$startText,
        _ref$endText = _ref.endText,
        endText = _ref$endText === void 0 ? 'End' : _ref$endText,
        passedInputFormat = _ref.inputFormat,
        _ref$minDate = _ref.minDate,
        __minDate = _ref$minDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMinDate"] : _ref$minDate,
        _ref$maxDate = _ref.maxDate,
        __maxDate = _ref$maxDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMaxDate"] : _ref$maxDate,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["calendars", "value", "onChange", "mask", "startText", "endText", "inputFormat", "minDate", "maxDate"]);

    var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useUtils"])();
    var minDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_9__["useParsedDate"])(__minDate);
    var maxDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_9__["useParsedDate"])(__maxDate);

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"]('start'),
        _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
        currentlySelectingRangeEnd = _React$useState2[0],
        setCurrentlySelectingRangeEnd = _React$useState2[1];

    var pickerStateProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, {
      value: value,
      onChange: onChange,
      inputFormat: passedInputFormat || utils.formats.keyboardDate
    });

    var restProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, {
      minDate: minDate,
      maxDate: maxDate
    });

    var _usePickerState = Object(_shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_17__["usePickerState"])(pickerStateProps, rangePickerValueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    var validationError = useDateRangeValidation(value, restProps);

    var DateInputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputProps, restProps, {
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText,
      mask: mask,
      validationError: validationError
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](WrapperComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      wrapperProps: wrapperProps,
      DateInputProps: DateInputProps
    }, restProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerView__WEBPACK_IMPORTED_MODULE_18__["DateRangePickerView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      open: wrapperProps.open,
      DateInputProps: DateInputProps,
      calendars: calendars,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
      startText: startText,
      endText: endText
    }, pickerProps, restProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }
    })));
  }

  RangePickerWithStateAndWrapper.propTypes = {
    value: prop_types__WEBPACK_IMPORTED_MODULE_5__["arrayOf"](_constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["date"]).isRequired,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"].isRequired,
    startText: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"],
    endText: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"]
  };
  var FinalPickerComponent = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_8__["withDefaultProps"])({
    name: name
  }, Object(_shared_withDateAdapterProp__WEBPACK_IMPORTED_MODULE_10__["withDateAdapterProp"])(RangePickerWithStateAndWrapper)); // @ts-ignore @see lib/src/Picker/makePickerWithState.tsx:95

  return react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](FinalPickerComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      forwardedRef: ref,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }));
  });
}
var DateRangePicker = makeRangePicker('MuiPickersDateRangePicker', _wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_12__["ResponsiveTooltipWrapper"]);
var DesktopDateRangePicker = makeRangePicker('MuiDesktopDateRangePicker', _wrappers_DesktopTooltipWrapper__WEBPACK_IMPORTED_MODULE_14__["DesktopTooltipWrapper"]);
var MobileDateRangePicker = makeRangePicker('MuiMobileDateRangePicker', _wrappers_MobileWrapper__WEBPACK_IMPORTED_MODULE_7__["MobileWrapper"]);
var StaticDateRangePicker = makeRangePicker('MuiStaticDateRangePicker', _wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_15__["StaticWrapper"]);


/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerDay.tsx":
/*!***************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerDay.tsx ***!
  \***************************************************************************************/
/*! exports provided: PureDateRangeDay, DateRangeDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDateRangeDay", function() { return PureDateRangeDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeDay", function() { return DateRangeDay; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _views_Calendar_Day__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/Calendar/Day */ "../node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx");




var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerDay.tsx";






var endBorderStyle = {
  borderTopRightRadius: '50%',
  borderBottomRightRadius: '50%'
};
var startBorderStyle = {
  borderTopLeftRadius: '50%',
  borderBottomLeftRadius: '50%'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      '&:first-child $rangeIntervalDayPreview': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, startBorderStyle, {
        borderLeftColor: theme.palette.divider
      }),
      '&:last-child $rangeIntervalDayPreview': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, endBorderStyle, {
        borderRightColor: theme.palette.divider
      })
    },
    rangeIntervalDayHighlight: {
      borderRadius: 0,
      color: theme.palette.primary.contrastText,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.primary.light, 0.6),
      '&:first-child': startBorderStyle,
      '&:last-child': endBorderStyle
    },
    rangeIntervalDayHighlightStart: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, startBorderStyle, {
      paddingLeft: 0,
      marginLeft: _constants_dimensions__WEBPACK_IMPORTED_MODULE_7__["DAY_MARGIN"] / 2
    }),
    rangeIntervalDayHighlightEnd: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, endBorderStyle, {
      paddingRight: 0,
      marginRight: _constants_dimensions__WEBPACK_IMPORTED_MODULE_7__["DAY_MARGIN"] / 2
    }),
    day: {
      // Required to overlap preview border
      transform: 'scale(1.1)',
      '& > *': {
        transform: 'scale(0.9)'
      }
    },
    dayOutsideRangeInterval: {
      '&:hover': {
        border: "1px solid ".concat(theme.palette.grey[500])
      }
    },
    dayInsideRangeInterval: {
      color: theme.palette.getContrastText(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.primary.light, 0.6))
    },
    notSelectedDate: {
      backgroundColor: 'transparent'
    },
    rangeIntervalPreview: {
      // replace default day component margin with transparent border to avoid jumping on preview
      border: '2px solid transparent'
    },
    rangeIntervalDayPreview: {
      borderRadius: 0,
      border: "2px dashed ".concat(theme.palette.divider),
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      '&$rangeIntervalDayPreviewStart': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
        borderLeftColor: theme.palette.divider
      }, startBorderStyle),
      '&$rangeIntervalDayPreviewEnd': Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({
        borderRightColor: theme.palette.divider
      }, endBorderStyle)
    },
    rangeIntervalDayPreviewStart: {},
    rangeIntervalDayPreviewEnd: {}
  };
}, {
  name: 'MuiPickersDateRangeDay'
});
function PureDateRangeDay(props) {
  var _clsx, _clsx2, _clsx3;

  var className = props.className,
      day = props.day,
      inCurrentMonth = props.inCurrentMonth,
      isEndOfHighlighting = props.isEndOfHighlighting,
      isEndOfPreviewing = props.isEndOfPreviewing,
      isHighlighting = props.isHighlighting,
      isPreviewing = props.isPreviewing,
      isStartOfHighlighting = props.isStartOfHighlighting,
      isStartOfPreviewing = props.isStartOfPreviewing,
      selected = props.selected,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "day", "inCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var classes = useStyles();
  var isEndOfMonth = utils.isSameDay(day, utils.endOfMonth(day));
  var isStartOfMonth = utils.isSameDay(day, utils.startOfMonth(day));
  var shouldRenderHighlight = isHighlighting && inCurrentMonth;
  var shouldRenderPreview = isPreviewing && inCurrentMonth;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    "data-mui-test": shouldRenderHighlight ? 'DateRangeHighlight' : undefined,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, (_clsx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.rangeIntervalDayHighlight, shouldRenderHighlight), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.rangeIntervalDayHighlightEnd, isEndOfHighlighting || isEndOfMonth), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.rangeIntervalDayHighlightStart, isStartOfHighlighting || isStartOfMonth), _clsx)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    "data-mui-test": shouldRenderPreview ? 'DateRangePreview' : undefined,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.rangeIntervalPreview, (_clsx2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.rangeIntervalDayPreview, shouldRenderPreview), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.rangeIntervalDayPreviewEnd, isEndOfPreviewing || isEndOfMonth), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.rangeIntervalDayPreviewStart, isStartOfPreviewing || isStartOfMonth), _clsx2)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_views_Calendar_Day__WEBPACK_IMPORTED_MODULE_9__["Day"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    disableMargin: true,
    allowSameDateSelection: true,
    allowKeyboardControl: false,
    day: day,
    selected: selected,
    inCurrentMonth: inCurrentMonth,
    "data-mui-test": "DateRangeDay",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.day, (_clsx3 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.notSelectedDate, !selected), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.dayOutsideRangeInterval, !isHighlighting), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.dayInsideRangeInterval, !selected && isHighlighting), _clsx3), className),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }))));
}
PureDateRangeDay.displayName = 'DateRangeDay';
var DateRangeDay = react__WEBPACK_IMPORTED_MODULE_4__["memo"](PureDateRangeDay, function (prevProps, nextProps) {
  return prevProps.isHighlighting === nextProps.isHighlighting && prevProps.isEndOfHighlighting === nextProps.isEndOfHighlighting && prevProps.isStartOfHighlighting === nextProps.isStartOfHighlighting && prevProps.isPreviewing === nextProps.isPreviewing && prevProps.isEndOfPreviewing === nextProps.isEndOfPreviewing && prevProps.isStartOfPreviewing === nextProps.isStartOfPreviewing && Object(_views_Calendar_Day__WEBPACK_IMPORTED_MODULE_9__["areDayPropsEqual"])(prevProps, nextProps);
});

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerInput.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerInput.tsx ***!
  \*****************************************************************************************/
/*! exports provided: useStyles, DateRangePickerInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerInput", function() { return DateRangePickerInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_hooks_useMaskedInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useMaskedInput */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useMaskedInput.tsx");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");





var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerInput.tsx";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      display: 'flex',
      alignItems: 'baseline'
    }, theme.breakpoints.down('xs'), {
      flexDirection: 'column',
      alignItems: 'center'
    }),
    toLabelDelimiter: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])({
      margin: '8px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '0 16px'
    })
  };
}, {
  name: 'MuiPickersDateRangePickerInput'
});
var DateRangePickerInput = function DateRangePickerInput(_ref) {
  var containerRef = _ref.containerRef,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      disableOpenPicker = _ref.disableOpenPicker,
      endText = _ref.endText,
      forwardedRef = _ref.forwardedRef,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      open = _ref.open,
      openPicker = _ref.openPicker,
      rawValue = _ref.rawValue,
      _ref$rawValue = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref.rawValue, 2),
      start = _ref$rawValue[0],
      end = _ref$rawValue[1],
      readOnly = _ref.readOnly,
      renderInput = _ref.renderInput,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      TextFieldProps = _ref.TextFieldProps,
      _ref$validationError = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref.validationError, 2),
      startValidationError = _ref$validationError[0],
      endValidationError = _ref$validationError[1],
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["containerRef", "currentlySelectingRangeEnd", "disableOpenPicker", "endText", "forwardedRef", "onBlur", "onChange", "open", "openPicker", "rawValue", "rawValue", "readOnly", "renderInput", "setCurrentlySelectingRangeEnd", "startText", "TextFieldProps", "validationError"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_7__["useUtils"])();
  var classes = useStyles();
  var startRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  var endRef = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__["WrapperVariantContext"]);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    if (!open) {
      return;
    }

    if (currentlySelectingRangeEnd === 'start') {
      var _startRef$current;

      (_startRef$current = startRef.current) === null || _startRef$current === void 0 ? void 0 : _startRef$current.focus();
    } else if (currentlySelectingRangeEnd === 'end') {
      var _endRef$current;

      (_endRef$current = endRef.current) === null || _endRef$current === void 0 ? void 0 : _endRef$current.focus();
    }
  }, [currentlySelectingRangeEnd, open]); // TODO: rethink this approach. We do not need to wait for calendar to be updated to rerender input (looks like freezing)
  // TODO: so simply break 1 react's commit phase in 2 (first for input and second for calendars) by executing onChange in the next tick

  var lazyHandleChangeCallback = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_10__["executeInTheNextEventLoopTick"])(function () {
      return onChange.apply(void 0, args);
    });
  }, [onChange]);

  var handleStartChange = function handleStartChange(date, inputString) {
    lazyHandleChangeCallback([date, utils.date(end)], inputString);
  };

  var handleEndChange = function handleEndChange(date, inputString) {
    lazyHandleChangeCallback([utils.date(start), date], inputString);
  };

  var openRangeStartSelection = function openRangeStartSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('start');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openRangeEndSelection = function openRangeEndSelection() {
    if (setCurrentlySelectingRangeEnd) {
      setCurrentlySelectingRangeEnd('end');
    }

    if (!disableOpenPicker) {
      openPicker();
    }
  };

  var openOnFocus = wrapperVariant === 'desktop';
  var startInputProps = Object(_shared_hooks_useMaskedInput__WEBPACK_IMPORTED_MODULE_8__["useMaskedInput"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    readOnly: readOnly,
    rawValue: start,
    onChange: handleStartChange,
    label: startText,
    validationError: startValidationError !== null,
    TextFieldProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TextFieldProps, {
      ref: startRef,
      variant: 'outlined',
      focused: open && currentlySelectingRangeEnd === 'start'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeStartSelection : undefined,
      onFocus: openOnFocus ? openRangeStartSelection : undefined
    }
  }));
  var endInputProps = Object(_shared_hooks_useMaskedInput__WEBPACK_IMPORTED_MODULE_8__["useMaskedInput"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    readOnly: readOnly,
    label: endText,
    rawValue: end,
    onChange: handleEndChange,
    validationError: endValidationError !== null,
    TextFieldProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TextFieldProps, {
      ref: endRef,
      variant: 'outlined',
      focused: open && currentlySelectingRangeEnd === 'end'
    }),
    inputProps: {
      onClick: !openOnFocus ? openRangeEndSelection : undefined,
      onFocus: openOnFocus ? openRangeEndSelection : undefined
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    onBlur: onBlur,
    className: classes.root,
    ref: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_10__["mergeRefs"])([containerRef, forwardedRef]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 5
    }
  }, renderInput(startInputProps, endInputProps));
};
DateRangePickerInput.propTypes = {
  acceptRegex: prop_types__WEBPACK_IMPORTED_MODULE_5__["instanceOf"](RegExp),
  getOpenDialogAriaText: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"],
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
  OpenPickerButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"],
  openPickerIcon: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"],
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"].isRequired,
  rifmFormatter: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerToolbar.tsx":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerToolbar.tsx ***!
  \*******************************************************************************************/
/*! exports provided: useStyles, DateRangePickerToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerToolbar", function() { return DateRangePickerToolbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/PickerToolbar */ "../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/ToolbarButton */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerToolbar.tsx";








var muiComponentConfig = {
  name: 'MuiPickersDateRangePickerToolbarProps'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {},
  penIcon: {
    position: 'relative',
    top: 4
  },
  dateTextContainer: {
    display: 'flex'
  }
}, muiComponentConfig);
var DateRangePickerToolbar = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_7__["withDefaultProps"])(muiComponentConfig, function (_ref) {
  var currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd,
      _ref$date = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref.date, 2),
      start = _ref$date[0],
      end = _ref$date[1],
      endText = _ref.endText,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      setCurrentlySelectingRangeEnd = _ref.setCurrentlySelectingRangeEnd,
      startText = _ref.startText,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarFormat = _ref.toolbarFormat,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT DATE RANGE' : _ref$toolbarTitle;

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__["useUtils"])();
  var classes = useStyles();
  var startDateValue = start ? utils.formatByString(start, toolbarFormat || utils.formats.shortDate) : startText;
  var endDateValue = end ? utils.formatByString(end, toolbarFormat || utils.formats.shortDate) : endText;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.root,
    toolbarTitle: toolbarTitle,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: false,
    penIconClassName: classes.penIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.dateTextContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    variant: start !== null ? 'h5' : 'h6',
    value: startDateValue,
    selected: currentlySelectingRangeEnd === 'start',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('start');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, "\xA0", '–', "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    variant: end !== null ? 'h5' : 'h6',
    value: endDateValue,
    selected: currentlySelectingRangeEnd === 'end',
    onClick: function onClick() {
      return setCurrentlySelectingRangeEnd('end');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })));
});

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerView.tsx":
/*!****************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerView.tsx ***!
  \****************************************************************************************/
/*! exports provided: DateRangePickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerView", function() { return DateRangePickerView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _date_range_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-range-manager */ "../node_modules/@material-ui/pickers/src/DateRangePicker/date-range-manager.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _DateRangePickerToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DateRangePickerToolbar */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerToolbar.tsx");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _views_Calendar_useCalendarState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/Calendar/useCalendarState */ "../node_modules/@material-ui/pickers/src/views/Calendar/useCalendarState.tsx");
/* harmony import */ var _DateRangePickerViewMobile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DateRangePickerViewMobile */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewMobile.tsx");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _views_MobileKeyboardInputView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/MobileKeyboardInputView */ "../node_modules/@material-ui/pickers/src/views/MobileKeyboardInputView.tsx");
/* harmony import */ var _DateRangePickerInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DateRangePickerInput */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerInput.tsx");
/* harmony import */ var _views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/Calendar/CalendarView */ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx");
/* harmony import */ var _DateRangePickerViewDesktop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DateRangePickerViewDesktop */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewDesktop.tsx");




var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerView.tsx";















function DateRangePickerView(props) {
  var _this = this;

  var _props$calendars = props.calendars,
      calendars = _props$calendars === void 0 ? 2 : _props$calendars,
      className = props.className,
      currentlySelectingRangeEnd = props.currentlySelectingRangeEnd,
      date = props.date,
      DateInputProps = props.DateInputProps,
      _props$disableAutoMon = props.disableAutoMonthSwitching,
      disableAutoMonthSwitching = _props$disableAutoMon === void 0 ? false : _props$disableAutoMon,
      disableFuture = props.disableFuture,
      disableHighlightToday = props.disableHighlightToday,
      disablePast = props.disablePast,
      endText = props.endText,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      _props$maxDate = props.maxDate,
      unparsedMaxDate = _props$maxDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMaxDate"] : _props$maxDate,
      _props$minDate = props.minDate,
      unparsedMinDate = _props$minDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMinDate"] : _props$minDate,
      onDateChange = props.onDateChange,
      onMonthChange = props.onMonthChange,
      open = props.open,
      _props$reduceAnimatio = props.reduceAnimations,
      reduceAnimations = _props$reduceAnimatio === void 0 ? _views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_17__["defaultReduceAnimations"] : _props$reduceAnimatio,
      setCurrentlySelectingRangeEnd = props.setCurrentlySelectingRangeEnd,
      shouldDisableDate = props.shouldDisableDate,
      showToolbar = props.showToolbar,
      startText = props.startText,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      toolbarFormat = props.toolbarFormat,
      toolbarTitle = props.toolbarTitle,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["calendars", "className", "currentlySelectingRangeEnd", "date", "DateInputProps", "disableAutoMonthSwitching", "disableFuture", "disableHighlightToday", "disablePast", "endText", "isMobileKeyboardViewOpen", "maxDate", "minDate", "onDateChange", "onMonthChange", "open", "reduceAnimations", "setCurrentlySelectingRangeEnd", "shouldDisableDate", "showToolbar", "startText", "toggleMobileKeyboardView", "toolbarFormat", "toolbarTitle"]);

  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useNow"])();
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_4__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_14__["WrapperVariantContext"]);
  var minDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_10__["useParsedDate"])(unparsedMinDate);
  var maxDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_10__["useParsedDate"])(unparsedMaxDate);

  var _date = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(date, 2),
      start = _date[0],
      end = _date[1];

  var _useCalendarState = Object(_views_Calendar_useCalendarState__WEBPACK_IMPORTED_MODULE_11__["useCalendarState"])({
    date: start || end || now,
    minDate: minDate,
    maxDate: maxDate,
    reduceAnimations: reduceAnimations,
    disablePast: disablePast,
    disableFuture: disableFuture,
    onMonthChange: onMonthChange,
    shouldDisableDate: shouldDisableDate,
    disableSwitchToMonthOnDayFocus: true
  }),
      changeMonth = _useCalendarState.changeMonth,
      calendarState = _useCalendarState.calendarState,
      isDateDisabled = _useCalendarState.isDateDisabled,
      onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd,
      changeFocusedDay = _useCalendarState.changeFocusedDay;

  var toShowToolbar = showToolbar !== null && showToolbar !== void 0 ? showToolbar : wrapperVariant !== 'desktop';

  var scrollToDayIfNeeded = function scrollToDayIfNeeded(day) {
    if (!day || !utils.isValid(day) || isDateDisabled(day)) {
      return;
    }

    var currentlySelectedDate = currentlySelectingRangeEnd === 'start' ? start : end;

    if (currentlySelectedDate === null) {
      // do not scroll if one of ages is not selected
      return;
    }

    var displayingMonthRange = wrapperVariant === 'mobile' ? 0 : calendars - 1;
    var currentMonthNumber = utils.getMonth(calendarState.currentMonth);
    var requestedMonthNumber = utils.getMonth(day);

    if (!utils.isSameYear(calendarState.currentMonth, day) || requestedMonthNumber < currentMonthNumber || requestedMonthNumber > currentMonthNumber + displayingMonthRange) {
      var newMonth = currentlySelectingRangeEnd === 'start' ? currentlySelectedDate : // If need to focus end, scroll to the state when "end" is displaying in the last calendar
      utils.addMonths(currentlySelectedDate, -displayingMonthRange);
      changeMonth(newMonth);
    }
  };

  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    if (disableAutoMonthSwitching || !open) {
      return;
    }

    scrollToDayIfNeeded(currentlySelectingRangeEnd === 'start' ? start : end);
  }, [currentlySelectingRangeEnd, date]); // eslint-disable-line

  var handleChange = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (newDate) {
    var _calculateRangeChange = Object(_date_range_manager__WEBPACK_IMPORTED_MODULE_7__["calculateRangeChange"])({
      newDate: newDate,
      utils: utils,
      range: date,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd
    }),
        nextSelection = _calculateRangeChange.nextSelection,
        newRange = _calculateRangeChange.newRange;

    setCurrentlySelectingRangeEnd(nextSelection);
    var isFullRangeSelected = currentlySelectingRangeEnd === 'end' && Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_6__["isRangeValid"])(utils, newRange);
    onDateChange(newRange, wrapperVariant, isFullRangeSelected ? 'finish' : 'partial');
  }, [currentlySelectingRangeEnd, date, onDateChange, setCurrentlySelectingRangeEnd, utils, wrapperVariant]);

  var renderView = function renderView() {
    var sharedCalendarProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      date: date,
      isDateDisabled: isDateDisabled,
      changeFocusedDay: changeFocusedDay,
      onChange: handleChange,
      reduceAnimations: reduceAnimations,
      disableHighlightToday: disableHighlightToday,
      onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
      changeMonth: changeMonth,
      currentlySelectingRangeEnd: currentlySelectingRangeEnd,
      disableFuture: disableFuture,
      disablePast: disablePast,
      minDate: minDate,
      maxDate: maxDate
    }, calendarState, other);

    switch (wrapperVariant) {
      case 'desktop':
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerViewDesktop__WEBPACK_IMPORTED_MODULE_18__["DateRangePickerViewDesktop"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
            calendars: calendars
          }, sharedCalendarProps, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 16
            }
          }));
        }

      default:
        {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerViewMobile__WEBPACK_IMPORTED_MODULE_12__["DateRangePickerViewMobile"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sharedCalendarProps, {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 16
            }
          }));
        }
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 5
    }
  }, toShowToolbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerToolbar__WEBPACK_IMPORTED_MODULE_9__["DateRangePickerToolbar"], {
    date: date,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd,
    setCurrentlySelectingRangeEnd: setCurrentlySelectingRangeEnd,
    startText: startText,
    endText: endText,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }), isMobileKeyboardViewOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_views_MobileKeyboardInputView__WEBPACK_IMPORTED_MODULE_15__["MobileKeyboardInputView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerInput__WEBPACK_IMPORTED_MODULE_16__["DateRangePickerInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    disableOpenPicker: true,
    ignoreInvalidInputs: true
  }, DateInputProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }))) : renderView());
}
DateRangePickerView.propTypes = {
  calendars: prop_types__WEBPACK_IMPORTED_MODULE_5__["oneOf"]([1, 2, 3]),
  disableAutoMonthSwitching: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewDesktop.tsx":
/*!***********************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewDesktop.tsx ***!
  \***********************************************************************************************/
/*! exports provided: useStyles, DateRangePickerViewDesktop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerViewDesktop", function() { return DateRangePickerViewDesktop; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _date_range_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-range-manager */ "../node_modules/@material-ui/pickers/src/DateRangePicker/date-range-manager.ts");
/* harmony import */ var _views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/Calendar/Calendar */ "../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx");
/* harmony import */ var _DateRangePickerDay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DateRangePickerDay */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerDay.tsx");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_shared/ArrowSwitcher */ "../node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");




var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewDesktop.tsx";










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row'
    },
    rangeCalendarContainer: {
      '&:not(:last-child)': {
        borderRight: "2px solid ".concat(theme.palette.divider)
      }
    },
    calendar: {
      minWidth: 312,
      minHeight: 288
    },
    arrowSwitcher: {
      padding: '16px 16px 8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  };
}, {
  name: 'MuiPickersDesktopDateRangeCalendar'
});

function getCalendarsArray(calendars) {
  switch (calendars) {
    case 1:
      return [0];

    case 2:
      return [0, 0];

    case 3:
      return [0, 0, 0];
    // this will not work in IE11, but allows to support any amount of calendars

    default:
      return new Array(calendars).fill(0);
  }
}

function DateRangePickerViewDesktop(props) {
  var _this = this;

  var date = props.date,
      _props$calendars = props.calendars,
      calendars = _props$calendars === void 0 ? 2 : _props$calendars,
      changeMonth = props.changeMonth,
      leftArrowButtonProps = props.leftArrowButtonProps,
      leftArrowButtonText = props.leftArrowButtonText,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowButtonProps = props.rightArrowButtonProps,
      rightArrowButtonText = props.rightArrowButtonText,
      rightArrowIcon = props.rightArrowIcon,
      onChange = props.onChange,
      disableFuture = props.disableFuture,
      disablePast = props.disablePast,
      __minDate = props.minDate,
      __maxDate = props.maxDate,
      currentlySelectingRangeEnd = props.currentlySelectingRangeEnd,
      currentMonth = props.currentMonth,
      _props$renderDay = props.renderDay,
      _renderDay = _props$renderDay === void 0 ? function (_, dateRangeProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_DateRangePickerDay__WEBPACK_IMPORTED_MODULE_9__["DateRangeDay"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, dateRangeProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 40
      }
    }));
  } : _props$renderDay,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["date", "calendars", "changeMonth", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "onChange", "disableFuture", "disablePast", "minDate", "maxDate", "currentlySelectingRangeEnd", "currentMonth", "renderDay"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useUtils"])();
  var classes = useStyles();

  var minDate = __minDate || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_10__["defaultMinDate"]);

  var maxDate = __maxDate || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_10__["defaultMaxDate"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__["useState"](null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      rangePreviewDay = _React$useState2[0],
      setRangePreviewDay = _React$useState2[1];

  var isNextMonthDisabled = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__["useNextMonthDisabled"])(currentMonth, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__["usePreviousMonthDisabled"])(currentMonth, {
    disablePast: disablePast,
    minDate: minDate
  });
  var previewingRange = Object(_date_range_manager__WEBPACK_IMPORTED_MODULE_7__["calculateRangePreview"])({
    utils: utils,
    range: date,
    newDate: rangePreviewDay,
    currentlySelectingRangeEnd: currentlySelectingRangeEnd
  });
  var handleDayChange = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function (day) {
    setRangePreviewDay(null);
    onChange(day);
  }, [onChange]);

  var handlePreviewDayChange = function handlePreviewDayChange(newPreviewRequest) {
    if (!Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isWithinRange"])(utils, newPreviewRequest, date)) {
      setRangePreviewDay(newPreviewRequest);
    } else {
      setRangePreviewDay(null);
    }
  };

  var CalendarTransitionProps = react__WEBPACK_IMPORTED_MODULE_4__["useMemo"](function () {
    return {
      onMouseLeave: function onMouseLeave() {
        return setRangePreviewDay(null);
      }
    };
  }, []);
  var selectNextMonth = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function () {
    changeMonth(utils.getNextMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  var selectPreviousMonth = react__WEBPACK_IMPORTED_MODULE_4__["useCallback"](function () {
    changeMonth(utils.getPreviousMonth(currentMonth));
  }, [changeMonth, currentMonth, utils]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 5
    }
  }, getCalendarsArray(calendars).map(function (_, index) {
    var monthOnIteration = utils.setMonth(currentMonth, utils.getMonth(currentMonth) + index);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      key: index,
      className: classes.rangeCalendarContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_11__["ArrowSwitcher"], {
      className: classes.arrowSwitcher,
      onLeftClick: selectPreviousMonth,
      onRightClick: selectNextMonth,
      isLeftHidden: index !== 0,
      isRightHidden: index !== calendars - 1,
      isLeftDisabled: isPreviousMonthDisabled,
      isRightDisabled: isNextMonthDisabled,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowButtonText: leftArrowButtonText,
      leftArrowIcon: leftArrowIcon,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowButtonText: rightArrowButtonText,
      rightArrowIcon: rightArrowIcon,
      text: utils.format(monthOnIteration, 'monthAndYear'),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, other, {
      key: index,
      date: date,
      className: classes.calendar,
      onChange: handleDayChange,
      currentMonth: monthOnIteration,
      TransitionProps: CalendarTransitionProps,
      renderDay: function renderDay(day, __, DayProps) {
        return _renderDay(day, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
          isPreviewing: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isWithinRange"])(utils, day, previewingRange),
          isStartOfPreviewing: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isStartOfRange"])(utils, day, previewingRange),
          isEndOfPreviewing: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isEndOfRange"])(utils, day, previewingRange),
          isHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isWithinRange"])(utils, day, date),
          isStartOfHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isStartOfRange"])(utils, day, date),
          isEndOfHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_13__["isEndOfRange"])(utils, day, date),
          onMouseEnter: function onMouseEnter() {
            return handlePreviewDayChange(day);
          }
        }, DayProps));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    })));
  }));
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewMobile.tsx":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewMobile.tsx ***!
  \**********************************************************************************************/
/*! exports provided: DateRangePickerViewMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerViewMobile", function() { return DateRangePickerViewMobile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_Calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/Calendar/CalendarHeader */ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarHeader.tsx");
/* harmony import */ var _DateRangePickerDay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateRangePickerDay */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerDay.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/Calendar/Calendar */ "../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");



var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerViewMobile.tsx";







var onlyDateView = ['date'];
function DateRangePickerViewMobile(props) {
  var _this = this;

  var changeMonth = props.changeMonth,
      date = props.date,
      leftArrowButtonProps = props.leftArrowButtonProps,
      leftArrowButtonText = props.leftArrowButtonText,
      leftArrowIcon = props.leftArrowIcon,
      __minDate = props.minDate,
      __maxDate = props.maxDate,
      onChange = props.onChange,
      rightArrowButtonProps = props.rightArrowButtonProps,
      rightArrowButtonText = props.rightArrowButtonText,
      rightArrowIcon = props.rightArrowIcon,
      _props$renderDay = props.renderDay,
      _renderDay = _props$renderDay === void 0 ? function (_, props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_DateRangePickerDay__WEBPACK_IMPORTED_MODULE_5__["DateRangeDay"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 31
      }
    }));
  } : _props$renderDay,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["changeMonth", "date", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "minDate", "maxDate", "onChange", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "renderDay"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useUtils"])();

  var minDate = __minDate || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_8__["defaultMinDate"]);

  var maxDate = __maxDate || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_8__["defaultMaxDate"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_views_Calendar_CalendarHeader__WEBPACK_IMPORTED_MODULE_4__["CalendarHeader"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    view: "date",
    views: onlyDateView,
    changeView: function changeView() {
      return {};
    },
    onMonthChange: changeMonth,
    leftArrowButtonText: leftArrowButtonText,
    leftArrowButtonProps: leftArrowButtonProps,
    leftArrowIcon: leftArrowIcon,
    rightArrowButtonProps: rightArrowButtonProps,
    rightArrowButtonText: rightArrowButtonText,
    rightArrowIcon: rightArrowIcon,
    minDate: minDate,
    maxDate: maxDate
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_7__["Calendar"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, {
    date: date,
    onChange: onChange,
    renderDay: function renderDay(day, _, DayProps) {
      return _renderDay(day, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        isPreviewing: false,
        isStartOfPreviewing: false,
        isEndOfPreviewing: false,
        isHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_9__["isWithinRange"])(utils, day, date),
        isStartOfHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_9__["isStartOfRange"])(utils, day, date),
        isEndOfHighlighting: Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_9__["isEndOfRange"])(utils, day, date)
      }, DayProps));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateRangePicker/date-range-manager.ts":
/*!**************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateRangePicker/date-range-manager.ts ***!
  \**************************************************************************************/
/*! exports provided: calculateRangeChange, calculateRangePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRangeChange", function() { return calculateRangeChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateRangePreview", function() { return calculateRangePreview; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");

function calculateRangeChange(_ref) {
  var utils = _ref.utils,
      range = _ref.range,
      selectedDate = _ref.newDate,
      currentlySelectingRangeEnd = _ref.currentlySelectingRangeEnd;

  var _range = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(range, 2),
      start = _range[0],
      end = _range[1];

  if (currentlySelectingRangeEnd === 'start') {
    return Boolean(end) && utils.isAfter(selectedDate, end) ? {
      nextSelection: 'end',
      newRange: [selectedDate, null]
    } : {
      nextSelection: 'end',
      newRange: [selectedDate, end]
    };
  }

  return Boolean(start) && utils.isBefore(selectedDate, start) ? {
    nextSelection: 'end',
    newRange: [selectedDate, null]
  } : {
    nextSelection: 'start',
    newRange: [start, selectedDate]
  };
}
function calculateRangePreview(options) {
  if (!options.newDate) {
    return [null, null];
  }

  var _options$range = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(options.range, 2),
      start = _options$range[0],
      end = _options$range[1];

  var _calculateRangeChange = calculateRangeChange(options),
      newRange = _calculateRangeChange.newRange;

  if (!start || !end) {
    return newRange;
  }

  var _newRange = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(newRange, 2),
      previewStart = _newRange[0],
      previewEnd = _newRange[1];

  return options.currentlySelectingRangeEnd === 'end' ? [end, previewEnd] : [previewStart, start];
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePicker.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePicker.tsx ***!
  \**********************************************************************************/
/*! exports provided: DateTimePicker, DesktopDateTimePicker, MobileDateTimePicker, StaticDateTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return DateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopDateTimePicker", function() { return DesktopDateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileDateTimePicker", function() { return MobileDateTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticDateTimePicker", function() { return StaticDateTimePicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _DateTimePickerToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DateTimePickerToolbar */ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerToolbar.tsx");
/* harmony import */ var _wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wrappers/ResponsiveWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx");
/* harmony import */ var _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/text-field-helper */ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Picker/makePickerWithState */ "../node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx");
/* harmony import */ var _wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wrappers/Wrapper */ "../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx");
/* harmony import */ var _date_time_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./date-time-utils */ "../node_modules/@material-ui/pickers/src/DateTimePicker/date-time-utils.ts");
/* harmony import */ var _shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/hooks/useValidation */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");













function useInterceptProps(_ref) {
  var ampm = _ref.ampm,
      inputFormat = _ref.inputFormat,
      _ref$maxDate = _ref.maxDate,
      __maxDate = _ref$maxDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_11__["defaultMaxDate"] : _ref$maxDate,
      __maxDateTime = _ref.maxDateTime,
      __maxTime = _ref.maxTime,
      _ref$minDate = _ref.minDate,
      __minDate = _ref$minDate === void 0 ? _constants_prop_types__WEBPACK_IMPORTED_MODULE_11__["defaultMinDate"] : _ref$minDate,
      __minDateTime = _ref.minDateTime,
      __minTime = _ref.minTime,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'date', 'hours', 'minutes'] : _ref$views,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["ampm", "inputFormat", "maxDate", "maxDateTime", "maxTime", "minDate", "minDateTime", "minTime", "openTo", "orientation", "views"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_2__["useUtils"])();
  var minTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__minTime);
  var maxTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__maxTime);
  var minDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__minDate);
  var maxDate = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__maxDate);
  var minDateTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__minDateTime);
  var maxDateTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_6__["useParsedDate"])(__maxDateTime);
  var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();

  if (orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    openTo: openTo,
    views: views,
    ampm: willUseAmPm,
    ampmInClock: true,
    orientation: orientation,
    showToolbar: true,
    showTabs: true,
    allowSameDateSelection: true,
    minDate: minDateTime || minDate,
    minTime: minDateTime || minTime,
    maxDate: maxDateTime || maxDate,
    maxTime: maxDateTime || maxTime,
    disableIgnoringDatePartForTimeValidation: Boolean(minDateTime || maxDateTime),
    acceptRegex: willUseAmPm ? /[\dap]/gi : /\d/gi,
    mask: '__/__/____ __:__',
    disableMaskedInput: willUseAmPm,
    inputFormat: Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_5__["pick12hOr24hFormat"])(inputFormat, willUseAmPm, {
      localized: utils.formats.keyboardDateTime,
      '12h': utils.formats.keyboardDateTime12h,
      '24h': utils.formats.keyboardDateTime24h
    })
  }, other);
}

var useValidation = Object(_shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_10__["makeValidationHook"])(_date_time_utils__WEBPACK_IMPORTED_MODULE_9__["validateDateAndTime"]);
var dateTimePickerConfig = {
  useInterceptProps: useInterceptProps,
  useValidation: useValidation,
  DefaultToolbarComponent: _DateTimePickerToolbar__WEBPACK_IMPORTED_MODULE_3__["DateTimePickerToolbar"]
};
var DateTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_7__["makePickerWithStateAndWrapper"])(_wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_4__["ResponsiveWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiDateTimePicker'
}, dateTimePickerConfig));
var DesktopDateTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_7__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_8__["DesktopWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiDesktopDateTimePicker'
}, dateTimePickerConfig));
var MobileDateTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_7__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_8__["MobileWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiMobileDateTimePicker'
}, dateTimePickerConfig));
var StaticDateTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_7__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_8__["StaticWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiStaticDateTimePicker'
}, dateTimePickerConfig));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerTabs.tsx":
/*!**************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerTabs.tsx ***!
  \**************************************************************************************/
/*! exports provided: useStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "../node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "../node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_icons_Time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/icons/Time */ "../node_modules/@material-ui/pickers/src/_shared/icons/Time.tsx");
/* harmony import */ var _shared_icons_DateRange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/icons/DateRange */ "../node_modules/@material-ui/pickers/src/_shared/icons/DateRange.tsx");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerTabs.tsx";











var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default;
  return {
    root: {},
    modeDesktop: {
      order: 1
    },
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
}, {
  name: 'MuiDateTimePickerTabs'
});

var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var _props$dateRangeIcon = props.dateRangeIcon,
      dateRangeIcon = _props$dateRangeIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_icons_DateRange__WEBPACK_IMPORTED_MODULE_8__["DateRangeIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 27
    }
  }) : _props$dateRangeIcon,
      onChange = props.onChange,
      _props$timeIcon = props.timeIcon,
      timeIcon = _props$timeIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_icons_Time__WEBPACK_IMPORTED_MODULE_7__["TimeIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 67
    }
  }) : _props$timeIcon,
      view = props.view;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__["WrapperVariantContext"]);
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.modeDesktop, wrapperVariant === 'desktop')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: "date",
    "aria-label": "pick date",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, dateRangeIcon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: "time",
    "aria-label": "pick time",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, timeIcon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DateTimePickerTabs);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerToolbar.tsx":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerToolbar.tsx ***!
  \*****************************************************************************************/
/*! exports provided: useStyles, DateTimePickerToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerToolbar", function() { return DateTimePickerToolbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_ToolbarText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/ToolbarText */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx");
/* harmony import */ var _shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/PickerToolbar */ "../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx");
/* harmony import */ var _shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/ToolbarButton */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx");
/* harmony import */ var _DateTimePickerTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateTimePickerTabs */ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerTabs.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerToolbar.tsx";










var muiComponentConfig = {
  name: 'MuiDateTimePickerToolbar'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'space-around'
  },
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  timeContainer: {
    display: 'flex'
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  timeTypography: {},
  penIcon: {
    position: 'absolute',
    top: 8,
    right: 8
  }
}, muiComponentConfig);
var DateTimePickerToolbar = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__["withDefaultProps"])(muiComponentConfig, function (props) {
  var ampm = props.ampm,
      date = props.date,
      dateRangeIcon = props.dateRangeIcon,
      hideTabs = props.hideTabs,
      isMobileKeyboardViewOpen = props.isMobileKeyboardViewOpen,
      onChange = props.onChange,
      openView = props.openView,
      setOpenView = props.setOpenView,
      timeIcon = props.timeIcon,
      toggleMobileKeyboardView = props.toggleMobileKeyboardView,
      toolbarFormat = props.toolbarFormat,
      _props$toolbarPlaceho = props.toolbarPlaceholder,
      toolbarPlaceholder = _props$toolbarPlaceho === void 0 ? '––' : _props$toolbarPlaceho,
      _props$toolbarTitle = props.toolbarTitle,
      toolbarTitle = _props$toolbarTitle === void 0 ? 'SELECT DATE & TIME' : _props$toolbarTitle,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["ampm", "date", "dateRangeIcon", "hideTabs", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "timeIcon", "toggleMobileKeyboardView", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var classes = useStyles();
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_10__["WrapperVariantContext"]);
  var showTabs = wrapperVariant === 'desktop' ? true : !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var dateText = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    if (!date) {
      return toolbarPlaceholder;
    }

    if (toolbarFormat) {
      return utils.formatByString(date, toolbarFormat);
    }

    return utils.format(date, 'shortDate');
  }, [date, toolbarFormat, toolbarPlaceholder, utils]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, wrapperVariant !== 'desktop' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    toolbarTitle: toolbarTitle,
    penIconClassName: classes.penIcon,
    className: classes.root,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, other, {
    isLandscape: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.dateContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    tabIndex: -1,
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    value: date ? utils.format(date, 'year') : '–',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    tabIndex: -1,
    variant: "h4",
    "data-mui-test": "datetimepicker-toolbar-date",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    value: dateText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.timeContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    tabIndex: -1,
    variant: "h3",
    "data-mui-test": "hours",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--',
    typographyClassName: classes.timeTypography,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_ToolbarText__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3",
    value: ":",
    className: classes.separator,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_6__["ToolbarButton"], {
    tabIndex: -1,
    variant: "h3",
    "data-mui-test": "minutes",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--',
    typographyClassName: classes.timeTypography,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }))), showTabs && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_DateTimePickerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }));
});

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateTimePicker/date-time-utils.ts":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateTimePicker/date-time-utils.ts ***!
  \**********************************************************************************/
/*! exports provided: validateDateAndTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateAndTime", function() { return validateDateAndTime; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _helpers_time_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_helpers/time-utils */ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts");



function validateDateAndTime(utils, value, _ref) {
  var minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      shouldDisableDate = _ref.shouldDisableDate,
      disablePast = _ref.disablePast,
      timeValidationProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["minDate", "maxDate", "disableFuture", "shouldDisableDate", "disablePast"]);

  var dateValidationResult = Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_1__["validateDate"])(utils, value, {
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast
  });

  if (dateValidationResult !== null) {
    return dateValidationResult;
  }

  return Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_2__["validateTime"])(utils, value, timeValidationProps);
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/DateTimePicker/index.ts":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/DateTimePicker/index.ts ***!
  \************************************************************************/
/*! exports provided: DateTimePicker, DesktopDateTimePicker, MobileDateTimePicker, StaticDateTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateTimePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTimePicker */ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_0__["DateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_0__["DesktopDateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_0__["MobileDateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_0__["StaticDateTimePicker"]; });



/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/LocalizationProvider.tsx":
/*!*************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/LocalizationProvider.tsx ***!
  \*************************************************************************/
/*! exports provided: MuiPickersAdapterContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuiPickersAdapterContext", function() { return MuiPickersAdapterContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/LocalizationProvider.tsx";



var MuiPickersAdapterContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);

var LocalizationProvider = function LocalizationProvider(props) {
  var children = props.children,
      Utils = props.dateAdapter,
      dateFormats = props.dateFormats,
      dateLibInstance = props.dateLibInstance,
      locale = props.locale;
  var utils = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return new Utils({
      locale: locale,
      formats: dateFormats,
      instance: dateLibInstance
    });
  }, [Utils, locale, dateFormats, dateLibInstance]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](MuiPickersAdapterContext.Provider, {
    value: utils,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, children);
};

LocalizationProvider.propTypes = {
  dateAdapter: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_1__["object"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /**
   * Your component tree.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
};
/* harmony default export */ __webpack_exports__["default"] = (LocalizationProvider);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/Picker/Picker.tsx":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/Picker/Picker.tsx ***!
  \******************************************************************/
/*! exports provided: useStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_hooks_useViews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useViews */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useViews.tsx");
/* harmony import */ var _views_Clock_ClockView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/Clock/ClockView */ "../node_modules/@material-ui/pickers/src/views/Clock/ClockView.tsx");
/* harmony import */ var _views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/Calendar/CalendarView */ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/KeyboardDateInput */ "../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx");
/* harmony import */ var _shared_hooks_useIsLandscape__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_shared/hooks/useIsLandscape */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useIsLandscape.tsx");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _views_MobileKeyboardInputView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/MobileKeyboardInputView */ "../node_modules/@material-ui/pickers/src/views/MobileKeyboardInputView.tsx");



var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/Picker/Picker.tsx";












var muiComponentConfig = {
  name: 'MuiPickersBasePicker'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  landscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    width: _constants_dimensions__WEBPACK_IMPORTED_MODULE_12__["DIALOG_WIDTH"],
    maxHeight: _constants_dimensions__WEBPACK_IMPORTED_MODULE_12__["VIEW_HEIGHT"],
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, muiComponentConfig);
var MobileKeyboardTextFieldProps = {
  fullWidth: true
};

var isDatePickerView = function isDatePickerView(view) {
  return view === 'year' || view === 'month' || view === 'date';
};

function Picker(_ref) {
  var className = _ref.className,
      date = _ref.date,
      DateInputProps = _ref.DateInputProps,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      onDateChange = _ref.onDateChange,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      orientation = _ref.orientation,
      showToolbar = _ref.showToolbar,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$ToolbarComponent = _ref.ToolbarComponent,
      ToolbarComponent = _ref$ToolbarComponent === void 0 ? function () {
    return null;
  } : _ref$ToolbarComponent,
      toolbarFormat = _ref.toolbarFormat,
      toolbarPlaceholder = _ref.toolbarPlaceholder,
      toolbarTitle = _ref.toolbarTitle,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'month', 'date', 'hours', 'minutes', 'seconds'] : _ref$views,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["className", "date", "DateInputProps", "isMobileKeyboardViewOpen", "onDateChange", "openTo", "orientation", "showToolbar", "toggleMobileKeyboardView", "ToolbarComponent", "toolbarFormat", "toolbarPlaceholder", "toolbarTitle", "views"]);

  var classes = useStyles();
  var isLandscape = Object(_shared_hooks_useIsLandscape__WEBPACK_IMPORTED_MODULE_11__["useIsLandscape"])(views, orientation);
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_13__["WrapperVariantContext"]);
  var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;
  var handleDateChange = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (date, selectionState) {
    onDateChange(date, wrapperVariant, selectionState);
  }, [onDateChange, wrapperVariant]);

  var _useViews = Object(_shared_hooks_useViews__WEBPACK_IMPORTED_MODULE_6__["useViews"])({
    views: views,
    openTo: openTo,
    onChange: handleDateChange,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }),
      openView = _useViews.openView,
      nextView = _useViews.nextView,
      previousView = _useViews.previousView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.landscape, isLandscape)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, toShowToolbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ToolbarComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: handleDateChange,
    setOpenView: setOpenView,
    openView: openView,
    toolbarTitle: toolbarTitle,
    toolbarFormat: toolbarFormat,
    toolbarPlaceholder: toolbarPlaceholder,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.pickerView, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.pickerViewLandscape, isLandscape)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, isMobileKeyboardViewOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_views_MobileKeyboardInputView__WEBPACK_IMPORTED_MODULE_14__["MobileKeyboardInputView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_10__["KeyboardDateInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DateInputProps, {
    ignoreInvalidInputs: true,
    disableOpenPicker: true,
    TextFieldProps: MobileKeyboardTextFieldProps,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, (openView === 'year' || openView === 'month' || openView === 'date') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_8__["CalendarView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    date: date,
    changeView: setOpenView // @ts-ignore
    ,
    views: views,
    onChange: handleChangeAndOpenNext,
    view: openView
  }, other, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  })), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_views_Clock_ClockView__WEBPACK_IMPORTED_MODULE_7__["ClockView"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    date: date,
    type: openView,
    onDateChange: handleDateChange,
    onChange: handleChangeAndOpenNext,
    openNextView: function openNextView() {
      return setOpenView(nextView);
    },
    openPreviousView: function openPreviousView() {
      return setOpenView(previousView);
    },
    nextViewAvailable: !nextView,
    previousViewAvailable: !previousView || isDatePickerView(previousView),
    showViewSwitcher: wrapperVariant === 'desktop',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 15
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__["withDefaultProps"])(muiComponentConfig, Picker));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx ***!
  \*******************************************************************************/
/*! exports provided: makePickerWithStateAndWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePickerWithStateAndWrapper", function() { return makePickerWithStateAndWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Picker */ "../node_modules/@material-ui/pickers/src/Picker/Picker.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/KeyboardDateInput */ "../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx");
/* harmony import */ var _shared_withDateAdapterProp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/withDateAdapterProp */ "../node_modules/@material-ui/pickers/src/_shared/withDateAdapterProp.tsx");
/* harmony import */ var _wrappers_makeWrapperComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wrappers/makeWrapperComponent */ "../node_modules/@material-ui/pickers/src/wrappers/makeWrapperComponent.tsx");
/* harmony import */ var _shared_PureDateInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/PureDateInput */ "../node_modules/@material-ui/pickers/src/_shared/PureDateInput.tsx");
/* harmony import */ var _shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_shared/hooks/usePickerState */ "../node_modules/@material-ui/pickers/src/_shared/hooks/usePickerState.ts");



var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx";









var valueManager = {
  emptyValue: null,
  parseInput: _helpers_date_utils__WEBPACK_IMPORTED_MODULE_5__["parsePickerInputValue"],
  areValuesEqual: function areValuesEqual(utils, a, b) {
    return utils.isEqual(a, b);
  }
};
function makePickerWithStateAndWrapper(Wrapper, _ref) {
  var _this = this;

  var name = _ref.name,
      useInterceptProps = _ref.useInterceptProps,
      useValidation = _ref.useValidation,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;
  var WrapperComponent = Object(_wrappers_makeWrapperComponent__WEBPACK_IMPORTED_MODULE_9__["makeWrapperComponent"])(Wrapper, {
    KeyboardDateInputComponent: _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_7__["KeyboardDateInput"],
    PureDateInputComponent: _shared_PureDateInput__WEBPACK_IMPORTED_MODULE_10__["PureDateInput"]
  });

  function PickerWithState(__props) {
    var allProps = useInterceptProps(__props);
    var validationError = useValidation(allProps.value, allProps) !== null;

    var _usePickerState = Object(_shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_11__["usePickerState"])(allProps, valueManager),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps; // Note that we are passing down all the value without spread.
    // It saves us >1kb gzip and make any prop available automatically on any level down.


    var value = allProps.value,
        onChange = allProps.onChange,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(allProps, ["value", "onChange"]);

    var AllDateInputProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputProps, other, {
      validationError: validationError
    });

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](WrapperComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      wrapperProps: wrapperProps,
      DateInputProps: AllDateInputProps
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 7
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Picker__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pickerProps, {
      toolbarTitle: allProps.label || allProps.toolbarTitle,
      ToolbarComponent: other.ToolbarComponent || DefaultToolbarComponent,
      DateInputProps: AllDateInputProps
    }, other, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    })));
  }

  var FinalPickerComponent = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_6__["withDefaultProps"])({
    name: name
  }, Object(_shared_withDateAdapterProp__WEBPACK_IMPORTED_MODULE_8__["withDateAdapterProp"])(PickerWithState)); // @ts-ignore Simply ignore generic values in props, because it is impossible
  // to keep generics without additional cast when using forwardRef
  // @see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35834

  return react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](FinalPickerComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      forwardedRef: ref,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    }));
  });
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/TimePicker/TimePicker.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/TimePicker/TimePicker.tsx ***!
  \**************************************************************************/
/*! exports provided: getTextFieldAriaText, TimePicker, DesktopTimePicker, MobileTimePicker, StaticTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextFieldAriaText", function() { return getTextFieldAriaText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return TimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopTimePicker", function() { return DesktopTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTimePicker", function() { return MobileTimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticTimePicker", function() { return StaticTimePicker; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_icons_Clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/icons/Clock */ "../node_modules/@material-ui/pickers/src/_shared/icons/Clock.tsx");
/* harmony import */ var _TimePickerToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimePickerToolbar */ "../node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx");
/* harmony import */ var _wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wrappers/ResponsiveWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx");
/* harmony import */ var _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_helpers/text-field-helper */ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _helpers_time_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/time-utils */ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts");
/* harmony import */ var _shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/hooks/useValidation */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts");
/* harmony import */ var _wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wrappers/Wrapper */ "../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx");
/* harmony import */ var _Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Picker/makePickerWithState */ "../node_modules/@material-ui/pickers/src/Picker/makePickerWithState.tsx");


var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/TimePicker/TimePicker.tsx";











function getTextFieldAriaText(value, utils) {
  return value && utils.isValid(utils.date(value)) ? "Choose time, selected time is ".concat(utils.format(utils.date(value), 'fullTime')) : 'Choose time';
}

function useInterceptProps(_ref) {
  var ampm = _ref.ampm,
      inputFormat = _ref.inputFormat,
      __maxTime = _ref.maxTime,
      __minTime = _ref.minTime,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["ampm", "inputFormat", "maxTime", "minTime", "openTo", "views"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var minTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__["useParsedDate"])(__minTime);
  var maxTime = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_7__["useParsedDate"])(__maxTime);
  var willUseAmPm = ampm !== null && ampm !== void 0 ? ampm : utils.is12HourCycleInCurrentLocale();
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    views: views,
    openTo: openTo,
    minTime: minTime,
    maxTime: maxTime,
    ampm: willUseAmPm,
    acceptRegex: willUseAmPm ? /[\dapAP]/gi : /\d/gi,
    mask: '__:__',
    disableMaskedInput: willUseAmPm,
    getOpenDialogAriaText: getTextFieldAriaText,
    openPickerIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_icons_Clock__WEBPACK_IMPORTED_MODULE_3__["ClockIcon"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }),
    inputFormat: Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__["pick12hOr24hFormat"])(inputFormat, willUseAmPm, {
      localized: utils.formats.fullTime,
      '12h': utils.formats.fullTime12h,
      '24h': utils.formats.fullTime24h
    })
  }, other);
}

var timePickerConfig = {
  useInterceptProps: useInterceptProps,
  useValidation: Object(_shared_hooks_useValidation__WEBPACK_IMPORTED_MODULE_10__["makeValidationHook"])(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_9__["validateTime"]),
  DefaultToolbarComponent: _TimePickerToolbar__WEBPACK_IMPORTED_MODULE_4__["TimePickerToolbar"]
};
var TimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_12__["makePickerWithStateAndWrapper"])(_wrappers_ResponsiveWrapper__WEBPACK_IMPORTED_MODULE_5__["ResponsiveWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiTimePicker'
}, timePickerConfig));
var DesktopTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_12__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_11__["DesktopWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiDesktopTimePicker'
}, timePickerConfig));
var MobileTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_12__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_11__["MobileWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiMobileTimePicker'
}, timePickerConfig));
var StaticTimePicker = Object(_Picker_makePickerWithState__WEBPACK_IMPORTED_MODULE_12__["makePickerWithStateAndWrapper"])(_wrappers_Wrapper__WEBPACK_IMPORTED_MODULE_11__["StaticWrapper"], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: 'MuiStaticTimePicker'
}, timePickerConfig));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx":
/*!*********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx ***!
  \*********************************************************************************/
/*! exports provided: useStyles, useMeridiemMode, TimePickerToolbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeridiemMode", function() { return useMeridiemMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePickerToolbar", function() { return TimePickerToolbar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _shared_ToolbarText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/ToolbarText */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx");
/* harmony import */ var _shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_shared/ToolbarButton */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx");
/* harmony import */ var _shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_shared/PickerToolbar */ "../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _helpers_time_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_helpers/time-utils */ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx";











var muiComponentConfig = {
  name: 'MuiPickersTimePickerToolbar'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  separator: {
    outline: 0,
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
}, muiComponentConfig);
function useMeridiemMode(date, ampm, onChange) {
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_10__["useUtils"])();
  var meridiemMode = Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_12__["getMeridiem"])(date, utils);
  var handleMeridiemChange = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (mode) {
    var timeWithMeridiem = Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_12__["convertToMeridiem"])(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, 'partial');
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var clockTypographyVariant = 'h3';
var TimePickerToolbar = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_11__["withDefaultProps"])(muiComponentConfig, function (_ref) {
  var _clsx2;

  var ampm = _ref.ampm,
      ampmInClock = _ref.ampmInClock,
      date = _ref.date,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      onChange = _ref.onChange,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$toolbarTitle = _ref.toolbarTitle,
      toolbarTitle = _ref$toolbarTitle === void 0 ? 'SELECT TIME' : _ref$toolbarTitle,
      views = _ref.views,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["ampm", "ampmInClock", "date", "isLandscape", "isMobileKeyboardViewOpen", "onChange", "openView", "setOpenView", "toggleMobileKeyboardView", "toolbarTitle", "views"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_10__["useUtils"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var classes = useStyles();
  var showAmPmControl = Boolean(ampm && !ampmInClock);

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var formatHours = function formatHours(time) {
    return ampm ? utils.format(time, 'hours12h') : utils.format(time, 'hours24h');
  };

  var separator = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    tabIndex: -1,
    value: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_PickerToolbar__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    landscapeDirection: "row",
    toolbarTitle: toolbarTitle,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.penIconLandscape, isLandscape))
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.hourMinuteLabel, (_clsx2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.hourMinuteLabelLandscape, isLandscape), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.hourMinuteLabelReverse, theme.direction === 'rtl'), _clsx2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["arrayIncludes"])(views, 'hours') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__["ToolbarButton"], {
    "data-mui-test": "hours",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    value: date ? formatHours(date) : '--',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["arrayIncludes"])(views, ['hours', 'minutes']) && separator, Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["arrayIncludes"])(views, 'minutes') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__["ToolbarButton"], {
    "data-mui-test": "minutes",
    tabIndex: -1,
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    value: date ? utils.format(date, 'minutes') : '--',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["arrayIncludes"])(views, ['minutes', 'seconds']) && separator, Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["arrayIncludes"])(views, 'seconds') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__["ToolbarButton"], {
    "data-mui-test": "seconds",
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    value: date ? utils.format(date, 'seconds') : '--',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })), showAmPmControl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.ampmSelection, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.ampmLandscape, isLandscape)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__["ToolbarButton"], {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-am-btn",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_shared_ToolbarButton__WEBPACK_IMPORTED_MODULE_7__["ToolbarButton"], {
    disableRipple: true,
    variant: "subtitle2",
    "data-mui-test": "toolbar-pm-btn",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    value: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (TimePickerToolbar);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/TimePicker/index.tsx":
/*!*********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/TimePicker/index.tsx ***!
  \*********************************************************************/
/*! exports provided: getTextFieldAriaText, TimePicker, DesktopTimePicker, MobileTimePicker, StaticTimePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimePicker */ "../node_modules/@material-ui/pickers/src/TimePicker/TimePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextFieldAriaText", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_0__["getTextFieldAriaText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_0__["TimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_0__["DesktopTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_0__["MobileTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_0__["StaticTimePicker"]; });



/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts ***!
  \***********************************************************************/
/*! exports provided: findClosestEnabledDate, isYearOnlyView, isYearAndMonthViews, getFormatAndMaskByViews, parsePickerInputValue, parseRangeInputValue, isRangeValid, isWithinRange, isStartOfRange, isEndOfRange, validateDate, validateDateRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findClosestEnabledDate", function() { return findClosestEnabledDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYearOnlyView", function() { return isYearOnlyView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isYearAndMonthViews", function() { return isYearAndMonthViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFormatAndMaskByViews", function() { return getFormatAndMaskByViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsePickerInputValue", function() { return parsePickerInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRangeInputValue", function() { return parseRangeInputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeValid", function() { return isRangeValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWithinRange", function() { return isWithinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStartOfRange", function() { return isStartOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEndOfRange", function() { return isEndOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDate", function() { return validateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDateRange", function() { return validateDateRange; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");


var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["arrayIncludes"])(views, 'month') && Object(_utils__WEBPACK_IMPORTED_MODULE_1__["arrayIncludes"])(views, 'year');
};
var getFormatAndMaskByViews = function getFormatAndMaskByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return {
      mask: '____',
      inputFormat: utils.formats.year
    };
  }

  if (isYearAndMonthViews(views)) {
    return {
      disableMaskedInput: true,
      inputFormat: utils.formats.monthAndYear
    };
  }

  return {
    mask: '__/__/____',
    inputFormat: utils.formats.keyboardDate
  };
};
function parsePickerInputValue(utils, _ref2) {
  var value = _ref2.value;
  var parsedValue = utils.date(value);
  return utils.isValid(parsedValue) ? parsedValue : null;
}
function parseRangeInputValue(utils, _ref3) {
  var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [null, null] : _ref3$value;
  return value.map(function (date) {
    return !utils.isValid(date) || date === null ? null : utils.startOfDay(utils.date(date));
  });
}
var isRangeValid = function isRangeValid(utils, range) {
  return Boolean(range && range[0] && range[1] && utils.isBefore(range[0], range[1]));
};
var isWithinRange = function isWithinRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isWithinRange(day, range);
};
var isStartOfRange = function isStartOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[0]);
};
var isEndOfRange = function isEndOfRange(utils, day, range) {
  return isRangeValid(utils, range) && utils.isSameDay(day, range[1]);
};
var validateDate = function validateDate(utils, value, _ref4) {
  var minDate = _ref4.minDate,
      maxDate = _ref4.maxDate,
      disableFuture = _ref4.disableFuture,
      shouldDisableDate = _ref4.shouldDisableDate,
      disablePast = _ref4.disablePast;
  var now = utils.date();
  var date = utils.date(value);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(shouldDisableDate && shouldDisableDate(date)):
      return 'shouldDisableDate';

    case Boolean(disableFuture && utils.isAfterDay(date, now)):
      return 'disableFuture';

    case Boolean(disablePast && utils.isBeforeDay(date, now)):
      return 'disablePast';

    case Boolean(minDate && utils.isBeforeDay(date, minDate)):
      return 'minDate';

    case Boolean(maxDate && utils.isAfterDay(date, maxDate)):
      return 'maxDate';

    default:
      return null;
  }
};
var validateDateRange = function validateDateRange(utils, value, dateValidationProps) {
  var _value = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(value, 2),
      start = _value[0],
      end = _value[1]; // for partial input


  if (start === null || end === null) {
    return [null, null];
  }

  var dateValidations = [validateDate(utils, start, dateValidationProps), validateDate(utils, end, dateValidationProps)];

  if (dateValidations[0] || dateValidations[1]) {
    return dateValidations;
  }

  if (!isRangeValid(utils, [utils.date(start), utils.date(end)])) {
    return ['invalidRange', 'invalidRange'];
  }

  return [null, null];
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts":
/*!******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts ***!
  \******************************************************************************/
/*! exports provided: getTextFieldAriaText, getDisplayDate, pick12hOr24hFormat, staticDateWith2DigitTokens, staticDateWith1DigitTokens, checkMaskIsValidForCurrentFormat, maskedDateFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextFieldAriaText", function() { return getTextFieldAriaText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayDate", function() { return getDisplayDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick12hOr24hFormat", function() { return pick12hOr24hFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticDateWith2DigitTokens", function() { return staticDateWith2DigitTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticDateWith1DigitTokens", function() { return staticDateWith1DigitTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMaskIsValidForCurrentFormat", function() { return checkMaskIsValidForCurrentFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedDateFormatter", function() { return maskedDateFormatter; });
function getTextFieldAriaText(rawValue, utils) {
  return rawValue && utils.isValid(utils.date(rawValue)) ? "Choose date, selected date is ".concat(utils.format(utils.date(rawValue), 'fullDate')) : 'Choose date';
}
var getDisplayDate = function getDisplayDate(utils, value, inputFormat) {
  var date = utils.date(value);
  var isEmpty = value === null;

  if (isEmpty) {
    return '';
  }

  return utils.isValid(date) ? utils.formatByString(date, inputFormat) : '';
};
function pick12hOr24hFormat(userFormat, ampm, formats) {
  if (userFormat) {
    return userFormat;
  }

  if (typeof ampm === 'undefined') {
    return formats.localized;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
var MASK_USER_INPUT_SYMBOL = '_';
var staticDateWith2DigitTokens = new Date('2019-11-21T22:30:00.000');
var staticDateWith1DigitTokens = new Date('2019-01-01T09:00:00.000');
function checkMaskIsValidForCurrentFormat(mask, format, acceptRegex, utils) {
  var formattedDateWith1Digit = utils.formatByString(utils.date(staticDateWith1DigitTokens), format);
  var inferredFormatPatternWith1Digits = formattedDateWith1Digit.replace(acceptRegex, MASK_USER_INPUT_SYMBOL);
  var inferredFormatPatternWith2Digits = utils.formatByString(utils.date(staticDateWith2DigitTokens), format).replace(acceptRegex, '_');
  var isMaskValid = inferredFormatPatternWith2Digits === mask && inferredFormatPatternWith1Digits === mask; // @ts-ignore Ignore this warning for luxon because it is appearing mostly always (related to the formats structure of luxon itself)

  if (!isMaskValid && utils.lib !== 'luxon' && "development" !== 'production') {
    console.warn("The mask \"".concat(mask, "\" you passed is not valid for the format used ").concat(format, ". Falling down to uncontrolled not-masked input."));
  }

  return isMaskValid;
}
var maskedDateFormatter = function maskedDateFormatter(mask, acceptRegexp) {
  return function (value) {
    return value.split('').map(function (char, i) {
      acceptRegexp.lastIndex = 0;

      if (i > mask.length - 1) {
        return '';
      }

      var maskChar = mask[i];
      var nextMaskChar = mask[i + 1];
      var acceptedChar = acceptRegexp.test(char) ? char : '';
      var formattedChar = maskChar === MASK_USER_INPUT_SYMBOL ? acceptedChar : maskChar + acceptedChar;

      if (i === value.length - 1 && nextMaskChar && nextMaskChar !== MASK_USER_INPUT_SYMBOL) {
        // when cursor at the end of mask part (e.g. month) prerender next symbol "21" -> "21/"
        return formattedChar ? formattedChar + nextMaskChar : '';
      }

      return formattedChar;
    }).join('');
  };
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts ***!
  \***********************************************************************/
/*! exports provided: getMeridiem, convertValueToMeridiem, convertToMeridiem, getMinutes, getHours, getSecondsInDay, createIsAfterIgnoreDatePart, validateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMeridiem", function() { return getMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertValueToMeridiem", function() { return convertValueToMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToMeridiem", function() { return convertToMeridiem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecondsInDay", function() { return getSecondsInDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIsAfterIgnoreDatePart", function() { return createIsAfterIgnoreDatePart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateTime", function() { return validateTime; });
var getMeridiem = function getMeridiem(date, utils) {
  if (!date) {
    return null;
  }

  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertValueToMeridiem = function convertValueToMeridiem(value, meridiem, ampm) {
  if (ampm) {
    var currentMeridiem = value >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }

  return value;
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  var newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
var clockCenter = {
  x: 260 / 2,
  y: 260 / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - clockCenter.x;
  var y = offsetY - clockCenter.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue.value;

  value = value * step % 60;
  return value;
};
var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue2 = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue2.value,
      distance = _getAngleValue2.distance;

  var hour = value || 12;

  if (!ampm) {
    if (distance < 90) {
      hour += 12;
      hour %= 24;
    }
  } else {
    hour %= 12;
  }

  return hour;
};
function getSecondsInDay(date, utils) {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
}
var createIsAfterIgnoreDatePart = function createIsAfterIgnoreDatePart(disableIgnoringDatePartForTimeValidation, utils) {
  return function (dateLeft, dateRight) {
    if (disableIgnoringDatePartForTimeValidation) {
      return utils.isAfter(dateLeft, dateRight);
    }

    return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
  };
};
var validateTime = function validateTime(utils, value, _ref) {
  var minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      shouldDisableTime = _ref.shouldDisableTime,
      disableIgnoringDatePartForTimeValidation = _ref.disableIgnoringDatePartForTimeValidation;
  var date = utils.date(value);
  var isAfterComparingFn = createIsAfterIgnoreDatePart(Boolean(disableIgnoringDatePartForTimeValidation), utils);

  if (value === null) {
    return null;
  }

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(minTime && isAfterComparingFn(minTime, date)):
      return 'minTime';

    case Boolean(maxTime && isAfterComparingFn(date, maxTime)):
      return 'maxTime';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getHours(date), 'hours')):
      return 'shouldDisableTime-hours';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getMinutes(date), 'minutes')):
      return 'shouldDisableTime-minutes';

    case Boolean(shouldDisableTime && shouldDisableTime(utils.getSeconds(date), 'seconds')):
      return 'shouldDisableTime-seconds';

    default:
      return null;
  }
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_helpers/utils.ts ***!
  \******************************************************************/
/*! exports provided: arrayIncludes, onSpaceOrEnter, pipe, executeInTheNextEventLoopTick, createDelegatedEventHandler, mergeRefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayIncludes", function() { return arrayIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSpaceOrEnter", function() { return onSpaceOrEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeInTheNextEventLoopTick", function() { return executeInTheNextEventLoopTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDelegatedEventHandler", function() { return createDelegatedEventHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);


/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}
var onSpaceOrEnter = function onSpaceOrEnter(innerFn, onFocus) {
  return function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      innerFn(); // prevent any side effects

      event.preventDefault();
      event.stopPropagation();
    }

    if (onFocus) {
      onFocus(event);
    }
  };
};
/* Quick untyped helper to improve function composition readability */

var pipe = function pipe() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduceRight(function (prevFn, nextFn) {
    return function () {
      return nextFn(prevFn.apply(void 0, arguments));
    };
  }, function (value) {
    return value;
  });
};
var executeInTheNextEventLoopTick = function executeInTheNextEventLoopTick(fn) {
  setTimeout(fn, 0);
};
function createDelegatedEventHandler(fn, onEvent) {
  return function (event) {
    fn(event);

    if (onEvent) {
      onEvent(event);
    }
  };
}
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (typeof ref === 'object' && ref != null) {
        // @ts-ignore .current is not a readonly, hold on ts
        ref.current = value;
      }
    });
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx ***!
  \**************************************************************************/
/*! exports provided: useStyles, ArrowSwitcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowSwitcher", function() { return ArrowSwitcher; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/ArrowLeft */ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowLeft.tsx");
/* harmony import */ var _icons_ArrowRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/ArrowRight */ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowRight.tsx");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {},
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButtonMargin: {
      marginRight: 24
    },
    hidden: {
      visibility: 'hidden'
    }
  };
}, {
  name: 'MuiPickersArrowSwitcher'
});
var PureArrowSwitcher = react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  var _clsx;

  var className = props.className,
      isLeftDisabled = props.isLeftDisabled,
      isLeftHidden = props.isLeftHidden,
      isRightDisabled = props.isRightDisabled,
      isRightHidden = props.isRightHidden,
      leftArrowButtonProps = props.leftArrowButtonProps,
      leftArrowButtonText = props.leftArrowButtonText,
      _props$leftArrowIcon = props.leftArrowIcon,
      leftArrowIcon = _props$leftArrowIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icons_ArrowLeft__WEBPACK_IMPORTED_MODULE_8__["ArrowLeftIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }) : _props$leftArrowIcon,
      onLeftClick = props.onLeftClick,
      onRightClick = props.onRightClick,
      rightArrowButtonProps = props.rightArrowButtonProps,
      rightArrowButtonText = props.rightArrowButtonText,
      _props$rightArrowIcon = props.rightArrowIcon,
      rightArrowIcon = _props$rightArrowIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_9__["ArrowRightIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 22
    }
  }) : _props$rightArrowIcon,
      text = props.text,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "isLeftDisabled", "isLeftHidden", "isRightDisabled", "isRightHidden", "leftArrowButtonProps", "leftArrowButtonText", "leftArrowIcon", "onLeftClick", "onRightClick", "rightArrowButtonProps", "rightArrowButtonText", "rightArrowIcon", "text"]);

  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var isRtl = theme.direction === 'rtl';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className),
    ref: ref
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-mui-test": "previous-arrow-button",
    size: "small",
    "aria-label": leftArrowButtonText
  }, leftArrowButtonProps, {
    disabled: isLeftDisabled,
    onClick: onLeftClick,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.iconButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className, (_clsx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.hidden, isLeftHidden), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.previousMonthButtonMargin, !text), _clsx)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), isRtl ? rightArrowIcon : leftArrowIcon), text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "subtitle1",
    display: "inline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-mui-test": "next-arrow-button",
    size: "small",
    "aria-label": rightArrowButtonText
  }, rightArrowButtonProps, {
    disabled: isRightDisabled,
    onClick: onRightClick,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.iconButton, rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.hidden, Boolean(isRightHidden))),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }), isRtl ? leftArrowIcon : rightArrowIcon));
});
PureArrowSwitcher.displayName = 'ArrowSwitcher';
var ArrowSwitcher = react__WEBPACK_IMPORTED_MODULE_3__["memo"](PureArrowSwitcher);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx":
/*!******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx ***!
  \******************************************************************************/
/*! exports provided: KeyboardDateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardDateInput", function() { return KeyboardDateInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "../node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/CalendarIcon */ "../node_modules/@material-ui/pickers/src/_shared/icons/CalendarIcon.tsx");
/* harmony import */ var _hooks_useMaskedInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks/useMaskedInput */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useMaskedInput.tsx");
/* harmony import */ var _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_helpers/text-field-helper */ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts");





var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx";










var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var containerRef = _ref.containerRef,
      _ref$inputRef = _ref.inputRef,
      inputRef = _ref$inputRef === void 0 ? null : _ref$inputRef,
      _ref$forwardedRef = _ref.forwardedRef,
      forwardedRef = _ref$forwardedRef === void 0 ? null : _ref$forwardedRef,
      hideOpenPickerButton = _ref.disableOpenPicker,
      _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
      getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_12__["getTextFieldAriaText"] : _ref$getOpenDialogAri,
      InputAdornmentProps = _ref.InputAdornmentProps,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      OpenPickerButtonProps = _ref.OpenPickerButtonProps,
      _ref$openPickerIcon = _ref.openPickerIcon,
      openPickerIcon = _ref$openPickerIcon === void 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_10__["CalendarIcon"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }
  }) : _ref$openPickerIcon,
      renderInput = _ref.renderInput,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["containerRef", "inputRef", "forwardedRef", "disableOpenPicker", "getOpenDialogAriaText", "InputAdornmentProps", "InputProps", "openPicker", "OpenPickerButtonProps", "openPickerIcon", "renderInput"]);

  var utils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_9__["useUtils"])();
  var inputRefHandle = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(inputRef, forwardedRef);
  var textFieldProps = Object(_hooks_useMaskedInput__WEBPACK_IMPORTED_MODULE_11__["useMaskedInput"])(other);
  var adornmentPosition = (InputAdornmentProps === null || InputAdornmentProps === void 0 ? void 0 : InputAdornmentProps.position) || 'end';
  return renderInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: containerRef,
    inputRef: inputRefHandle
  }, textFieldProps, {
    InputProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, InputProps, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(adornmentPosition, "Adornment"), hideOpenPickerButton ? undefined : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      position: adornmentPosition
    }, InputAdornmentProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      edge: adornmentPosition,
      "data-mui-test": "open-picker-from-keyboard",
      disabled: other.disabled,
      "aria-label": getOpenDialogAriaText(other.rawValue, utils)
    }, OpenPickerButtonProps, {
      onClick: onOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }), openPickerIcon))))
  }));
};
KeyboardDateInput.propTypes = {
  acceptRegex: prop_types__WEBPACK_IMPORTED_MODULE_5__["instanceOf"](RegExp),
  getOpenDialogAriaText: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"],
  mask: prop_types__WEBPACK_IMPORTED_MODULE_5__["string"],
  OpenPickerButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_5__["object"],
  openPickerIcon: prop_types__WEBPACK_IMPORTED_MODULE_5__["node"],
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"].isRequired,
  rifmFormatter: prop_types__WEBPACK_IMPORTED_MODULE_5__["func"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx ***!
  \**************************************************************************/
/*! exports provided: useStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "../node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _icons_Pen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/Pen */ "../node_modules/@material-ui/pickers/src/_shared/icons/Pen.tsx");
/* harmony import */ var _icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/CalendarIcon */ "../node_modules/@material-ui/pickers/src/_shared/icons/CalendarIcon.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/PickerToolbar.tsx";










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var toolbarBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background.default;
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: toolbarBackground,
      color: theme.palette.getContrastText(toolbarBackground)
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    dateTitleContainer: {
      flex: 1
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

function defaultGetKeyboardInputSwitchingButtonText(isKeyboardInputOpen) {
  return isKeyboardInputOpen ? 'text input view is open, go to calendar view' : 'calendar view is open, go to text input view';
}

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$getMobileKeyboar = _ref.getMobileKeyboardInputViewButtonText,
      getMobileKeyboardInputViewButtonText = _ref$getMobileKeyboar === void 0 ? defaultGetKeyboardInputSwitchingButtonText : _ref$getMobileKeyboar,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      _ref$landscapeDirecti = _ref.landscapeDirection,
      landscapeDirection = _ref$landscapeDirecti === void 0 ? 'column' : _ref$landscapeDirecti,
      penIconClassName = _ref.penIconClassName,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      toolbarTitle = _ref.toolbarTitle;
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "data-mui-test": "picker-toolbar",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.toolbarLandscape, isLandscape), className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-mui-test": "picker-toolbar-title",
    color: "inherit",
    variant: "overline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, toolbarTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    justifyContent: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "data-mui-test": "toggle-mobile-keyboard-view",
    "aria-label": getMobileKeyboardInputViewButtonText(isMobileKeyboardViewOpen),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, isMobileKeyboardViewOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icons_CalendarIcon__WEBPACK_IMPORTED_MODULE_9__["CalendarIcon"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icons_Pen__WEBPACK_IMPORTED_MODULE_8__["PenIcon"], {
    color: "inherit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PickerToolbar);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/PickersModalDialog.tsx":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/PickersModalDialog.tsx ***!
  \*******************************************************************************/
/*! exports provided: useStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "../node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "../node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "../node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");





var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/PickersModalDialog.tsx";









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  dialogRoot: {
    minWidth: _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["DIALOG_WIDTH"]
  },
  dialogRootWider: {
    minWidth: _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["DIALOG_WIDTH_WIDER"]
  },
  dialogContainer: {
    '&:focus > $dialogRoot': {
      outline: 'auto',
      '@media (pointer:coarse)': {
        outline: 0
      }
    }
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  dialogAction: {// requested for overrides
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/mui-org/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
}, {
  name: 'MuiPickersModalDialog'
});

var PickersModalDialog = function PickersModalDialog(props) {
  var _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? 'Cancel' : _props$cancelText,
      children = props.children,
      MuiDialogClasses = props.classes,
      _props$clearable = props.clearable,
      clearable = _props$clearable === void 0 ? false : _props$clearable,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$okText = props.okText,
      okText = _props$okText === void 0 ? 'OK' : _props$okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      showTabs = props.showTabs,
      _props$showTodayButto = props.showTodayButton,
      showTodayButton = _props$showTodayButto === void 0 ? false : _props$showTodayButto,
      _props$todayText = props.todayText,
      todayText = _props$todayText === void 0 ? 'Today' : _props$todayText,
      wider = props.wider,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, ["cancelText", "children", "classes", "clearable", "clearText", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "showTabs", "showTodayButton", "todayText", "wider"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    onClose: onDismiss,
    classes: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      container: classes.dialogContainer,
      paper: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.dialogRoot, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.dialogRootWider, wider))
    }, MuiDialogClasses)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.dialog,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.dialogAction, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.withAdditionalAction, clearable || showTodayButton)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, clearable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "data-mui-test": "clear-action-button",
    color: "primary",
    onClick: onClear,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, clearText), showTodayButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "data-mui-test": "today-action-button",
    color: "primary",
    onClick: onSetToday,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, todayText), cancelText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onDismiss,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, cancelText), okText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "primary",
    onClick: onAccept,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, okText)));
};

/* harmony default export */ __webpack_exports__["default"] = (PickersModalDialog);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/PickersPopper.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/PickersPopper.tsx ***!
  \**************************************************************************/
/*! exports provided: useStyles, PickersPopper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickersPopper", function() { return PickersPopper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grow */ "../node_modules/@material-ui/core/esm/Grow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Popper */ "../node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Unstable_TrapFocus */ "../node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hooks/useKeyDown */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/PickersPopper.tsx";












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["makeStyles"])(function (theme) {
  return {
    root: {
      zIndex: theme.zIndex.modal
    },
    paper: {
      transformOrigin: 'top center',
      '&:focus': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["IS_TOUCH_DEVICE_MEDIA"], {
        outline: 0
      })
    },
    topTransition: {
      transformOrigin: 'bottom center'
    }
  };
}, {
  name: 'MuiPickersPopper'
});
var PickersPopper = function PickersPopper(props) {
  var anchorEl = props.anchorEl,
      children = props.children,
      _props$innerRef = props.innerRef,
      innerRef = _props$innerRef === void 0 ? null : _props$innerRef,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      PopperProps = props.PopperProps,
      role = props.role,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_4__["default"] : _props$TransitionComp,
      TrapFocusProps = props.TrapFocusProps;
  var classes = useStyles();
  var paperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handlePopperRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_8__["useForkRef"])(paperRef, innerRef);
  var lastFocusedElementRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var popperOptions = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return {
      onCreate: onOpen
    };
  }, [onOpen]);
  Object(_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_10__["useGlobalKeyDown"])(open, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_10__["keycode"].Esc, onClose));
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (role === 'tooltip') {
      return;
    }

    if (open) {
      lastFocusedElementRef.current = document.activeElement;
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      lastFocusedElementRef.current.focus();
    }
  }, [open, role]);

  var handleBlur = function handleBlur() {
    if (!open) {
      return;
    } // document.activeElement is updating on the next tick after `blur` called


    Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_12__["executeInTheNextEventLoopTick"])(function () {
      var _paperRef$current;

      if ((_paperRef$current = paperRef.current) === null || _paperRef$current === void 0 ? void 0 : _paperRef$current.contains(document.activeElement)) {
        return;
      }

      onClose();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    transition: true,
    role: role,
    open: open,
    anchorEl: anchorEl,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, PopperProps === null || PopperProps === void 0 ? void 0 : PopperProps.className),
    popperOptions: popperOptions
  }, PopperProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }), function (_ref) {
    var TransitionProps = _ref.TransitionProps,
        placement = _ref.placement;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Unstable_TrapFocus__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      open: open,
      disableAutoFocus: true,
      disableEnforceFocus: role === 'tooltip',
      isEnabled: function isEnabled() {
        return true;
      },
      getDoc: function getDoc() {
        var _paperRef$current$own, _paperRef$current2;

        return (_paperRef$current$own = (_paperRef$current2 = paperRef.current) === null || _paperRef$current2 === void 0 ? void 0 : _paperRef$current2.ownerDocument) !== null && _paperRef$current$own !== void 0 ? _paperRef$current$own : document;
      }
    }, TrapFocusProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tabIndex: -1,
      elevation: 8,
      ref: handlePopperRef,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.paper, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.topTransition, placement === 'top')),
      onBlur: handleBlur,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, children)));
  });
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/PureDateInput.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/PureDateInput.tsx ***!
  \**************************************************************************/
/*! exports provided: PureDateInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureDateInput", function() { return PureDateInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _hooks_useUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/text-field-helper */ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts");






var PureDateInput = function PureDateInput(_ref) {
  var containerRef = _ref.containerRef,
      disabled = _ref.disabled,
      forwardedRef = _ref.forwardedRef,
      _ref$getOpenDialogAri = _ref.getOpenDialogAriaText,
      getOpenDialogAriaText = _ref$getOpenDialogAri === void 0 ? _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_5__["getTextFieldAriaText"] : _ref$getOpenDialogAri,
      inputFormat = _ref.inputFormat,
      InputProps = _ref.InputProps,
      label = _ref.label,
      onOpen = _ref.openPicker,
      rawValue = _ref.rawValue,
      renderInput = _ref.renderInput,
      _ref$TextFieldProps = _ref.TextFieldProps,
      TextFieldProps = _ref$TextFieldProps === void 0 ? {} : _ref$TextFieldProps,
      validationError = _ref.validationError;
  var utils = Object(_hooks_useUtils__WEBPACK_IMPORTED_MODULE_4__["useUtils"])();
  var PureDateInputProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  var inputValue = Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_5__["getDisplayDate"])(utils, rawValue, inputFormat);
  return renderInput(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: label,
    disabled: disabled,
    ref: containerRef,
    inputRef: forwardedRef,
    error: validationError,
    InputProps: PureDateInputProps,
    inputProps: {
      disabled: disabled,
      'aria-readonly': true,
      'aria-label': getOpenDialogAriaText(rawValue, utils),
      value: inputValue,
      onClick: onOpen,
      onKeyDown: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["onSpaceOrEnter"])(onOpen)
    }
  }, TextFieldProps));
};
PureDateInput.propTypes = {
  acceptRegex: prop_types__WEBPACK_IMPORTED_MODULE_2__["instanceOf"](RegExp),
  getOpenDialogAriaText: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  mask: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  OpenPickerButtonProps: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  openPickerIcon: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
  rifmFormatter: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx ***!
  \**************************************************************************/
/*! exports provided: useStyles, ToolbarButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarButton", function() { return ToolbarButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ToolbarText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToolbarText */ "../node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/ToolbarButton.tsx";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])({
  root: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
}, {
  name: 'MuiPickersToolbarButton'
});
var ToolbarButton = function ToolbarButton(props) {
  var align = props.align,
      className = props.className,
      selected = props.selected,
      typographyClassName = props.typographyClassName,
      value = props.value,
      variant = props.variant,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["align", "className", "selected", "typographyClassName", "value", "variant"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-mui-test": "toolbar-button",
    variant: "text",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ToolbarText__WEBPACK_IMPORTED_MODULE_6__["default"], {
    align: align,
    className: typographyClassName,
    variant: variant,
    value: value,
    selected: selected,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};
ToolbarButton.displayName = 'ToolbarButton';
/* harmony default export */ __webpack_exports__["default"] = (ToolbarButton);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx ***!
  \************************************************************************/
/*! exports provided: useStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/ToolbarText.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background.default);
  return {
    root: {
      transition: theme.transitions.create('color'),
      color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["fade"])(textColor, 0.54),
      '&$selected': {
        color: textColor
      }
    },
    selected: {}
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(props) {
  var className = props.className,
      selected = props.selected,
      value = props.value,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "selected", "value"]);

  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.selected, selected))
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), value);
};

/* harmony default export */ __webpack_exports__["default"] = (ToolbarText);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx":
/*!*************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx ***!
  \*************************************************************************************/
/*! exports provided: useParsedDate, useNextMonthDisabled, usePreviousMonthDisabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParsedDate", function() { return useParsedDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNextMonthDisabled", function() { return useNextMonthDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePreviousMonthDisabled", function() { return usePreviousMonthDisabled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");


function useParsedDate(possiblyUnparsedValue) {
  var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_1__["useUtils"])();
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return typeof possiblyUnparsedValue === 'undefined' ? undefined : utils.date(possiblyUnparsedValue);
  }, [possiblyUnparsedValue, utils]);
}
function useNextMonthDisabled(month, _ref) {
  var disableFuture = _ref.disableFuture,
      maxDate = _ref.maxDate;
  var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_1__["useUtils"])();
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var now = utils.date();
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils]);
}
function usePreviousMonthDisabled(month, _ref2) {
  var disablePast = _ref2.disablePast,
      minDate = _ref2.minDate;
  var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_1__["useUtils"])();
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    var now = utils.date();
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils]);
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx ***!
  \**********************************************************************************/
/*! exports provided: CanAutoFocusContext, useCanAutoFocus, useAutoFocusControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanAutoFocusContext", function() { return CanAutoFocusContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCanAutoFocus", function() { return useCanAutoFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAutoFocusControl", function() { return useAutoFocusControl; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var CanAutoFocusContext = react__WEBPACK_IMPORTED_MODULE_1__["createContext"](true);
var useCanAutoFocus = function useCanAutoFocus() {
  return react__WEBPACK_IMPORTED_MODULE_1__["useContext"](CanAutoFocusContext);
};
function useAutoFocusControl(open) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      canAutoFocus = _React$useState2[0],
      setCanAutoFocus = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (!open) {
      setCanAutoFocus(false);
    }
  }, [open]);
  return {
    canAutoFocus: canAutoFocus,
    onOpen: react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
      return setCanAutoFocus(true);
    }, [])
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useIsLandscape.tsx":
/*!*********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useIsLandscape.tsx ***!
  \*********************************************************************************/
/*! exports provided: useIsLandscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsLandscape", function() { return useIsLandscape; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useKeyDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useKeyDown */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");





var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(views, customOrientation) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](getOrientation()),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  Object(_useKeyDown__WEBPACK_IMPORTED_MODULE_2__["useIsomorphicEffect"])(function () {
    var eventHandler = function eventHandler() {
      setOrientation(getOrientation());
    };

    window.addEventListener('orientationchange', eventHandler);
    return function () {
      window.removeEventListener('orientationchange', eventHandler);
    };
  }, []);

  if (Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_3__["arrayIncludes"])(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }

  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts ***!
  \****************************************************************************/
/*! exports provided: useIsomorphicEffect, runKeyHandler, useKeyDownHandler, useGlobalKeyDown, keycode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsomorphicEffect", function() { return useIsomorphicEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runKeyHandler", function() { return runKeyHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useKeyDownHandler", function() { return useKeyDownHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGlobalKeyDown", function() { return useGlobalKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keycode", function() { return keycode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useIsomorphicEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"];
function runKeyHandler(event, keyHandlers) {
  var handler = keyHandlers[event.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    event.preventDefault();
  }
}
function useKeyDownHandler(active, keyHandlers) {
  var keyHandlersRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (event) {
    if (active) {
      runKeyHandler(event, keyHandlersRef.current);
    }
  }, [active]);
}
function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }

    return undefined;
  }, [active]);
}
var keycode = {
  ArrowUp: 38,
  ArrowDown: 40,
  ArrowLeft: 37,
  ArrowRight: 39,
  Enter: 13,
  Home: 36,
  End: 35,
  PageUp: 33,
  PageDown: 34,
  Esc: 27
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useMaskedInput.tsx":
/*!*********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useMaskedInput.tsx ***!
  \*********************************************************************************/
/*! exports provided: useMaskedInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMaskedInput", function() { return useMaskedInput; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rifm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rifm */ "../node_modules/rifm/dist/rifm.esm.js");
/* harmony import */ var _useUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_helpers/text-field-helper */ "../node_modules/@material-ui/pickers/src/_helpers/text-field-helper.ts");







function useMaskedInput(_ref) {
  var _ref$acceptRegex = _ref.acceptRegex,
      acceptRegex = _ref$acceptRegex === void 0 ? /[\d]/gi : _ref$acceptRegex,
      disabled = _ref.disabled,
      disableMaskedInput = _ref.disableMaskedInput,
      ignoreInvalidInputs = _ref.ignoreInvalidInputs,
      inputFormat = _ref.inputFormat,
      inputProps = _ref.inputProps,
      label = _ref.label,
      mask = _ref.mask,
      onChange = _ref.onChange,
      rawValue = _ref.rawValue,
      readOnly = _ref.readOnly,
      rifmFormatter = _ref.rifmFormatter,
      TextFieldProps = _ref.TextFieldProps,
      validationError = _ref.validationError;
  var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_4__["useUtils"])();
  var isFocusedRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);
  var getInputValue = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    return Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__["getDisplayDate"])(utils, rawValue, inputFormat);
  }, [inputFormat, rawValue, utils]);
  var formatHelperText = utils.getFormatHelperText(inputFormat);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](getInputValue()),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      innerInputValue = _React$useState2[0],
      setInnerInputValue = _React$useState2[1];

  var shouldUseMaskedInput = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    // formatting of dates is a quite slow thing, so do not make useless .format calls
    if (!mask || disableMaskedInput) {
      return false;
    }

    return Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__["checkMaskIsValidForCurrentFormat"])(mask, inputFormat, acceptRegex, utils);
  }, [acceptRegex, disableMaskedInput, inputFormat, mask, utils]);
  var formatter = react__WEBPACK_IMPORTED_MODULE_2__["useMemo"](function () {
    return shouldUseMaskedInput && mask ? Object(_helpers_text_field_helper__WEBPACK_IMPORTED_MODULE_6__["maskedDateFormatter"])(mask, acceptRegex) : function (st) {
      return st;
    };
  }, [acceptRegex, mask, shouldUseMaskedInput]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    // We do not need to update the input value on keystroke
    // Because library formatters can change inputs from 12/12/2 to 12/12/0002
    if ((rawValue === null || utils.isValid(rawValue)) && !isFocusedRef.current) {
      setInnerInputValue(getInputValue());
    }
  }, [utils, getInputValue, rawValue]);

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === mask ? '' : text;
    setInnerInputValue(finalString);
    var date = finalString === null ? null : utils.parse(finalString, inputFormat);

    if (ignoreInvalidInputs && !utils.isValid(date)) {
      return;
    }

    onChange(date, finalString || undefined);
  };

  var rifmProps = Object(rifm__WEBPACK_IMPORTED_MODULE_3__["useRifm"])({
    value: innerInputValue,
    onChange: handleChange,
    format: rifmFormatter || formatter
  });
  var inputStateArgs = shouldUseMaskedInput ? rifmProps : {
    value: innerInputValue,
    onChange: function onChange(event) {
      handleChange(event.currentTarget.value);
    }
  };
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: label,
    disabled: disabled,
    error: validationError,
    helperText: formatHelperText,
    inputProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputStateArgs, {
      disabled: disabled,
      // make spreading in custom input easier
      placeholder: formatHelperText,
      readOnly: readOnly,
      type: shouldUseMaskedInput ? 'tel' : 'text'
    }, inputProps, {
      onFocus: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["createDelegatedEventHandler"])(function () {
        isFocusedRef.current = true;
      }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.onFocus),
      onBlur: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["createDelegatedEventHandler"])(function () {
        isFocusedRef.current = false;
      }, inputProps === null || inputProps === void 0 ? void 0 : inputProps.onBlur)
    })
  }, TextFieldProps);
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useOpenState.ts":
/*!******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useOpenState.ts ***!
  \******************************************************************************/
/*! exports provided: useOpenState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOpenState", function() { return useOpenState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var isControllingOpenProp = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](typeof open === 'boolean').current;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openState = _React$useState2[0],
      setIsOpenState = _React$useState2[1]; // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (e.g. initially opened)


  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }

      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  var setIsOpen = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (newIsOpen) {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }

    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen: setIsOpen
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/usePickerState.ts":
/*!********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/usePickerState.ts ***!
  \********************************************************************************/
/*! exports provided: usePickerState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePickerState", function() { return usePickerState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useOpenState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useOpenState */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useOpenState.ts");
/* harmony import */ var _useUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");




function usePickerState(props, valueManager) {
  var inputFormat = props.inputFormat,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      onChange = props.onChange,
      disableCloseOnSelect = props.disableCloseOnSelect,
      value = props.value;

  if (!inputFormat) {
    throw new Error('inputFormat prop is required');
  }

  var now = Object(_useUtils__WEBPACK_IMPORTED_MODULE_3__["useNow"])();
  var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_3__["useUtils"])();

  var _useOpenState = Object(_useOpenState__WEBPACK_IMPORTED_MODULE_2__["useOpenState"])(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](valueManager.parseInput(utils, props)),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      pickerDate = _React$useState2[0],
      setPickerDate = _React$useState2[1]; // Mobile keyboard view is a special case.
  // When it's open picker should work like closed, cause we are just showing text field


  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      isMobileKeyboardViewOpen = _React$useState4[0],
      setMobileKeyboardViewOpen = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var parsedDateValue = valueManager.parseInput(utils, props);
    setPickerDate(function (currentPickerDate) {
      if (!valueManager.areValuesEqual(utils, currentPickerDate, parsedDateValue)) {
        return parsedDateValue;
      }

      return currentPickerDate;
    }); // We need to react only on value change, because `date` could potentially return new Date() on each render
  }, [value, utils]); // eslint-disable-line

  var acceptDate = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (acceptedDate, needClosePicker) {
    onChange(acceptedDate);

    if (needClosePicker) {
      setIsOpen(false);

      if (onAccept) {
        onAccept(acceptedDate);
      }
    }
  }, [onAccept, onChange, setIsOpen]);
  var wrapperProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return {
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(valueManager.emptyValue, true);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate, true);
      },
      onDismiss: function onDismiss() {
        return setIsOpen(false);
      },
      onSetToday: function onSetToday() {
        // TODO FIX ME
        setPickerDate(now);
        acceptDate(now, !disableCloseOnSelect);
      }
    };
  }, [acceptDate, disableCloseOnSelect, isOpen, now, pickerDate, setIsOpen, valueManager.emptyValue]);
  var pickerProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return {
      // canAutoFocus,
      date: pickerDate,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: function toggleMobileKeyboardView() {
        if (!isMobileKeyboardViewOpen) {
          // accept any partial input done by React.user
          setPickerDate(pickerDate);
        }

        setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
      },
      onDateChange: function onDateChange(newDate, wrapperVariant) {
        var selectionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'partial';
        setPickerDate(newDate);

        if (selectionState === 'partial') {
          acceptDate(newDate, false);
        }

        if (selectionState === 'finish') {
          var shouldCloseOnSelect = !(disableCloseOnSelect !== null && disableCloseOnSelect !== void 0 ? disableCloseOnSelect : wrapperVariant === 'mobile');
          acceptDate(newDate, shouldCloseOnSelect);
        } // if selectionState === "shallow" do nothing (we already update picker state)

      }
    };
  }, [acceptDate, disableCloseOnSelect, isMobileKeyboardViewOpen, pickerDate]);
  var inputProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    return {
      onChange: onChange,
      inputFormat: inputFormat,
      open: isOpen,
      rawValue: value,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [onChange, inputFormat, isOpen, value, readOnly, disabled, setIsOpen]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"](pickerState, function () {
    return {
      MuiPickerState: {
        pickerDate: pickerDate,
        other: pickerState
      }
    };
  });
  return pickerState;
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts ***!
  \**************************************************************************/
/*! exports provided: useUtils, useNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNow", function() { return useNow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../LocalizationProvider */ "../node_modules/@material-ui/pickers/src/LocalizationProvider.tsx");



// TODO uncomment when syntax will be allowed by next babel
function checkUtils(utils)
/* :asserts utils is MuiPickersAdapter */
{
  if (!utils) {
    throw new Error('Can not find utils in context. It looks like you forgot to wrap your component in LocalizationProvider, or pass dateAdapter prop directly.');
  }
}

function useUtils() {
  var utils = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_LocalizationProvider__WEBPACK_IMPORTED_MODULE_1__["MuiPickersAdapterContext"]);
  checkUtils(utils);
  return utils;
}
function useNow() {
  var utils = useUtils();
  var now = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](utils.date());
  return now.current;
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useValidation.ts ***!
  \*******************************************************************************/
/*! exports provided: makeValidationHook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeValidationHook", function() { return makeValidationHook; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");



var defaultIsSameError = function defaultIsSameError(a, b) {
  return a === b;
};

function makeValidationHook(validateFn) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      defaultValidationError = _ref.defaultValidationError,
      _ref$isSameError = _ref.isSameError,
      isSameError = _ref$isSameError === void 0 ? defaultIsSameError : _ref$isSameError;

  return function (value, props) {
    var utils = Object(_useUtils__WEBPACK_IMPORTED_MODULE_1__["useUtils"])();
    var previousValidationErrorRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](defaultValidationError || null);
    var validationError = validateFn(utils, value, props);
    react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
      if (props.onError && !isSameError(validationError, previousValidationErrorRef.current)) {
        props.onError(validationError, value);
      }

      previousValidationErrorRef.current = validationError;
    }, [previousValidationErrorRef, props, validationError, value]);
    return validationError;
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/hooks/useViews.tsx":
/*!***************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/hooks/useViews.tsx ***!
  \***************************************************************************/
/*! exports provided: useViews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViews", function() { return useViews; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");



function useViews(_ref) {
  var views = _ref.views,
      openTo = _ref.openTo,
      onChange = _ref.onChange,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](openTo && Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["arrayIncludes"])(views, openTo) ? openTo : views[0]),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      openView = _React$useState2[0],
      setOpenView = _React$useState2[1];

  var setOpenViewEnhanced = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    setOpenView.apply(void 0, arguments);
  }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
  var previousView = views[views.indexOf(openView) - 1];
  var nextView = views[views.indexOf(openView) + 1];
  var openNext = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function () {
    if (nextView) {
      setOpenViewEnhanced(nextView);
    }
  }, [nextView, setOpenViewEnhanced]);
  var handleChangeAndOpenNext = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (date, currentViewSelectionState) {
    var isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
    var globalSelectionState = isSelectionFinishedOnCurrentView && Boolean(nextView) ? 'partial' : currentViewSelectionState;
    onChange(date, globalSelectionState);

    if (isSelectionFinishedOnCurrentView) {
      openNext();
    }
  }, [nextView, onChange, openNext]);
  return {
    nextView: nextView,
    previousView: previousView,
    openNext: openNext,
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenViewEnhanced
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowDropDown.tsx":
/*!********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/ArrowDropDown.tsx ***!
  \********************************************************************************/
/*! exports provided: ArrowDropDownIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDropDownIcon", function() { return ArrowDropDownIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/ArrowDropDown.tsx";


/**
 * @ignore - internal component.
 */

var ArrowDropDownIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 48
  }
}), 'ArrowDropDown');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowLeft.tsx":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/ArrowLeft.tsx ***!
  \****************************************************************************/
/*! exports provided: ArrowLeftIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeftIcon", function() { return ArrowLeftIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/ArrowLeft.tsx";


/**
 * @ignore - internal component.
 */

var ArrowLeftIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), 'ArrowLeft');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowRight.tsx":
/*!*****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/ArrowRight.tsx ***!
  \*****************************************************************************/
/*! exports provided: ArrowRightIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRightIcon", function() { return ArrowRightIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/ArrowRight.tsx";


/**
 * @ignore - internal component.
 */

var ArrowRightIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), 'ArrowRight');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/CalendarIcon.tsx":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/CalendarIcon.tsx ***!
  \*******************************************************************************/
/*! exports provided: CalendarIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarIcon", function() { return CalendarIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/CalendarIcon.tsx";


/**
 * @ignore - internal component.
 */

var CalendarIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), 'Calendar');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/Clock.tsx":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/Clock.tsx ***!
  \************************************************************************/
/*! exports provided: ClockIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockIcon", function() { return ClockIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/Clock.tsx";


/**
 * @ignore - internal component.
 */

var ClockIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), 'Clock');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/DateRange.tsx":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/DateRange.tsx ***!
  \****************************************************************************/
/*! exports provided: DateRangeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRangeIcon", function() { return DateRangeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/DateRange.tsx";


/**
 * @ignore - internal component.
 */

var DateRangeIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), 'DateRange');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/Pen.tsx":
/*!**********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/Pen.tsx ***!
  \**********************************************************************/
/*! exports provided: PenIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenIcon", function() { return PenIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/Pen.tsx";


/**
 * @ignore - internal component.
 */

var PenIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}), 'Pen');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/icons/Time.tsx":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/icons/Time.tsx ***!
  \***********************************************************************/
/*! exports provided: TimeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeIcon", function() { return TimeIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/icons/Time.tsx";


/**
 * @ignore - internal component.
 */

var TimeIcon = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), 'Time');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/withDateAdapterProp.tsx":
/*!********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/withDateAdapterProp.tsx ***!
  \********************************************************************************/
/*! exports provided: withDateAdapterProp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDateAdapterProp", function() { return withDateAdapterProp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LocalizationProvider */ "../node_modules/@material-ui/pickers/src/LocalizationProvider.tsx");


var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/withDateAdapterProp.tsx";


function withDateAdapterProp(Component) {
  var _this = this;

  return function (_ref) {
    var dateAdapter = _ref.dateAdapter,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["dateAdapter"]);

    if (dateAdapter) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_LocalizationProvider__WEBPACK_IMPORTED_MODULE_3__["MuiPickersAdapterContext"].Provider, {
        value: dateAdapter,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      })));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 12
      }
    }));
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx":
/*!*****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx ***!
  \*****************************************************************************/
/*! exports provided: useDefaultProps, withDefaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDefaultProps", function() { return useDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withDefaultProps", function() { return withDefaultProps; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles_getThemeProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles/getThemeProps */ "../node_modules/@material-ui/styles/esm/getThemeProps/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx";



function useDefaultProps(props, _ref) {
  var name = _ref.name;
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(_material_ui_styles_getThemeProps__WEBPACK_IMPORTED_MODULE_2__["default"])({
    props: props,
    theme: theme,
    name: name
  });
}
function withDefaultProps(componentConfig, Component) {
  var _this = this;

  var componentName = componentConfig.name.replace('Mui', '');

  var WithDefaultProps = function WithDefaultProps(props) {
    Component.displayName = componentName;
    var propsWithDefault = useDefaultProps(props, componentConfig);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, propsWithDefault, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 12
      }
    }));
  };

  WithDefaultProps.displayName = "WithDefaultProps(".concat(componentName, ")");
  return WithDefaultProps;
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/constants/dimensions.ts ***!
  \************************************************************************/
/*! exports provided: DIALOG_WIDTH, DIALOG_WIDTH_WIDER, VIEW_HEIGHT, DAY_SIZE, DAY_MARGIN, IS_TOUCH_DEVICE_MEDIA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_WIDTH", function() { return DIALOG_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_WIDTH_WIDER", function() { return DIALOG_WIDTH_WIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIEW_HEIGHT", function() { return VIEW_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_SIZE", function() { return DAY_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAY_MARGIN", function() { return DAY_MARGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_TOUCH_DEVICE_MEDIA", function() { return IS_TOUCH_DEVICE_MEDIA; });
var DIALOG_WIDTH = 320;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 358;
var DAY_SIZE = 36;
var DAY_MARGIN = 2;
var IS_TOUCH_DEVICE_MEDIA = '@media (pointer: fine)';

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/constants/prop-types.ts ***!
  \************************************************************************/
/*! exports provided: date, DomainPropTypes, defaultMinDate, defaultMaxDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainPropTypes", function() { return DomainPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMinDate", function() { return defaultMinDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMaxDate", function() { return defaultMaxDate; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var date = prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"]([prop_types__WEBPACK_IMPORTED_MODULE_0__["object"], prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], prop_types__WEBPACK_IMPORTED_MODULE_0__["instanceOf"](Date)]);
var datePickerView = prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"](['year', 'month', 'day']);
var DomainPropTypes = {
  date: date,
  datePickerView: datePickerView
};
var defaultMinDate = new Date('1900-01-01');
var defaultMaxDate = new Date('2099-12-31');

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/index.ts":
/*!*********************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker */ "../node_modules/@material-ui/pickers/src/DatePicker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["DatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["MobileDatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["DesktopDatePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDatePicker", function() { return _DatePicker__WEBPACK_IMPORTED_MODULE_0__["StaticDatePicker"]; });

/* harmony import */ var _DatePicker_DatePickerToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker/DatePickerToolbar */ "../node_modules/@material-ui/pickers/src/DatePicker/DatePickerToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerToolbar", function() { return _DatePicker_DatePickerToolbar__WEBPACK_IMPORTED_MODULE_1__["DatePickerToolbar"]; });

/* harmony import */ var _TimePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimePicker */ "../node_modules/@material-ui/pickers/src/TimePicker/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTextFieldAriaText", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_2__["getTextFieldAriaText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_2__["TimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_2__["DesktopTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_2__["MobileTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticTimePicker", function() { return _TimePicker__WEBPACK_IMPORTED_MODULE_2__["StaticTimePicker"]; });

/* harmony import */ var _TimePicker_TimePickerToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimePicker/TimePickerToolbar */ "../node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePickerToolbar", function() { return _TimePicker_TimePickerToolbar__WEBPACK_IMPORTED_MODULE_3__["TimePickerToolbar"]; });

/* harmony import */ var _DateTimePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DateTimePicker */ "../node_modules/@material-ui/pickers/src/DateTimePicker/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_4__["DateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_4__["DesktopDateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_4__["MobileDateTimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDateTimePicker", function() { return _DateTimePicker__WEBPACK_IMPORTED_MODULE_4__["StaticDateTimePicker"]; });

/* harmony import */ var _DateTimePicker_DateTimePickerToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DateTimePicker/DateTimePickerToolbar */ "../node_modules/@material-ui/pickers/src/DateTimePicker/DateTimePickerToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerToolbar", function() { return _DateTimePicker_DateTimePickerToolbar__WEBPACK_IMPORTED_MODULE_5__["DateTimePickerToolbar"]; });

/* harmony import */ var _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateRangePicker/DateRangePicker */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePicker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useDateRangeValidation", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["useDateRangeValidation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeRangePicker", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["makeRangePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangePicker", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["DateRangePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopDateRangePicker", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["DesktopDateRangePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileDateRangePicker", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["MobileDateRangePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticDateRangePicker", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["StaticDateRangePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangeDelimiter", function() { return _DateRangePicker_DateRangePicker__WEBPACK_IMPORTED_MODULE_6__["DateRangeDelimiter"]; });

/* harmony import */ var _DateRangePicker_DateRangePickerToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateRangePicker/DateRangePickerToolbar */ "../node_modules/@material-ui/pickers/src/DateRangePicker/DateRangePickerToolbar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateRangePickerToolbar", function() { return _DateRangePicker_DateRangePickerToolbar__WEBPACK_IMPORTED_MODULE_7__["DateRangePickerToolbar"]; });

/* harmony import */ var _views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/Calendar/Calendar */ "../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersCalendar", function() { return _views_Calendar_Calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"]; });

/* harmony import */ var _views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/Calendar/CalendarView */ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersCalendarView", function() { return _views_Calendar_CalendarView__WEBPACK_IMPORTED_MODULE_9__["CalendarView"]; });

/* harmony import */ var _views_Calendar_Day__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/Calendar/Day */ "../node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersDay", function() { return _views_Calendar_Day__WEBPACK_IMPORTED_MODULE_10__["Day"]; });

/* harmony import */ var _views_Clock_ClockView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/Clock/ClockView */ "../node_modules/@material-ui/pickers/src/views/Clock/ClockView.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersClockView", function() { return _views_Clock_ClockView__WEBPACK_IMPORTED_MODULE_11__["ClockView"]; });

/* harmony import */ var _views_Clock_Clock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/Clock/Clock */ "../node_modules/@material-ui/pickers/src/views/Clock/Clock.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersClock", function() { return _views_Clock_Clock__WEBPACK_IMPORTED_MODULE_12__["Clock"]; });

/* harmony import */ var _Picker_Picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Picker/Picker */ "../node_modules/@material-ui/pickers/src/Picker/Picker.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PickersBasePickers", function() { return _Picker_Picker__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_14__["useUtils"]; });

/* harmony import */ var _shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_shared/hooks/usePickerState */ "../node_modules/@material-ui/pickers/src/_shared/hooks/usePickerState.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePickerState", function() { return _shared_hooks_usePickerState__WEBPACK_IMPORTED_MODULE_15__["usePickerState"]; });

/* harmony import */ var _typings_BasePicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./typings/BasePicker */ "../node_modules/@material-ui/pickers/src/typings/BasePicker.tsx");
/* harmony import */ var _typings_BasePicker__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_typings_BasePicker__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _typings_BasePicker__WEBPACK_IMPORTED_MODULE_16__) if(["DatePickerToolbar","TimePickerToolbar","DateTimePickerToolbar","DateRangePickerToolbar","PickersCalendar","PickersCalendarView","PickersDay","PickersClockView","PickersClock","PickersBasePickers","useUtils","usePickerState","LocalizationProvider","MuiPickersContext","DatePicker","MobileDatePicker","DesktopDatePicker","StaticDatePicker","getTextFieldAriaText","TimePicker","DesktopTimePicker","MobileTimePicker","StaticTimePicker","DateTimePicker","DesktopDateTimePicker","MobileDateTimePicker","StaticDateTimePicker","useDateRangeValidation","makeRangePicker","DateRangePicker","DesktopDateRangePicker","MobileDateRangePicker","StaticDateRangePicker","DateRangeDelimiter","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _typings_BasePicker__WEBPACK_IMPORTED_MODULE_16__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _LocalizationProvider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LocalizationProvider */ "../node_modules/@material-ui/pickers/src/LocalizationProvider.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalizationProvider", function() { return _LocalizationProvider__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiPickersContext", function() { return _LocalizationProvider__WEBPACK_IMPORTED_MODULE_17__["MuiPickersAdapterContext"]; });


















 // TODO replace the following syntax with new ts export type { } syntax when will be supported by rollup

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/typings/BasePicker.tsx":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/typings/BasePicker.tsx ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx ***!
  \****************************************************************************/
/*! exports provided: useStyles, Calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Day */ "../node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/hooks/useKeyDown */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts");
/* harmony import */ var _SlideTransition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SlideTransition */ "../node_modules/@material-ui/pickers/src/views/Calendar/SlideTransition.tsx");



var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx";










var muiComponentConfig = {
  name: 'MuiPickersCalendar'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  var weeksContainerHeight = (_constants_dimensions__WEBPACK_IMPORTED_MODULE_9__["DAY_SIZE"] + _constants_dimensions__WEBPACK_IMPORTED_MODULE_9__["DAY_MARGIN"] * 4) * 6;
  return {
    root: {
      minHeight: weeksContainerHeight
    },
    loadingContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: weeksContainerHeight
    },
    weekContainer: {
      overflow: 'hidden'
    },
    week: {
      margin: "".concat(_constants_dimensions__WEBPACK_IMPORTED_MODULE_9__["DAY_MARGIN"], "px 0"),
      display: 'flex',
      justifyContent: 'center'
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButton: {
      marginRight: 12
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    weekDayLabel: {
      width: 36,
      height: 40,
      margin: '0 2px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    }
  };
}, muiComponentConfig);
function Calendar(props) {
  var _this = this,
      _useGlobalKeyDown;

  var _useDefaultProps = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_10__["useDefaultProps"])(props, muiComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      allowSameDateSelection = _useDefaultProps.allowSameDateSelection,
      changeFocusedDay = _useDefaultProps.changeFocusedDay,
      className = _useDefaultProps.className,
      currentMonth = _useDefaultProps.currentMonth,
      date = _useDefaultProps.date,
      disableHighlightToday = _useDefaultProps.disableHighlightToday,
      focusedDay = _useDefaultProps.focusedDay,
      isDateDisabled = _useDefaultProps.isDateDisabled,
      isMonthSwitchingAnimating = _useDefaultProps.isMonthSwitchingAnimating,
      loading = _useDefaultProps.loading,
      onChange = _useDefaultProps.onChange,
      onMonthSwitchingAnimationEnd = _useDefaultProps.onMonthSwitchingAnimationEnd,
      reduceAnimations = _useDefaultProps.reduceAnimations,
      renderDay = _useDefaultProps.renderDay,
      _useDefaultProps$rend = _useDefaultProps.renderLoading,
      renderLoading = _useDefaultProps$rend === void 0 ? function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
      "data-mui-test": "loading-progress",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 27
      }
    }, "...");
  } : _useDefaultProps$rend,
      showDaysOutsideCurrentMonth = _useDefaultProps.showDaysOutsideCurrentMonth,
      slideDirection = _useDefaultProps.slideDirection,
      TransitionProps = _useDefaultProps.TransitionProps;

  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useNow"])();
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var classes = useStyles();
  var handleDaySelect = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'finish';
    // TODO possibly buggy line figure out and add tests
    var finalDate = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(date) ? day : utils.mergeDateAndTime(day, date || now);
    onChange(finalDate, isFinish);
  }, [date, now, onChange, utils]);
  var initialDate = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(date) ? date[0] : date;
  var nowFocusedDay = focusedDay || initialDate || now;
  Object(_shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["useGlobalKeyDown"])(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].ArrowUp, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, -7));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].ArrowDown, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, 7));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].ArrowLeft, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? -1 : 1));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].ArrowRight, function () {
    return changeFocusedDay(utils.addDays(nowFocusedDay, theme.direction === 'ltr' ? 1 : -1));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].Home, function () {
    return changeFocusedDay(utils.startOfWeek(nowFocusedDay));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].End, function () {
    return changeFocusedDay(utils.endOfWeek(nowFocusedDay));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].PageUp, function () {
    return changeFocusedDay(utils.getNextMonth(nowFocusedDay));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_11__["keycode"].PageDown, function () {
    return changeFocusedDay(utils.getPreviousMonth(nowFocusedDay));
  }), _useGlobalKeyDown));
  var currentMonthNumber = utils.getMonth(currentMonth);
  var selectedDates = (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(date) ? date : [date]).filter(Boolean).map(function (selectedDateItem) {
    return selectedDateItem && utils.startOfDay(selectedDateItem);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.daysHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }, utils.getWeekdays().map(function (day, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "aria-hidden": true,
      key: day + i.toString(),
      variant: "caption",
      className: classes.weekDayLabel,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 11
      }
    }, day.charAt(0).toUpperCase());
  })), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.loadingContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 9
    }
  }, renderLoading()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_SlideTransition__WEBPACK_IMPORTED_MODULE_12__["SlideTransition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    transKey: currentMonthNumber,
    onExited: onMonthSwitchingAnimationEnd,
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, TransitionProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    role: "grid",
    className: classes.weekContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      role: "row",
      key: "week-".concat(week[0]),
      className: classes.week,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, week.map(function (day) {
      var _ref;

      var disabled = isDateDisabled(day);
      var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
      var dayProps = {
        key: (_ref = day) === null || _ref === void 0 ? void 0 : _ref.toString(),
        day: day,
        role: 'cell',
        isAnimating: isMonthSwitchingAnimating,
        disabled: disabled,
        allowKeyboardControl: allowKeyboardControl,
        allowSameDateSelection: allowSameDateSelection,
        focused: allowKeyboardControl && Boolean(focusedDay) && utils.isSameDay(day, nowFocusedDay),
        today: utils.isSameDay(day, now),
        inCurrentMonth: isDayInCurrentMonth,
        selected: selectedDates.some(function (selectedDate) {
          return selectedDate && utils.isSameDay(selectedDate, day);
        }),
        disableHighlightToday: disableHighlightToday,
        showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
        focusable: allowKeyboardControl && Boolean(nowFocusedDay) && utils.toJsDate(nowFocusedDay).getDate() === utils.toJsDate(day).getDate(),
        onDayFocus: changeFocusedDay,
        onDaySelect: handleDaySelect
      };
      return renderDay ? renderDay(day, selectedDates, dayProps) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Day__WEBPACK_IMPORTED_MODULE_7__["Day"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dayProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 21
        }
      }));
    }));
  }))));
}
Calendar.displayName = 'Calendar';

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarHeader.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/CalendarHeader.tsx ***!
  \**********************************************************************************/
/*! exports provided: useStyles, CalendarHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarHeader", function() { return CalendarHeader; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Fade */ "../node_modules/@material-ui/core/esm/Fade/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _FadeTransitionGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FadeTransitionGroup */ "../node_modules/@material-ui/pickers/src/views/Calendar/FadeTransitionGroup.tsx");
/* harmony import */ var _shared_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/icons/ArrowDropDown */ "../node_modules/@material-ui/pickers/src/_shared/icons/ArrowDropDown.tsx");
/* harmony import */ var _shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/ArrowSwitcher */ "../node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx");
/* harmony import */ var _shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_shared/hooks/date-helpers-hooks */ "../node_modules/@material-ui/pickers/src/_shared/hooks/date-helpers-hooks.tsx");

var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/CalendarHeader.tsx";












var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
      paddingLeft: 24,
      paddingRight: 12,
      // prevent jumping in safari
      maxHeight: 30,
      minHeight: 30
    },
    yearSelectionSwitcher: {
      marginRight: 'auto'
    },
    previousMonthButton: {
      marginRight: 24
    },
    switchViewDropdown: {
      willChange: 'transform',
      transition: theme.transitions.create('transform'),
      transform: 'rotate(0deg)'
    },
    switchViewDropdownDown: {
      transform: 'rotate(180deg)'
    },
    monthTitleContainer: {
      display: 'flex',
      maxHeight: 30,
      overflow: 'hidden',
      cursor: 'pointer',
      marginRight: 'auto'
    },
    monthText: {
      marginRight: 4
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});

function getSwitchingViewAriaText(view) {
  return view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view';
}

function CalendarHeader(props) {
  var currentView = props.view,
      views = props.views,
      month = props.currentMonth,
      changeView = props.changeView,
      minDate = props.minDate,
      maxDate = props.maxDate,
      disablePast = props.disablePast,
      disableFuture = props.disableFuture,
      onMonthChange = props.onMonthChange,
      reduceAnimations = props.reduceAnimations,
      leftArrowButtonProps = props.leftArrowButtonProps,
      rightArrowButtonProps = props.rightArrowButtonProps,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon,
      _props$leftArrowButto = props.leftArrowButtonText,
      leftArrowButtonText = _props$leftArrowButto === void 0 ? 'previous month' : _props$leftArrowButto,
      _props$rightArrowButt = props.rightArrowButtonText,
      rightArrowButtonText = _props$rightArrowButt === void 0 ? 'next month' : _props$rightArrowButt,
      _props$getViewSwitchi = props.getViewSwitchingButtonText,
      getViewSwitchingButtonText = _props$getViewSwitchi === void 0 ? getSwitchingViewAriaText : _props$getViewSwitchi;
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var classes = useStyles();

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(month), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(month), 'right');
  };

  var isNextMonthDisabled = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__["useNextMonthDisabled"])(month, {
    disableFuture: disableFuture,
    maxDate: maxDate
  });
  var isPreviousMonthDisabled = Object(_shared_hooks_date_helpers_hooks__WEBPACK_IMPORTED_MODULE_12__["usePreviousMonthDisabled"])(month, {
    disablePast: disablePast,
    minDate: minDate
  });

  var toggleView = function toggleView() {
    if (views.length === 1) {
      return;
    }

    if (views.length === 2) {
      changeView(views.find(function (view) {
        return view !== currentView;
      }) || views[0]);
    } else {
      // switching only between first 2
      var nextIndexToOpen = views.indexOf(currentView) !== 0 ? 0 : 1;
      changeView(views[nextIndexToOpen]);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.monthTitleContainer,
    onClick: toggleView,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FadeTransitionGroup__WEBPACK_IMPORTED_MODULE_9__["FadeTransitionGroup"], {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'month'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-live": "polite",
    "data-mui-test": "calendar-month-text",
    align: "center",
    variant: "subtitle1",
    className: classes.monthText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, utils.format(month, 'month'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_FadeTransitionGroup__WEBPACK_IMPORTED_MODULE_9__["FadeTransitionGroup"], {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    "aria-live": "polite",
    "data-mui-test": "calendar-year-text",
    align: "center",
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, utils.format(month, 'year'))), views.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    size: "small",
    "data-mui-test": "calendar-view-switcher",
    onClick: toggleView,
    className: classes.yearSelectionSwitcher,
    "aria-label": getViewSwitchingButtonText(currentView),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_10__["ArrowDropDownIcon"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.switchViewDropdown, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.switchViewDropdownDown, currentView === 'year')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
    in: currentView === 'date',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_11__["ArrowSwitcher"], {
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: selectPreviousMonth,
    onRightClick: selectNextMonth,
    isLeftDisabled: isPreviousMonthDisabled,
    isRightDisabled: isNextMonthDisabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }))));
}
CalendarHeader.displayName = 'PickersCalendarHeader';
CalendarHeader.propTypes = {
  leftArrowButtonText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  leftArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  rightArrowButtonText: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  rightArrowIcon: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarHeader);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx":
/*!********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx ***!
  \********************************************************************************/
/*! exports provided: useStyles, defaultReduceAnimations, CalendarView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReduceAnimations", function() { return defaultReduceAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarView", function() { return CalendarView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _MonthSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthSelection */ "../node_modules/@material-ui/pickers/src/views/Calendar/MonthSelection.tsx");
/* harmony import */ var _useCalendarState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useCalendarState */ "../node_modules/@material-ui/pickers/src/views/Calendar/useCalendarState.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _FadeTransitionGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FadeTransitionGroup */ "../node_modules/@material-ui/pickers/src/views/Calendar/FadeTransitionGroup.tsx");
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Calendar */ "../node_modules/@material-ui/pickers/src/views/Calendar/Calendar.tsx");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _CalendarHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CalendarHeader */ "../node_modules/@material-ui/pickers/src/views/Calendar/CalendarHeader.tsx");
/* harmony import */ var _YearSelection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./YearSelection */ "../node_modules/@material-ui/pickers/src/views/Calendar/YearSelection.tsx");
/* harmony import */ var _constants_prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/prop-types */ "../node_modules/@material-ui/pickers/src/constants/prop-types.ts");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");


var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/CalendarView.tsx";














var muiComponentConfig = {
  name: 'MuiPickersCalendarView'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  viewTransitionContainer: {
    overflowY: 'auto'
  },
  fullHeightContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: (_constants_dimensions__WEBPACK_IMPORTED_MODULE_10__["DAY_SIZE"] + _constants_dimensions__WEBPACK_IMPORTED_MODULE_10__["DAY_MARGIN"] * 4) * 7,
    height: '100%'
  }
}, muiComponentConfig);
var defaultReduceAnimations = typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
function CalendarView(props) {
  var _useDefaultProps = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_9__["useDefaultProps"])(props, muiComponentConfig),
      allowKeyboardControlProp = _useDefaultProps.allowKeyboardControl,
      changeView = _useDefaultProps.changeView,
      date = _useDefaultProps.date,
      disableFuture = _useDefaultProps.disableFuture,
      disablePast = _useDefaultProps.disablePast,
      loading = _useDefaultProps.loading,
      maxDateProp = _useDefaultProps.maxDate,
      minDateProp = _useDefaultProps.minDate,
      onChange = _useDefaultProps.onChange,
      onMonthChange = _useDefaultProps.onMonthChange,
      _useDefaultProps$redu = _useDefaultProps.reduceAnimations,
      reduceAnimations = _useDefaultProps$redu === void 0 ? defaultReduceAnimations : _useDefaultProps$redu,
      renderLoading = _useDefaultProps.renderLoading,
      shouldDisableDate = _useDefaultProps.shouldDisableDate,
      shouldDisableYear = _useDefaultProps.shouldDisableYear,
      view = _useDefaultProps.view,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDefaultProps, ["allowKeyboardControl", "changeView", "date", "disableFuture", "disablePast", "loading", "maxDate", "minDate", "onChange", "onMonthChange", "reduceAnimations", "renderLoading", "shouldDisableDate", "shouldDisableYear", "view"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useUtils"])();
  var classes = useStyles();
  var isStatic = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_14__["IsStaticVariantContext"]);
  var allowKeyboardControl = allowKeyboardControlProp !== null && allowKeyboardControlProp !== void 0 ? allowKeyboardControlProp : !isStatic;
  var minDate = minDateProp || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMinDate"]);
  var maxDate = maxDateProp || utils.date(_constants_prop_types__WEBPACK_IMPORTED_MODULE_13__["defaultMaxDate"]);

  var _useCalendarState = Object(_useCalendarState__WEBPACK_IMPORTED_MODULE_5__["useCalendarState"])({
    date: date,
    reduceAnimations: reduceAnimations,
    onMonthChange: onMonthChange,
    minDate: minDate,
    maxDate: maxDate,
    shouldDisableDate: shouldDisableDate,
    disablePast: disablePast,
    disableFuture: disableFuture
  }),
      calendarState = _useCalendarState.calendarState,
      changeFocusedDay = _useCalendarState.changeFocusedDay,
      changeMonth = _useCalendarState.changeMonth,
      isDateDisabled = _useCalendarState.isDateDisabled,
      handleChangeMonth = _useCalendarState.handleChangeMonth,
      onMonthSwitchingAnimationEnd = _useCalendarState.onMonthSwitchingAnimationEnd;

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (date && isDateDisabled(date)) {
      var closestEnabledDate = Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_15__["findClosestEnabledDate"])({
        utils: utils,
        date: date,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      onChange(closestEnabledDate, 'partial');
    } // This call is too expensive to run it on each prop change.
    // So just ensure that we are not rendering disabled as selected on mount.

  }, []); // eslint-disable-line

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    changeMonth(date);
  }, [date]); // eslint-disable-line

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_CalendarHeader__WEBPACK_IMPORTED_MODULE_11__["CalendarHeader"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    view: view,
    currentMonth: calendarState.currentMonth,
    changeView: changeView,
    onMonthChange: function onMonthChange(newMonth, direction) {
      return handleChangeMonth({
        newMonth: newMonth,
        direction: direction
      });
    },
    minDate: minDate,
    maxDate: maxDate,
    disablePast: disablePast,
    disableFuture: disableFuture,
    reduceAnimations: reduceAnimations,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FadeTransitionGroup__WEBPACK_IMPORTED_MODULE_7__["FadeTransitionGroup"], {
    reduceAnimations: reduceAnimations,
    className: classes.viewTransitionContainer,
    transKey: view,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, view === 'year' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_YearSelection__WEBPACK_IMPORTED_MODULE_12__["YearSelection"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    disableFuture: disableFuture,
    disablePast: disablePast,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    shouldDisableYear: shouldDisableYear,
    changeFocusedDay: changeFocusedDay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  })), view === 'month' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_MonthSelection__WEBPACK_IMPORTED_MODULE_4__["MonthSelection"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    onMonthChange: onMonthChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  })), view === 'date' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Calendar__WEBPACK_IMPORTED_MODULE_8__["Calendar"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, calendarState, {
    onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
    changeFocusedDay: changeFocusedDay,
    reduceAnimations: reduceAnimations,
    date: date,
    onChange: onChange,
    isDateDisabled: isDateDisabled,
    allowKeyboardControl: allowKeyboardControl,
    loading: loading,
    renderLoading: renderLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })))));
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx":
/*!***********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx ***!
  \***********************************************************************/
/*! exports provided: useStyles, areDayPropsEqual, Day */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areDayPropsEqual", function() { return areDayPropsEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Day", function() { return Day; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_shared/hooks/useCanAutoFocus */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx");




var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/Day.tsx";










var muiComponentConfig = {
  name: 'MuiPickersDay'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, theme.typography.caption, {
      width: _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["DAY_SIZE"],
      height: _constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["DAY_SIZE"],
      borderRadius: '50%',
      padding: 0,
      // background required here to prevent collides with the other days when animating with transition group
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&:focus': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["fade"])(theme.palette.action.active, theme.palette.action.hoverOpacity),
        '&$selected': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      },
      '&$selected': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.short
        }),
        '&:hover': {
          willChange: 'background-color',
          backgroundColor: theme.palette.primary.dark
        }
      },
      '&$disabled': {
        color: theme.palette.text.secondary
      }
    }),
    dayWithMargin: {
      margin: "0 ".concat(_constants_dimensions__WEBPACK_IMPORTED_MODULE_11__["DAY_MARGIN"], "px")
    },
    dayOutsideMonth: {
      color: theme.palette.text.secondary
    },
    hiddenDaySpacingFiller: {
      visibility: 'hidden'
    },
    today: {
      '&:not($selected)': {
        border: "1px solid ".concat(theme.palette.text.secondary)
      }
    },
    dayLabel: {// need for overrides
    },
    selected: {},
    disabled: {}
  };
}, muiComponentConfig);

function PureDay(props) {
  var _clsx;

  var _useDefaultProps = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_12__["useDefaultProps"])(props, muiComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      _useDefaultProps$allo = _useDefaultProps.allowSameDateSelection,
      allowSameDateSelection = _useDefaultProps$allo === void 0 ? false : _useDefaultProps$allo,
      className = _useDefaultProps.className,
      day = _useDefaultProps.day,
      _useDefaultProps$disa = _useDefaultProps.disabled,
      disabled = _useDefaultProps$disa === void 0 ? false : _useDefaultProps$disa,
      _useDefaultProps$disa2 = _useDefaultProps.disableHighlightToday,
      disableHighlightToday = _useDefaultProps$disa2 === void 0 ? false : _useDefaultProps$disa2,
      _useDefaultProps$disa3 = _useDefaultProps.disableMargin,
      disableMargin = _useDefaultProps$disa3 === void 0 ? false : _useDefaultProps$disa3,
      _useDefaultProps$focu = _useDefaultProps.focusable,
      focusable = _useDefaultProps$focu === void 0 ? false : _useDefaultProps$focu,
      _useDefaultProps$focu2 = _useDefaultProps.focused,
      focused = _useDefaultProps$focu2 === void 0 ? false : _useDefaultProps$focu2,
      hidden = _useDefaultProps.hidden,
      isInCurrentMonth = _useDefaultProps.inCurrentMonth,
      isAnimating = _useDefaultProps.isAnimating,
      onClick = _useDefaultProps.onClick,
      onDayFocus = _useDefaultProps.onDayFocus,
      onDaySelect = _useDefaultProps.onDaySelect,
      onFocus = _useDefaultProps.onFocus,
      onKeyDown = _useDefaultProps.onKeyDown,
      _useDefaultProps$sele = _useDefaultProps.selected,
      selected = _useDefaultProps$sele === void 0 ? false : _useDefaultProps$sele,
      _useDefaultProps$show = _useDefaultProps.showDaysOutsideCurrentMonth,
      showDaysOutsideCurrentMonth = _useDefaultProps$show === void 0 ? false : _useDefaultProps$show,
      _useDefaultProps$toda = _useDefaultProps.today,
      isToday = _useDefaultProps$toda === void 0 ? false : _useDefaultProps$toda,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_useDefaultProps, ["allowKeyboardControl", "allowSameDateSelection", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "focusable", "focused", "hidden", "inCurrentMonth", "isAnimating", "onClick", "onDayFocus", "onDaySelect", "onFocus", "onKeyDown", "selected", "showDaysOutsideCurrentMonth", "today"]);

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_10__["useUtils"])();
  var classes = useStyles();
  var canAutoFocus = Object(_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_13__["useCanAutoFocus"])();
  var ref = react__WEBPACK_IMPORTED_MODULE_4__["useRef"](null);
  react__WEBPACK_IMPORTED_MODULE_4__["useEffect"](function () {
    if (focused && !disabled && !isAnimating && isInCurrentMonth && ref.current && allowKeyboardControl && canAutoFocus) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, canAutoFocus, disabled, focused, isAnimating, isInCurrentMonth]);

  var handleFocus = function handleFocus(event) {
    if (!focused && onDayFocus) {
      onDayFocus(day);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  var handleClick = function handleClick(event) {
    if (!allowSameDateSelection && selected) return;

    if (!disabled) {
      onDaySelect(day, 'finish');
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_9__["onSpaceOrEnter"])(function () {
    if (!disabled) {
      onDaySelect(day, 'finish');
    }
  }, onKeyDown);
  var dayClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, (_clsx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.selected, selected), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.dayWithMargin, !disableMargin), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.today, !disableHighlightToday && isToday), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx, classes.dayOutsideMonth, !isInCurrentMonth && showDaysOutsideCurrentMonth), _clsx), className);

  if (!isInCurrentMonth && !showDaysOutsideCurrentMonth) {
    // Do not render button and not attach any listeners for empty days
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", {
      "aria-hidden": true,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(dayClassName, classes.hiddenDaySpacingFiller),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 12
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    centerRipple: true,
    "data-mui-test": "day",
    disabled: disabled,
    "aria-label": utils.format(day, 'fullDate'),
    tabIndex: focused || focusable ? 0 : -1,
    className: dayClassName
  }, other, {
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", {
    className: classes.dayLabel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 7
    }
  }, utils.format(day, 'dayOfMonth')));
}

var areDayPropsEqual = function areDayPropsEqual(prevProps, nextProps) {
  return prevProps.focused === nextProps.focused && prevProps.focusable === nextProps.focusable && prevProps.isAnimating === nextProps.isAnimating && prevProps.today === nextProps.today && prevProps.disabled === nextProps.disabled && prevProps.selected === nextProps.selected && prevProps.allowKeyboardControl === nextProps.allowKeyboardControl && prevProps.disableMargin === nextProps.disableMargin && prevProps.showDaysOutsideCurrentMonth === nextProps.showDaysOutsideCurrentMonth && prevProps.disableHighlightToday === nextProps.disableHighlightToday && prevProps.className === nextProps.className && prevProps.inCurrentMonth === nextProps.inCurrentMonth && prevProps.onDayFocus === nextProps.onDayFocus && prevProps.onDaySelect === nextProps.onDaySelect;
};
PureDay.displayName = 'PickersDay';
PureDay.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"],
  selected: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"],
  today: prop_types__WEBPACK_IMPORTED_MODULE_5__["bool"]
}; // keep typings of original component and not loose generic

var Day = react__WEBPACK_IMPORTED_MODULE_4__["memo"](PureDay, areDayPropsEqual);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/FadeTransitionGroup.tsx":
/*!***************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/FadeTransitionGroup.tsx ***!
  \***************************************************************************************/
/*! exports provided: useStyles, FadeTransitionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeTransitionGroup", function() { return FadeTransitionGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group */ "../node_modules/react-transition-group/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/FadeTransitionGroup.tsx";





var animationDuration = 500;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'block',
      position: 'relative'
    },
    fadeEnter: {
      willChange: 'transform',
      opacity: 0
    },
    fadeEnterActive: {
      opacity: 1,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration
      })
    },
    fadeExit: {
      opacity: 1
    },
    fadeExitActive: {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration / 2
      })
    }
  };
}, {
  name: 'MuiPickersFadeTransition'
});
var FadeTransitionGroup = function FadeTransitionGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      reduceAnimations = _ref.reduceAnimations,
      transKey = _ref.transKey;
  var classes = useStyles();

  if (reduceAnimations) {
    return children;
  }

  var transitionClasses = {
    exit: classes.fadeExit,
    enterActive: classes.fadeEnterActive,
    enter: classes.fadeEnter,
    exitActive: classes.fadeExitActive
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_3__["TransitionGroup"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(classes.root, className),
    childFactory: function childFactory(element) {
      return react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](element, {
        classNames: transitionClasses
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_3__["CSSTransition"], {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: {
      appear: animationDuration,
      enter: animationDuration / 2,
      exit: 0
    },
    classNames: transitionClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, children));
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/Month.tsx":
/*!*************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/Month.tsx ***!
  \*************************************************************************/
/*! exports provided: useStyles, Month, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/Month.tsx";






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 64,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      },
      '&:disabled': {
        pointerEvents: 'none',
        color: theme.palette.text.secondary
      },
      '&$selected': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    selected: {}
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(props) {
  var disabled = props.disabled,
      onSelect = props.onSelect,
      selected = props.selected,
      value = props.value,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["disabled", "onSelect", "selected", "value"]);

  var classes = useStyles();

  var handleSelection = function handleSelection() {
    onSelect(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "data-mui-test": "month",
    role: "button",
    component: "div",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.selected, selected)),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyDown: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["onSpaceOrEnter"])(handleSelection),
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1'
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }));
};
Month.displayName = 'Month';
/* harmony default export */ __webpack_exports__["default"] = (Month);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/MonthSelection.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/MonthSelection.tsx ***!
  \**********************************************************************************/
/*! exports provided: useStyles, MonthSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthSelection", function() { return MonthSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Month */ "../node_modules/@material-ui/pickers/src/views/Calendar/Month.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/MonthSelection.tsx";




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
function MonthSelection(_ref) {
  var _this = this;

  var date = _ref.date,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onChange = _ref.onChange,
      onMonthChange = _ref.onMonthChange;
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__["useUtils"])();
  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_3__["useNow"])();
  var classes = useStyles();
  var currentMonth = utils.getMonth(date || now);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (month) {
    var newDate = utils.setMonth(date || now, month);
    onChange(newDate, 'finish');

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, now, onChange, onMonthChange, utils]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, utils.getMonthArray(date || now).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'monthShort');
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Month__WEBPACK_IMPORTED_MODULE_2__["Month"], {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, monthText);
  }));
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/SlideTransition.tsx":
/*!***********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/SlideTransition.tsx ***!
  \***********************************************************************************/
/*! exports provided: slideAnimationDuration, useStyles, SlideTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideAnimationDuration", function() { return slideAnimationDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideTransition", function() { return SlideTransition; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "../node_modules/react-transition-group/esm/index.js");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/SlideTransition.tsx";





var slideAnimationDuration = 350;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: slideAnimationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    root: {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});
var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      className = _ref.className,
      reduceAnimations = _ref.reduceAnimations,
      slideDirection = _ref.slideDirection,
      transKey = _ref.transKey,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children", "className", "reduceAnimations", "slideDirection", "transKey"]);

  var classes = useStyles();

  if (reduceAnimations) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 12
      }
    }, children);
  }

  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes["slideEnter-".concat(slideDirection)],
    // @ts-ignore
    exitActive: classes["slideExitActiveLeft-".concat(slideDirection)]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_5__["TransitionGroup"], {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className),
    childFactory: function childFactory(element) {
      return react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](element, {
        classNames: transitionClasses
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: slideAnimationDuration,
    classNames: transitionClasses
  }, other, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }), children));
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/Year.tsx":
/*!************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/Year.tsx ***!
  \************************************************************************/
/*! exports provided: useStyles, Year, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Year", function() { return Year; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "../node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/hooks/useCanAutoFocus */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");




var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/Year.tsx";








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      flexBasis: '33.3%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&$disabled': {
        color: theme.palette.text.secondary
      },
      '&$selected': {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
        '&:focus, &:hover': {
          backgroundColor: theme.palette.primary.dark
        }
      }
    },
    modeDesktop: {
      flexBasis: '25%'
    },
    yearButton: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
      color: 'unset',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 0
    }, theme.typography.subtitle1, {
      margin: '8px 0',
      height: 36,
      width: 72,
      borderRadius: 16,
      cursor: 'pointer',
      '&:focus, &:hover': {
        backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["fade"])(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    }),
    disabled: {},
    selected: {}
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(props) {
  var _clsx2;

  var allowKeyboardControl = props.allowKeyboardControl,
      children = props.children,
      disabled = props.disabled,
      focused = props.focused,
      forwardedRef = props.forwardedRef,
      onSelect = props.onSelect,
      selected = props.selected,
      value = props.value;
  var classes = useStyles();
  var ref = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var refHandle = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["useForkRef"])(ref, forwardedRef);
  var canAutoFocus = Object(_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_8__["useCanAutoFocus"])();
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_3__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_9__["WrapperVariantContext"]);
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (canAutoFocus && focused && ref.current && !disabled && allowKeyboardControl) {
      ref.current.focus();
    }
  }, [allowKeyboardControl, canAutoFocus, disabled, focused]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    "data-mui-test": "year",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.modeDesktop, wrapperVariant === 'desktop')),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {
    ref: refHandle,
    disabled: disabled,
    type: "button",
    "data-mui-test": "year-".concat(children),
    tabIndex: selected ? 0 : -1,
    onClick: function onClick() {
      return onSelect(value);
    },
    onKeyDown: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_7__["onSpaceOrEnter"])(function () {
      return onSelect(value);
    }),
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.yearButton, (_clsx2 = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.disabled, disabled), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx2, classes.selected, selected), _clsx2)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function (props, ref) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Year, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    forwardedRef: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 3
    }
  }));
}));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/YearSelection.tsx":
/*!*********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/YearSelection.tsx ***!
  \*********************************************************************************/
/*! exports provided: useStyles, YearSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearSelection", function() { return YearSelection; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Year */ "../node_modules/@material-ui/pickers/src/views/Calendar/Year.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/hooks/useKeyDown */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts");


var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Calendar/YearSelection.tsx";

 // eslint-disable-next-line import/no-named-as-default






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%',
    margin: '0 4px'
  }
}, {
  name: 'MuiPickersYearSelection'
});
function YearSelection(_ref) {
  var _useGlobalKeyDown,
      _this = this;

  var allowKeyboardControl = _ref.allowKeyboardControl,
      changeFocusedDay = _ref.changeFocusedDay,
      __dateOrNull = _ref.date,
      isDateDisabled = _ref.isDateDisabled,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      shouldDisableYear = _ref.shouldDisableYear;
  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__["useNow"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_5__["useUtils"])();
  var classes = useStyles();
  var selectedDate = __dateOrNull || now;
  var currentYear = utils.getYear(selectedDate);
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_7__["WrapperVariantContext"]);
  var selectedYearRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](currentYear),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      focusedYear = _React$useState2[0],
      setFocusedYear = _React$useState2[1];

  var handleYearSelection = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (year) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'finish';

    var submitDate = function submitDate(newDate) {
      onChange(newDate, isFinish);
      changeFocusedDay(newDate || now);

      if (onYearChange) {
        onYearChange(newDate);
      }
    };

    var newDate = utils.setYear(selectedDate, year);

    if (isDateDisabled(newDate)) {
      var closestEnabledDate = Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_6__["findClosestEnabledDate"])({
        utils: utils,
        date: newDate,
        minDate: minDate,
        maxDate: maxDate,
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: isDateDisabled
      });
      submitDate(closestEnabledDate);
    } else {
      submitDate(newDate);
    }
  }, [utils, now, selectedDate, isDateDisabled, onChange, changeFocusedDay, onYearChange, minDate, maxDate, disablePast, disableFuture]);
  var focusYear = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (year) {
    if (!isDateDisabled(utils.setYear(selectedDate, year))) {
      setFocusedYear(year);
    }
  }, [selectedDate, isDateDisabled, utils]);
  var yearsInRow = wrapperVariant === 'desktop' ? 4 : 3;
  var nowFocusedYear = focusedYear || currentYear;
  Object(_shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__["useGlobalKeyDown"])(Boolean(allowKeyboardControl), (_useGlobalKeyDown = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__["keycode"].ArrowUp, function () {
    return focusYear(nowFocusedYear - yearsInRow);
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__["keycode"].ArrowDown, function () {
    return focusYear(nowFocusedYear + yearsInRow);
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__["keycode"].ArrowLeft, function () {
    return focusYear(nowFocusedYear + (theme.direction === 'ltr' ? -1 : 1));
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_8__["keycode"].ArrowRight, function () {
    return focusYear(nowFocusedYear + (theme.direction === 'ltr' ? 1 : -1));
  }), _useGlobalKeyDown));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Year__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: utils.format(year, 'year'),
      selected: selected,
      value: yearNumber,
      onSelect: handleYearSelection,
      allowKeyboardControl: allowKeyboardControl,
      focused: yearNumber === focusedYear,
      ref: selected ? selectedYearRef : undefined,
      disabled: disablePast && utils.isBeforeYear(year, now) || disableFuture && utils.isAfterYear(year, now) || shouldDisableYear && shouldDisableYear(year),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    }, utils.format(year, 'year'));
  }));
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Calendar/useCalendarState.tsx":
/*!************************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Calendar/useCalendarState.tsx ***!
  \************************************************************************************/
/*! exports provided: createCalendarStateReducer, useCalendarState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCalendarStateReducer", function() { return createCalendarStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCalendarState", function() { return useCalendarState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_date_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/date-utils */ "../node_modules/@material-ui/pickers/src/_helpers/date-utils.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");





var createCalendarStateReducer = function createCalendarStateReducer(reduceAnimations, disableSwitchToMonthOnDayFocus, utils) {
  return function (state, action) {
    switch (action.type) {
      case 'changeMonth':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          slideDirection: action.direction,
          currentMonth: action.newMonth,
          isMonthSwitchingAnimating: !reduceAnimations
        });

      case 'finishMonthSwitchingAnimation':
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
          isMonthSwitchingAnimating: false
        });

      case 'changeFocusedDay':
        {
          var needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
            focusedDay: action.focusedDay,
            isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations,
            currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
            slideDirection: utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
          });
        }

      default:
        throw new Error('missing support');
    }
  };
};
function useCalendarState(_ref) {
  var date = _ref.date,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      _ref$disableSwitchToM = _ref.disableSwitchToMonthOnDayFocus,
      disableSwitchToMonthOnDayFocus = _ref$disableSwitchToM === void 0 ? false : _ref$disableSwitchToM,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      onMonthChange = _ref.onMonthChange,
      reduceAnimations = _ref.reduceAnimations,
      shouldDisableDate = _ref.shouldDisableDate;
  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_4__["useNow"])();
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_4__["useUtils"])();
  var dateForMonth = date || now;
  var reducerFn = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;

  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2__["useReducer"](reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: date,
    currentMonth: utils.startOfMonth(dateForMonth),
    slideDirection: 'left'
  }),
      _React$useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useReducer, 2),
      calendarState = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var handleChangeMonth = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (payload) {
    dispatch(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: 'changeMonth'
    }, payload));

    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  var changeMonth = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (newDate) {
    var newDateRequested = newDate !== null && newDate !== void 0 ? newDate : now;

    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, now, utils]);
  var isDateDisabled = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (day) {
    return Object(_helpers_date_utils__WEBPACK_IMPORTED_MODULE_3__["validateDate"])(utils, day, {
      disablePast: disablePast,
      disableFuture: disableFuture,
      minDate: minDate,
      maxDate: maxDate,
      shouldDisableDate: shouldDisableDate
    }) !== null;
  }, [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, utils]);
  var onMonthSwitchingAnimationEnd = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  var changeFocusedDay = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (newFocusedDate) {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }
  }, [isDateDisabled]);
  return {
    calendarState: calendarState,
    changeMonth: changeMonth,
    changeFocusedDay: changeFocusedDay,
    isDateDisabled: isDateDisabled,
    onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
    handleChangeMonth: handleChangeMonth
  };
}

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Clock/Clock.tsx":
/*!**********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Clock/Clock.tsx ***!
  \**********************************************************************/
/*! exports provided: useStyles, Clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ClockPointer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ClockPointer */ "../node_modules/@material-ui/pickers/src/views/Clock/ClockPointer.tsx");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _helpers_time_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_helpers/time-utils */ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_shared/hooks/useKeyDown */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useKeyDown.ts");
/* harmony import */ var _wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../wrappers/WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");

var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Clock/Clock.tsx";













var muiComponentConfig = {
  name: 'MuiPickersClock'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      minHeight: _constants_dimensions__WEBPACK_IMPORTED_MODULE_9__["VIEW_HEIGHT"],
      alignItems: 'center'
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none',
      touchActions: 'none',
      userSelect: 'none',
      '&:active': {
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    amButton: {
      zIndex: 1,
      left: 8,
      position: 'absolute',
      bottom: 8
    },
    pmButton: {
      zIndex: 1,
      position: 'absolute',
      bottom: 8,
      right: 8
    },
    meridiemButtonSelected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  };
}, muiComponentConfig);
function Clock(props) {
  var _useGlobalKeyDown;

  var _useDefaultProps = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_11__["useDefaultProps"])(props, muiComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      ampm = _useDefaultProps.ampm,
      _useDefaultProps$ampm = _useDefaultProps.ampmInClock,
      ampmInClock = _useDefaultProps$ampm === void 0 ? false : _useDefaultProps$ampm,
      numbersElementsArray = _useDefaultProps.children,
      date = _useDefaultProps.date,
      handleMeridiemChange = _useDefaultProps.handleMeridiemChange,
      isTimeDisabled = _useDefaultProps.isTimeDisabled,
      meridiemMode = _useDefaultProps.meridiemMode,
      _useDefaultProps$minu = _useDefaultProps.minutesStep,
      minutesStep = _useDefaultProps$minu === void 0 ? 1 : _useDefaultProps$minu,
      onChange = _useDefaultProps.onChange,
      type = _useDefaultProps.type,
      value = _useDefaultProps.value;

  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_8__["useUtils"])();
  var classes = useStyles();
  var wrapperVariant = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](_wrappers_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_13__["WrapperVariantContext"]);
  var isMoving = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](false);
  var isSelectedTimeDisabled = isTimeDisabled(value, type);
  var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

  var handleValueChange = function handleValueChange(newValue, isFinish) {
    if (isTimeDisabled(newValue, type)) {
      return;
    }

    onChange(newValue, isFinish);
  };

  var setTime = function setTime(e, isFinish) {
    var offsetX = e.offsetX,
        offsetY = e.offsetY;

    if (typeof offsetX === 'undefined') {
      var rect = e.target.getBoundingClientRect();
      offsetX = e.changedTouches[0].clientX - rect.left;
      offsetY = e.changedTouches[0].clientY - rect.top;
    }

    var value = type === 'seconds' || type === 'minutes' ? Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_10__["getMinutes"])(offsetX, offsetY, minutesStep) : Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_10__["getHours"])(offsetX, offsetY, Boolean(ampm));
    handleValueChange(value, isFinish);
  };

  var handleTouchMove = function handleTouchMove(e) {
    isMoving.current = true;
    setTime(e, 'shallow');
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (isMoving.current) {
      setTime(e, 'finish');
      isMoving.current = false;
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    e.preventDefault();
    e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

    var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

    if (isButtonPressed) {
      setTime(e.nativeEvent, 'shallow');
    }
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (isMoving.current) {
      isMoving.current = false;
    }

    setTime(e.nativeEvent, 'finish');
  };

  var hasSelected = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    if (type === 'hours') {
      return true;
    }

    return value % 5 === 0;
  }, [type, value]);
  var keyboardControlStep = type === 'minutes' ? minutesStep : 1;
  Object(_shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__["useGlobalKeyDown"])(Boolean(allowKeyboardControl !== null && allowKeyboardControl !== void 0 ? allowKeyboardControl : wrapperVariant !== 'static') && !isMoving.current, (_useGlobalKeyDown = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__["keycode"].Home, function () {
    return handleValueChange(0, 'partial');
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__["keycode"].End, function () {
    return handleValueChange(type === 'minutes' ? 59 : 23, 'partial');
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__["keycode"].ArrowUp, function () {
    return handleValueChange(value + keyboardControlStep, 'partial');
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_useGlobalKeyDown, _shared_hooks_useKeyDown__WEBPACK_IMPORTED_MODULE_12__["keycode"].ArrowDown, function () {
    return handleValueChange(value - keyboardControlStep, 'partial');
  }), _useGlobalKeyDown));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.clock,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    role: "menu",
    tabIndex: -1,
    className: classes.squareMask,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 9
    }
  }), !isSelectedTimeDisabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: classes.pin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }), date && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ClockPointer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected,
    "aria-live": "polite",
    "aria-label": "Selected time ".concat(utils.format(date, 'fullTime')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 15
    }
  })), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "data-mui-test": "in-clock-am-btn",
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    disabled: meridiemMode === null,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.amButton, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.meridiemButtonSelected, meridiemMode === 'am')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, "AM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    disabled: meridiemMode === null,
    "data-mui-test": "in-clock-pm-btn",
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.pmButton, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.meridiemButtonSelected, meridiemMode === 'pm')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "caption",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, "PM"))));
}
Clock.propTypes = {
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]
};
Clock.displayName = 'Clock';

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Clock/ClockNumber.tsx":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Clock/ClockNumber.tsx ***!
  \****************************************************************************/
/*! exports provided: useStyles, ClockNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockNumber", function() { return ClockNumber; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "../node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/hooks/useCanAutoFocus */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Clock/ClockNumber.tsx";








var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  var size = 32;
  var clockNumberColor = theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.secondary;
  return {
    root: {
      outline: 0,
      width: size,
      height: size,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat(size, "px) / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: clockNumberColor,
      '&:focused': {
        backgroundColor: theme.palette.background.paper
      }
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    },
    clockNumberDisabled: {
      pointerEvents: 'none',
      color: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["fade"])(clockNumberColor, 0.2)
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(props) {
  var _clsx;

  var disabled = props.disabled,
      getClockNumberText = props.getClockNumberText,
      index = props.index,
      isInner = props.isInner,
      label = props.label,
      onSelect = props.onSelect,
      selected = props.selected;
  var classes = useStyles();
  var canAutoFocus = Object(_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_7__["useCanAutoFocus"])();
  var ref = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, (_clsx = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_clsx, classes.clockNumberSelected, selected), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_clsx, classes.clockNumberDisabled, disabled), _clsx));
  var transformStyle = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    if (canAutoFocus && selected && ref.current) {
      ref.current.focus();
    }
  }, [canAutoFocus, selected]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], {
    focusRipple: true,
    centerRipple: true,
    ref: ref,
    "aria-disabled": disabled,
    tabIndex: disabled ? -1 : 0,
    component: "span",
    className: className,
    style: transformStyle,
    "aria-label": getClockNumberText(label),
    onKeyDown: Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_6__["onSpaceOrEnter"])(function () {
      return onSelect('finish');
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: isInner ? 'body2' : 'body1',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, label));
};
/* harmony default export */ __webpack_exports__["default"] = (ClockNumber);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Clock/ClockNumbers.tsx":
/*!*****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Clock/ClockNumbers.tsx ***!
  \*****************************************************************************/
/*! exports provided: getHourNumbers, getMinutesNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHourNumbers", function() { return getHourNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutesNumbers", function() { return getMinutesNumbers; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClockNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClockNumber */ "../node_modules/@material-ui/pickers/src/views/Clock/ClockNumber.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Clock/ClockNumbers.tsx";



var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      date = _ref.date,
      getClockNumberText = _ref.getClockNumberText,
      isDisabled = _ref.isDisabled,
      onChange = _ref.onChange,
      utils = _ref.utils;
  var currentHours = date ? utils.getHours(date) : null;
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (currentHours === null) {
      return false;
    }

    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  var _loop = function _loop(_hour) {
    var label = _hour.toString();

    if (_hour === 0) {
      label = '00';
    }

    var isInner = !ampm && (_hour === 0 || _hour > 12);
    hourNumbers.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ClockNumber__WEBPACK_IMPORTED_MODULE_2__["ClockNumber"], {
      key: _hour,
      index: _hour,
      isInner: isInner,
      selected: isSelected(_hour),
      disabled: isDisabled(_hour),
      label: utils.formatNumber(label),
      onSelect: function onSelect() {
        return onChange(_hour, 'finish');
      },
      getClockNumberText: getClockNumberText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }));
  };

  for (var _hour = startHour; _hour <= endHour; _hour += 1) {
    _loop(_hour);
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var utils = _ref2.utils,
      value = _ref2.value,
      onChange = _ref2.onChange,
      isDisabled = _ref2.isDisabled,
      getClockNumberText = _ref2.getClockNumberText;
  var f = utils.formatNumber;
  return [[5, f('05')], [10, f('10')], [15, f('15')], [20, f('20')], [25, f('25')], [30, f('30')], [35, f('35')], [40, f('40')], [45, f('45')], [50, f('50')], [55, f('55')], [0, f('00')]].map(function (_ref3, index) {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
        numberValue = _ref4[0],
        label = _ref4[1];

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_ClockNumber__WEBPACK_IMPORTED_MODULE_2__["ClockNumber"], {
      key: numberValue,
      label: label,
      index: index + 1,
      disabled: isDisabled(numberValue),
      selected: numberValue === value,
      onSelect: function onSelect(isFinish) {
        return onChange(numberValue, isFinish);
      },
      getClockNumberText: getClockNumberText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    });
  });
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Clock/ClockPointer.tsx":
/*!*****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Clock/ClockPointer.tsx ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/reflect/construct */ "../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! clsx */ "../node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");










var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Clock/ClockPointer.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor; result = _babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false; if (_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(_babel_runtime_corejs2_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {})); return true; } catch (e) { return false; } }




var styles = function styles(theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createStyles"])({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};

var ClockPointer = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ClockPointer, _React$Component);

  var _super = _createSuper(ClockPointer);

  function ClockPointer() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      toAnimateTransform: false,
      // eslint-disable-next-line react/no-unused-state
      previousType: undefined
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getAngleStyle", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === 'hours' ? 12 : 60;
      var angle = 360 / max * value;

      if (type === 'hours' && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected,
          isInner = _this$props2.isInner,
          type = _this$props2.type,
          value = _this$props2.value,
          other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["classes", "hasSelected", "isInner", "type", "value"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, other, {
        style: this.getAngleStyle(),
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_11__["default"])(classes.pointer, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, classes.animateTransform, this.state.toAnimateTransform)),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 7
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_11__["default"])(classes.thumb, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, classes.noPoint, hasSelected)),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      }));
    }
  }]);

  return ClockPointer;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(ClockPointer, "getDerivedStateFromProps", function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer));

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/Clock/ClockView.tsx":
/*!**************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/Clock/ClockView.tsx ***!
  \**************************************************************************/
/*! exports provided: useStyles, ClockView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStyles", function() { return useStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockView", function() { return ClockView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Clock */ "../node_modules/@material-ui/pickers/src/views/Clock/Clock.tsx");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_shared/hooks/useUtils */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useUtils.ts");
/* harmony import */ var _shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_shared/withDefaultProps */ "../node_modules/@material-ui/pickers/src/_shared/withDefaultProps.tsx");
/* harmony import */ var _ClockNumbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ClockNumbers */ "../node_modules/@material-ui/pickers/src/views/Clock/ClockNumbers.tsx");
/* harmony import */ var _TimePicker_TimePickerToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../TimePicker/TimePickerToolbar */ "../node_modules/@material-ui/pickers/src/TimePicker/TimePickerToolbar.tsx");
/* harmony import */ var _shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_shared/ArrowSwitcher */ "../node_modules/@material-ui/pickers/src/_shared/ArrowSwitcher.tsx");
/* harmony import */ var _helpers_time_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_helpers/time-utils */ "../node_modules/@material-ui/pickers/src/_helpers/time-utils.ts");

var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/views/Clock/ClockView.tsx";











var muiPickersComponentConfig = {
  name: 'MuiPickersClockView'
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function () {
  return {
    arrowSwitcher: {
      position: 'absolute',
      right: 12,
      top: 15
    }
  };
}, muiPickersComponentConfig);

function getMinutesAriaText(minute) {
  return "".concat(minute, " minutes");
}

var getHoursAriaText = function getHoursAriaText(hour) {
  return "".concat(hour, " hours");
};

var getSecondsAriaText = function getSecondsAriaText(seconds) {
  return "".concat(seconds, " seconds");
};

function ClockView(props) {
  var _useDefaultProps = Object(_shared_withDefaultProps__WEBPACK_IMPORTED_MODULE_7__["useDefaultProps"])(props, muiPickersComponentConfig),
      allowKeyboardControl = _useDefaultProps.allowKeyboardControl,
      ampm = _useDefaultProps.ampm,
      ampmInClock = _useDefaultProps.ampmInClock,
      date = _useDefaultProps.date,
      disableIgnoringDatePartForTimeValidation = _useDefaultProps.disableIgnoringDatePartForTimeValidation,
      _useDefaultProps$getH = _useDefaultProps.getHoursClockNumberText,
      getHoursClockNumberText = _useDefaultProps$getH === void 0 ? getHoursAriaText : _useDefaultProps$getH,
      _useDefaultProps$getM = _useDefaultProps.getMinutesClockNumberText,
      getMinutesClockNumberText = _useDefaultProps$getM === void 0 ? getMinutesAriaText : _useDefaultProps$getM,
      _useDefaultProps$getS = _useDefaultProps.getSecondsClockNumberText,
      getSecondsClockNumberText = _useDefaultProps$getS === void 0 ? getSecondsAriaText : _useDefaultProps$getS,
      leftArrowButtonProps = _useDefaultProps.leftArrowButtonProps,
      _useDefaultProps$left = _useDefaultProps.leftArrowButtonText,
      leftArrowButtonText = _useDefaultProps$left === void 0 ? 'open previous view' : _useDefaultProps$left,
      leftArrowIcon = _useDefaultProps.leftArrowIcon,
      maxTime = _useDefaultProps.maxTime,
      minTime = _useDefaultProps.minTime,
      _useDefaultProps$minu = _useDefaultProps.minutesStep,
      minutesStep = _useDefaultProps$minu === void 0 ? 1 : _useDefaultProps$minu,
      nextViewAvailable = _useDefaultProps.nextViewAvailable,
      onChange = _useDefaultProps.onChange,
      onDateChange = _useDefaultProps.onDateChange,
      openNextView = _useDefaultProps.openNextView,
      openPreviousView = _useDefaultProps.openPreviousView,
      previousViewAvailable = _useDefaultProps.previousViewAvailable,
      rightArrowButtonProps = _useDefaultProps.rightArrowButtonProps,
      _useDefaultProps$righ = _useDefaultProps.rightArrowButtonText,
      rightArrowButtonText = _useDefaultProps$righ === void 0 ? 'open next view' : _useDefaultProps$righ,
      rightArrowIcon = _useDefaultProps.rightArrowIcon,
      shouldDisableTime = _useDefaultProps.shouldDisableTime,
      showViewSwitcher = _useDefaultProps.showViewSwitcher,
      type = _useDefaultProps.type;

  var now = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useNow"])();
  var utils = Object(_shared_hooks_useUtils__WEBPACK_IMPORTED_MODULE_6__["useUtils"])();
  var classes = useStyles();
  var dateOrNow = date || now;

  var _useMeridiemMode = Object(_TimePicker_TimePickerToolbar__WEBPACK_IMPORTED_MODULE_9__["useMeridiemMode"])(dateOrNow, ampm, onDateChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var isTimeDisabled = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](function (rawValue, type) {
    if (date === null) {
      return false;
    }

    var validateTimeValue = function validateTimeValue(getRequestedTimePoint) {
      var isAfterComparingFn = Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_11__["createIsAfterIgnoreDatePart"])(Boolean(disableIgnoringDatePartForTimeValidation), utils);
      return Boolean(minTime && isAfterComparingFn(minTime, getRequestedTimePoint('end')) || maxTime && isAfterComparingFn(getRequestedTimePoint('start'), maxTime) || shouldDisableTime && shouldDisableTime(rawValue, type));
    };

    switch (type) {
      case 'hours':
        {
          var hoursWithMeridiem = Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_11__["convertValueToMeridiem"])(rawValue, meridiemMode, Boolean(ampm));
          return validateTimeValue(function (when) {
            return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["pipe"])(function (currentDate) {
              return utils.setHours(currentDate, hoursWithMeridiem);
            }, function (dateWithHours) {
              return utils.setMinutes(dateWithHours, when === 'start' ? 0 : 59);
            }, function (dateWithMinutes) {
              return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
            })(date);
          });
        }

      case 'minutes':
        return validateTimeValue(function (when) {
          return Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["pipe"])(function (currentDate) {
            return utils.setMinutes(currentDate, rawValue);
          }, function (dateWithMinutes) {
            return utils.setSeconds(dateWithMinutes, when === 'start' ? 0 : 59);
          })(date);
        });

      case 'seconds':
        return validateTimeValue(function () {
          return utils.setSeconds(date, rawValue);
        });

      default:
        throw new Error('not supported');
    }
  }, [ampm, date, disableIgnoringDatePartForTimeValidation, maxTime, meridiemMode, minTime, shouldDisableTime, utils]);
  var viewProps = react__WEBPACK_IMPORTED_MODULE_1__["useMemo"](function () {
    switch (type) {
      case 'hours':
        {
          var handleHoursChange = function handleHoursChange(value, isFinish) {
            var valueWithMeridiem = Object(_helpers_time_utils__WEBPACK_IMPORTED_MODULE_11__["convertValueToMeridiem"])(value, meridiemMode, Boolean(ampm));
            onChange(utils.setHours(dateOrNow, valueWithMeridiem), isFinish);
          };

          return {
            onChange: handleHoursChange,
            value: utils.getHours(dateOrNow),
            children: Object(_ClockNumbers__WEBPACK_IMPORTED_MODULE_8__["getHourNumbers"])({
              date: date,
              utils: utils,
              ampm: Boolean(ampm),
              onChange: handleHoursChange,
              getClockNumberText: getHoursClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'hours');
              }
            })
          };
        }

      case 'minutes':
        {
          var minutesValue = utils.getMinutes(dateOrNow);

          var handleMinutesChange = function handleMinutesChange(value, isFinish) {
            onChange(utils.setMinutes(dateOrNow, value), isFinish);
          };

          return {
            value: minutesValue,
            onChange: handleMinutesChange,
            children: Object(_ClockNumbers__WEBPACK_IMPORTED_MODULE_8__["getMinutesNumbers"])({
              utils: utils,
              value: minutesValue,
              onChange: handleMinutesChange,
              getClockNumberText: getMinutesClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'minutes');
              }
            })
          };
        }

      case 'seconds':
        {
          var secondsValue = utils.getSeconds(dateOrNow);

          var handleSecondsChange = function handleSecondsChange(value, isFinish) {
            onChange(utils.setSeconds(dateOrNow, value), isFinish);
          };

          return {
            value: secondsValue,
            onChange: handleSecondsChange,
            children: Object(_ClockNumbers__WEBPACK_IMPORTED_MODULE_8__["getMinutesNumbers"])({
              utils: utils,
              value: secondsValue,
              onChange: handleSecondsChange,
              getClockNumberText: getSecondsClockNumberText,
              isDisabled: function isDisabled(value) {
                return isTimeDisabled(value, 'seconds');
              }
            })
          };
        }

      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [type, utils, date, ampm, getHoursClockNumberText, getMinutesClockNumberText, getSecondsClockNumberText, meridiemMode, onChange, dateOrNow, isTimeDisabled]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 5
    }
  }, showViewSwitcher && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_ArrowSwitcher__WEBPACK_IMPORTED_MODULE_10__["ArrowSwitcher"], {
    className: classes.arrowSwitcher,
    leftArrowButtonProps: leftArrowButtonProps,
    rightArrowButtonProps: rightArrowButtonProps,
    leftArrowButtonText: leftArrowButtonText,
    rightArrowButtonText: rightArrowButtonText,
    leftArrowIcon: leftArrowIcon,
    rightArrowIcon: rightArrowIcon,
    onLeftClick: openPreviousView,
    onRightClick: openNextView,
    isLeftDisabled: previousViewAvailable,
    isRightDisabled: nextViewAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_Clock__WEBPACK_IMPORTED_MODULE_4__["Clock"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    date: date,
    ampmInClock: ampmInClock // @ts-expect-error FIX ME
    ,
    onDateChange: onDateChange,
    type: type,
    ampm: ampm,
    minutesStep: minutesStep,
    allowKeyboardControl: allowKeyboardControl,
    isTimeDisabled: isTimeDisabled,
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  }, viewProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 7
    }
  })));
}
ClockView.propTypes = {
  ampm: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],
  date: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"],
  minutesStep: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"].isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"](['minutes', 'hours', 'seconds']).isRequired
};
ClockView.displayName = 'ClockView';

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/views/MobileKeyboardInputView.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/views/MobileKeyboardInputView.tsx ***!
  \**********************************************************************************/
/*! exports provided: MobileKeyboardInputView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileKeyboardInputView", function() { return MobileKeyboardInputView; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");

var MobileKeyboardInputView = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["styled"])('div')({
  padding: '16px 24px'
}, {
  name: 'MuiPickersMobileKeyboardInputView'
});

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/DesktopTooltipWrapper.tsx":
/*!***********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/DesktopTooltipWrapper.tsx ***!
  \***********************************************************************************/
/*! exports provided: DesktopTooltipWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopTooltipWrapper", function() { return DesktopTooltipWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WrapperVariantContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared/KeyboardDateInput */ "../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/utils */ "../node_modules/@material-ui/pickers/src/_helpers/utils.ts");
/* harmony import */ var _shared_PickersPopper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/PickersPopper */ "../node_modules/@material-ui/pickers/src/_shared/PickersPopper.tsx");
/* harmony import */ var _shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useCanAutoFocus */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/DesktopTooltipWrapper.tsx";







var DesktopTooltipWrapper = function DesktopTooltipWrapper(props) {
  var open = props.open,
      children = props.children,
      PopperProps = props.PopperProps,
      onDismiss = props.onDismiss,
      DateInputProps = props.DateInputProps,
      TransitionComponent = props.TransitionComponent,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_3__["KeyboardDateInput"] : _props$KeyboardDateIn;
  var inputRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);
  var popperRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  var _useAutoFocusControl = Object(_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__["useAutoFocusControl"])(open),
      canAutoFocus = _useAutoFocusControl.canAutoFocus,
      onOpen = _useAutoFocusControl.onOpen;

  var handleBlur = function handleBlur() {
    Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_4__["executeInTheNextEventLoopTick"])(function () {
      var _inputRef$current, _popperRef$current;

      if (((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.contains(document.activeElement)) || ((_popperRef$current = popperRef.current) === null || _popperRef$current === void 0 ? void 0 : _popperRef$current.contains(document.activeElement))) {
        return;
      }

      onDismiss();
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_2__["WrapperVariantContext"].Provider, {
    value: "desktop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__["CanAutoFocusContext"].Provider, {
    value: canAutoFocus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KeyboardDateInputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DateInputProps, {
    containerRef: inputRef,
    onBlur: handleBlur,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_PickersPopper__WEBPACK_IMPORTED_MODULE_5__["PickersPopper"], {
    role: "tooltip",
    open: open,
    innerRef: popperRef,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onBlur: handleBlur,
    onClose: onDismiss,
    onOpen: onOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, children)));
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/DesktopWrapper.tsx":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/DesktopWrapper.tsx ***!
  \****************************************************************************/
/*! exports provided: DesktopWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopWrapper", function() { return DesktopWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _WrapperVariantContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/KeyboardDateInput */ "../node_modules/@material-ui/pickers/src/_shared/KeyboardDateInput.tsx");
/* harmony import */ var _shared_PickersPopper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/PickersPopper */ "../node_modules/@material-ui/pickers/src/_shared/PickersPopper.tsx");
/* harmony import */ var _shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/hooks/useCanAutoFocus */ "../node_modules/@material-ui/pickers/src/_shared/hooks/useCanAutoFocus.tsx");


var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/DesktopWrapper.tsx";







var DesktopWrapper = function DesktopWrapper(props) {
  var children = props.children,
      DateInputProps = props.DateInputProps,
      _props$KeyboardDateIn = props.KeyboardDateInputComponent,
      KeyboardDateInputComponent = _props$KeyboardDateIn === void 0 ? _shared_KeyboardDateInput__WEBPACK_IMPORTED_MODULE_4__["KeyboardDateInput"] : _props$KeyboardDateIn,
      onDismiss = props.onDismiss,
      open = props.open,
      PopperProps = props.PopperProps,
      TransitionComponent = props.TransitionComponent;
  var inputRef = react__WEBPACK_IMPORTED_MODULE_1__["useRef"](null);

  var _useAutoFocusControl = Object(_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__["useAutoFocusControl"])(open),
      canAutoFocus = _useAutoFocusControl.canAutoFocus,
      onOpen = _useAutoFocusControl.onOpen;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_3__["WrapperVariantContext"].Provider, {
    value: "desktop",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_hooks_useCanAutoFocus__WEBPACK_IMPORTED_MODULE_6__["CanAutoFocusContext"].Provider, {
    value: canAutoFocus,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](KeyboardDateInputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DateInputProps, {
    inputRef: inputRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_shared_PickersPopper__WEBPACK_IMPORTED_MODULE_5__["PickersPopper"], {
    role: "dialog",
    open: open,
    anchorEl: inputRef.current,
    TransitionComponent: TransitionComponent,
    PopperProps: PopperProps,
    onClose: onDismiss,
    onOpen: onOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, children)));
};
DesktopWrapper.propTypes = {
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx":
/*!***************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx ***!
  \***************************************************************************/
/*! exports provided: MobileWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileWrapper", function() { return MobileWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_PureDateInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/PureDateInput */ "../node_modules/@material-ui/pickers/src/_shared/PureDateInput.tsx");
/* harmony import */ var _WrapperVariantContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
/* harmony import */ var _shared_PickersModalDialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_shared/PickersModalDialog */ "../node_modules/@material-ui/pickers/src/_shared/PickersModalDialog.tsx");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx";






var MobileWrapper = function MobileWrapper(props) {
  var cancelText = props.cancelText,
      children = props.children,
      clearable = props.clearable,
      clearText = props.clearText,
      DateInputProps = props.DateInputProps,
      DialogProps = props.DialogProps,
      displayStaticWrapperAs = props.displayStaticWrapperAs,
      KeyboardDateInputComponent = props.KeyboardDateInputComponent,
      okText = props.okText,
      onAccept = props.onAccept,
      onClear = props.onClear,
      onDismiss = props.onDismiss,
      onSetToday = props.onSetToday,
      open = props.open,
      PopperProps = props.PopperProps,
      _props$PureDateInputC = props.PureDateInputComponent,
      PureDateInputComponent = _props$PureDateInputC === void 0 ? _shared_PureDateInput__WEBPACK_IMPORTED_MODULE_4__["PureDateInput"] : _props$PureDateInputC,
      showTabs = props.showTabs,
      showTodayButton = props.showTodayButton,
      todayText = props.todayText,
      wider = props.wider,
      other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "KeyboardDateInputComponent", "okText", "onAccept", "onClear", "onDismiss", "onSetToday", "open", "PopperProps", "PureDateInputComponent", "showTabs", "showTodayButton", "todayText", "wider"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_5__["WrapperVariantContext"].Provider, {
    value: "mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PureDateInputComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, other, DateInputProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_shared_PickersModalDialog__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearText: clearText,
    todayText: todayText,
    okText: okText,
    cancelText: cancelText,
    clearable: clearable,
    showTodayButton: showTodayButton,
    "data-mui-test": "mobile-wrapper-dialog"
  }, DialogProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), children));
};
MobileWrapper.propTypes = {
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"],
  clearable: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"],
  DialogProps: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  okText: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"],
  showTodayButton: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  todayText: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"]
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx":
/*!*******************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx ***!
  \*******************************************************************************/
/*! exports provided: makeResponsiveWrapper, ResponsiveWrapper, ResponsiveTooltipWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeResponsiveWrapper", function() { return makeResponsiveWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveWrapper", function() { return ResponsiveWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveTooltipWrapper", function() { return ResponsiveTooltipWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "../node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _MobileWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MobileWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx");
/* harmony import */ var _DesktopWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DesktopWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/DesktopWrapper.tsx");
/* harmony import */ var _DesktopTooltipWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DesktopTooltipWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/DesktopTooltipWrapper.tsx");



var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/ResponsiveWrapper.tsx";







var makeResponsiveWrapper = function makeResponsiveWrapper(DesktopWrapperComponent, MobileWrapperComponent) {
  var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
    var cancelText = _ref.cancelText,
        clearable = _ref.clearable,
        clearText = _ref.clearText,
        _ref$desktopModeMedia = _ref.desktopModeMediaQuery,
        desktopModeMediaQuery = _ref$desktopModeMedia === void 0 ? _constants_dimensions__WEBPACK_IMPORTED_MODULE_4__["IS_TOUCH_DEVICE_MEDIA"] : _ref$desktopModeMedia,
        DialogProps = _ref.DialogProps,
        displayStaticWrapperAs = _ref.displayStaticWrapperAs,
        okText = _ref.okText,
        PopperProps = _ref.PopperProps,
        showTodayButton = _ref.showTodayButton,
        todayText = _ref.todayText,
        TransitionComponent = _ref.TransitionComponent,
        other = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["cancelText", "clearable", "clearText", "desktopModeMediaQuery", "DialogProps", "displayStaticWrapperAs", "okText", "PopperProps", "showTodayButton", "todayText", "TransitionComponent"]);

    var isDesktop = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__["default"])(desktopModeMediaQuery);
    return isDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DesktopWrapperComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      PopperProps: PopperProps,
      TransitionComponent: TransitionComponent
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](MobileWrapperComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      okText: okText,
      cancelText: cancelText,
      clearText: clearText,
      todayText: todayText,
      showTodayButton: showTodayButton,
      clearable: clearable,
      DialogProps: DialogProps
    }, other, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }));
  };

  return ResponsiveWrapper;
};
var ResponsiveWrapper = makeResponsiveWrapper(_DesktopWrapper__WEBPACK_IMPORTED_MODULE_6__["DesktopWrapper"], _MobileWrapper__WEBPACK_IMPORTED_MODULE_5__["MobileWrapper"]);
var ResponsiveTooltipWrapper = makeResponsiveWrapper(_DesktopTooltipWrapper__WEBPACK_IMPORTED_MODULE_7__["DesktopTooltipWrapper"], _MobileWrapper__WEBPACK_IMPORTED_MODULE_5__["MobileWrapper"]);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/StaticWrapper.tsx":
/*!***************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/StaticWrapper.tsx ***!
  \***************************************************************************/
/*! exports provided: StaticWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticWrapper", function() { return StaticWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _constants_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/dimensions */ "../node_modules/@material-ui/pickers/src/constants/dimensions.ts");
/* harmony import */ var _WrapperVariantContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WrapperVariantContext */ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx");
var _this = undefined,
    _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/StaticWrapper.tsx";





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      minWidth: _constants_dimensions__WEBPACK_IMPORTED_MODULE_2__["DIALOG_WIDTH"],
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(props) {
  var _props$displayStaticW = props.displayStaticWrapperAs,
      displayStaticWrapperAs = _props$displayStaticW === void 0 ? 'static' : _props$displayStaticW,
      children = props.children;
  var classes = useStyles();
  var isStatic = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_3__["IsStaticVariantContext"].Provider, {
    value: isStatic,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_WrapperVariantContext__WEBPACK_IMPORTED_MODULE_3__["WrapperVariantContext"].Provider, {
    value: displayStaticWrapperAs,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: classes.root,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, children)));
};

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx":
/*!*********************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/Wrapper.tsx ***!
  \*********************************************************************/
/*! exports provided: getWrapperVariant, StaticWrapper, MobileWrapper, DesktopWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWrapperVariant", function() { return getWrapperVariant; });
/* harmony import */ var _StaticWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StaticWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/StaticWrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticWrapper", function() { return _StaticWrapper__WEBPACK_IMPORTED_MODULE_0__["StaticWrapper"]; });

/* harmony import */ var _MobileWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/MobileWrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileWrapper", function() { return _MobileWrapper__WEBPACK_IMPORTED_MODULE_1__["MobileWrapper"]; });

/* harmony import */ var _DesktopWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopWrapper */ "../node_modules/@material-ui/pickers/src/wrappers/DesktopWrapper.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DesktopWrapper", function() { return _DesktopWrapper__WEBPACK_IMPORTED_MODULE_2__["DesktopWrapper"]; });




function getWrapperVariant(wrapper) {
  if (wrapper === _DesktopWrapper__WEBPACK_IMPORTED_MODULE_2__["DesktopWrapper"]) {
    return 'desktop';
  }

  if (wrapper === _StaticWrapper__WEBPACK_IMPORTED_MODULE_0__["StaticWrapper"]) {
    return 'static';
  }

  if (wrapper === _MobileWrapper__WEBPACK_IMPORTED_MODULE_1__["MobileWrapper"]) {
    return 'mobile';
  }

  return null;
}


/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx":
/*!***********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/WrapperVariantContext.tsx ***!
  \***********************************************************************************/
/*! exports provided: WrapperVariantContext, IsStaticVariantContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperVariantContext", function() { return WrapperVariantContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStaticVariantContext", function() { return IsStaticVariantContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// consider getting rid from wrapper variant
var WrapperVariantContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](null);
var IsStaticVariantContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"](false);

/***/ }),

/***/ "../node_modules/@material-ui/pickers/src/wrappers/makeWrapperComponent.tsx":
/*!**********************************************************************************!*\
  !*** ../node_modules/@material-ui/pickers/src/wrappers/makeWrapperComponent.tsx ***!
  \**********************************************************************************/
/*! exports provided: makeWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeWrapperComponent", function() { return makeWrapperComponent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/Users/pedro/projects/material-ui-pickers/node_modules/@material-ui/pickers/src/wrappers/makeWrapperComponent.tsx";


/* Creates a component that rendering modal/popover/nothing and spreading props down to text field */
function makeWrapperComponent(Wrapper, _ref) {
  var KeyboardDateInputComponent = _ref.KeyboardDateInputComponent,
      PureDateInputComponent = _ref.PureDateInputComponent;

  function WrapperComponent(props) {
    var disableCloseOnSelect = props.disableCloseOnSelect,
        cancelText = props.cancelText,
        children = props.children,
        clearable = props.clearable,
        clearText = props.clearText,
        DateInputProps = props.DateInputProps,
        DialogProps = props.DialogProps,
        displayStaticWrapperAs = props.displayStaticWrapperAs,
        inputFormat = props.inputFormat,
        okText = props.okText,
        onAccept = props.onAccept,
        onChange = props.onChange,
        onClose = props.onClose,
        onOpen = props.onOpen,
        open = props.open,
        PopperProps = props.PopperProps,
        showTabs = props.showTabs,
        todayText = props.todayText,
        value = props.value,
        wider = props.wider,
        wrapperProps = props.wrapperProps,
        restPropsForTextField = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableCloseOnSelect", "cancelText", "children", "clearable", "clearText", "DateInputProps", "DialogProps", "displayStaticWrapperAs", "inputFormat", "okText", "onAccept", "onChange", "onClose", "onOpen", "open", "PopperProps", "showTabs", "todayText", "value", "wider", "wrapperProps"]);

    var WrapperComponent = Wrapper;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrapperComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      clearable: clearable,
      clearText: clearText,
      DialogProps: DialogProps,
      PopperProps: PopperProps,
      okText: okText,
      todayText: todayText,
      cancelText: cancelText,
      DateInputProps: DateInputProps // @ts-ignore
      ,
      KeyboardDateInputComponent: KeyboardDateInputComponent // @ts-ignore
      ,
      PureDateInputComponent: PureDateInputComponent,
      wider: wider,
      showTabs: showTabs,
      displayStaticWrapperAs: displayStaticWrapperAs
    }, wrapperProps, restPropsForTextField, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }), children);
  }

  return WrapperComponent;
}

/***/ })

}]);
//# sourceMappingURL=pickers.js.map
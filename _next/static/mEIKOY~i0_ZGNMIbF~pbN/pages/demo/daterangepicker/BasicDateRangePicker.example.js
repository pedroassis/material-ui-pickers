(window.webpackJsonp=window.webpackJsonp||[]).push([["09a5"],{"0Ee2":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"raw",function(){return o}),t.d(n,"relativePath",function(){return d});var a=t("hDBU"),r=t("mXGw"),i=t("kebl"),u=t("i+U2"),l=t("oNjM");function c(){var e=r.useState([null,null]),n=Object(a.default)(e,2),t=n[0],c=n[1];return r.createElement(u.a,{startText:"Check-in",endText:"Check-out",value:t,onChange:function(e){return c(e)},renderInput:function(e,n){return r.createElement(r.Fragment,null,r.createElement(i.a,e),r.createElement(l.a,null," to "),r.createElement(i.a,n))}})}var o='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { DateRangePicker, DateRange, DateRangeDelimiter } from "@material-ui/pickers";\n\nexport default function BasicDateRangePicker() {\n  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);\n\n  return (\n    <DateRangePicker\n      startText="Check-in"\n      endText="Check-out"\n      value={value}\n      onChange={(newValue) => setValue(newValue)}\n      renderInput={(startProps, endProps) => (\n        <React.Fragment>\n          <TextField {...startProps} />\n          <DateRangeDelimiter> to </DateRangeDelimiter>\n          <TextField {...endProps} />\n        </React.Fragment>\n      )}\n    />\n  );\n}\n',d="pages/demo/daterangepicker/BasicDateRangePicker.example.tsx"},RCwy:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/daterangepicker/BasicDateRangePicker.example",function(){var e=t("0Ee2");return{page:e.default||e}}])}},[["RCwy","5d41","9da1","85a6"]]]);
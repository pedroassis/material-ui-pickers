(window.webpackJsonp=window.webpackJsonp||[]).push([["ebb7"],{Mrm9:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"raw",function(){return o}),n.d(t,"relativePath",function(){return p});var a=n("hDBU"),r=n("mXGw"),l=n("kebl"),i=n("i+U2"),u=n("oNjM");function c(){var e=r.useState([null,null]),t=Object(a.default)(e,2),n=t[0],c=t[1];return r.createElement(r.Fragment,null,r.createElement(i.d,{displayStaticWrapperAs:"desktop",value:n,onChange:function(e){return c(e)},renderInput:function(e,t){return r.createElement(r.Fragment,null,r.createElement(l.a,e),r.createElement(u.a,null," to "),r.createElement(l.a,t))}}),r.createElement(i.d,{displayStaticWrapperAs:"mobile",value:n,onChange:function(e){return c(e)},renderInput:function(e,t){return r.createElement(r.Fragment,null,r.createElement(l.a,e),r.createElement(u.a,null," to "),r.createElement(l.a,t))}}))}var o='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { StaticDateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";\n\nexport default function StaticDateRangePickerExample() {\n  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);\n\n  return (\n    <React.Fragment>\n      <StaticDateRangePicker\n        displayStaticWrapperAs="desktop"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(startProps, endProps) => (\n          <React.Fragment>\n            <TextField {...startProps} />\n            <DateRangeDelimiter> to </DateRangeDelimiter>\n            <TextField {...endProps} />\n          </React.Fragment>\n        )}\n      />\n      <StaticDateRangePicker\n        displayStaticWrapperAs="mobile"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(startProps, endProps) => (\n          <React.Fragment>\n            <TextField {...startProps} />\n            <DateRangeDelimiter> to </DateRangeDelimiter>\n            <TextField {...endProps} />\n          </React.Fragment>\n        )}\n      />\n    </React.Fragment>\n  );\n}\n',p="pages/demo/daterangepicker/StaticDateRangePicker.example.tsx"},VQor:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/daterangepicker/StaticDateRangePicker.example",function(){var e=n("Mrm9");return{page:e.default||e}}])}},[["VQor","5d41","9da1","85a6"]]]);
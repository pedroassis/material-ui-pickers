(window.webpackJsonp=window.webpackJsonp||[]).push([["2ef2"],{"2slu":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/datepicker/StaticDatePicker.example",function(){var e=t("pAkg");return{page:e.default||e}}])},pAkg:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p}),t.d(n,"raw",function(){return d}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),i=t("Dy3B"),o=t("kebl"),u=t("/KD0"),c=t("ye7r");function l(e){return Object(i.a)(Object(c.d)(e))}function p(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],i=n[1];return r.createElement(r.Fragment,null,r.createElement(u.d,{displayStaticWrapperAs:"desktop",openTo:"year",value:t,onChange:function(e){return i(e)},renderInput:function(e){return r.createElement(o.a,e)}}),r.createElement(u.d,{orientation:"landscape",openTo:"date",value:t,shouldDisableDate:l,onChange:function(e){return i(e)},renderInput:function(e){return r.createElement(o.a,e)}}))}var d='import * as React from "react";\nimport isWeekend from "date-fns/isWeekend";\nimport TextField from "@material-ui/core/TextField";\nimport { StaticDatePicker } from "@material-ui/pickers";\nimport { makeJSDateObject } from "../../../utils/helpers";\n\nfunction disableWeekends(date: Date) {\n  // TODO: replace with implementation for your date library\n  return isWeekend(makeJSDateObject(date));\n}\n\nexport default function StaticDatePickerExample() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <StaticDatePicker\n        displayStaticWrapperAs="desktop"\n        openTo="year"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <StaticDatePicker\n        orientation="landscape"\n        openTo="date"\n        value={value}\n        // @ts-expect-error Waiting for making all inner components generics\n        shouldDisableDate={disableWeekends}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/datepicker/StaticDatePicker.example.tsx"}},[["2slu","5d41","9da1"]]]);
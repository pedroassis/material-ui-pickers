(window.webpackJsonp=window.webpackJsonp||[]).push([["0752"],{RhXu:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d}),n.d(t,"raw",function(){return c}),n.d(t,"relativePath",function(){return s});var a=n("hDBU"),r=n("mXGw"),i=n("KtBW"),o=n("kebl"),u=n("i+U2"),l=n("oNjM"),m=n("ye7r");function d(){var e,t,n=r.useState([null,null]),d=Object(a.default)(n,2),c=d[0],s=d[1];return r.createElement(u.a,{disablePast:!0,value:c,maxDate:(e=c[0],t=4,e?Object(i.a)(Object(m.d)(e),t):void 0),onChange:function(e){return s(e)},renderInput:function(e,t){return r.createElement(r.Fragment,null,r.createElement(o.a,e),r.createElement(l.a,null," to "),r.createElement(o.a,t))}})}var c='import * as React from "react";\nimport addWeeks from "date-fns/addWeeks";\nimport TextField from "@material-ui/core/TextField";\nimport { Dayjs } from "dayjs";\nimport { Moment } from "moment";\nimport { DateTime } from "luxon";\nimport { DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";\n// TODO remove relative import\nimport { makeJSDateObject } from "../../../utils/helpers";\n\nfunction getWeeksAfter(date: Moment | DateTime | Dayjs | Date, amount: number) {\n  // TODO: replace with implementation for your date library\n  return date ? addWeeks(makeJSDateObject(date), amount) : undefined;\n}\n\nexport default function MinMaxDateRangePicker() {\n  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);\n\n  return (\n    <DateRangePicker\n      disablePast\n      value={value}\n      // @ts-ignore\n      maxDate={getWeeksAfter(value[0], 4)}\n      onChange={(newValue) => setValue(newValue)}\n      renderInput={(startProps, endProps) => (\n        <React.Fragment>\n          <TextField {...startProps} />\n          <DateRangeDelimiter> to </DateRangeDelimiter>\n          <TextField {...endProps} />\n        </React.Fragment>\n      )}\n    />\n  );\n}\n',s="pages/demo/daterangepicker/MinMaxDateRangePicker.example.tsx"},xysE:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/daterangepicker/MinMaxDateRangePicker.example",function(){var e=n("RhXu");return{page:e.default||e}}])}},[["xysE","5d41","9da1","85a6"]]]);
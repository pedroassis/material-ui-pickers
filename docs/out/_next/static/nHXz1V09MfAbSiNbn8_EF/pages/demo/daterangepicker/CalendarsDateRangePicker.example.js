(window.webpackJsonp=window.webpackJsonp||[]).push([["8deb"],{"7PDH":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/daterangepicker/CalendarsDateRangePicker.example",function(){var e=t("E96A");return{page:e.default||e}}])},E96A:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"raw",function(){return d}),t.d(n,"relativePath",function(){return p});var a=t("hDBU"),r=t("mXGw"),l=t("V2/N"),o=t("/ZiB"),u=t("kebl"),c=t("i+U2"),i=t("oNjM");function m(){var e=r.useState([null,null]),n=Object(a.default)(e,2),t=n[0],m=n[1];return r.createElement(l.a,{container:!0,direction:"column",alignItems:"center"},r.createElement(o.a,{gutterBottom:!0}," 1 calendar "),r.createElement(c.a,{calendars:1,value:t,onChange:function(e){return m(e)},renderInput:function(e,n){return r.createElement(r.Fragment,null,r.createElement(u.a,e),r.createElement(i.a,null," to "),r.createElement(u.a,n))}}),r.createElement(o.a,{gutterBottom:!0}," 2 calendars"),r.createElement(c.a,{calendars:2,value:t,onChange:function(e){return m(e)},renderInput:function(e,n){return r.createElement(r.Fragment,null,r.createElement(u.a,e),r.createElement(i.a,null," to "),r.createElement(u.a,n))}}),r.createElement(o.a,{gutterBottom:!0}," 3 calendars"),r.createElement(c.a,{calendars:3,value:t,onChange:function(e){return m(e)},renderInput:function(e,n){return r.createElement(r.Fragment,null,r.createElement(u.a,e),r.createElement(i.a,null," to "),r.createElement(u.a,n))}}))}var d='import * as React from "react";\nimport Grid from "@material-ui/core/Grid";\nimport Typography from "@material-ui/core/Typography";\nimport TextField from "@material-ui/core/TextField";\nimport { DateRangePicker, DateRangeDelimiter, DateRange } from "@material-ui/pickers";\n\nexport default function CalendarsDateRangePicker() {\n  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);\n\n  return (\n    <Grid container direction="column" alignItems="center">\n      <Typography gutterBottom> 1 calendar </Typography>\n      <DateRangePicker\n        calendars={1}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(startProps, endProps) => (\n          <React.Fragment>\n            <TextField {...startProps} />\n            <DateRangeDelimiter> to </DateRangeDelimiter>\n            <TextField {...endProps} />\n          </React.Fragment>\n        )}\n      />\n      <Typography gutterBottom> 2 calendars</Typography>\n      <DateRangePicker\n        calendars={2}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(startProps, endProps) => (\n          <React.Fragment>\n            <TextField {...startProps} />\n            <DateRangeDelimiter> to </DateRangeDelimiter>\n            <TextField {...endProps} />\n          </React.Fragment>\n        )}\n      />\n      <Typography gutterBottom> 3 calendars</Typography>\n      <DateRangePicker\n        calendars={3}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(startProps, endProps) => (\n          <React.Fragment>\n            <TextField {...startProps} />\n            <DateRangeDelimiter> to </DateRangeDelimiter>\n            <TextField {...endProps} />\n          </React.Fragment>\n        )}\n      />\n    </Grid>\n  );\n}\n',p="pages/demo/daterangepicker/CalendarsDateRangePicker.example.tsx"}},[["7PDH","5d41","9da1","85a6"]]]);
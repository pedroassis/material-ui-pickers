(window.webpackJsonp=window.webpackJsonp||[]).push([["6ba4"],{VK7u:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return s}),t.d(a,"raw",function(){return m}),t.d(a,"relativePath",function(){return f});var n=t("z3IF"),r=t("hDBU"),o=t("mXGw"),i=t("Jin1"),l=t("kebl"),c=t("1O2t"),u=t("/KD0"),d=t("fGNF"),p={normalDate:"d MMM yyy",keyboardDate:"d MMM yyy"};function s(){var e=o.useState(new Date),a=Object(r.default)(e,2),t=a[0],s=a[1];return o.createElement(c.b,{dateAdapter:d.a,locale:i.a,dateFormats:p},o.createElement(u.a,{clearable:!0,value:t,onChange:function(e){return s(e)},clearText:"vider",cancelText:"annuler",renderInput:function(e){return o.createElement(l.a,Object(n.a)({helperText:"Localization done right"},e))}}))}var m='import * as React from "react";\nimport frLocale from "date-fns/locale/fr";\nimport TextField from "@material-ui/core/TextField";\nimport { DatePicker, LocalizationProvider } from "@material-ui/pickers";\nimport DateFnsAdapter from "@material-ui/pickers/adapter/date-fns";\n\nconst formats = {\n  normalDate: "d MMM yyy",\n  keyboardDate: "d MMM yyy",\n};\n\nexport default function DateFnsLocalizationExample() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <LocalizationProvider dateAdapter={DateFnsAdapter} locale={frLocale} dateFormats={formats}>\n      <DatePicker\n        clearable\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        clearText="vider"\n        cancelText="annuler"\n        renderInput={(props) => <TextField helperText="Localization done right" {...props} />}\n      />\n    </LocalizationProvider>\n  );\n}\n',f="pages/guides/Formats.example.tsx"},enR2:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/Formats.example",function(){var e=t("VK7u");return{page:e.default||e}}])}},[["enR2","5d41","9da1"]]]);
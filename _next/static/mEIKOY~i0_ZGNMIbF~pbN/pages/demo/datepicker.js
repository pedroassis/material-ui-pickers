(window.webpackJsonp=window.webpackJsonp||[]).push([["844d"],{"0YOR":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return m});var a=t("hDBU"),r=t("mXGw"),o=t.n(r),i=t("kebl"),l=t("/KD0");function s(e){var n=o.a.useState(new Date),t=Object(a.default)(n,2),r=t[0],s=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.c,{clearable:!0,label:"For mobile",inputFormat:e.__willBeReplacedGetFormatString({moment:"MM/DD/YYYY",dateFns:"MM/dd/yyyy"}),toolbarPlaceholder:"Enter Date",value:r,onChange:function(e){return s(e)},renderInput:function(e){return o.a.createElement(i.a,e)}}),o.a.createElement(l.b,{label:"For desktop",value:r,minDate:new Date("2017-01-01"),onChange:function(e){return s(e)},renderInput:function(e){return o.a.createElement(i.a,e)}}),o.a.createElement(l.a,{disableFuture:!0,label:"Responsive",openTo:"year",views:["year","month","date"],value:r,onChange:function(e){return s(e)},renderInput:function(e){return o.a.createElement(i.a,e)}}))}var c='/* eslint-disable no-underscore-dangle */\nimport React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { MobileDatePicker, DesktopDatePicker, DatePicker } from "@material-ui/pickers";\n\nexport default function DatePickersVariants(demoProps: any) {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <MobileDatePicker\n        clearable\n        label="For mobile"\n        inputFormat={demoProps.__willBeReplacedGetFormatString({\n          moment: "MM/DD/YYYY",\n          dateFns: "MM/dd/yyyy",\n        })}\n        toolbarPlaceholder="Enter Date"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <DesktopDatePicker\n        label="For desktop"\n        value={value}\n        minDate={new Date("2017-01-01")}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <DatePicker\n        disableFuture\n        label="Responsive"\n        openTo="year"\n        views={["year", "month", "date"]}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n    </React.Fragment>\n  );\n}\n',m="pages/demo/datepicker/DatePickers.example.tsx"},"2S4i":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/datepicker",function(){var e=t("bh8n");return{page:e.default||e}}])},"2prB":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"raw",function(){return m}),t.d(n,"relativePath",function(){return p});var a=t("z3IF"),r=t("hDBU"),o=t("mXGw"),i=t("ewSV"),l=t("/KD0"),s=Object(i.a)("div")({display:"flex",alignItems:"center"});function c(){var e=o.useState(new Date),n=Object(r.default)(e,2),t=n[0],i=n[1];return o.createElement(l.b,{label:"Advanced keyboard",value:t,onChange:function(e){return i(e)},renderInput:function(e){var n=e.inputRef,t=e.inputProps,r=e.InputProps;return o.createElement(s,null,o.createElement("input",Object(a.a)({ref:n},t)),null==r?void 0:r.endAdornment)}})}var m='import * as React from "react";\nimport { styled } from "@material-ui/core/styles";\nimport { DesktopDatePicker } from "@material-ui/pickers";\n\nconst InputContainer = styled("div")({\n  display: "flex",\n  alignItems: "center",\n});\n\nexport default function CustomInput() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <DesktopDatePicker\n      label="Advanced keyboard"\n      value={value}\n      onChange={(newValue) => setValue(newValue)}\n      renderInput={({ inputRef, inputProps, InputProps }) => (\n        <InputContainer>\n          <input ref={inputRef} {...inputProps} />\n          {InputProps?.endAdornment}\n        </InputContainer>\n      )}\n    />\n  );\n}\n',p="pages/demo/datepicker/CustomInput.example.tsx"},"3Hfq":function(e,n,t){var a=t("TaGV"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},"5dyF":function(e,n,t){e.exports=t("9CGT")},"7Zt1":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return c}),t.d(n,"raw",function(){return m}),t.d(n,"relativePath",function(){return p});var a=t("z3IF"),r=t("hDBU"),o=t("mXGw"),i=t.n(o),l=t("kebl"),s=t("/KD0");function c(){var e=i.a.useState(new Date),n=Object(r.default)(e,2),t=n[0],o=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{views:["year"],label:"Year only",value:t,onChange:function(e){return o(e)},renderInput:function(e){return i.a.createElement(l.a,e)}}),i.a.createElement(s.c,{views:["year","month"],label:"Year and Month",minDate:new Date("2012-03-01"),maxDate:new Date("2023-06-01"),value:t,onChange:function(e){return o(e)},renderInput:function(e){return i.a.createElement(l.a,Object(a.a)({},e,{helperText:"With min and max"}))}}),i.a.createElement(s.a,{openTo:"year",views:["year","month"],label:"Year and Month",value:t,onChange:function(e){return o(e)},renderInput:function(e){return i.a.createElement(l.a,Object(a.a)({},e,{helperText:"Start from year selection"}))}}))}var m='import React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { DatePicker, MobileDatePicker } from "@material-ui/pickers";\n\nexport default function YearDatePicker() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <DatePicker\n        views={["year"]}\n        label="Year only"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <MobileDatePicker\n        views={["year", "month"]}\n        label="Year and Month"\n        minDate={new Date("2012-03-01")}\n        maxDate={new Date("2023-06-01")}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} helperText="With min and max" />}\n      />\n      <DatePicker\n        openTo="year"\n        views={["year", "month"]}\n        label="Year and Month"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} helperText="Start from year selection" />}\n      />\n    </React.Fragment>\n  );\n}\n',p="pages/demo/datepicker/ViewsDatePicker.example.tsx"},"9CGT":function(e,n,t){"use strict";var a=t("PL1w"),r=a(t("JYC+")),o=a(t("KBEF")),i=a(t("J/q3")),l=a(t("3esu")),s=a(t("8m4E")),c=a(t("Od8a")),m=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var u=t("so/P"),d=m(t("mXGw")),f=(p(t("OWZz")),m(t("bBV7"))),h=t("MUK1");function g(e){return e&&"object"==typeof e?h.formatWithValidation(e):e}var D=function(e){function n(){var e,t,a,r,i;return(0,o.default)(this,n),(e=(0,l.default)(this,(0,s.default)(n).apply(this,arguments))).formatUrls=(t=function(e,n){return{href:g(e),as:g(n)}},a=null,r=null,i=null,function(e,n){if(e===a&&n===r)return i;var o=t(e,n);return a=e,r=n,i=o,o}),e.linkClicked=function(n){var t=n.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var n=u.parse(e,!1,!0),t=u.parse(h.getLocationOrigin(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var s=window.location.pathname;i=u.resolve(s,i),l=l?u.resolve(s,l):i,n.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),f.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(n){e.props.onError&&e.props.onError(n)})}}},e}return(0,c.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=u.resolve(e,n);f.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,r=t.as;"string"==typeof n&&(n=d.default.createElement("a",null,n));var o=d.Children.only(n),i={onClick:function(n){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=f.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(o,i)}}]),n}(d.Component);n.default=D},"9dpD":function(e,n,t){"use strict";var a=t("Fcif"),r=t("dV/x"),o=t("mXGw"),i=t("PDtE"),l=(t("W0B4"),t("Rx6o")),s=t("gbh0"),c=o.forwardRef(function(e,n){var t=e.animation,l=void 0===t?"pulse":t,s=e.classes,c=e.className,m=e.component,p=void 0===m?"span":m,u=e.height,d=e.style,f=e.variant,h=void 0===f?"text":f,g=e.width,D=Object(r.a)(e,["animation","classes","className","component","height","style","variant","width"]),v=Boolean(D.children);return o.createElement(p,Object(a.a)({ref:n,className:Object(i.a)(s.root,s[h],c,v&&[s.withChildren,!g&&s.fitContent,!u&&s.heightAuto],!1!==l&&s[l])},D,{style:Object(a.a)({width:g,height:u},d)}))});n.a=Object(s.a)(function(e){return{root:{display:"block",backgroundColor:Object(l.c)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(e.shape.borderRadius,"px/").concat(Math.round(e.shape.borderRadius/.6*10)/10,"px"),"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}},{name:"MuiSkeleton"})(c)},HaeB:function(e,n,t){"use strict";var a=t("mXGw"),r=t("5dyF"),o=t.n(r),i=t("/ZiB");n.a=function(e){var n=e.components;return a.createElement("ul",null,n.map(function(e){return a.createElement("li",{key:e},a.createElement(o.a,{prefetch:!0,href:"/api/props?component=".concat(e),as:"/api/".concat(e)},a.createElement("a",null,a.createElement(i.a,null,"<".concat(e,"/>")))))}))}},"JYC+":function(e,n,t){e.exports=t("3Hfq")},OVWx:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return v}),t.d(n,"raw",function(){return b}),t.d(n,"relativePath",function(){return y});var a=t("z3IF"),r=t("azxR"),o=t("hDBU"),i=t("mXGw"),l=t("PDtE"),s=t("RHx5"),c=t("Ad/K"),m=t("VMSS"),p=t("kebl"),u=t("JDVn"),d=t("R82R"),f=t("CJOe"),h=t("/KD0"),g=t("ye7r"),D=Object(d.a)(function(e){return{highlight:{borderRadius:0,backgroundColor:e.palette.primary.main,color:e.palette.common.white,"&:hover, &:focus":{backgroundColor:e.palette.primary.dark}},firstHighlight:{borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"},endHighlight:{borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}});function v(e){var n=D(),t=i.useState(new Date),d=Object(o.default)(t,2),v=d[0],b=d[1];return i.createElement(h.a,{disableMaskedInput:!0,showDaysOutsideCurrentMonth:!0,label:"Week picker",value:v,onChange:b,renderDay:function(e,t,o){var p,d=Object(g.d)(e),h=Object(g.d)(null!=v?v:new Date),D=Object(m.a)(h),b=Object(c.a)(h),y=Object(u.a)(d,{start:D,end:b}),k=Object(s.a)(d,D),w=Object(s.a)(d,b);return i.createElement(f.a,Object(a.a)({},o,{disableMargin:!0,className:Object(l.a)((p={},Object(r.a)(p,n.highlight,y),Object(r.a)(p,n.firstHighlight,k),Object(r.a)(p,n.endHighlight,w),p))}))},renderInput:function(e){return i.createElement(p.a,e)},inputFormat:e.__willBeReplacedGetFormatString({moment:"[Week of] MMM D",dateFns:"'Week of' MMM d"})})}var b='/* eslint-disable no-underscore-dangle */\nimport * as React from "react";\nimport clsx from "clsx";\nimport isSameDay from "date-fns/isSameDay";\nimport endOfWeek from "date-fns/endOfWeek";\nimport startOfWeek from "date-fns/startOfWeek";\nimport TextField from "@material-ui/core/TextField";\nimport isWithinInterval from "date-fns/isWithinInterval";\nimport { makeStyles } from "@material-ui/core";\n// this guy required only on the docs site to work with dynamic date library\nimport { DatePicker, PickersDay, PickersDayProps } from "@material-ui/pickers";\n// TODO remove relative import\nimport { makeJSDateObject } from "../../../utils/helpers";\n\nconst useStyles = makeStyles((theme) => ({\n  highlight: {\n    borderRadius: 0,\n    backgroundColor: theme.palette.primary.main,\n    color: theme.palette.common.white,\n    "&:hover, &:focus": {\n      backgroundColor: theme.palette.primary.dark,\n    },\n  },\n  firstHighlight: {\n    borderTopLeftRadius: "50%",\n    borderBottomLeftRadius: "50%",\n  },\n  endHighlight: {\n    borderTopRightRadius: "50%",\n    borderBottomRightRadius: "50%",\n  },\n}));\n\nexport default function CustomDay(demoProps: any) {\n  const classes = useStyles();\n  const [selectedDate, handleDateChange] = React.useState<Date | null>(new Date());\n\n  const renderWeekPickerDay = (\n    date: Date,\n    _selectedDates: Date[],\n    DayComponentProps: PickersDayProps<Date>\n  ) => {\n    const dateClone = makeJSDateObject(date);\n    const selectedDateClone = makeJSDateObject(selectedDate ?? new Date());\n\n    const start = startOfWeek(selectedDateClone);\n    const end = endOfWeek(selectedDateClone);\n\n    const dayIsBetween = isWithinInterval(dateClone, { start, end });\n    const isFirstDay = isSameDay(dateClone, start);\n    const isLastDay = isSameDay(dateClone, end);\n\n    return (\n      <PickersDay\n        {...DayComponentProps}\n        disableMargin\n        className={clsx({\n          [classes.highlight]: dayIsBetween,\n          [classes.firstHighlight]: isFirstDay,\n          [classes.endHighlight]: isLastDay,\n        })}\n      />\n    );\n  };\n\n  return (\n    <DatePicker\n      disableMaskedInput\n      showDaysOutsideCurrentMonth\n      label="Week picker"\n      value={selectedDate}\n      onChange={handleDateChange}\n      renderDay={renderWeekPickerDay as any}\n      renderInput={(props) => <TextField {...props} />}\n      inputFormat={demoProps.__willBeReplacedGetFormatString({\n        moment: `[Week of] MMM D`,\n        dateFns: ""Week of" MMM d",\n      })}\n    />\n  );\n}\n',y="pages/demo/datepicker/CustomDay.example.tsx"},ZBcJ:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return s}),t.d(n,"relativePath",function(){return c});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("/KD0");function l(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(i.a,{label:"Basic example",value:t,onChange:function(e){return l(e)},renderInput:function(e){return r.createElement(o.a,e)}})}var s='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { DatePicker } from "@material-ui/pickers";\n\nexport default function BasicDatePicker() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <DatePicker\n      label="Basic example"\n      value={value}\n      onChange={(newValue) => setValue(newValue)}\n      renderInput={(props) => <TextField {...props} />}\n    />\n  );\n}\n',c="pages/demo/datepicker/BasicDatePicker.example.tsx"},bh8n:function(e,n,t){"use strict";t.r(n);var a=t("2Fjn"),r=t("mXGw"),o=t.n(r),i=t("dDab"),l=t("7H8X"),s=t("14KL"),c=t("WGnI"),m=t("HaeB"),p=t("d/oO"),u=t("OVWx"),d=t("qTHA"),f=t("7Zt1"),h=t("ZBcJ"),g=t("pAkg"),D=t("0YOR"),v=t("2prB");n.default=function(e){var n=e.components;Object(a.a)(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(c.b,{component:"DatePicker"}),o.a.createElement(i.MDXTag,{name:"h2",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{id:"date-picker",className:"anchor-link"}}),"Date picker",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#date-picker",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://material.io/components/pickers/"}},"Date pickers")," let users select a date, or a range of dates. They should be suitable for the context in which they appear."),o.a.createElement(l.a,null),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"basic-usage",className:"anchor-link"}}),"Basic usage",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#basic-usage",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Will be rendered to modal dialog on mobile and textfield with popover on desktop."),o.a.createElement(s.a,{testId:"datepicker-example",source:h}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"responsiveness",className:"anchor-link"}}),"Responsiveness",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#responsiveness",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The date picker component is designed and optimized for the device it runs on."),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},'The "Mobile" version works best for touch devices and small screens.'),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},'The "Desktop" version works best for mouse devices and large screens.')),o.a.createElement(i.MDXTag,{name:"p",components:n},"By default, the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DatePicker")," component uses a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@media (pointer: fine)")," media query to determine which version to use.\nThis can be customized by ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"desktopModeMediaQuery")," prop."),o.a.createElement(s.a,{source:D}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"different-views",className:"anchor-link"}}),"Different views",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#different-views",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"It is also allowed to combine ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"year"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"month")," and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"date")," selection views.\nThus you can easily create"),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Year picker"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Month picker"),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},"Month + year picker")),o.a.createElement(s.a,{source:f}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"static-mode",className:"anchor-link"}}),"Static mode",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#static-mode",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"It is possible to render any picker without modal or popover. This can be really helpful to build custom popover/modal containers.\nFor that use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"StaticDatePicker"),"."),o.a.createElement(p.a,{smDown:!0},o.a.createElement(s.a,{paddingBottom:!0,source:g})),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"custom-input-component",className:"anchor-link"}}),"Custom input component",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#custom-input-component",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"You can customize rendering input by ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"renderInput")," prop. But make sure you will spread ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ref")," and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"inputProps")," correctly to the custom input component."),o.a.createElement(s.a,{source:v}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"customization",className:"anchor-link"}}),"Customization",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#customization",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The displaying of dates is heavily cusomizable. Use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"renderDay")," function to customize view of the day.\nYou can leverage our internal ",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/api/Day"}},"Day")," component, and render it in default way by spreading ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dayProps")," argument."),o.a.createElement(s.a,{source:u}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"dynamic-data",className:"anchor-link"}}),"Dynamic data",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#dynamic-data",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Sometimes it's required to display additional info right in the calendar. Here is an example of prefetching\nand displaying server side data using ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onMonthChange"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"loading")," and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"renderDay")," props."),o.a.createElement(s.a,{source:d}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"api",className:"anchor-link"}}),"API",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#api",className:"anchor-link-style"}},"#")),o.a.createElement(m.a,{components:["DatePicker"]}))}},"d/oO":function(e,n,t){"use strict";var a=t("Fcif"),r=t("dV/x"),o=t("mXGw"),i=t("W0B4"),l=t.n(i),s=t("FwNb"),c=t("GeWT"),m=t.n(c),p=t("lOOT"),u=t("kB6Z"),d=t("1Dig"),f=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?u.a.indexOf(e)<=u.a.indexOf(n):u.a.indexOf(e)<u.a.indexOf(n)},h=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?u.a.indexOf(n)<=u.a.indexOf(e):u.a.indexOf(n)<u.a.indexOf(e)},g="undefined"==typeof window?o.useEffect:o.useLayoutEffect,D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=e.withTheme,i=void 0!==t&&t,l=e.noSSR,c=void 0!==l&&l,u=e.initialWidth;function f(e){var t=Object(p.a)(),l=e.theme||t,m=Object(s.a)({theme:l,name:"MuiWithWidth",props:Object(a.a)({},e)}),f=m.initialWidth,h=m.width,D=Object(r.a)(m,["initialWidth","width"]),v=o.useState(!1),b=v[0],y=v[1];g(function(){y(!0)},[]);var k=l.breakpoints.keys.slice().reverse().reduce(function(e,n){var t=Object(d.a)(l.breakpoints.up(n));return!e&&t?n:e},null),w=Object(a.a)({width:h||(b||c?k:void 0)||f||u},i?{theme:l}:{},D);return void 0===w.width?null:o.createElement(n,w)}return m()(f,n),f}};function v(e){var n=e.children,t=e.only,a=e.width,r=Object(p.a)(),o=!0;if(t)if(Array.isArray(t))for(var i=0;i<t.length;i+=1){if(a===t[i]){o=!1;break}}else t&&a===t&&(o=!1);if(o)for(var l=0;l<r.breakpoints.keys.length;l+=1){var s=r.breakpoints.keys[l],c=e["".concat(s,"Up")],m=e["".concat(s,"Down")];if(c&&f(s,a)||m&&h(s,a)){o=!1;break}}return o?n:null}v.propTypes={children:l.a.node,className:l.a.string,implementation:l.a.oneOf(["js","css"]),initialWidth:l.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:l.a.bool,lgUp:l.a.bool,mdDown:l.a.bool,mdUp:l.a.bool,only:l.a.oneOfType([l.a.oneOf(["xs","sm","md","lg","xl"]),l.a.arrayOf(l.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:l.a.bool,smUp:l.a.bool,width:l.a.string.isRequired,xlDown:l.a.bool,xlUp:l.a.bool,xsDown:l.a.bool,xsUp:l.a.bool};var b=D()(v),y=t("mK0O"),k=t("mxPc"),w=t("gbh0");var E=Object(w.a)(function(e){var n={display:"none"};return e.breakpoints.keys.reduce(function(t,a){return t["only".concat(Object(k.a)(a))]=Object(y.a)({},e.breakpoints.only(a),n),t["".concat(a,"Up")]=Object(y.a)({},e.breakpoints.up(a),n),t["".concat(a,"Down")]=Object(y.a)({},e.breakpoints.down(a),n),t},{})},{name:"PrivateHiddenCss"})(function(e){var n=e.children,t=e.classes,a=e.className,i=e.only,l=(Object(r.a)(e,["children","classes","className","only"]),Object(p.a)()),s=[];a&&s.push(a);for(var c=0;c<l.breakpoints.keys.length;c+=1){var m=l.breakpoints.keys[c],u=e["".concat(m,"Up")],d=e["".concat(m,"Down")];u&&s.push(t["".concat(m,"Up")]),d&&s.push(t["".concat(m,"Down")])}return i&&(Array.isArray(i)?i:[i]).forEach(function(e){s.push(t["only".concat(Object(k.a)(e))])}),o.createElement("div",{className:s.join(" ")},n)});n.a=function(e){var n=e.implementation,t=void 0===n?"js":n,i=e.lgDown,l=void 0!==i&&i,s=e.lgUp,c=void 0!==s&&s,m=e.mdDown,p=void 0!==m&&m,u=e.mdUp,d=void 0!==u&&u,f=e.smDown,h=void 0!==f&&f,g=e.smUp,D=void 0!==g&&g,v=e.xlDown,y=void 0!==v&&v,k=e.xlUp,w=void 0!==k&&k,O=e.xsDown,T=void 0!==O&&O,x=e.xsUp,C=void 0!==x&&x,M=Object(r.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?o.createElement(b,Object(a.a)({lgDown:l,lgUp:c,mdDown:p,mdUp:d,smDown:h,smUp:D,xlDown:y,xlUp:w,xsDown:T,xsUp:C},M)):o.createElement(E,Object(a.a)({lgDown:l,lgUp:c,mdDown:p,mdUp:d,smDown:h,smUp:D,xlDown:y,xlUp:w,xsDown:T,xsUp:C},M))}},pAkg:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m}),t.d(n,"raw",function(){return p}),t.d(n,"relativePath",function(){return u});var a=t("hDBU"),r=t("mXGw"),o=t("Dy3B"),i=t("kebl"),l=t("/KD0"),s=t("ye7r");function c(e){return Object(o.a)(Object(s.d)(e))}function m(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],o=n[1];return r.createElement(r.Fragment,null,r.createElement(l.d,{displayStaticWrapperAs:"desktop",openTo:"year",value:t,onChange:function(e){return o(e)},renderInput:function(e){return r.createElement(i.a,e)}}),r.createElement(l.d,{orientation:"landscape",openTo:"date",value:t,shouldDisableDate:c,onChange:function(e){return o(e)},renderInput:function(e){return r.createElement(i.a,e)}}))}var p='import * as React from "react";\nimport isWeekend from "date-fns/isWeekend";\nimport TextField from "@material-ui/core/TextField";\nimport { StaticDatePicker } from "@material-ui/pickers";\nimport { makeJSDateObject } from "../../../utils/helpers";\n\nfunction disableWeekends(date: Date) {\n  // TODO: replace with implementation for your date library\n  return isWeekend(makeJSDateObject(date));\n}\n\nexport default function StaticDatePickerExample() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <StaticDatePicker\n        displayStaticWrapperAs="desktop"\n        openTo="year"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <StaticDatePicker\n        orientation="landscape"\n        openTo="date"\n        value={value}\n        // @ts-expect-error Waiting for making all inner components generics\n        shouldDisableDate={disableWeekends}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n    </React.Fragment>\n  );\n}\n',u="pages/demo/datepicker/StaticDatePicker.example.tsx"},qTHA:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return D}),t.d(n,"raw",function(){return v}),t.d(n,"relativePath",function(){return b});var a=t("hDBU"),r=t("mXGw"),o=t("Fcif"),i=t("dV/x"),l=(t("W0B4"),t("PDtE")),s=t("gbh0"),c=t("mxPc"),m=r.forwardRef(function(e,n){var t=e.anchorOrigin,a=void 0===t?{vertical:"top",horizontal:"right"}:t,s=e.badgeContent,m=e.children,p=e.classes,u=e.className,d=e.color,f=void 0===d?"default":d,h=e.component,g=void 0===h?"span":h,D=e.invisible,v=e.max,b=void 0===v?99:v,y=e.overlap,k=void 0===y?"rectangle":y,w=e.showZero,E=void 0!==w&&w,O=e.variant,T=void 0===O?"standard":O,x=Object(i.a)(e,["anchorOrigin","badgeContent","children","classes","className","color","component","invisible","max","overlap","showZero","variant"]),C=function(e){var n=r.useRef({});return r.useEffect(function(){n.current=e}),n.current}({anchorOrigin:a,badgeContent:s,color:f,max:b,overlap:k,variant:T}),M=D;null==D&&(0===s&&!E||null==s&&"dot"!==T)&&(M=!0);var P=M?C:e,X=P.anchorOrigin,N=void 0===X?a:X,j=P.badgeContent,R=P.color,S=void 0===R?f:R,F=P.max,I=void 0===F?b:F,V=P.overlap,W=void 0===V?k:V,B=P.variant,U=void 0===B?T:B,A="";return"dot"!==U&&(A=j>I?"".concat(I,"+"):j),r.createElement(g,Object(o.a)({className:Object(l.a)(p.root,u),ref:n},x),m,r.createElement("span",{className:Object(l.a)(p.badge,p["anchorOrigin".concat(Object(c.a)(N.vertical)).concat(Object(c.a)(N.horizontal)).concat(Object(c.a)(W))],"default"!==S&&p["color".concat(Object(c.a)(S))],M&&p.invisible,"dot"===U&&p.dot)},A))}),p=Object(s.a)(function(e){return{root:{position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0},badge:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorError:{backgroundColor:e.palette.error.main,color:e.palette.error.contrastText},dot:{borderRadius:4,height:8,minWidth:8,padding:0},anchorOriginTopRightRectangle:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightRectangle:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftRectangle:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftRectangle:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},anchorOriginTopRightCircle:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%","&$invisible":{transform:"scale(0) translate(50%, -50%)"}},anchorOriginBottomRightCircle:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%","&$invisible":{transform:"scale(0) translate(50%, 50%)"}},anchorOriginTopLeftCircle:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%","&$invisible":{transform:"scale(0) translate(-50%, -50%)"}},anchorOriginBottomLeftCircle:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%","&$invisible":{transform:"scale(0) translate(-50%, 50%)"}},invisible:{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})}}},{name:"MuiBadge"})(m),u=t("kebl"),d=t("/KD0"),f=t("CJOe"),h=t("gJdi"),g=t("ye7r");function D(){var e=r.useRef(null),n=r.useState([1,2,15]),t=Object(a.default)(n,2),o=t[0],i=t[1],l=r.useState(new Date),s=Object(a.default)(l,2),c=s[0],m=s[1];r.useEffect(function(){return function(){var n;return null===(n=e.current)||void 0===n?void 0:n.abort()}},[]);return r.createElement(d.a,{value:c,loading:null===o,onChange:function(e){return m(e)},onMonthChange:function(n){e.current&&e.current.abort(),i([]);var t=new AbortController;fetch("/fakeApi/randomDate?month=".concat(n.toString()),{signal:t.signal}).then(function(e){return e.json()}).then(function(e){var n=e.daysToHighlight;return i(n)}).catch(function(){return console.log("Wow, you are switching months too quickly 🐕")}),e.current=t},renderInput:function(e){return r.createElement(u.a,e)},renderLoading:function(){return r.createElement(h.a,null)},renderDay:function(e,n,t){var a=Object(g.d)(null!=e?e:new Date),i=t.inCurrentMonth&&o.includes(a.getDate());return r.createElement(p,{key:a.toString(),overlap:"circle",badgeContent:i?"🌚":void 0},r.createElement(f.a,t))}})}var v='/* eslint-disable no-console */\nimport * as React from "react";\nimport Badge from "@material-ui/core/Badge";\nimport TextField from "@material-ui/core/TextField";\nimport { DatePicker, PickersDay } from "@material-ui/pickers";\n// @ts-ignore\nimport { CalendarSkeleton } from "@material-ui/pickers/CalendarSkeleton";\n// TODO remove relative import\nimport { makeJSDateObject } from "../../../utils/helpers";\n\nexport default function ServerRequest() {\n  const requestAbortController = React.useRef<AbortController | null>(null);\n  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  React.useEffect(() => {\n    // abort request on unmount\n    return () => requestAbortController.current?.abort();\n  }, []);\n\n  const handleMonthChange = (date: Date) => {\n    if (requestAbortController.current) {\n      // make sure that you are aborting useless requests\n      // because it is possible to switch between months pretty quickly\n      requestAbortController.current.abort();\n    }\n\n    setHighlightedDays([]);\n\n    const controller = new AbortController();\n    fetch(`/fakeApi/randomDate?month=${date.toString()}`, {\n      signal: controller.signal,\n    })\n      .then((res) => res.json())\n      .then(({ daysToHighlight }) => setHighlightedDays(daysToHighlight))\n      .catch(() => console.log("Wow, you are switching months too quickly 🐕"));\n\n    requestAbortController.current = controller;\n  };\n\n  return (\n    <DatePicker\n      value={value}\n      loading={highlightedDays === null}\n      onChange={(newValue) => setValue(newValue)}\n      onMonthChange={handleMonthChange}\n      // loading\n      renderInput={(props) => <TextField {...props} />}\n      renderLoading={() => <CalendarSkeleton />}\n      renderDay={(day, value, DayComponentProps) => {\n        const date = makeJSDateObject(day ?? new Date()); // skip this step, it is required to support date libs\n        const isSelected =\n          DayComponentProps.inCurrentMonth && highlightedDays.includes(date.getDate());\n\n        return (\n          <Badge\n            key={date.toString()}\n            overlap="circle"\n            badgeContent={isSelected ? "🌚" : undefined}\n          >\n            <PickersDay {...DayComponentProps} />\n          </Badge>\n        );\n      }}\n    />\n  );\n}\n',b="pages/demo/datepicker/ServerRequest.example.tsx"}},[["2S4i","5d41","9da1","85a6"]]]);
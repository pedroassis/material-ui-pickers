(window.webpackJsonp=window.webpackJsonp||[]).push([["adad"],{"3Hfq":function(e,n,t){var a=t("TaGV"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},"5dyF":function(e,n,t){e.exports=t("9CGT")},"9CGT":function(e,n,t){"use strict";var a=t("PL1w"),r=a(t("JYC+")),o=a(t("KBEF")),i=a(t("J/q3")),l=a(t("3esu")),c=a(t("8m4E")),s=a(t("Od8a")),m=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n},u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var p=t("so/P"),d=m(t("mXGw")),f=(u(t("OWZz")),m(t("bBV7"))),h=t("MUK1");function v(e){return e&&"object"==typeof e?h.formatWithValidation(e):e}var T=function(e){function n(){var e,t,a,r,i;return(0,o.default)(this,n),(e=(0,l.default)(this,(0,c.default)(n).apply(this,arguments))).formatUrls=(t=function(e,n){return{href:v(e),as:v(n)}},a=null,r=null,i=null,function(e,n){if(e===a&&n===r)return i;var o=t(e,n);return a=e,r=n,i=o,o}),e.linkClicked=function(n){var t=n.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,l=o.as;if(function(e){var n=p.parse(e,!1,!0),t=p.parse(h.getLocationOrigin(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),l=l?p.resolve(c,l):i,n.preventDefault();var s=e.props.scroll;null==s&&(s=l.indexOf("#")<0),f.default[e.props.replace?"replace":"push"](i,l,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(n){e.props.onError&&e.props.onError(n)})}}},e}return(0,s.default)(n,e),(0,i.default)(n,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=p.resolve(e,n);f.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,r=t.as;"string"==typeof n&&(n=d.default.createElement("a",null,n));var o=d.Children.only(n),i={onClick:function(n){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=f.Router._rewriteUrlForNextExport(i.href)),d.default.cloneElement(o,i)}}]),n}(d.Component);n.default=T},HaeB:function(e,n,t){"use strict";var a=t("mXGw"),r=t("5dyF"),o=t.n(r),i=t("/ZiB");n.a=function(e){var n=e.components;return a.createElement("ul",null,n.map(function(e){return a.createElement("li",{key:e},a.createElement(o.a,{prefetch:!0,href:"/api/props?component=".concat(e),as:"/api/".concat(e)},a.createElement("a",null,a.createElement(i.a,null,"<".concat(e,"/>")))))}))}},"JYC+":function(e,n,t){e.exports=t("3Hfq")},RU6S:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("Ckcz");function l(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},ampm:!1,openTo:"hours",views:["hours","minutes","seconds"],inputFormat:"HH:mm:ss",mask:"__:__:__",label:"With seconds",value:t,onChange:function(e){return l(e)}}),r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},ampmInClock:!0,openTo:"minutes",views:["minutes","seconds"],inputFormat:"mm:ss",mask:"__:__",label:"Minutes and seconds",value:t,onChange:function(e){return l(e)}}))}var c='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { TimePicker } from "@material-ui/pickers";\n\nexport default function SecondsTimePicker() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        ampm={false}\n        openTo="hours"\n        views={["hours", "minutes", "seconds"]}\n        inputFormat="HH:mm:ss"\n        mask="__:__:__"\n        label="With seconds"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n      />\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        ampmInClock\n        openTo="minutes"\n        views={["minutes", "seconds"]}\n        inputFormat="mm:ss"\n        mask="__:__"\n        label="Minutes and seconds"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/timepicker/SecondsTimePicker.example.tsx"},U4sT:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("Ckcz");function l(){var e=r.useState(new Date("2018-01-01T00:00:00.000Z")),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(i.b,{ampmInClock:!0,label:"For mobile",value:t,onChange:function(e){return l(e)},renderInput:function(e){return r.createElement(o.a,e)}}),r.createElement(i.a,{clearable:!0,ampm:!1,label:"For desktop",value:t,onChange:function(e){return l(e)},renderInput:function(e){return r.createElement(o.a,e)}}),r.createElement(i.d,{ampm:!0,ampmInClock:!0,showTodayButton:!0,todayText:"now",label:"Responsive, with step = 5",value:t,minutesStep:5,onChange:l,renderInput:function(e){return r.createElement(o.a,e)}}))}var c='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { TimePicker, MobileTimePicker, DesktopTimePicker } from "@material-ui/pickers";\n\nexport default function TimePickers() {\n  const [value, setValue] = React.useState<Date | null>(new Date("2018-01-01T00:00:00.000Z"));\n\n  return (\n    <React.Fragment>\n      <MobileTimePicker\n        ampmInClock\n        label="For mobile"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <DesktopTimePicker\n        clearable\n        ampm={false}\n        label="For desktop"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      {/* Alternative way to show am/pm */}\n      <TimePicker\n        ampm\n        ampmInClock\n        showTodayButton\n        todayText="now"\n        label="Responsive, with step = 5"\n        value={value}\n        minutesStep={5}\n        onChange={setValue}\n        renderInput={(props) => <TextField {...props} />}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/timepicker/TimePickers.example.tsx"},Vr2u:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("Ckcz");function l(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},label:"12 hours",value:t,onChange:function(e){return l(e)}}),r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},ampm:!1,label:"24 hours",value:t,onChange:function(e){return l(e)}}))}var c='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { TimePicker } from "@material-ui/pickers";\n\nexport default function BasicTimePicker() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        label="12 hours"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n      />\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        ampm={false} // This is not needed if you are using localization\n        label="24 hours"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/timepicker/BasicTimePicker.example.tsx"},ceUS:function(e,n,t){"use strict";t.r(n);var a=t("2Fjn"),r=t("mXGw"),o=t.n(r),i=t("dDab"),l=t("7H8X"),c=t("14KL"),s=t("WGnI"),m=t("HaeB"),u=t("d/oO"),p=t("ytCq"),d=t("Vr2u"),f=t("U4sT"),h=t("wLNy"),v=t("RU6S");n.default=function(e){var n=e.components;Object(a.a)(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(s.b,{component:"TimePicker"}),o.a.createElement(i.MDXTag,{name:"h2",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{id:"time-picker",className:"anchor-link"}}),"Time Picker",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h2",props:{href:"#time-picker",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Time pickers let user select a single time (in the hours:minutes format).\nThe selected time is indicated by the filled circle at the end of the clock hand."),o.a.createElement(l.a,null),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"basic-usage",className:"anchor-link"}}),"Basic usage",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#basic-usage",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"A time picker should adjust to a user’s preferred time setting, i.e. the 12-hour or 24-hour format."),o.a.createElement(c.a,{source:d}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"responsiveness",className:"anchor-link"}}),"Responsiveness",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#responsiveness",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The time picker component is designed and optimized for the device it runs on."),o.a.createElement(i.MDXTag,{name:"ul",components:n},o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},'The "Mobile" version works best for touch devices and small screens.'),o.a.createElement(i.MDXTag,{name:"li",components:n,parentName:"ul"},'The "Desktop" version works best for mouse devices and large screens.')),o.a.createElement(i.MDXTag,{name:"p",components:n},"By default, the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"TimePicker")," component uses a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@media (pointer: fine)")," media query to determine which version to use.\nThis can be customized by ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"desktopModeMediaQuery")," prop."),o.a.createElement(c.a,{source:f}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"time-validation",className:"anchor-link"}}),"Time Validation",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#time-validation",className:"anchor-link-style"}},"#")),o.a.createElement(c.a,{source:p}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"static-mode",className:"anchor-link"}}),"Static mode",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#static-mode",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"It is possible to render any picker inline. This will be really helpful to build custom popover/modal containers.\nFor that use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'variant="static"'),"."),o.a.createElement(u.a,{smDown:!0},o.a.createElement(c.a,{paddingBottom:!0,source:h})),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"seconds",className:"anchor-link"}}),"Seconds",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#seconds",className:"anchor-link-style"}},"#")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Seconds input can be used for selection of a precise time point."),o.a.createElement(c.a,{source:v}),o.a.createElement(i.MDXTag,{name:"h4",components:n},o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{id:"api",className:"anchor-link"}}),"API",o.a.createElement(i.MDXTag,{name:"a",components:n,parentName:"h4",props:{href:"#api",className:"anchor-link-style"}},"#")),o.a.createElement(m.a,{components:["TimePicker"]}))}},"d/oO":function(e,n,t){"use strict";var a=t("Fcif"),r=t("dV/x"),o=t("mXGw"),i=t("W0B4"),l=t.n(i),c=t("FwNb"),s=t("GeWT"),m=t.n(s),u=t("lOOT"),p=t("kB6Z"),d=t("1Dig"),f=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?p.a.indexOf(e)<=p.a.indexOf(n):p.a.indexOf(e)<p.a.indexOf(n)},h=function(e,n){return!(arguments.length>2&&void 0!==arguments[2])||arguments[2]?p.a.indexOf(n)<=p.a.indexOf(e):p.a.indexOf(n)<p.a.indexOf(e)},v="undefined"==typeof window?o.useEffect:o.useLayoutEffect,T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(n){var t=e.withTheme,i=void 0!==t&&t,l=e.noSSR,s=void 0!==l&&l,p=e.initialWidth;function f(e){var t=Object(u.a)(),l=e.theme||t,m=Object(c.a)({theme:l,name:"MuiWithWidth",props:Object(a.a)({},e)}),f=m.initialWidth,h=m.width,T=Object(r.a)(m,["initialWidth","width"]),w=o.useState(!1),k=w[0],g=w[1];v(function(){g(!0)},[]);var D=l.breakpoints.keys.slice().reverse().reduce(function(e,n){var t=Object(d.a)(l.breakpoints.up(n));return!e&&t?n:e},null),b=Object(a.a)({width:h||(k||s?D:void 0)||f||p},i?{theme:l}:{},T);return void 0===b.width?null:o.createElement(n,b)}return m()(f,n),f}};function w(e){var n=e.children,t=e.only,a=e.width,r=Object(u.a)(),o=!0;if(t)if(Array.isArray(t))for(var i=0;i<t.length;i+=1){if(a===t[i]){o=!1;break}}else t&&a===t&&(o=!1);if(o)for(var l=0;l<r.breakpoints.keys.length;l+=1){var c=r.breakpoints.keys[l],s=e["".concat(c,"Up")],m=e["".concat(c,"Down")];if(s&&f(c,a)||m&&h(c,a)){o=!1;break}}return o?n:null}w.propTypes={children:l.a.node,className:l.a.string,implementation:l.a.oneOf(["js","css"]),initialWidth:l.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:l.a.bool,lgUp:l.a.bool,mdDown:l.a.bool,mdUp:l.a.bool,only:l.a.oneOfType([l.a.oneOf(["xs","sm","md","lg","xl"]),l.a.arrayOf(l.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:l.a.bool,smUp:l.a.bool,width:l.a.string.isRequired,xlDown:l.a.bool,xlUp:l.a.bool,xsDown:l.a.bool,xsUp:l.a.bool};var k=T()(w),g=t("mK0O"),D=t("mxPc"),b=t("gbh0");var E=Object(b.a)(function(e){var n={display:"none"};return e.breakpoints.keys.reduce(function(t,a){return t["only".concat(Object(D.a)(a))]=Object(g.a)({},e.breakpoints.only(a),n),t["".concat(a,"Up")]=Object(g.a)({},e.breakpoints.up(a),n),t["".concat(a,"Down")]=Object(g.a)({},e.breakpoints.down(a),n),t},{})},{name:"PrivateHiddenCss"})(function(e){var n=e.children,t=e.classes,a=e.className,i=e.only,l=(Object(r.a)(e,["children","classes","className","only"]),Object(u.a)()),c=[];a&&c.push(a);for(var s=0;s<l.breakpoints.keys.length;s+=1){var m=l.breakpoints.keys[s],p=e["".concat(m,"Up")],d=e["".concat(m,"Down")];p&&c.push(t["".concat(m,"Up")]),d&&c.push(t["".concat(m,"Down")])}return i&&(Array.isArray(i)?i:[i]).forEach(function(e){c.push(t["only".concat(Object(D.a)(e))])}),o.createElement("div",{className:c.join(" ")},n)});n.a=function(e){var n=e.implementation,t=void 0===n?"js":n,i=e.lgDown,l=void 0!==i&&i,c=e.lgUp,s=void 0!==c&&c,m=e.mdDown,u=void 0!==m&&m,p=e.mdUp,d=void 0!==p&&p,f=e.smDown,h=void 0!==f&&f,v=e.smUp,T=void 0!==v&&v,w=e.xlDown,g=void 0!==w&&w,D=e.xlUp,b=void 0!==D&&D,x=e.xsDown,y=void 0!==x&&x,C=e.xsUp,F=void 0!==C&&C,O=Object(r.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===t?o.createElement(k,Object(a.a)({lgDown:l,lgUp:s,mdDown:u,mdUp:d,smDown:h,smUp:T,xlDown:g,xlUp:b,xsDown:y,xsUp:F},O)):o.createElement(E,Object(a.a)({lgDown:l,lgUp:s,mdDown:u,mdUp:d,smDown:h,smUp:T,xlDown:g,xlUp:b,xsDown:y,xsUp:F},O))}},owKB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo/timepicker",function(){var e=t("ceUS");return{page:e.default||e}}])},wLNy:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("Ckcz");function l(){var e=r.useState(new Date),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(i.c,{openTo:"hours",value:t,onChange:function(e){return l(e)},renderInput:function(e){return r.createElement(o.a,e)}}),r.createElement(i.c,{ampm:!0,orientation:"landscape",openTo:"minutes",value:t,onChange:function(e){return l(e)},renderInput:function(e){return r.createElement(o.a,e)}}))}var c='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { StaticTimePicker } from "@material-ui/pickers";\n\nexport default function StaticTimePickerExample() {\n  const [value, setValue] = React.useState<Date | null>(new Date());\n\n  return (\n    <React.Fragment>\n      <StaticTimePicker\n        openTo="hours"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n      <StaticTimePicker\n        ampm\n        orientation="landscape"\n        openTo="minutes"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        renderInput={(props) => <TextField {...props} />}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/timepicker/StaticTimePicker.example.tsx"},ytCq:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l}),t.d(n,"raw",function(){return c}),t.d(n,"relativePath",function(){return s});var a=t("hDBU"),r=t("mXGw"),o=t("kebl"),i=t("Ckcz");function l(){var e=r.useState(new Date("2020-01-01 12:00")),n=Object(a.default)(e,2),t=n[0],l=n[1];return r.createElement(r.Fragment,null,r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},value:t,onChange:function(e){return l(e)},minTime:new Date(0,0,0,8),maxTime:new Date(0,0,0,18,45)}),r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},ampm:!1,label:"24 hours",minTime:new Date(0,0,0,8),maxTime:new Date(0,0,0,18,45),value:t,onChange:function(e){return l(e)}}),r.createElement(i.d,{renderInput:function(e){return r.createElement(o.a,e)},ampm:!1,label:"Disable odd hours",value:t,onChange:function(e){return l(e)},shouldDisableTime:function(e,n){return!!("hours"===n&&e%2)}}))}var c='import * as React from "react";\nimport TextField from "@material-ui/core/TextField";\nimport { TimePicker } from "@material-ui/pickers";\n\nexport default function TimeValidation() {\n  const [value, setValue] = React.useState<Date | null>(new Date("2020-01-01 12:00"));\n\n  return (\n    <React.Fragment>\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        minTime={new Date(0, 0, 0, 8)}\n        maxTime={new Date(0, 0, 0, 18, 45)}\n      />\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        ampm={false}\n        label="24 hours"\n        minTime={new Date(0, 0, 0, 8)}\n        maxTime={new Date(0, 0, 0, 18, 45)}\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n      />\n      <TimePicker\n        renderInput={(props) => <TextField {...props} />}\n        ampm={false}\n        label="Disable odd hours"\n        value={value}\n        onChange={(newValue) => setValue(newValue)}\n        shouldDisableTime={(timeValue, clockType) => {\n          if (clockType === "hours" && timeValue % 2) {\n            return true;\n          }\n\n          return false;\n        }}\n      />\n    </React.Fragment>\n  );\n}\n',s="pages/demo/timepicker/TimeValidation.example.tsx"}},[["owKB","5d41","9da1","85a6"]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([["de80"],{"2TMx":function(e,t,a){"use strict";a.r(t);var r=a("JTC3");a.d(t,"default",function(){return r.default})},"8C4M":function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mXGw")),o=(0,r(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),"KeyboardArrowRight");t.default=o},CarD:function(e,t,a){"use strict";var r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mXGw")),o=(0,r(a("8/g6")).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),n.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),"KeyboardArrowLeft");t.default=o},JTC3:function(e,t,a){"use strict";a.r(t);var r=a("z3IF"),n=a("hDBU"),o=a("mXGw"),i=a.n(o),l=a("CarD"),c=a.n(l),d=a("8C4M"),p=a.n(d),u=a("ofer"),s=a("tRbT"),y=a("HRyj"),h=a("t3Uf"),g=a("a2zD");t.default=function(){var e=Object(o.useContext)(y.a),t=Object(o.useState)(new Date("2019-01-01T00:00:00.000")),a=Object(n.default)(t,2),l=a[0],d=a[1],m={value:l,onChange:d,style:{margin:"0 10px"},format:"MMMM d",leftArrowIcon:i.a.createElement(c.a,{"data-arrow":"left"}),rightArrowIcon:i.a.createElement(p.a,{"data-arrow":"right"}),renderDay:Object(g.createRegressionDay)(e),KeyboardButtonProps:{className:"keyboard-btn"}};return i.a.createElement("div",{style:{marginTop:30}},i.a.createElement(u.a,{align:"center",variant:"h5",gutterBottom:!0},"This page is using for the automate regression of @material-ui/pickers."),i.a.createElement(u.a,{align:"center",variant:"h4",component:"span",gutterBottom:!0},"DatePicker"),i.a.createElement(s.a,{container:!0,justify:"center",wrap:"wrap"},i.a.createElement(h.a,Object(r.a)({id:"basic-datepicker"},m)),i.a.createElement(h.a,Object(r.a)({id:"clearable-datepicker",clearable:!0},m)),i.a.createElement(h.b,Object(r.a)({id:"keyboard-mask-datepicker"},m,{onChange:d,format:"MM/dd/yyyy"})),i.a.createElement(h.a,Object(r.a)({disabled:!0,id:"disabled"},m)),i.a.createElement(h.a,Object(r.a)({readOnly:!0,id:"readonly"},m))))}},a2zD:function(e,t,a){"use strict";a.r(t),a.d(t,"createRegressionDay",function(){return o});var r=a("mXGw"),n=a.n(r),o=function(e){return function(t,a,r,o){return n.a.createElement("span",{"data-day":e.format(t,"dd/MM/yyyy")},o)}}},aBKn:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/regression",function(){var e=a("2TMx");return{page:e.default||e}}])},ofer:function(e,t,a){"use strict";var r=a("i0m8"),n=a("St8r"),o=a("mXGw"),i=a.n(o),l=(a("W0B4"),a("PDtE")),c=a("H2TA"),d=a("NqtD"),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.a.forwardRef(function(e,t){var a=e.align,o=void 0===a?"inherit":a,c=e.classes,u=e.className,s=e.color,y=void 0===s?"initial":s,h=e.component,g=e.display,m=void 0===g?"initial":g,f=e.gutterBottom,b=void 0!==f&&f,v=e.noWrap,w=void 0!==v&&v,E=e.paragraph,j=void 0!==E&&E,M=e.variant,O=void 0===M?"body1":M,T=e.variantMapping,B=void 0===T?p:T,x=Object(n.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),k=h||(j?"p":B[O]||p[O])||"span";return i.a.createElement(k,Object(r.a)({className:Object(l.a)(c.root,u,"inherit"!==O&&c[O],"initial"!==y&&c["color".concat(Object(d.a)(y))],w&&c.noWrap,b&&c.gutterBottom,j&&c.paragraph,"inherit"!==o&&c["align".concat(Object(d.a)(o))],"initial"!==m&&c["display".concat(Object(d.a)(m))]),ref:t},x))});t.a=Object(c.a)(function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography"})(u)}},[["aBKn","5d41","9da1"]]]);
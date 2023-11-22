(window.webpackJsonp=window.webpackJsonp||[]).push([["f1c1"],{BPkt:function(e,a,n){"use strict";n.r(a);var t=n("2Fjn"),p=n("mXGw"),o=n.n(p),s=n("dDab"),m=n("WGnI");a.default=function(e){var a=e.components;Object(t.a)(e,["components"]);return o.a.createElement(s.MDXTag,{name:"wrapper",components:a},o.a.createElement(m.b,{title:"TypeScript – @material-ui/pickers",description:"A guide of how to use @material-ui/pickers with TypeScript"}),o.a.createElement(s.MDXTag,{name:"h2",components:a},o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{id:"typescript-guide",className:"anchor-link"}}),"TypeScript guide",o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#typescript-guide",className:"anchor-link-style"}},"#")),o.a.createElement(s.MDXTag,{name:"p",components:a},"The date picker components come with built-in TypeScript definitions.\nHere is some information about how to achive better experience with TypeScript."),o.a.createElement(s.MDXTag,{name:"h4",components:a},o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{id:"nullable-value",className:"anchor-link"}}),"Nullable value",o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{href:"#nullable-value",className:"anchor-link-style"}},"#")),o.a.createElement(s.MDXTag,{name:"p",components:a},"Any picker can return null in the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onChange")," argument so if you are using ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"React.useState"),", you ",o.a.createElement(s.MDXTag,{name:"strong",components:a,parentName:"p"},"must")," manually cast your default value as nullable. (e.g. ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Date | null"),")"),o.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-tsx"}},o.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-tsx",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"function")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token maybe-class-name"}},"MyComponent")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n  ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"value",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," setValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token maybe-class-name"}},"React"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token property-access"}},"useState"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token known-class-name class-name"}},"Date")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"|")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"null"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"new")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"Date"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"),"\n\n  ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"return")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),"\n    ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token class-name"}},"DatePicker")),"\n      ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"value"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script language-javascript"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script-punctuation punctuation"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"value",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}")),"\n      ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"onChange"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script language-javascript"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script-punctuation punctuation"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token parameter"}},"newValue"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token arrow operator"}},"=>")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token function"}},"setValue"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"("),"newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}")),"\n      ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"renderInput"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script language-javascript"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script-punctuation punctuation"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token parameter"}},"props"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token arrow operator"}},"=>")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token class-name"}},"TextField"))," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token spread"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"..."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-value"}},"props"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}"))," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"/>")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}")),"\n    ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"/>")),"\n  ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},";"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n")),o.a.createElement(s.MDXTag,{name:"h4",components:a},o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{id:"generics",className:"anchor-link"}}),"Generics",o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{href:"#generics",className:"anchor-link-style"}},"#")),o.a.createElement(s.MDXTag,{name:"p",components:a},"The components don't know which adapter you will pass to the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<LocalizationProvider />"),". So any picker component is generic by default.\nIt means that it will try to infer the ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"value")," and ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onChange")," type from the passed props."),o.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-tsx"}},o.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-tsx",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token maybe-class-name"}},"DatePicker"),"\n  value",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"new")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"Date"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// date will be inferred as `Date | null`"),"\n  onChange",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token parameter"}},"newValue"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token method function property-access"}},"getDate"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"/"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n")),o.a.createElement(s.MDXTag,{name:"p",components:a},"It also means that you can manually set value type thanks to the generic JSX sytax:"),o.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-tsx"}},o.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-tsx",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token maybe-class-name"}},"DatePicker"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token class-name"}},"Date")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},">")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n  // You can pass any value right here that can be parsed\n  value="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"new")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token class-name"}},"Date"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n  onChange="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token parameter"}},"newValue"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token method function property-access"}},"getDate"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n/>\n"))),o.a.createElement(s.MDXTag,{name:"h4",components:a},o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{id:"important-note-on-type-inference",className:"anchor-link"}}),"Important note on type inference!",o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"h4",props:{href:"#important-note-on-type-inference",className:"anchor-link-style"}},"#")),o.a.createElement(s.MDXTag,{name:"p",components:a},"If you are passing not typed value to the picker (such like ",o.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"null"),") we cannot properly infer the type for you. It is required to properly type the vaue:"),o.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-tsx"}},o.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-tsx",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token maybe-class-name"}},"DatePicker"),"\n  value",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"null"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// @ts-expect-error `Property 'getDate' does not exist on type 'never'.`"),"\n  onChange",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token parameter"}},"newValue"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token method function property-access"}},"getDate"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"/"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n")),o.a.createElement(s.MDXTag,{name:"p",components:a},"In this case it is required to manually set proper ",o.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#generics"}},"generic type manually"),"."),o.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-tsx"}},o.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-tsx",metaString:""}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token maybe-class-name"}},"DatePicker"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token class-name"}},"Date")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},">")),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n  value="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"null"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n  onChange="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token parameter"}},"newValue")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token method function property-access"}},"getDate"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n/>\n\n// Or cast the type for the `value` or `onChange` prop.\n\n<DatePicker\n  value="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"null")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"as")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token known-class-name class-name"}},"Date")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"|")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"null"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n  // @ts-expect-error `Property 'getDate' does not exist on type 'never'.`\n  onChange="),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token parameter"}},"newValue")," ",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token arrow operator"}},"=>")," newValue",o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token method function property-access"}},"getDate"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token plain-text"}},"\n/>\n"))))}},aMuc:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/typescript",function(){var e=n("BPkt");return{page:e.default||e}}])}},[["aMuc","5d41","9da1"]]]);
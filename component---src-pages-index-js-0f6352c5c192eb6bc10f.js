(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{N8DM:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0;var r=l(t("QL1J"));a.ThemeToggler=r.default},QL1J:function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var r=l(t("PJYZ")),n=l(t("VbXa")),c=l(t("lSNA")),s=l(t("q1tI")),o=l(t("17x9")),m=function(e){function a(){for(var a,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return a=e.call.apply(e,[this].concat(l))||this,(0,c.default)((0,r.default)(a),"state",{theme:"undefined"!=typeof window?window.__theme:null}),a}(0,n.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},t.toggleTheme=function(e){window.__setPreferredTheme(e)},t.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},a}(s.default.Component);m.propTypes={children:o.default.func.isRequired};var i=m;a.default=i},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),c=t("TJpk"),s=t.n(c),o=(t("6Gk8"),t("Bl7J")),m=t("vrFN"),i=(t("9eSz"),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"disclamer"},r.a.createElement("h2",null,"Disclaimer"),r.a.createElement("p",null,"No designers were hurt in the creation of this wireframe kit. All styles and components were created for fun but are extremely useful for when you want to quickly turn your ideas to design and test with crazy folks. Any resemblance to a real product, available or unknown, is purely coincidental. You are free to design anything for personal or commercial purposes, with the help of this uikit.")),r.a.createElement("div",{className:"product"},r.a.createElement("h2",null,"Other Products"),r.a.createElement("div",{className:"product-wrap"},r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://illlustrations.co/?ref=contra-uikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/illlustrations.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://contrauikit.com/?ref=bloouikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/contra.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://uiprint.co/?ref=contra-uikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/uiprint.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://uilogos.co/?ref=contra-uikit",className:"p-box",target:"__blank"},r.a.createElement("img",{src:"/uilogos.png"}))))),r.a.createElement("div",{className:"yeah-credit"},r.a.createElement("div",{className:"maker"},r.a.createElement("h3",null,"Made with love ❤ and coffee by ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://vijayverma.co/?ref=contrauikit"},"vijay verma")," @realvjy")),r.a.createElement("ul",{className:"scl-lnk"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://dribbble.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"dribbble"))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://twitter.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"twitter"))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://instagram.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"instagram"))))))))}),u=t("N8DM");a.default=function(e){var a=e.data,t=e.location,l=a.site.siteMetadata.title;a.allMarkdownRemark.edges;return r.a.createElement(o.a,{location:t,title:l},r.a.createElement(m.a,{title:"Bloo Low Fidelity Wireframe Kit"}),r.a.createElement(s.a,null,r.a.createElement("script",{src:Object(n.withPrefix)("sound.js"),type:"text/javascript",loop:!0})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"container"},r.a.createElement(u.ThemeToggler,null,(function(e){var a=e.theme,t=e.toggleTheme;return r.a.createElement("div",{className:"mode-toggle"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:function(e){return t(e.target.checked?"dark":"light")},checked:"dark"===a,id:"dmode"})," "))})))),r.a.createElement("section",{className:"hero_section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero_wrapper"},r.a.createElement("div",{className:"hero_img"},r.a.createElement("img",{src:"/bloo-cards-light.png"})),r.a.createElement("div",{className:"hero_details"},r.a.createElement("div",{className:"texts"},r.a.createElement("img",{src:"/bloo-logo.png"}),r.a.createElement("h1",null,"low fidelity wireframe kit"),r.a.createElement("p",null,"All in one open source wireframe kit for quick design and prototyping your idea. Its library contains more than 250+ components supporting darkmode and 150+ ready to use mobile screens .")),r.a.createElement("div",{className:"btn-lnks"},r.a.createElement("div",{className:"dwn-links"},r.a.createElement("button",{className:"btn btn-download"},r.a.createElement("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLSeDOgz-4-5e_XKfa5Nrbt06KNCQFFuNOa39_W2jvcsp7CjKRQ/viewform"},r.a.createElement("h4",null,"Early access")))),r.a.createElement("a",{href:"https://www.buymeacoffee.com/realvjy",className:"btn btn-coffee"},r.a.createElement("h4",null,"Buy me a coffee"))),r.a.createElement("div",{className:"license-box"},r.a.createElement("div",{className:"compatible"},r.a.createElement("div",{className:"p-logo"},r.a.createElement("img",{src:"/figma.png"})," ",r.a.createElement("img",{src:"/sketch.png"})," ",r.a.createElement("img",{src:"xd.png"}))),r.a.createElement("div",{className:"license"},r.a.createElement("p",null,"Free for commercial and personal use under ",r.a.createElement("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank"},"CC0 License")))))))),r.a.createElement("section",{className:"features_section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"feature_box"},r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"250+"),r.a.createElement("h4",null,"Predefined Components"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"150+"),r.a.createElement("h4",null,"Predefined ",r.a.createElement("br",null),"Screens"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"20+"),r.a.createElement("h4",null,"Flowchart ",r.a.createElement("br",null),"Example"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"FREE"),r.a.createElement("h4",null,"Open source CC0 License")))))),r.a.createElement(i,null)))}},lSNA:function(e,a){e.exports=function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-pages-index-js-0f6352c5c192eb6bc10f.js.map
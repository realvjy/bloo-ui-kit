(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{N8DM:function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0;var r=l(a("QL1J"));t.ThemeToggler=r.default},QL1J:function(e,t,a){"use strict";var l=a("TqRt");t.__esModule=!0,t.default=void 0;var r=l(a("PJYZ")),n=l(a("VbXa")),c=l(a("lSNA")),m=l(a("q1tI")),i=l(a("17x9")),o=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),n=0;n<a;n++)l[n]=arguments[n];return t=e.call.apply(e,[this].concat(l))||this,(0,c.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return m.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(m.default.Component);o.propTypes={children:i.default.func.isRequired};var s=o;t.default=s},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),r=a.n(l),n=a("Wbzz"),c=a("TJpk"),m=a.n(c),i=(a("6Gk8"),a("Bl7J")),o=a("vrFN"),s=(a("9eSz"),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"disclamer"},r.a.createElement("h2",null,"Disclaimer"),r.a.createElement("p",null,"No designers were hurt in the creation of this wireframe kit. All styles and components were created for fun but are extremely useful for when you want to quickly turn your ideas to design and test with crazy folks. Any resemblance to a real product, available or unknown, is purely coincidental. You are free to design anything for personal or commercial purposes, with the help of this uikit.")),r.a.createElement("div",{className:"product"},r.a.createElement("h2",null,"Other Products"),r.a.createElement("div",{className:"product-wrap"},r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://illlustrations.co/?ref=contra-uikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/illlustrations.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://contrauikit.com/?ref=bloouikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/contra.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://uiprint.co/?ref=contra-uikit",target:"__blank",className:"p-box"},r.a.createElement("img",{src:"/uiprint.png"}))),r.a.createElement("div",{className:"product-box"},r.a.createElement("a",{href:"https://uilogos.co/?ref=contra-uikit",className:"p-box",target:"__blank"},r.a.createElement("img",{src:"/uilogos.png"}))))),r.a.createElement("div",{className:"yeah-credit"},r.a.createElement("div",{className:"maker"},r.a.createElement("h3",null,"Made with love ❤ and coffee by ",r.a.createElement("span",null,r.a.createElement("a",{href:"https://vijayverma.co/?ref=contrauikit"},"vijay verma")," @realvjy")),r.a.createElement("ul",{className:"scl-lnk"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://dribbble.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"dribbble"))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://twitter.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"twitter"))),r.a.createElement("li",null," ",r.a.createElement("a",{href:"https://instagram.com/realvjy",target:"__blank"},r.a.createElement("strong",null,"instagram"))))))))}),u=a("N8DM");t.default=function(e){var t=e.data,a=e.location,l=t.site.siteMetadata.title;t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:a,title:l},r.a.createElement(o.a,{title:"Bloo Low Fidelity Wireframe Kit"}),r.a.createElement(m.a,null,r.a.createElement("script",{src:Object(n.withPrefix)("sound.js"),type:"text/javascript",loop:!0})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"announce-wrapper ph"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"an-details"},r.a.createElement("p",null,r.a.createElement("img",{src:"/ph-logo.png"}),"Featured on Product hunt ",r.a.createElement("a",{href:"https://www.producthunt.com/posts/bloo-lo-fi-wireframe-kit?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-bloo-lo-fi-wireframe-kit",target:"_blank"},r.a.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=290589&theme=light",alt:"Bloo Lo-fi Wireframe Kit - Open source wireframe kit for design and prototyping 🚀 | Product Hunt",width:"250",height:"54"})))))),r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"container"},r.a.createElement(u.ThemeToggler,null,(function(e){var t=e.theme,a=e.toggleTheme;return r.a.createElement("div",{className:"mode-toggle"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t,id:"dmode"})," "))})))),r.a.createElement("section",{className:"hero_section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"hero_wrapper"},r.a.createElement("div",{className:"hero_img"},r.a.createElement("picture",null,r.a.createElement("source",{srcset:"dark.png",media:"(prefers-color-scheme: dark)"}),r.a.createElement("source",{srcset:"light.png",media:"(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"}),r.a.createElement("img",{id:"screenshot",src:"light.png"}))),r.a.createElement("div",{className:"hero_details"},r.a.createElement("div",{className:"texts"},r.a.createElement("img",{src:"/bloo-logo.png"}),r.a.createElement("h1",null,"low fidelity wireframe kit"),r.a.createElement("p",null,"All in one open source wireframe kit for quick design and prototyping your idea. Its library contains more than 250+ components supporting darkmode and 150+ ready to use mobile screens .")),r.a.createElement("div",{className:"btn-lnks"},r.a.createElement("div",{className:"dwn-links"},r.a.createElement("button",{className:"btn btn-download"},r.a.createElement("h4",null,"Download now")),r.a.createElement("ul",{className:"dwn-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"http://bit.ly/bloouikit-figma"},r.a.createElement("img",{src:"/figma.png"})," Figma")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://bit.ly/bloouikit-sketch"},r.a.createElement("img",{src:"/sketch.png"})," Sketch")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://bit.ly/bloouikit-XD"},r.a.createElement("img",{src:"/xd.png"})," Adobe XD")))),r.a.createElement("a",{href:"https://www.buymeacoffee.com/realvjy",className:"btn btn-coffee"},r.a.createElement("h4",null,"Buy me a coffee"))),r.a.createElement("div",{className:"license-box"},r.a.createElement("div",{className:"compatible"},r.a.createElement("div",{className:"p-logo"},r.a.createElement("img",{src:"/figma.png"})," ",r.a.createElement("img",{src:"/sketch.png"})," ",r.a.createElement("img",{src:"xd.png"}))),r.a.createElement("div",{className:"license"},r.a.createElement("p",null,"Free for commercial and personal use under ",r.a.createElement("a",{href:"https://creativecommons.org/publicdomain/zero/1.0/",target:"_blank"},"CC0 License")))))))),r.a.createElement("section",{className:"features_section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"feature_box"},r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"250+"),r.a.createElement("h4",null,"Predefined Components"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"150+"),r.a.createElement("h4",null,r.a.createElement("br",null),"Screen Templates"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"10+"),r.a.createElement("h4",null,"Flowchart ",r.a.createElement("br",null),"& Arrow Example"))),r.a.createElement("div",{className:"f_box"},r.a.createElement("div",{className:"box_wrap"},r.a.createElement("h2",null,"FREE"),r.a.createElement("h4",null,"Open source CC0 License")))))),r.a.createElement(s,null)))}},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-pages-index-js-82b2a120d9a4d0c88222.js.map
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const n=(e,t)=>{try{localStorage.setItem(e,serializedState)}catch(e){console.error("Set state error: ",e.message)}},r=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o=e=>{try{return null===localStorage.getItem(e)?void 0:localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}};var i,a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),g=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,f=setTimeout(S,t),l?m(e):a}function y(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=b();if(y(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?p(n,i-(e-c)):n}(e))}function T(e){return f=void 0,d&&r?m(e):(r=o=void 0,a)}function w(){var e=b(),n=y(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return g(u);if(s)return f=setTimeout(S,t),m(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,h(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},w.flush=function(){return void 0===f?a:T(b())},w}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):f.test(e)?NaN:+e}i=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};let S=r("feedback-form-state")||{};const T=document.querySelector(".feedback-form");T.addEventListener("input",e(i)((function(e){S[e.target.name]=e.target.value,n("feedback-form-state",JSON.stringify(S))}),500)),function(){const e=r("feedback-form-state");e&&(e.email&&(T.email.value=e.email),e.message&&(T.message.value=e.message))}(),T.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;if(""===t.value||""===n.value)return alert("Please fill in all the fields!");o("feedback-form-state");const r=new FormData(T);Object.fromEntries(r.entries());e.currentTarget.reset()}));
//# sourceMappingURL=03-feedback.dc0f1c5e.js.map

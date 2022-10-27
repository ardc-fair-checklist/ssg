import{i as a,w as x,o as L,a as R,c as B,g as I,F as M,S as H,e as z,b as F,f as q,j as D,k as P,l as T,m as W,n as $,p as j,q as O,r as U}from"./chunk-376a9fed.js";const X="http://www.w3.org/2000/svg",l=typeof document<"u"?document:null,g=l&&l.createElement("template"),v={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?l.createElementNS(X,t):l.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>l.createTextNode(t),createComment:t=>l.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>l.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const f=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{g.innerHTML=i?`<svg>${t}</svg>`:t;const c=g.content;if(i){const o=c.firstChild;for(;o.firstChild;)c.appendChild(o.firstChild);c.removeChild(o)}e.insertBefore(c,n)}return[f?f.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function J(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function K(t,e,n){const i=t.style,s=a(n);if(n&&!s){for(const r in n)m(i,r,n[r]);if(e&&!a(e))for(const r in e)n[r]==null&&m(i,r,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const b=/\s*!important$/;function m(t,e,n){if(P(n))n.forEach(i=>m(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Q(t,e);b.test(n)?t.setProperty(T(i),n.replace(b,""),"important"):t[i]=n}}const S=["Webkit","Moz","ms"],u={};function Q(t,e){const n=u[e];if(n)return n;let i=W(e);if(i!=="filter"&&i in t)return u[e]=i;i=$(i);for(let s=0;s<S.length;s++){const r=S[s]+i;if(r in t)return u[e]=r}return e}const C="http://www.w3.org/1999/xlink";function Y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(C,e.slice(6,e.length)):t.setAttributeNS(C,e,n);else{const r=j(e);n==null||r&&!O(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Z(t,e,n,i,s,r,f){if(e==="innerHTML"||e==="textContent"){i&&f(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const o=n==null?"":n;(t.value!==o||t.tagName==="OPTION")&&(t.value=o),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=O(n):n==null&&o==="string"?(n="",c=!0):o==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function G(t,e,n,i){t.addEventListener(e,n,i)}function V(t,e,n,i){t.removeEventListener(e,n,i)}function y(t,e,n,i,s=null){const r=t._vei||(t._vei={}),f=r[e];if(i&&f)f.value=i;else{const[c,o]=k(e);if(i){const _=r[e]=nt(i,s);G(t,c,_,o)}else f&&(V(t,c,f,o),r[e]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function k(t){let e;if(A.test(t)){e={};let i;for(;i=t.match(A);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):T(t.slice(2)),e]}let p=0;const tt=Promise.resolve(),et=()=>p||(tt.then(()=>p=0),p=Date.now());function nt(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;U(it(i,n.value),e,5,[i])};return n.value=t,n.attached=et(),n}function it(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const E=/^on[a-z]/,st=(t,e,n,i,s=!1,r,f,c,o)=>{e==="class"?J(t,i,s):e==="style"?K(t,n,i):F(e)?q(e)||y(t,e,n,i,f):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rt(t,e,i,s))?Z(t,e,i,r,f,c,o):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Y(t,e,i,s))};function rt(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&E.test(e)&&D(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||E.test(e)&&a(n)?!1:e in t}function at(t){const e=I();if(!e)return;const n=()=>h(e.subTree,t(e.proxy));x(n),L(()=>{const i=new MutationObserver(n);i.observe(e.subTree.el.parentNode,{childList:!0}),R(()=>i.disconnect())})}function h(t,e){if(t.shapeFlag&128){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{h(n.activeBranch,e)})}for(;t.component;)t=t.component.subTree;if(t.shapeFlag&1&&t.el)N(t.el,e);else if(t.type===M)t.children.forEach(n=>h(n,e));else if(t.type===H){let{el:n,anchor:i}=t;for(;n&&(N(n,e),n!==i);)n=n.nextSibling}}function N(t,e){if(t.nodeType===1){const n=t.style;for(const i in e)n.setProperty(`--${i}`,e[i])}}const ot=z({patchProp:st},v);let d,w=!1;function ct(){return d=w?d:B(ot),w=!0,d}const ut=(...t)=>{const e=ct().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=ft(i);if(s)return n(s,!0,s instanceof SVGElement)},e};function ft(t){return a(t)?document.querySelector(t):t}export{ut as c,at as u};

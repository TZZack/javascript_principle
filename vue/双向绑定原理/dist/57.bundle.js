(self.webpackChunkdata_reactive=self.webpackChunkdata_reactive||[]).push([[57],{806:(e,t,i)=>{const s=i(906);function o(e,t){this.vm=t,this.el=document.querySelector(e),this.fragment=null,this.init()}o.prototype={init(){this.el?(this.fragment=this.nodeToFragment(this.el),this.compileElement(this.fragment),this.el.appendChild(this.fragment)):console.log("Dom元素不存在")},nodeToFragment(e){let t=document.createDocumentFragment(),i=e.firstChild();for(;i;)t.appendChild(i),i=e.firstChild;return t},compileElement(e){let t=e.childNodes,i=this;Array.from(t).forEach((e=>{var t=/\{\{(.*)\}\}/,s=e.textContent;i.isElementNode(e)?i.compile(e):i.isTextNode(e)&&t.test(s)&&i.compileText(e,t.exec(s)[1]),e.childNodes&&e.childNodes.length&&i.compileElement(e)}))},compileText(e,t){let i=this,o=this.vm[t];this.updateNodeText(e,o),new s(this.vm,t,(t=>{i.updateNodeText(e,t)}))},compile(e){let t=e.attributes,i=this;Array.from(t).forEach((t=>{let s=t.name;if(i.isDirective(s)){let o=t.value,n=s.substring(2);i.isEventDirective(n)?i.compileEvent(e,i.vm,o,n):i.compileModel(e,i.vm,o,n),e.removeAttribute(s)}}))},compileEvent(e,t,i,s){let o=s.split(":")[1],n=t.methods&&t.methods[i];o&&n&&e.addEventListener(eventType,n.bind(t),!1)},compileModel(e,t,i,o){let n=this,a=this.vm[i];this.updateNodeValue(e,a),new s(this.vm,i,(t=>{n.updateNodeValue(e,t)})),e.addEventListener("input",(e=>{let t=e.target.value;a!==t&&(n.vm[i]=t,a=t)}))},updateNodeText(e,t){e.textContent=void 0===t?"":t},updateNodeValue(e,t){e.value=void 0===t?"":t},isDirective:e=>0===e.indexOf("v-"),isEventDirective:e=>0===e.indexOf("on:"),isElementNode:e=>1===e.nodeType,isTextNode:e=>3===e.nodeType},e.exports=o},128:e=>{function t(){this.subs=[]}t.target=null,t.prototype={addSub(e){this.subs.push(e)},notify(){this.subs.forEach((e=>{e.update()}))}},e.exports=t},57:(e,t,i)=>{const s=i(806),{observe:o}=i(197);function n(e){let t=this;this.data=e.data,this.methods=e.methods,Object.keys(this.data).forEach((e=>{t.proxyKeys(e)})),o(this.data),new s(e.el,this)}n.prototype={proxyKeys(e){let t=this;Object.defineProperty(this,e,{enumerable:!1,configurable:!0,get:function(){return t.data[e]},set:function(i){t.data[e]=i}})}},e.exports=n},197:(e,t,i)=>{const s=i(128);function o(e){this.data=e,this.walk(e)}o.prototype={walk(e){var t=this;Object.keys(e).forEach((i=>{t.defineReactive(e,i,e[i])}))},defineReactive(e,t,i){let o=new s;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:()=>(s.target&&o.addSub(s.target),i),set(e){e!==i&&(i=e,o.notify())}})}},e.exports={observe:function(e){if(e&&"object"==typeof e)return new o(e)}}},906:(e,t,i)=>{var{Dep:s}=i(197);function o(e,t,i){this.vm=e,this.exp=t,this.cb=i,this.value=this.get()}o.prototype={update(){this.run()},run(){let e=this.vm.data[this.exp],t=this.value;e!==t&&(this.value=e,this.cb.call(this.vm,e,t))},get(){s.target=this;let e=this.vm.data[this.exp];return s.target=null,e}},e.exports=o}}]);
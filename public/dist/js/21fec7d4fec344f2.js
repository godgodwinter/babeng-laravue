"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[421],{5714:(s,t,e)=>{e.d(t,{ZP:()=>_});var r=e(9669),o=e.n(r),a=Object.defineProperty,n=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(s,t,e)=>t in s?a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,u=(s,t)=>{for(var e in t||(t={}))n.call(t,e)&&l(s,e,t[e]);if(i)for(var e of i(t))c.call(t,e)&&l(s,e,t[e]);return s};const d=s=>void 0===s,f=s=>Array.isArray(s),p=s=>s&&"number"==typeof s.size&&"string"==typeof s.type&&"function"==typeof s.slice,h=(s,t,e,r)=>((t=t||{}).indices=!d(t.indices)&&t.indices,t.nullsAsUndefineds=!d(t.nullsAsUndefineds)&&t.nullsAsUndefineds,t.booleansAsIntegers=!d(t.booleansAsIntegers)&&t.booleansAsIntegers,t.allowEmptyArrays=!d(t.allowEmptyArrays)&&t.allowEmptyArrays,e=e||new FormData,d(s)||(null===s?t.nullsAsUndefineds||e.append(r,""):(s=>"boolean"==typeof s)(s)?t.booleansAsIntegers?e.append(r,s?1:0):e.append(r,s):f(s)?s.length?s.forEach(((s,o)=>{const a=r+"["+(t.indices?o:"")+"]";h(s,t,e,a)})):t.allowEmptyArrays&&e.append(r+"[]",""):(s=>s instanceof Date)(s)?e.append(r,s.toISOString()):!(s=>s===Object(s))(s)||(s=>p(s)&&"string"==typeof s.name&&("object"==typeof s.lastModifiedDate||"number"==typeof s.lastModified))(s)||p(s)?e.append(r,s):Object.keys(s).forEach((o=>{const a=s[o];if(f(a))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);h(a,t,e,r?r+"["+o+"]":o)}))),e);var m={serialize:h};function y(s){if(null===s||"object"!=typeof s)return s;const t=Array.isArray(s)?[]:{};return Object.keys(s).forEach((e=>{t[e]=y(s[e])})),t}function g(s){return Array.isArray(s)?s:[s]}function b(s){return s instanceof File||s instanceof Blob||s instanceof FileList||"object"==typeof s&&null!==s&&void 0!==Object.values(s).find((s=>b(s)))}class v{constructor(){this.errors={},this.errors={}}set(s,t){"object"==typeof s?this.errors=s:this.set(u(u({},this.errors),{[s]:g(t)}))}all(){return this.errors}has(s){return Object.prototype.hasOwnProperty.call(this.errors,s)}hasAny(...s){return s.some((s=>this.has(s)))}any(){return Object.keys(this.errors).length>0}get(s){if(this.has(s))return this.getAll(s)[0]}getAll(s){return g(this.errors[s]||[])}only(...s){const t=[];return s.forEach((s=>{const e=this.get(s);e&&t.push(e)})),t}flatten(){return Object.values(this.errors).reduce(((s,t)=>s.concat(t)),[])}clear(s){const t={};s&&Object.keys(this.errors).forEach((e=>{e!==s&&(t[e]=this.errors[e])})),this.set(t)}}class w{constructor(s={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new v,this.progress=void 0,this.update(s)}static make(s){return new this(s)}update(s){this.originalData=Object.assign({},this.originalData,y(s)),Object.assign(this,s)}fill(s={}){this.keys().forEach((t=>{this[t]=s[t]}))}data(){return this.keys().reduce(((s,t)=>u(u({},s),{[t]:this[t]})),{})}keys(){return Object.keys(this).filter((s=>!w.ignore.includes(s)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),w.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((s=>!w.ignore.includes(s))).forEach((s=>{this[s]=y(this.originalData[s])}))}get(s,t={}){return this.submit("get",s,t)}post(s,t={}){return this.submit("post",s,t)}patch(s,t={}){return this.submit("patch",s,t)}put(s,t={}){return this.submit("put",s,t)}delete(s,t={}){return this.submit("delete",s,t)}submit(s,t,e={}){return this.startProcessing(),e=u({data:{},params:{},url:this.route(t),method:s,onUploadProgress:this.handleUploadProgress.bind(this)},e),"get"===s.toLowerCase()?e.params=u(u({},this.data()),e.params):(e.data=u(u({},this.data()),e.data),b(e.data)&&!e.transformRequest&&(e.transformRequest=[s=>m.serialize(s)])),new Promise(((s,t)=>{(w.axios||o()).request(e).then((t=>{this.finishProcessing(),s(t)})).catch((s=>{this.handleErrors(s),t(s)}))}))}handleErrors(s){this.busy=!1,this.progress=void 0,s.response&&this.errors.set(this.extractErrors(s.response))}extractErrors(s){return s.data&&"object"==typeof s.data?s.data.errors?u({},s.data.errors):s.data.message?{error:s.data.message}:u({},s.data):{error:w.errorMessage}}handleUploadProgress(s){this.progress={total:s.total,loaded:s.loaded,percentage:Math.round(100*s.loaded/s.total)}}route(s,t={}){let e=s;return Object.prototype.hasOwnProperty.call(w.routes,s)&&(e=decodeURI(w.routes[s])),"object"!=typeof t&&(t={id:t}),Object.keys(t).forEach((s=>{e=e.replace(`{${s}}`,t[s])})),e}onKeydown(s){const t=s.target;t.name&&this.errors.clear(t.name)}}w.routes={},w.errorMessage="Something went wrong. Please try again.",w.recentlySuccessfulTimeout=2e3,w.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const _=w},3421:(s,t,e)=>{e.r(t),e.d(t,{default:()=>c});var r=e(7757),o=e.n(r),a=e(5714);function n(s,t,e,r,o,a,n){try{var i=s[a](n),c=i.value}catch(s){return void e(s)}i.done?t(c):Promise.resolve(c).then(r,o)}const i={scrollToTop:!1,metaInfo:function(){return{title:this.$t("settings")}},data:function(){return{form:new a.ZP({password:"",password_confirmation:""})}},methods:{update:function(){var s,t=this;return(s=o().mark((function s(){return o().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.form.patch("/api/settings/password");case 2:t.form.reset();case 3:case"end":return s.stop()}}),s)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var a=s.apply(t,e);function i(s){n(a,r,o,i,c,"next",s)}function c(s){n(a,r,o,i,c,"throw",s)}i(void 0)}))})()}}};const c=(0,e(1900).Z)(i,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("card",{attrs:{title:s.$t("your_password")}},[e("form",{on:{submit:function(t){return t.preventDefault(),s.update.apply(null,arguments)},keydown:function(t){return s.form.onKeydown(t)}}},[e("alert-success",{attrs:{form:s.form,message:s.$t("password_updated")}}),s._v(" "),e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-end"},[s._v(s._s(s.$t("new_password")))]),s._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:s.form.password},on:{input:function(t){t.target.composing||s.$set(s.form,"password",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"password"}})],1)]),s._v(" "),e("div",{staticClass:"mb-3 row"},[e("label",{staticClass:"col-md-3 col-form-label text-md-end"},[s._v(s._s(s.$t("confirm_password")))]),s._v(" "),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"form-control",class:{"is-invalid":s.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:s.form.password_confirmation},on:{input:function(t){t.target.composing||s.$set(s.form,"password_confirmation",t.target.value)}}}),s._v(" "),e("has-error",{attrs:{form:s.form,field:"password_confirmation"}})],1)]),s._v(" "),e("div",{staticClass:"mb-3 row"},[e("div",{staticClass:"col-md-9 ms-md-auto"},[e("v-button",{attrs:{loading:s.form.busy,type:"success"}},[s._v("\n          "+s._s(s.$t("update"))+"\n        ")])],1)])],1)])}),[],!1,null,null,null).exports}}]);
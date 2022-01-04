"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20],{1020:(t,n,e)=>{e.r(n),e.d(n,{default:()=>o});var a=e(9669),i=e.n(a);const s={created:function(){var t=this;this.getUsers(),Fire.$on("reloadUsers",(function(){t.getUsers()}))},middleware:"auth",data:function(){var t={},n=[{label:"No",name:"id"},{label:"Aksi",name:"aksi"},{label:"Nama",name:"name"},{label:"Email",name:"email"},{label:"Tes",name:"created_at"}];return n.forEach((function(n){t[n.name]=-1})),{users:[],columns:n,sortKey:"created_at",sortOrders:t,length:10,search:"",tableShow:{showdata:!0},pagination:{currentPage:1,total:"",nextPage:"",prevPage:"",from:"",to:"",lastPage:""}}},methods:{deleteUser:function(t){new swal({title:"Delete this user?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value&&i().delete("/api/users/".concat(t,"/delete")).then((function(){Fire.$emit("reloadUsers"),swal("Deleted!","User Deleted.","success"),Fire.$emit("AfterCreate")})).catch((function(){swal("Failed!","There was something wronge.","warning")}))}))},getUsers:function(){var t=this;i().get("/api/users/",{params:this.tableShow}).then((function(n){t.users=n.data,t.pagination.total=t.users.length,t.pagination.lastPage=t.pagination.total%t.length})).catch((function(t){console.log(t)}))},paginate:function(t,n,e){return this.pagination.from=t.length?(e-1)*n+1:" ",this.pagination.to=e*n>t.length?t.length:e*n,this.pagination.prevPage=e>1?e:"",this.pagination.nextPage=t.length>this.pagination.to?e+1:"",this.pagination.lastPage=this.pagination.total%this.length,t.slice((e-1)*n,e*n)},resetPagination:function(){this.pagination.currentPage=1,this.pagination.prevPage="",this.pagination.nextPage=""},sortBy:function(t){this.resetPagination(),this.sortKey=t,this.sortOrders[t]=-1*this.sortOrders[t]},getIndex:function(t,n,e){return t.findIndex((function(t){return t[n]==e}))}},computed:{filteredUsers:function(){var t=this,n=this.users;this.search&&(n=n.filter((function(n){return Object.keys(n).some((function(e){return String(n[e]).toLowerCase().indexOf(t.search.toLowerCase())>-1}))})));var e=this.sortKey,a=this.sortOrders[e]||1;return e&&(n=n.slice().sort((function(n,i){var s=t.getIndex(t.columns,"name",e);return n=String(n[e]).toLowerCase(),i=String(i[e]).toLowerCase(),t.columns[s].type&&"date"===t.columns[s].type?(n===i?0:new Date(n).getTime()>new Date(i).getTime()?1:-1)*a:t.columns[s].type&&"number"===t.columns[s].type?(+n==+i?0:+n>+i?1:-1)*a:(n===i?0:n>i?1:-1)*a}))),n},paginatedUsers:function(){return this.paginate(this.filteredUsers,this.length,this.pagination.currentPage)}}},r=s;const o=(0,e(1900).Z)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-10 m-auto"},[e("card",{attrs:{title:t.$t("Kategori")}},[e("div",{staticClass:"table-style"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",staticStyle:{width:"250px"},attrs:{type:"text",placeholder:"Search..."},domProps:{value:t.search},on:{input:[function(n){n.target.composing||(t.search=n.target.value)},function(n){return t.resetPagination()}]}}),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.length,expression:"length"}],on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.length=n.target.multiple?e:e[0]},function(n){return t.resetPagination()}]}},[e("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),e("option",{attrs:{value:"30"}},[t._v("30")])])])])]),t._v(" "),e("table",{staticClass:"table table-hover table-bordered py-2 px-2",staticStyle:{width:"100%"},attrs:{id:"myTable"}},[e("thead",{staticClass:"table-dark"},[e("tr",t._l(t.columns,(function(n){return e("th",{key:n.name,class:t.sortKey===n.name?t.sortOrders[n.name]>0?"sorting_asc":"sorting_desc":"sorting",on:{click:function(e){return t.sortBy(n.name)}}},[t._v("\n                      "+t._s(n.label)+"\n                  ")])})),0)]),t._v(" "),e("tbody",t._l(t.paginatedUsers,(function(n,a){return e("tr",{key:n.id},[e("td",{staticClass:"babeng-min-row text-center"},[t._v(t._s((t.pagination.currentPage-1)*t.length+a+1))]),t._v(" "),e("td",[e("a",{staticClass:"btn btn-danger btn-sm",attrs:{href:"#"},on:{click:function(e){return t.deleteUser(n.id)}}},[t._v("Remove")])]),t._v(" "),e("td",[t._v(t._s(n.name))]),t._v(" "),e("td",[t._v(t._s(n.email))]),t._v(" "),e("td",[t._v(t._s(n.name))])])})),0)]),t._v(" "),e("div",[t.tableShow.showdata?e("nav",{staticClass:"pagination"},[e("span",{staticClass:"page-stats"},[t._v("\n                  "+t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.filteredUsers.length)+"\n                  "),e("span")]),t._v(" "),e("a",{staticClass:"btn btn-sm btn-primary pagination-previous",on:{click:function(n){t.pagination.currentPage=1}}},[t._v("\n                  First\n              ")]),t._v(" "),t.pagination.prevPage?e("a",{staticClass:"btn btn-sm btn-primary pagination-previous",on:{click:function(n){--t.pagination.currentPage}}},[t._v("\n                  Prev\n              ")]):e("a",{staticClass:"btn btn-sm pagination-previous btn-primary",attrs:{disabled:""}},[t._v("\n              Prev\n              ")]),t._v(" "),t.pagination.nextPage?e("a",{staticClass:"btn btn-sm btn-primary pagination-next",on:{click:function(n){++t.pagination.currentPage}}},[t._v("\n                  Next\n              ")]):e("a",{staticClass:"btn btn-sm pagination-next btn-primary",attrs:{disabled:""}},[t._v("\n                  Next\n              ")]),t._v(" "),e("a",{staticClass:"btn btn-sm btn-primary pagination-previous",on:{click:function(n){t.pagination.currentPage=Math.floor(t.pagination.total/t.length)+1}}},[t._v("\n                  Last\n              ")])]):e("nav",{staticClass:"pagination"},[e("span",{staticClass:"page-stats"},[t._v(t._s(t.pagination.from)+" - "+t._s(t.pagination.to)+" of "+t._s(t.pagination.total))]),t._v(" "),t.pagination.prevPageUrl?e("a",{staticClass:"btn btn-sm btn-primary pagination-previous",on:{click:function(n){--t.pagination.currentPage}}},[t._v("\n                  Prev\n              ")]):e("a",{staticClass:"btn btn-sm btn-primary pagination-previous",attrs:{disabled:""}},[t._v("\n              Prev\n              ")]),t._v(" "),t.pagination.nextPageUrl?e("a",{staticClass:"btn btn-sm pagination-next",on:{click:function(n){++t.pagination.currentPage}}},[t._v("\n                  Next\n              ")]):e("a",{staticClass:"btn btn-sm btn-primary pagination-next",attrs:{disabled:""}},[t._v("\n                  Next\n              ")])])])])],1)])}),[],!1,null,null,null).exports}}]);
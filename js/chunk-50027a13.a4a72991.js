(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50027a13"],{"81d5":function(t,e,a){"use strict";var s=a("7b0b"),i=a("23cb"),r=a("50c4");t.exports=function(t){var e=s(this),a=r(e.length),l=arguments.length,o=i(l>1?arguments[1]:void 0,a),c=l>2?arguments[2]:void 0,n=void 0===c?a:i(c,a);while(n>o)e[o++]=t;return e}},c66d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("section",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card card-primary card-outline"},[a("div",{staticClass:"card-body box-profile"},[a("div",{staticClass:"text-center"},[a("img",{staticClass:"profile-user-img img-fluid img-circle",attrs:{src:t.getProfileImage(),alt:"User profile picture"}})]),a("h3",{staticClass:"profile-username text-center"},[t._v(" "+t._s(t.form.fullname)+" ")]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"custom-file"},[a("input",{staticClass:"custom-file-input",attrs:{type:"file",id:"customFile"},on:{change:t.ChangeProfileImg}}),t._m(1)])])])])]),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("div",{staticClass:"tab-content"},[a("div",{staticClass:"tab-pane active",attrs:{id:"settings"}},[a("form",{staticClass:"form-horizontal"},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputName"}},[t._v("Username")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",id:"inputName",placeholder:"",disabled:""},domProps:{value:t.form.username},on:{input:function(e){e.target.composing||t.$set(t.form,"username",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputEmail"}},[t._v("Email")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",id:"inputEmail",placeholder:"Email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])]),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputName2"}},[t._v("Full Name")]),a("div",{staticClass:"col-sm-10"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.fullname,expression:"form.fullname"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("fullname")},attrs:{type:"text",id:"inputName2",placeholder:""},domProps:{value:t.form.fullname},on:{input:function(e){e.target.composing||t.$set(t.form,"fullname",e.target.value)}}})])]),t._m(3),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"offset-sm-2 col-sm-10"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.UpdateProfile(e)}}},[t._v(" Update Profile ")])])])])])])])])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content-header"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-sm-6"},[a("h1",[t._v("Profile")])]),a("div",{staticClass:"col-sm-6"},[a("ol",{staticClass:"breadcrumb float-sm-right"},[a("li",{staticClass:"breadcrumb-item"},[a("a",{attrs:{href:"#"}},[t._v("Home")])]),a("li",{staticClass:"breadcrumb-item active"},[t._v("User Profile")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"btn btn-primary btn-block",attrs:{href:"#",for:"customFile"}},[a("b",[t._v("Select Profile")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header p-2"},[a("ul",{staticClass:"nav nav-pills"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:"#settings","data-toggle":"tab"}},[t._v("Settings")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputExperience"}},[t._v("Experience")]),a("div",{staticClass:"col-sm-10"},[a("textarea",{staticClass:"form-control",attrs:{id:"inputExperience",placeholder:"Experience"}})])])}],r=(a("cb29"),a("bc3a")),l=a.n(r),o={name:"profile",data:function(){return{form:new window.Form({id:"",username:"",email:"",fullname:"",img_profile:""})}},methods:{getProfileImage:function(){var t="";return t=void 0==this.form.img_profile||""==this.form.img_profile?Object({NODE_ENV:"production",BASE_URL:"/vue-ministock/"}).VUE_APP_BASE_URL+"/assets/img/profile/user.png":this.form.img_profile.length>100?this.form.img_profile:Object({NODE_ENV:"production",BASE_URL:"/vue-ministock/"}).VUE_APP_BASE_URL+"/assets/img/profile/"+this.form.img_profile,t},ChangeProfileImg:function(t){var e=this,a=new window.FileReader;t.target.files[0]["size"]<2111775?(a.onloadend=function(t){e.form.img_profile=t.target.result},a.readAsDataURL(t.target.files[0])):alert("You are uploading a large file")},UpdateProfile:function(){this.form.put("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ministock/"}).VUE_APP_BASE_URL,"/api/user/me")).then((function(){alert("อัพเดทข้อมูลเรียบร้อย")})).catch((function(){}))}},created:function(){var t=this;l.a.get("".concat(Object({NODE_ENV:"production",BASE_URL:"/vue-ministock/"}).VUE_APP_BASE_URL,"/api/user/me")).then((function(e){var a=e.data;return t.form.fill(a.data)}))}},c=o,n=a("2877"),m=Object(n["a"])(c,s,i,!1,null,null,null);e["default"]=m.exports},cb29:function(t,e,a){var s=a("23e7"),i=a("81d5"),r=a("44d2");s({target:"Array",proto:!0},{fill:i}),r("fill")}}]);
//# sourceMappingURL=chunk-50027a13.a4a72991.js.map
(this.webpackJsonplab9=this.webpackJsonplab9||[]).push([[0],{14:function(e,a,n){},20:function(e,a,n){},21:function(e,a,n){"use strict";n.r(a);var t,r=n(0),c=n.n(r),s=n(4),o=n.n(s),l=(n(14),n(2)),i=l.c;!function(e){e.FETCH_USER_DATA_REQUEST="FETCH_USER_DATA_REQUEST",e.FETCH_USER_DATA_SUCCESS="FETCH_USER_DATA_SUCCESS",e.FETCH_USER_DATA_ERROR="FETCH_USER_DATA_ERROR"}(t||(t={}));var u,d=function(e){return console.log("fetchUserDataActionCreator | text: "+e),function(a){a({type:t.FETCH_USER_DATA_REQUEST}),console.log("Creating a request: "+e),fetch("https://api.github.com/users/"+e).then((function(e){return e.json()})).then((function(e){console.log("data.message: "+e.message+"\ndata.name: "+e.name+"\ndata.login: "+e.login+"\ndata.avatar_url: "+e.avatar_url+"\nstate.repos: "+e.repos),a({type:t.FETCH_USER_DATA_SUCCESS,payload:{name:e.name,userName:e.login,avatar:e.avatar_url,repos:parseInt(e.public_repos,10)}})})).catch((function(e){return a({type:t.FETCH_USER_DATA_ERROR,payload:e.message})}))}},h={data:{name:null,userName:null,avatar:null,repos:0},error:null,loading:!1},j=n(1),E=function(){console.log("userCard rendering");var e=i((function(e){return e.user})),a=e.data,n=e.loading,t=e.error,c=i((function(e){return e.search.searchText})),s=Object(l.b)();return Object(r.useEffect)((function(){s(d(c))}),[c]),n?Object(j.jsx)("h6",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}):t?Object(j.jsx)("h6",{children:t}):a.userName&&a.name&&a.avatar?Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("a",{href:"https://www.github.com/"+a.userName,target:"_blank",children:Object(j.jsx)("img",{className:"card-avatar",src:a.avatar,alt:a.userName})}),Object(j.jsxs)("div",{className:"card-sign",children:[Object(j.jsx)("div",{className:"card-sign-line header",children:a.name}),Object(j.jsx)("div",{className:"card-sign-line nickname",children:a.userName}),Object(j.jsx)("div",{className:"card-sign-line",children:0!==a.repos?Object(j.jsxs)("span",{children:["Repositories: ",a.repos]}):Object(j.jsx)("span",{children:"No projects"})})]})]}):Object(j.jsx)("div",{})};!function(e){e.FIELD_CLEAR="FIELD_CLEAR",e.FIELD_UPDATE="FIELD_UPDATE"}(u||(u={}));var p={searchText:""},b=function(){console.log("userSearch rendering");var e=i((function(e){return e.search.searchText})),a=0,n=Object(l.b)();return Object(r.useEffect)((function(){var a;n((a=e,console.log("in update | x: "+a),void 0===a&&(a=""),{type:u.FIELD_UPDATE,payload:a})),n(d(e))}),[a]),Object(j.jsxs)("div",{className:"w-20",children:[Object(j.jsx)("form",{onSubmit:function(n){return function(n){n.preventDefault(),console.log("btn click | trying to save "+e),a++,e=""}(n)},children:Object(j.jsxs)("span",{className:"user-search",children:[Object(j.jsx)("input",{type:"text",placeholder:"enter a nickname on GitHub",className:"search-field",onChange:function(a){return e=a.target.value}}),Object(j.jsx)("button",{type:"submit",className:"search-btn",children:"Find!"})]})}),Object(j.jsx)(E,{})]})};n(20);var _=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("p",{children:"LAB-10-redux UI5-45 Turchin"}),Object(j.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),t(e),r(e),c(e),s(e)}))},g=n(3),T=n(8),v=n(9),f=Object(g.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case t.FETCH_USER_DATA_REQUEST:return{loading:!0,error:null,data:{name:null,userName:null,avatar:null,repos:0}};case t.FETCH_USER_DATA_SUCCESS:return{loading:!1,error:null,data:{name:a.payload.name,userName:a.payload.userName,avatar:a.payload.avatar,repos:a.payload.repos}};case t.FETCH_USER_DATA_ERROR:return{loading:!1,error:a.payload,data:{name:null,userName:null,avatar:null,repos:0}};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.FIELD_CLEAR:return{searchText:""};case u.FIELD_UPDATE:return{searchText:a.payload};default:return e}}}),O=Object(g.createStore)(f,Object(T.composeWithDevTools)(Object(g.applyMiddleware)(v.a)));o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(l.a,{store:O,children:Object(j.jsx)(_,{})})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.3528ca5b.chunk.js.map
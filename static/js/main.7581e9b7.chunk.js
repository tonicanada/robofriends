(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{16:function(e,n,a){e.exports=a(29)},26:function(e,n,a){},27:function(e,n,a){},29:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(2),i=a.n(o),s=a(15),c=a(1),l=a(14),u=a.n(l),h=a(10),m={FILTER_ROBOTS:"FILTER_ROBOTS"},d=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],b={robots:d},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.FILTER_ROBOTS:return Object(h.a)(Object(h.a)({},e),{},{robots:d.filter((function(e){return e.name.toLowerCase().includes(n.payload.toLowerCase())}))});default:return e}},p=Object(c.c)({robots:f}),O=[u.a],v=Object(c.d)(p,c.a.apply(void 0,O)),E=(a(26),a(3)),g=a(4),y=a(6),C=a(5),j=function(e){e.robots;throw new Error("NOOOOOO!")},S=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},k=function(e){Object(y.a)(a,e);var n=Object(C.a)(a);function a(e){var t;return Object(E.a)(this,a),(t=n.call(this,e)).state={hasError:!1},t}return Object(g.a)(a,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),a}(t.Component),L=(a(27),function(e){Object(y.a)(a,e);var n=Object(C.a)(a);function a(){var e;return Object(E.a)(this,a),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,a=e.searchfield,t=n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(S,{searchChange:this.onSearchChange}),r.a.createElement(w,null,r.a.createElement(k,null,r.a.createElement(j,{robots:t})))):r.a.createElement("h1",null,"Loading")}}]),a}(t.Component));a(28);i.a.render(r.a.createElement(s.a,{store:v},r.a.createElement(L,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7581e9b7.chunk.js.map
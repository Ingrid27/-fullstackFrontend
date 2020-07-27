(this["webpackJsonpminha-carteira"]=this["webpackJsonpminha-carteira"]||[]).push([[0],{228:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(40),r=a.n(c),i=(a(78),a(4)),o=a(5),s=a(7),u=a(6),m=a(2),h=a(68),p=a.n(h),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.Row,null,l.a.createElement(m.Navbar,{className:"flow-text",alignLinks:"right",brand:l.a.createElement("a",{className:"brand-logo light-blue-text text-accent-3",style:{display:"flex"},href:"/"},l.a.createElement("img",{src:p.a,alt:"Logo"}),l.a.createElement("b",{className:"desk"},"MINHA CARTEIRA")),id:"mobile-nav",menuIcon:l.a.createElement(m.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0},sidenav:l.a.createElement("li",null,"Custom node!")},!this.props.auth.isAuthenticated()&&l.a.createElement("a",{className:"fRight pl10 desk",href:this.props.auth.login,onClick:this.props.auth.login},"LOGIN"),this.props.auth.isAuthenticated()&&l.a.createElement("a",{className:"fRight pl10 desk",href:this.props.auth.login,onClick:this.props.auth.logout},"SAIR"),this.props.auth.isAuthenticated()&&l.a.createElement("div",{className:"quad fRight desk"},l.a.createElement(m.Icon,{class:"material-icons"},"account_circle"),l.a.createElement("span",null,this.props.name)),this.props.auth.isAuthenticated()&&l.a.createElement("div",{className:"quad fRight mob"},l.a.createElement(m.Icon,{className:"large material-icons perf mob"},"account_circle"),l.a.createElement("span",null,this.props.name),l.a.createElement("hr",null)),l.a.createElement("div",{className:"col s3"}),l.a.createElement("div",{className:"col s6 mob"},!this.props.auth.isAuthenticated()&&l.a.createElement("a",{className:"waves-effect waves-light btnYe mt20",href:this.props.auth.login,onClick:this.props.auth.login},"LOGIN"),this.props.auth.isAuthenticated()&&l.a.createElement("a",{waves:"light",className:"waves-effect waves-light btnYe",href:this.props.auth.login,onClick:this.props.auth.logout},"SAIR")),l.a.createElement("div",{className:"col s3"})))}}]),a}(n.Component),E=a(9),v=a.n(E),f=a(69),g=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={investments:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://api-fullstackgo.herokuapp.com/api","/details/");v.a.get(t).then((function(e){return e.data})).then((function(t){e.setState({investments:t}),console.log(e.state.investments)}))}},{key:"render",value:function(){var e=this.state.investments.filter((function(e){return"Renda_Fixa"===e.type})),t=this.state.investments.filter((function(e){return"Renda_Variavel"===e.type})),a=e.reduce((function(e,t){return e+t.value}),0),n=t.reduce((function(e,t){return e+t.value}),0),c=a+n;this.t={tot:c};var r=100*n/c,i={labels:[(100*a/c).toFixed(0)+"% RENDA FIXA",r.toFixed(0)+"% RENDA VARI\xc1VEL"],datasets:[{label:"Rainfall",backgroundColor:["#ff595e","#8ac926"],data:[a,n]}]};return l.a.createElement(m.Row,null,l.a.createElement("div",{class:"col m2 l2"}),0===this.t.tot&&l.a.createElement("div",{className:"addNull col s12 m8 l8"},l.a.createElement("p",{className:"center-align"},l.a.createElement(m.Icon,{medium:!0},"add_circle_outline")),l.a.createElement("p",{className:"center-align"},"ADICIONE UM INVESTIMENTO PARA COME\xc7AR!")),this.t.tot>0&&l.a.createElement("div",{className:"col s12 m8 l8"},l.a.createElement(f.a,{data:i,options:{legend:{position:"bottom",labels:{fontColor:"#000",FontFamily:"Oswald",fontSize:11,boxWidth:20}},cutoutPercentage:75}})),l.a.createElement("div",{class:"col m2 l2"}))}}]),a}(n.Component),b=a(16),N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeType=n.onChangeType.bind(Object(b.a)(n)),n.onChangevalue=n.onChangevalue.bind(Object(b.a)(n)),n.onChangeDate=n.onChangeDate.bind(Object(b.a)(n)),n.onSubmit=n.onSubmit.bind(Object(b.a)(n)),n.state={type:"",value:"",date:""},n}return Object(o.a)(a,[{key:"onChangeType",value:function(e){this.setState({type:e.target.value})}},{key:"onChangevalue",value:function(e){this.setState({value:e.target.value})}},{key:"onChangeDate",value:function(e){this.setState({date:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={type:this.state.type,value:this.state.value,date:this.state.date};this.setState({type:"",value:"",date:""}),v.a.post("https://api-fullstackgo.herokuapp.com/api/interest",t).then((function(e){console.log(e.data),window.location.reload()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement(m.Row,null,l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("p",{className:"center-align tit"},"adicione um investimento:"),l.a.createElement("hr",{className:"hrBl"}),l.a.createElement("label",{className:" col s4"},"Tipo:",l.a.createElement("select",{className:"browser-default mbForm mtForm",value:this.state.type,onChange:this.onChangeType},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Selecione"),l.a.createElement("option",{value:"Renda_Fixa"},"Renda Fixa"),l.a.createElement("option",{value:"Renda_Variavel"},"Renda Vari\xe1vel"))),l.a.createElement("label",{className:" col s4"},"Valor:",l.a.createElement("input",{className:"padInput mbForm mtForm",type:"number",placeholder:"Valor",value:this.state.value,onChange:this.onChangevalue})),l.a.createElement("label",{className:" col s4"},"Data:",l.a.createElement("input",{className:"padInput mtForm",type:"date",value:this.state.date,onChange:this.onChangeDate})),l.a.createElement("div",{className:"col s12"},l.a.createElement("p",null,"Todos os campos s\xe3o obrigat\xf3rios***")),l.a.createElement("div",{className:"col m12 l12 s12"},l.a.createElement("div",{className:"col m5 l5 s4"}),l.a.createElement("div",{className:"col m2 l2 s4"},l.a.createElement("button",{className:"btnYe",type:"submit",value:"Create User",onClick:this.onSubmit},"ADICIONAR")),l.a.createElement("div",{className:"col m5 l5 s4"}))))}}]),a}(n.Component),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={investments:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://api-fullstackgo.herokuapp.com/api","/details/");v.a.get(t).then((function(e){return e.data})).then((function(t){e.setState({investments:t}),console.log(e.state.investments)}))}},{key:"deleteRow",value:function(e,t){v.a.delete("https://api-fullstackgo.herokuapp.com/api/interest/".concat(e)).then((function(e){console.log(e),console.log(e.data),window.location.reload()}))}},{key:"render",value:function(){var e=this,t=this.state.investments.filter((function(e){return"Renda_Fixa"===e.type})).reduce((function(e,t){return e+t.value}),0);this.tot={rFixa:t};var a=this.state.investments.filter((function(e){return"Renda_Fixa"===e.type}));return l.a.createElement(m.Row,null,0===this.tot.rFixa&&l.a.createElement("div",{className:"addNull"},l.a.createElement("p",{className:"center-align"},l.a.createElement(m.Icon,{medium:!0},"add_circle_outline")),l.a.createElement("p",{className:"center-align"},"ADICIONE UM INVESTIMENTO DO TIPO RENDA FIXA!")),this.tot.rFixa>0&&l.a.createElement(m.Table,{className:"highlight centered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Data"),l.a.createElement("th",null,"Valor"),l.a.createElement("th",null,"Excluir"))),l.a.createElement("tbody",null,a.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,t.date)),l.a.createElement("td",null,l.a.createElement("span",null,"R$ ",t.value.toLocaleString("pt-BR",{minimumFractionDigits:2}))),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(a){return e.deleteRow(t._id,a)}},l.a.createElement(m.Icon,{className:"waves-effect waves-light"},"delete_forever"))))})))))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={investments:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://api-fullstackgo.herokuapp.com/api","/details/");v.a.get(t).then((function(e){return e.data})).then((function(t){e.setState({investments:t}),console.log(e.state.investments)}))}},{key:"deleteRow",value:function(e,t){v.a.delete("https://api-fullstackgo.herokuapp.com/api/interest/".concat(e)).then((function(e){console.log(e),console.log(e.data),window.location.reload()}))}},{key:"render",value:function(){var e=this,t=this.state.investments.filter((function(e){return"Renda_Variavel"===e.type})).reduce((function(e,t){return e+t.value}),0);this.tot={rVari:t};var a=this.state.investments.filter((function(e){return"Renda_Variavel"===e.type}));return l.a.createElement(m.Row,null,0===this.tot.rVari&&l.a.createElement("div",{className:"addNull"},l.a.createElement("p",{className:"center-align"},l.a.createElement(m.Icon,{medium:!0},"add_circle_outline")),l.a.createElement("p",{className:"center-align"},"ADICIONE UM INVESTIMENTO DO TIPO RENDA VARI\xc1VEL!")),this.tot.rVari>0&&l.a.createElement(m.Table,{className:"highlight centered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Data"),l.a.createElement("th",null,"Valor"),l.a.createElement("th",null,"Excluir"))),l.a.createElement("tbody",null,a.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("span",null,t.date)),l.a.createElement("td",null,l.a.createElement("span",null,"R$ ",t.value.toLocaleString("pt-BR",{minimumFractionDigits:2}))),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(a){return e.deleteRow(t._id,a)}},l.a.createElement(m.Icon,null,"delete_forever"))))})))))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={investments:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="".concat("https://api-fullstackgo.herokuapp.com/api","/details/");v.a.get(t).then((function(e){return e.data})).then((function(t){e.setState({investments:t}),console.log(e.state.investments)}))}},{key:"render",value:function(){var e=this.state.investments.filter((function(e){return"Renda_Fixa"===e.type})),t=this.state.investments.filter((function(e){return"Renda_Variavel"===e.type})),a=e.reduce((function(e,t){return e+t.value}),0),n=t.reduce((function(e,t){return e+t.value}),0),c=a+n;return l.a.createElement(m.Row,null,l.a.createElement("div",{class:"col s12"},l.a.createElement(m.Card,{className:"br8"},l.a.createElement("div",null,l.a.createElement(N,null)))),l.a.createElement("div",{class:"col s12"},l.a.createElement(m.Card,{className:"br8"},l.a.createElement("div",null,l.a.createElement("p",{className:"center-align tit mb18"},"SEUS INVESTIMENTOS"),l.a.createElement("hr",{className:"hrBl"}),l.a.createElement(g,null),l.a.createElement("hr",{className:"hrBl"}),l.a.createElement("p",{className:"tit"},"TOTAL INVESTIDO: R$ ",l.a.createElement("span",null,c.toLocaleString("pt-BR",{minimumFractionDigits:2})))))),l.a.createElement("div",{class:"col s12 m6"},l.a.createElement(m.Card,{className:"br8"},l.a.createElement("div",null,l.a.createElement("p",{className:"center-align tit"},l.a.createElement("span",null,"RENDA FIXA")),l.a.createElement("hr",{className:"rendF"}),l.a.createElement(k,null),l.a.createElement("hr",{className:"rendF"}),l.a.createElement("p",{className:"tit"},"TOTAL: R$ ",l.a.createElement("span",null,a.toLocaleString("pt-BR",{minimumFractionDigits:2})))))),l.a.createElement("div",{class:"col s12 m6"},l.a.createElement(m.Card,{className:"br8"},l.a.createElement("div",null,l.a.createElement("p",{className:"center-align tit"},l.a.createElement("span",null,"RENDA VARI\xc1VEL")),l.a.createElement("hr",{className:"rendV"}),l.a.createElement(O,null),l.a.createElement("hr",{className:"rendV"}),l.a.createElement("p",{className:"tit"},"TOTAL: R$ ",l.a.createElement("span",null,n.toLocaleString("pt-BR",{minimumFractionDigits:2})))))))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.Container,null,l.a.createElement(y,null))}}]),a}(n.Component),I=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement(m.Row,null,l.a.createElement("div",{className:"col s1"}),l.a.createElement("div",{className:"col s10"},l.a.createElement(m.Card,{className:"br8"},l.a.createElement("div",{class:"center-align tit"},l.a.createElement("h3",null,"BEM VINDO"),l.a.createElement("hr",{className:"hrBl"}),l.a.createElement("br",null),l.a.createElement("h5",null,"\xc9 necess\xe1rio fazer login ou cadastrar-se para entrar"),l.a.createElement("br",null),l.a.createElement("h5",null,l.a.createElement("a",{href:this.props.auth.login,onClick:this.props.auth.login},"Clique aqui para entrar"))))),l.a.createElement("div",{className:"col s1"}))}}]),a}(n.Component),R=function(e){return l.a.createElement(m.Card,null,l.a.createElement(m.Row,null,l.a.createElement("div",null,"n\xe3o encontrado")))},S=a(71),j=a(72),w=a.n(j),A=function(){function e(){Object(i.a)(this,e),this.auth0=new S.a.WebAuth({domain:"dev-vny--4ui.us.auth0.com",clientID:"HfXSTmsqkuqCz0IGgLF0Nt4PVUsl9fCt",redirectUri:"http://localhost:3001/callback",audience:"https://dev-vny--4ui.us.auth0.com/userinfo",responseType:"token id_token",scope:"openid profile"}),this.login=this.login.bind(this)}return Object(o.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){this.auth0.parseHash((function(e,t){if(t&&t.accessToken&&t.idToken){var a=JSON.stringify(1e5*t.expiresIn+(new Date).getTime());localStorage.setItem("access_token",t.accessToken),localStorage.setItem("id_token",t.idToken),localStorage.setItem("experies_at",a),location.hash="",location.pathname="/home"}else e&&(location.pathname="/",console.log(e))}))}},{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("experies_at"));return(new Date).getTime()<e}},{key:"logout",value:function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("experies_at"),location.pathname="/"}},{key:"getProfile",value:function(){return localStorage.getItem("id_token")?w()(localStorage.getItem("id_token")):{}}}]),e}(),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){(new A).handleAuthentication()}},{key:"render",value:function(){return l.a.createElement(m.Row,null,l.a.createElement("div",{className:"col s2"}),l.a.createElement("div",{className:"col s8"},l.a.createElement(m.Card,null,l.a.createElement("div",{class:"center-align tit"},l.a.createElement("br",null),l.a.createElement("p",null,"Loading..."),l.a.createElement(m.Col,{s:1,m:3}),l.a.createElement(m.Col,{s:10,m:6},l.a.createElement(m.ProgressBar,null)),l.a.createElement(m.Col,{s:1,m:3}),l.a.createElement("br",null)))),l.a.createElement("div",{className:"col s2"}))}}]),a}(n.Component),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e="";switch(this.props.location){case"":e=this.props.auth.isAuthenticated()?l.a.createElement(C,null):l.a.createElement(I,this.props);break;case"callback":e=l.a.createElement(D,null);break;case"home":e=this.props.auth.isAuthenticated()?l.a.createElement(C,this.props):l.a.createElement(I,null);break;default:e=l.a.createElement(R,null)}return l.a.createElement("div",null,l.a.createElement(d,this.props),e)}}]),a}(n.Component),_=new A,F={};window.setState=function(e){F=Object.assign({},F,e),r.a.render(l.a.createElement(T,F),document.getElementById("root"))};var V={name:_.getProfile().name||"Not User",location:location.pathname.replace(/^\/?|\/$/g,""),auth:_};window.setState(V)},68:function(e,t,a){e.exports=a.p+"static/media/logo.0e15b9c4.png"},73:function(e,t,a){e.exports=a(228)},78:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.2de64765.chunk.js.map
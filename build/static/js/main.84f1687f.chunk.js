(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},22:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(22),a(1)),s=a(2),l=a(4),m=a(3),u=a(5),p=a(6),d=a(8),h=a(15),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).defaultStyle={transition:"all ".concat(a.props.duration,"ms ease-in-out"),transitionDelay:a.props.delay||"0",opacity:0,position:"relative"},a.transitionStyles={entering:Object(d.a)({opacity:0},a.props.direction,a.props.length||"50px"),entered:Object(d.a)({opacity:1},a.props.direction,"0")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h.Transition,{in:this.props.in||!0,timeout:this.props.duration,appear:!0},function(t){return r.a.createElement("div",{style:Object(p.a)({},e.defaultStyle,e.transitionStyles[t])},e.props.children)})}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.onCharacterClick(a.props.index)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,{delay:"1.5s",duration:500},r.a.createElement("div",{className:"character"},r.a.createElement("img",{src:this.props.character.img,alt:"character",className:"profile-pic",onClick:this.handleClick})))}}]),t}(n.Component),f=function(e){return r.a.createElement("div",{className:"character-box"},e.characters.map(function(t,a){return r.a.createElement(y,{character:t,index:a,onCharacterClick:e.onCharacterClick,key:t.name})}))},j=function(e){return r.a.createElement("div",{className:"score-keeper"},"Score: ",e.score)},k=function(e){return e.map(function(e){return[Math.random(),e]}).sort(function(e,t){return e[0]-t[0]}).map(function(e){return e[1]})},b=[{name:"Piper",images:"./my-app/images/piper.jpg",clicked:!1},{name:"Alex",img:"images/alex.jpg",clicked:!1},{name:"Lorna",img:"images/lorna.jpg",clicked:!1},{name:"Red",img:"images/red.jpg",clicked:!1},{name:"Crazy Eyes",img:"images/crazyEyes.jpg",clicked:!1},{name:"Tiffany",img:"images/tiffany.jpg",clicked:!1},{name:"Taystee",img:"images/taystee.jpg",clicked:!1},{name:"Vee",img:"images/vee.jpg",clicked:!1},{name:"Sophia",img:"images/sophia.jpg",clicked:!1},{name:"Poussey",img:"images/poussey.jpg",clicked:!1},{name:"Dayanara",img:"images/dayanara.jpg",clicked:!1},{name:"Nicky",img:"images/nicky.jpg",clicked:!1}],E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onCharacterClick=function(e){a.state.characters[e].clicked?a.setState({characters:k(a.state.characters.map(function(e){return Object(p.a)({},e,{clicked:!1})})),user:Object(p.a)({},a.state.user,{score:0})}):a.setState({characters:k(a.state.characters.map(function(t,a){return a===e?Object(p.a)({},t,{clicked:!0}):t})),user:Object(p.a)({},a.state.user,{score:a.state.user.score+1})})},a.state={user:{score:0},characters:k(b)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Board"},r.a.createElement(g,{in:!0,duration:450,length:"30px",direction:"bottom",delay:"1s"},r.a.createElement("h4",null,"Test your memory by trying to click each image only once!!")),r.a.createElement(g,{in:!0,duration:500,direction:"bottom",delay:"1.5s"},r.a.createElement(j,{score:this.state.user.score})),r.a.createElement(f,{characters:this.state.characters,onCharacterClick:this.onCharacterClick}))}}]),t}(n.Component),O=function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement(g,{delay:"1s",direction:"top",length:"20px",duration:500}))},v=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(g,{in:!0,duration:600,length:"30px",direction:"bottom"},r.a.createElement("h2",null,"React-Clicky-Game")),r.a.createElement(g,{in:!0,duration:600,length:"50px",direction:"bottom"},r.a.createElement("h1",null,"OITNB - Clicky Game")))},C=(a(32),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(O,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.84f1687f.chunk.js.map
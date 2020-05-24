(this["webpackJsonpmui-pokedex"]=this["webpackJsonpmui-pokedex"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),i=t(24),l=t(157),m=t(158),s=t(159),u=t(167),p=t(160),d=t(147),h=t(11),g=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},E=t(69),f=t.n(E),k=t(36),b=t.n(k),x=t(150),v=t(33),y=t(152),O=t(155),j=t(154),C=t(153),w=t(156),N=Object(d.a)((function(e){return{cardRoot:{maxWidth:"300"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},cardAction:{justifyContent:"center",alignItems:"center"}}})),I=function(e){var a=e.id,t=e.name,n=e.history,c=e.sprite,o=N();return r.a.createElement(x.a,{className:o.cardRoot},r.a.createElement(y.a,null,r.a.createElement(C.a,{component:"img",alt:t,title:t,className:o.cardMedia,image:c,style:{width:"130px",height:"130px"}}),r.a.createElement(j.a,{className:o.cardContent},r.a.createElement(v.a,null,"".concat(a,". ").concat(g(t))))),r.a.createElement(O.a,{className:o.cardAction},r.a.createElement(w.a,{variant:"contained",size:"small",color:"primary",onClick:function(){return n.push("/".concat(a))}},"Show Details")))},S=Object(d.a)((function(e){return{pokedexContainer:{paddingTop:"8px",paddingLeft:"8px",paddingRight:"8px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},searchContainer:{display:"flex",backgroundColor:Object(h.b)(e.palette.common.white,.15),paddingLeft:"5px",paddingRight:"5px",marginTop:"5px",marginBottom:"5px"},searchIcon:{alignSelf:"flex-end",marginBottom:"5px"},searchInput:{width:"360px",margin:"5px"}}})),A=function(e){var a=S(),t=e.history,c=Object(n.useState)({}),o=Object(i.a)(c,2),d=o[0],h=o[1],g=Object(n.useState)(""),E=Object(i.a)(g,2),k=E[0],x=E[1];Object(n.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon?limit=1000").then((function(e){var a=e.data.results,t={};a.forEach((function(e,a){t[a+1]={id:a+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a+1,".png")}})),h(t)}))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{position:"static"},r.a.createElement(s.a,null,r.a.createElement(l.a,{container:!0,className:a.searchContainer,justify:"center"},r.a.createElement(f.a,{className:a.searchIcon}),r.a.createElement(u.a,{className:a.searchInput,onChange:function(e){x(e.target.value)},label:"Find Pokemon by name (\u6309\u59d3\u540d\u67e5\u627e\u5b9d\u53ef\u6f2b)",variant:"standard"})))),d?r.a.createElement(l.a,{container:!0,spacing:1,className:a.pokedexContainer},Object.keys(d).map((function(e){return d[e].name.includes(k)&&function(e){var a=d[e],n=a.id,c=a.name,o=a.sprite;return r.a.createElement(l.a,{item:!0,xs:6,sm:4,md:3,lg:2,key:e},r.a.createElement(I,{id:n,name:c,sprite:o,history:t}))}(e)}))):r.a.createElement(p.a,null))},M=t(32),B=t(165),P=t(164),R=t(168),T=t(163),W=t(44),H=t(161),L=t(71),F=t.n(L),J=t(70),z=t.n(J),D=t(3),G=t(162),U=Object(d.a)((function(e){return{root:{},cardMedia:{height:0,paddingTop:"5px"},cardContent:{textAlign:"center"},cardAction:{backgroundColor:W.a[500]},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:H.a[500]},cardHeader:{backgroundColor:W.a[500]}}})),$=function(e){var a,t=e.pokemon,n=e.history,c=t.name,o=t.id,l=t.species,m=t.height,s=t.weight,u=t.types,p=(t.sprite,"https://pokeres.bastionbot.org/images/pokemon/".concat(o,".png")),d=U(),h=r.a.useState(!1),E=Object(i.a)(h,2),f=E[0],k=E[1];return r.a.createElement(x.a,{className:d.root},r.a.createElement(G.a,{className:d.cardHeader,avatar:r.a.createElement(R.a,{"aria-label":c,className:d.avatar},r.a.createElement("img",{src:p,style:{width:"30px",height:"30px"}})),title:g(c),subheader:"Click the back arrow or the image to go back",action:r.a.createElement(T.a,{"aria-label":"Go Back",onClick:function(){return n.push("/mui-pokedex")}},r.a.createElement(z.a,null))}),r.a.createElement(y.a,null,r.a.createElement(C.a,(a={className:d.cardMedia,onClick:function(){return n.push("/mui-pokedex")},component:"img",alt:c,title:c},Object(M.a)(a,"className",d.cardMedia),Object(M.a)(a,"src",p),Object(M.a)(a,"style",{width:"300px",height:"300px"}),a)),r.a.createElement(j.a,{className:d.cardContent})),r.a.createElement(O.a,{disableSpacing:!0,className:d.cardAction},r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},"Click the down arrow for more information"),r.a.createElement(T.a,{className:Object(D.a)(d.expand,Object(M.a)({},d.expandOpen,f)),onClick:function(){k(!f)},"aria-expanded":f,"aria-label":"show more"},r.a.createElement(F.a,null))),r.a.createElement(P.a,{in:f,timeout:"auto",unmountOnExit:!0},r.a.createElement(j.a,null,r.a.createElement(v.a,{variant:"h5"},"Pokemon Info:"),r.a.createElement(v.a,null,"Species: ",r.a.createElement(B.a,{href:l.url},l.name," ")),r.a.createElement(v.a,null,"Height: ",m," "),r.a.createElement(v.a,null,"Weight: ",s," "),r.a.createElement(v.a,{variant:"h6"}," Types:"),u.map((function(e){var a=e.type.name;return r.a.createElement(v.a,{key:a}," ","".concat(a))})))))},_=function(e){var a=e.match,t=e.history,c=a.params.pokemonId,o=Object(n.useState)(void 0),l=Object(i.a)(o,2),m=l[0],s=l[1];Object(n.useEffect)((function(){b.a.get("https://pokeapi.co/api/v2/pokemon/".concat(c,"/")).then((function(e){var a=e.data;s(a)})).catch((function(e){s(!1)}))}),[c]);return r.a.createElement(x.a,null,void 0===m&&r.a.createElement(p.a,null),void 0!==m&&m&&function(e){e.name;var a=e.id,n=(e.species,e.height,e.weight,e.types,e.sprites);"https://pokeres.bastionbot.org/images/pokemon/".concat(a,".png"),n.front_default;return r.a.createElement($,{pokemon:e,history:t})}(m),!1===m&&r.a.createElement(v.a,null," Pokemon not found"))},q=t(166);var K=function(){return r.a.createElement(q.c,null,r.a.createElement(q.a,{exact:!0,path:"/mui-pokedex",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(q.a,{exact:!0,path:"/:pokemonId",render:function(e){return r.a.createElement(_,e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(17),V=Object(Q.a)();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.b,{history:V},r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t(111)}},[[83,1,2]]]);
//# sourceMappingURL=main.24ff1076.chunk.js.map
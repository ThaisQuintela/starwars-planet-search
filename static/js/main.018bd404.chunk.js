(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),c=a.n(l),u=(a(14),Object(r.createContext)());var o=function(){var e=Object(r.useContext)(u),t=e.isLoading,a=e.filters,l=e.filterByNumericValue,c=e.filmData,o=e.charData,i=l.filter((function(e){return e.name.toLowerCase().includes(a.filterByName.name.toLowerCase())}));return t?"loading...":n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Rotation Period"),n.a.createElement("th",null,"Orbital Period"),n.a.createElement("th",null,"Diameter"),n.a.createElement("th",null,"Climate"),n.a.createElement("th",null,"Gravity"),n.a.createElement("th",null,"Terrain"),n.a.createElement("th",null,"Surface Water"),n.a.createElement("th",null,"Population"),n.a.createElement("th",null,"Films"),n.a.createElement("th",null,"Residents"))),n.a.createElement("tbody",null,i.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",{"data-testid":"planet-name"},e.name),n.a.createElement("td",null,e.rotation_period),n.a.createElement("td",null,e.orbital_period),n.a.createElement("td",null,e.diameter),n.a.createElement("td",null,e.climate),n.a.createElement("td",null,e.gravity),n.a.createElement("td",null,e.terrain),n.a.createElement("td",null,e.surface_water),n.a.createElement("td",null,e.population),n.a.createElement("td",null,e.films.map((function(e){return" - ".concat(c[e[e.length-2]-1].title)}))),n.a.createElement("td",null,e.residents.map((function(e){return" - ".concat(o[e.replace("https://swapi-trybe.herokuapp.com/api/people/","").replace("/","")-1].name)}))))}))))},i=a(4);var p=function(){var e=Object(r.useContext)(u),t=e.planetData,a=e.filters,l=e.setFilters,c=e.setFilterByNumericValue,o=a.filterByNumericValues.map((function(e){return e.column})),p=["population","orbital_period","diameter","rotation_period","surface_water"].filter((function(e){return!o.includes(e)})),s=t;return a.filterByNumericValues.length>0&&a.filterByNumericValues.map((function(e){return"maior que"===e.comparison&&(s=s.filter((function(t){return parseInt(t[e.column],10)>parseInt(e.value,10)}))),"menor que"===e.comparison&&(s=s.filter((function(t){return parseInt(t[e.column],10)<parseInt(e.value,10)}))),"igual a"===e.comparison&&(s=s.filter((function(t){return parseInt(t[e.column],10)===parseInt(e.value,10)}))),s})),Object(r.useEffect)((function(){c(s)}),[s,a.filterByNumericValues,c]),n.a.createElement("header",null,n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"name-filter"},"Planet name:",n.a.createElement("input",{name:"name-filter",id:"name-filter","data-testid":"name-filter",onChange:function(e){var t=e.target.value;return l(Object(i.a)(Object(i.a)({},a),{},{filterByName:{name:t}}))}})),n.a.createElement("label",{htmlFor:"column"},"Column:",n.a.createElement("select",{name:"column",id:"column","data-testid":"column-filter"},p.map((function(e){return n.a.createElement("option",{key:e},e)})))),n.a.createElement("label",{htmlFor:"comparison"},"Comparison:",n.a.createElement("select",{name:"comparison",id:"comparison","data-testid":"comparison-filter"},["maior que","menor que","igual a"].map((function(e){return n.a.createElement("option",{key:e},e)})))),n.a.createElement("label",{htmlFor:"value"},"Value:",n.a.createElement("input",{type:"number",name:"value",id:"value","data-testid":"value-filter"})),n.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:function(){return function(){var e=a.filterByNumericValues,t=document.getElementById("column").value,r=document.getElementById("comparison").value,n=document.getElementById("value").value,c=e.concat({column:t,comparison:r,value:n});l(Object(i.a)(Object(i.a)({},a),{},{filterByNumericValues:c}))}()},disabled:0===p.length},"Filter"),n.a.createElement("label",{htmlFor:"column-sort"},"Oyder by:",n.a.createElement("select",{name:"column-sort",id:"column-sort","data-testid":"column-sort"},n.a.createElement("option",null,"Name"),n.a.createElement("option",null,"Rotation Period"),n.a.createElement("option",null,"Orbital Period"),n.a.createElement("option",null,"Diameter"),n.a.createElement("option",null,"Surface Water"),n.a.createElement("option",null,"Population")),n.a.createElement("label",{htmlFor:"ASC"},"ASC",n.a.createElement("input",{type:"radio",id:"ASC",name:"column-sort",value:"ASC","data-testid":"column-sort-input-asc"})),n.a.createElement("label",{htmlFor:"DESC"},"DESC",n.a.createElement("input",{type:"radio",id:"DESC",name:"column-sort",value:"DESC","data-testid":"column-sort-input-desc"})),n.a.createElement("button",{type:"button","data-testid":"column-sort-button"},"Sort"))),a.filterByNumericValues.map((function(e,t){return n.a.createElement("div",{"data-testid":"filter",id:t,key:t},n.a.createElement("span",null,"".concat(e.column," ").concat(e.comparison," ").concat(e.value)),n.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=a.filterByNumericValues.filter((function(t){return t.column!==e.column}));l(Object(i.a)(Object(i.a)({},a),{},{filterByNumericValues:t}))}(e)}},"X"))})))},s=a(1),m=a.n(s),f=a(2),d=a(3),h=["https://swapi-trybe.herokuapp.com/api/planets/?page=1","https://swapi-trybe.herokuapp.com/api/planets/?page=2","https://swapi-trybe.herokuapp.com/api/planets/?page=3","https://swapi-trybe.herokuapp.com/api/planets/?page=4","https://swapi-trybe.herokuapp.com/api/planets/?page=5","https://swapi-trybe.herokuapp.com/api/planets/?page=6"];function b(){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.map(function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return t=e.sent,a=t.flat(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi-trybe.herokuapp.com/api/films/");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,r=a.results,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=["https://swapi-trybe.herokuapp.com/api/people/?page=1","https://swapi-trybe.herokuapp.com/api/people/?page=2","https://swapi-trybe.herokuapp.com/api/people/?page=3","https://swapi-trybe.herokuapp.com/api/people/?page=4","https://swapi-trybe.herokuapp.com/api/people/?page=5","https://swapi-trybe.herokuapp.com/api/people/?page=6","https://swapi-trybe.herokuapp.com/api/people/?page=7","https://swapi-trybe.herokuapp.com/api/people/?page=8","https://swapi-trybe.herokuapp.com/api/people/?page=9"];function g(){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.map(function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,(a=t.flat()).splice(17,0,""),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var O=function(e){var t=e.children,a=Object(r.useState)(!1),l=Object(d.a)(a,2),c=l[0],o=l[1],i=Object(r.useState)([]),p=Object(d.a)(i,2),s=p[0],h=p[1],b=Object(r.useState)([]),E=Object(d.a)(b,2),w=E[0],g=E[1],j=Object(r.useState)([]),O=Object(d.a)(j,2),x=O[0],N=O[1],B=Object(r.useState)({filterByName:{name:""},filterByNumericValues:[],order:{column:"Name",sort:"ASC"}}),C=Object(d.a)(B,2),S=C[0],V=C[1],F=Object(r.useState)([]),D=Object(d.a)(F,2),_=D[0],I=D[1];function P(){return(P=Object(f.a)(m.a.mark((function e(){var t,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,y();case 3:return t=e.sent,h(t),e.next=7,v();case 7:return a=e.sent,g(a),e.next=11,k();case 11:r=e.sent,N(r),I(t),o(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]);var A={isLoading:c,planetData:s,filmData:w,charData:x,filters:S,setFilters:V,filterByNumericValue:_,setFilterByNumericValue:I};return n.a.createElement(u.Provider,{value:A},t)},x=a(7),N=a.n(x),B=a(8),C=a.n(B);var S=function(){return n.a.createElement(O,null,n.a.createElement("main",{className:""},n.a.createElement("img",{src:N.a,alt:"Jedi",className:"starwars"}),n.a.createElement("img",{src:C.a,alt:"Logo Star Wars",className:"logo"}),n.a.createElement(p,null),n.a.createElement(o,null)))};c.a.render(n.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/Star_Wars_silhouette_Olly_Moss_artwork.3b06afbb.jpg"},8:function(e,t,a){e.exports=a.p+"static/media/star-wars-logo.2db77352.svg"},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.018bd404.chunk.js.map
(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),c=a.n(l),o=(a(14),Object(r.createContext)());var u=function(){var e=Object(r.useContext)(o),t=e.isLoading,a=e.filters,l=e.filterByNumericValue,c=e.filmData,u=e.charData,s=l.filter((function(e){return e.name.toLowerCase().includes(a.filterByName.name.toLowerCase())}));return t?"loading...":n.a.createElement("table",{className:"table table-responsive table-sm align-middle table-hover text-center"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Rotation Period"),n.a.createElement("th",null,"Orbital Period"),n.a.createElement("th",null,"Diameter"),n.a.createElement("th",null,"Climate"),n.a.createElement("th",null,"Gravity"),n.a.createElement("th",null,"Terrain"),n.a.createElement("th",null,"Surface Water"),n.a.createElement("th",null,"Population"),n.a.createElement("th",null,"Films"),n.a.createElement("th",null,"Residents"))),n.a.createElement("tbody",null,s.map((function(e,t){return n.a.createElement("tr",{key:t,className:"border-bottom border-secondary"},n.a.createElement("td",{"data-testid":"planet-name",className:"fw-bold"},e.name),n.a.createElement("td",null,e.rotation_period),n.a.createElement("td",null,e.orbital_period),n.a.createElement("td",null,e.diameter),n.a.createElement("td",null,e.climate),n.a.createElement("td",null,e.gravity),n.a.createElement("td",null,e.terrain),n.a.createElement("td",null,e.surface_water),n.a.createElement("td",null,e.population),n.a.createElement("td",null,e.films.map((function(e){return" - ".concat(c[e[e.length-2]-1].title)}))),n.a.createElement("td",null,e.residents.map((function(e){return" - ".concat(u[e.replace("https://swapi-trybe.herokuapp.com/api/people/","").replace("/","")-1].name)}))))}))))},s=a(4);var i=function(){var e=Object(r.useContext)(o),t=e.planetData,a=e.filters,l=e.setFilters,c=e.setFilterByNumericValue,u=a.filterByNumericValues.map((function(e){return e.column})),i=["population","orbital_period","diameter","rotation_period","surface_water"].filter((function(e){return!u.includes(e)})),m=t;return a.filterByNumericValues.length>0&&a.filterByNumericValues.map((function(e){return"bigger than"===e.comparison&&(m=m.filter((function(t){return parseInt(t[e.column],10)>parseInt(e.value,10)}))),"less than"===e.comparison&&(m=m.filter((function(t){return parseInt(t[e.column],10)<parseInt(e.value,10)}))),"equal to"===e.comparison&&(m=m.filter((function(t){return parseInt(t[e.column],10)===parseInt(e.value,10)}))),m})),Object(r.useEffect)((function(){c(m)}),[]),n.a.createElement("header",{className:"filters container-fluid py-3 d-flex justify-content-center"},n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"name-filter",className:"form-label mx-2"},"Planet name:",n.a.createElement("input",{className:"form-control form-control-sm",name:"name-filter",id:"name-filter","data-testid":"name-filter",onChange:function(e){var t=e.target.value;return l(Object(s.a)(Object(s.a)({},a),{},{filterByName:{name:t}}))}})),n.a.createElement("label",{htmlFor:"column",className:"form-label mx-2"},"Column:",n.a.createElement("select",{className:"form-select form-select-sm",name:"column",id:"column","data-testid":"column-filter"},i.map((function(e){return n.a.createElement("option",{key:e},e)})))),n.a.createElement("label",{htmlFor:"comparison",className:"form-label mx-2"},"Comparison:",n.a.createElement("select",{className:"form-select form-select-sm",name:"comparison",id:"comparison","data-testid":"comparison-filter"},["bigger than","less than","equal to"].map((function(e){return n.a.createElement("option",{key:e},e)})))),n.a.createElement("label",{htmlFor:"value",className:"form-label mx-2"},"Value:",n.a.createElement("input",{className:"form-control form-control-sm",type:"number",name:"value",id:"value","data-testid":"value-filter"})),n.a.createElement("button",{className:"btn btn-sm btn-light mx-2 mb-3",type:"button","data-testid":"button-filter",onClick:function(){return function(){var e=a.filterByNumericValues,t=document.getElementById("column").value,r=document.getElementById("comparison").value,n=document.getElementById("value").value,c=e.concat({column:t,comparison:r,value:n});l(Object(s.a)(Object(s.a)({},a),{},{filterByNumericValues:c}))}()},disabled:0===i.length},"Filter"),n.a.createElement("label",{htmlFor:"column-sort",className:"form-label mt-3 mx-2 d-flex align-items-center text-nowrap"},"Order by:",n.a.createElement("select",{className:"form-select form-select-sm mx-2 w-25",name:"column-sort",id:"column-sort","data-testid":"column-sort"},n.a.createElement("option",null,"Name"),n.a.createElement("option",null,"Rotation Period"),n.a.createElement("option",null,"Orbital Period"),n.a.createElement("option",null,"Diameter"),n.a.createElement("option",null,"Surface Water"),n.a.createElement("option",null,"Population")),n.a.createElement("label",{htmlFor:"ASC",className:"form-label d-flex my-0"},"ASC",n.a.createElement("input",{className:"form-check-input mx-2",type:"radio",id:"ASC",name:"column-sort",value:"ASC","data-testid":"column-sort-input-asc"})),n.a.createElement("label",{htmlFor:"DESC",className:"form-label d-flex my-0"},"DESC",n.a.createElement("input",{className:"form-check-input mx-2",type:"radio",id:"DESC",name:"column-sort",value:"DESC","data-testid":"column-sort-input-desc"})),n.a.createElement("button",{className:"btn btn-sm btn-light",type:"button","data-testid":"column-sort-button"},"Sort"))),a.filterByNumericValues.map((function(e,t){return n.a.createElement("div",{"data-testid":"filter",id:t,key:t},n.a.createElement("span",null,"".concat(e.column," ").concat(e.comparison," ").concat(e.value)),n.a.createElement("button",{type:"button",onClick:function(){return function(e){var t=a.filterByNumericValues.filter((function(t){return t.column!==e.column}));l(Object(s.a)(Object(s.a)({},a),{},{filterByNumericValues:t}))}(e)}},"X"))})))},m=a(1),p=a.n(m),f=a(2),b=a(3),d=["https://swapi-trybe.herokuapp.com/api/planets/?page=1","https://swapi-trybe.herokuapp.com/api/planets/?page=2","https://swapi-trybe.herokuapp.com/api/planets/?page=3","https://swapi-trybe.herokuapp.com/api/planets/?page=4","https://swapi-trybe.herokuapp.com/api/planets/?page=5","https://swapi-trybe.herokuapp.com/api/planets/?page=6"];function h(){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.map(function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,a=t.flat(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi-trybe.herokuapp.com/api/films/");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,r=a.results,e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=["https://swapi-trybe.herokuapp.com/api/people/?page=1","https://swapi-trybe.herokuapp.com/api/people/?page=2","https://swapi-trybe.herokuapp.com/api/people/?page=3","https://swapi-trybe.herokuapp.com/api/people/?page=4","https://swapi-trybe.herokuapp.com/api/people/?page=5","https://swapi-trybe.herokuapp.com/api/people/?page=6","https://swapi-trybe.herokuapp.com/api/people/?page=7","https://swapi-trybe.herokuapp.com/api/people/?page=8","https://swapi-trybe.herokuapp.com/api/people/?page=9"];function x(){return g.apply(this,arguments)}function g(){return(g=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.map(function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",Promise.all(t));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,(a=t.flat()).splice(17,0,""),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();var j=function(e){var t=e.children,a=Object(r.useState)(!1),l=Object(b.a)(a,2),c=l[0],u=l[1],s=Object(r.useState)([]),i=Object(b.a)(s,2),m=i[0],d=i[1],h=Object(r.useState)([]),E=Object(b.a)(h,2),w=E[0],x=E[1],g=Object(r.useState)([]),j=Object(b.a)(g,2),k=j[0],O=j[1],B=Object(r.useState)({filterByName:{name:""},filterByNumericValues:[],order:{column:"Name",sort:"ASC"}}),C=Object(b.a)(B,2),S=C[0],V=C[1],F=Object(r.useState)([]),D=Object(b.a)(F,2),_=D[0],I=D[1];function P(){return(P=Object(f.a)(p.a.mark((function e(){var t,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,y();case 3:return t=e.sent,d(t),e.next=7,v();case 7:return a=e.sent,x(a),e.next=11,N();case 11:r=e.sent,O(r),I(t),u(!1);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){P.apply(this,arguments)}()}),[]);var A={isLoading:c,planetData:m,filmData:w,charData:k,filters:S,setFilters:V,filterByNumericValue:_,setFilterByNumericValue:I};return n.a.createElement(o.Provider,{value:A},t)},k=a(7),O=a.n(k),B=a(8),C=a.n(B);var S=function(){return n.a.createElement(j,null,n.a.createElement("main",null,n.a.createElement("img",{src:O.a,alt:"Jedi",className:"starwars"}),n.a.createElement("img",{src:C.a,alt:"Logo Star Wars",className:"logo"}),n.a.createElement(i,null),n.a.createElement(u,null)))};c.a.render(n.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/Star_Wars_silhouette_Olly_Moss_artwork.3b06afbb.jpg"},8:function(e,t,a){e.exports=a.p+"static/media/star-wars-logo.2db77352.svg"},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.23b05d49.chunk.js.map
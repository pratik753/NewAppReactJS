(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(3),r=n.n(i),s=(n(17),n(18),n(7)),o=n.n(s),l=n(8),j=n(11),d=(n(4),n(1)),u=function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cont",children:[Object(d.jsx)("img",{alt:"",src:e.image}),Object(d.jsx)("h3",{children:e.title}),Object(d.jsxs)("p",{children:["\ud83d\udd38",e.content]}),Object(d.jsxs)("h5",{children:["\ud83d\udfe1",e.author]})]})})},h=function(e){return Object(d.jsx)("div",{className:"maincon",children:e.children})},b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=in&apiKey=f398cee6cf1f4a8bad34a051bafdaffa",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=f398cee6cf1f4a8bad34a051bafdaffa");case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,t.ok){for(i in console.log(n),console.log(n.articles[0].title),c=[],n.articles)c.push({id:i,image:n.articles[i].urlToImage,title:n.articles[i].title,content:n.articles[i].content,author:n.articles[i].author});a(c),console.log(c)}case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=n.map((function(e){return Object(d.jsx)(u,{id:e.id,image:e.image,title:e.title,content:e.content,author:e.author},e.id)}));return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h,{children:i})})},f=n(27),p=n.p+"static/media/logo.eda1c187.jpg",g=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(f.a,{bg:"dark",variant:"dark",children:Object(d.jsxs)(f.a.Brand,{href:"#home",children:[Object(d.jsx)("img",{alt:"",src:p,width:"90",height:"50",className:"d-inline-block align-top"})," ",Object(d.jsx)("span",{className:"head",children:"News"})]})})})};var O=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:Object(d.jsx)("strong",{children:"India News"})}),Object(d.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),x()},4:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.ac28a8e0.chunk.js.map
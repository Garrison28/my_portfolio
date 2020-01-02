(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),m=a.n(r),o=(a(30),a(31),a(17)),c=a(21),i=a.n(c),s=a(23),u=a.n(s),h=a(53),g=Object(h.a)({carousel:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},carouselImage:{height:"50vh",width:"50vw",borderStyle:"solid",borderColor:"#2E88D1"},name:{color:"black"},prevItem:{color:"black"},nextItem:{color:"black"},carouselContent:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),E=function(e){var t=g(),a=Object(n.useState)(0),r=Object(o.a)(a,2),m=r[0],c=r[1],s=Object(n.useState)({}),h=Object(o.a)(s,2),E=h[0],b=h[1];Object(n.useEffect)((function(){b(e.items[m])}));return l.a.createElement("div",{className:t.carousel},l.a.createElement(i.a,{className:t.prevItem,onClick:function(){c(m>0?m-1:e.items.length-1),b(e.items[m])}}),l.a.createElement("div",{className:t.carouselContent},l.a.createElement("h4",{className:t.name},E.name),l.a.createElement("img",{className:t.carouselImage,src:E.image})),l.a.createElement(u.a,{className:t.nextItem,onClick:function(){m>=e.items.length-1?c(0):c(m+1),b(e.items[m])}}))},b=a(54),d=Object(h.a)({home:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},prompt:{color:"black"},button:{width:"50vw",height:"10vh",backgroundColor:"#2E88D1"}});var p=function(e){var t=d();return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container bkgrd-img"},l.a.createElement("header",null,l.a.createElement("div",{className:"nav-bar card"},l.a.createElement("nav",null,l.a.createElement("a",{href:"#about-me"},"About")," | ",l.a.createElement("a",{href:"#my-projects"},"Projects")," | ",l.a.createElement("a",{href:"#contact-me"},"Contact")," | "))),l.a.createElement("body",null,l.a.createElement("div",{className:"contents"},l.a.createElement("div",{id:"about-me",className:"about"},l.a.createElement("h1",null,"About"),l.a.createElement("div",{className:"card-one"},l.a.createElement("p",null,"My name is Garrison, A jazz musician turned full stack web developer. I enjoy finding creative solutions that require out of the box thinking for out of the box problems. Being a jazz musician allows you to think in a more lateral way, especially during improvisation; this is a transferable skill that would allow to look at certain problems in development."))),l.a.createElement("div",{id:"my-projects",className:"project"},l.a.createElement("h1",{className:""},"Projects"),l.a.createElement("div",{className:""},l.a.createElement("h3",{className:"card"},"Project 1"),l.a.createElement("div",{className:t.home},l.a.createElement(E,{items:[{name:"Gold",image:"/img/Gold.png"},{name:"Level Cleared",image:"/img/GoldLevelClear.png"}]}),l.a.createElement("br",null),l.a.createElement("p",null,"Get all the gold pieces before the enemies Get to you."),l.a.createElement("a",{href:"https://garrison28.github.io/Gold/",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Play the Game!")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Garrison28/Gold",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Github Repo")))),l.a.createElement("div",{className:""},l.a.createElement("h3",{className:"card"},"Project 2"),l.a.createElement("div",{className:t.home},l.a.createElement(E,{items:[{name:"ArtistGO!",image:"/img/ArtistGoHome.png"},{name:"Home Page",image:"/img/ArtistGoMainPage.png"},{name:"Search Page",image:"/img/ArtistGoSearch.png"},{name:"Favorite Artist Page",image:"/img/ArtistGoMyArtist.png"}]}),l.a.createElement("br",null),l.a.createElement("p",null),l.a.createElement("a",{href:"https://morning-cliffs-87357.herokuapp.com/",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Go to ArtistGO!")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Garrison28/my-Travel-Fest",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Github Repo")))),l.a.createElement("div",{className:""},l.a.createElement("h3",null,"Project 3"),l.a.createElement("div",{className:t.home},l.a.createElement(E,{items:[{name:"Stuter",image:"/img/StuterLoginPage.png"},{name:"Stuter Dashboard",image:"/img/StuterDashboard.png"},{name:"Stuter Subjects",image:"/img/StuterSubjects.png"},{name:"Stuter Tutors",image:"/img/StuterTutor.png"}]}),l.a.createElement("br",null),l.a.createElement("a",{href:"https://polar-sands-42976.herokuapp.com/",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Go Stuter!")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Garrison28/stuter",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Github Repo")))),l.a.createElement("div",{className:""},l.a.createElement("h3",null,"Project 4"),l.a.createElement("div",{className:t.home},l.a.createElement(E,{items:[{name:"The Photo",image:"/img/ThePhotoHome.png"},{name:"The Photo Categories",image:"/img/ThePhotoCategories.png"},{name:"The Photo Photos",image:"/img/ThePhotoPhotos.png"}]}),l.a.createElement("br",null),l.a.createElement("a",{href:"https://secret-ridge-94962.herokuapp.com",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Go The Photo!")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/Garrison28/The-Photo",target:"_blank"},l.a.createElement(b.a,{className:t.button},"Github Repo"))))),l.a.createElement("div",{id:"contact-me",className:"card"},l.a.createElement("h2",null,"Contact"),l.a.createElement("span",null,"Email: ghighsmith28@gmail.com")," | ",l.a.createElement("span",null,"Linkdin: ",l.a.createElement("a",{href:"https://www.linkedin.com/in/garrison-highsmith",target:"_blank"}," My Linkdin"))," | ",l.a.createElement("span",null,"Github: ",l.a.createElement("a",{href:"https://github.com/Garrison28",target:"_blank"}," My Github",l.a.createElement("i",null))),l.a.createElement("div",null),l.a.createElement("div",null)))),l.a.createElement("footer",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.acd6646c.chunk.js.map
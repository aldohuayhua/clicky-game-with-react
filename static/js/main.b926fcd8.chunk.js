(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea","clickedOn":false},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor","clickedOn":false},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head","clickedOn":false},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory","clickedOn":false},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas","clickedOn":false},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington","clickedOn":false},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow","clickedOn":false},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City","clickedOn":false},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California","clickedOn":false},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California","clickedOn":false},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth","clickedOn":false},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump","clickedOn":false}]')},,,function(e,a,n){e.exports=n(22)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),o=n(4),c=n.n(o),r=(n(16),n(2)),s=n(5),l=n(6),u=n(10),m=n(7),d=n(1),p=n(9),g=(n(17),n(8));n(18);var f=function(e){return i.a.createElement("img",{className:"click-item","aria-label":"click item",alt:e.name,src:e.image,onClick:function(){e.handleClick(e.id)}})};n(19);var h=function(e){return i.a.createElement("main",{className:"wrapper"},e.children)};n(20);var k=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",null,i.a.createElement("li",{className:"brand"},i.a.createElement("a",{href:"/"},"Clicky Game")),"score=",e.score," topScore=",e.topScore,i.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};n(21);var v=function(){return i.a.createElement("header",{className:"header"},i.a.createElement("h1",null,"Jumbotron header will be here"))},b=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this))).shuffleData=function(e){for(var a=e.length-1;a>0;){var n=Math.floor(Math.random()*(a+1)),t=e[a];e[a]=e[n],e[n]=t,a--}return e},e.handleClick=function(a){var n=!1,t=e.state.friends.map((function(e){var t=Object(r.a)({},e);return t.id===a&&(console.log(t),!1===t.clickedOn&&(t.clickedOn=!0,n=!0)),t}));n?e.handleCorrectGuess(t):e.handleIncorrectGuess(t)},e.handleIncorrectGuess=function(a){e.setState({friends:e.resetGame(a),score:0})},e.handleCorrectGuess=function(a){var n=e.state,t=n.topScore,i=n.score+1,o=Math.max(i,t);console.log("nice, "),e.setState({friends:e.shuffleData(a),score:i,topScore:o})},e.resetGame=function(a){var n=a.map((function(e){return Object(r.a)({},e,{clickedOn:!1})}));return e.shuffleData(n)},e.state={friends:g,score:0,topScore:0},e.handleClick=e.handleClick.bind(Object(d.a)(e)),e.shuffleData=e.shuffleData.bind(Object(d.a)(e)),e}return Object(p.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({friends:this.shuffleData(this.state.friends)})}},{key:"render",value:function(){var e=this,a=this.state.friends.map((function(a){return i.a.createElement(f,{key:a.id,id:a.id,image:a.image,handleClick:e.handleClick})}));return i.a.createElement("div",null,i.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),i.a.createElement(v,null),i.a.createElement(h,null,a))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.b926fcd8.chunk.js.map
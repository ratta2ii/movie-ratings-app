/*! For license information please see main.b8cf067f.chunk.js.LICENSE.txt */
(this["webpackJsonpmovie-ratings-app"]=this["webpackJsonpmovie-ratings-app"]||[]).push([[0],{96:function(e,t,o){},97:function(e,t,o){"use strict";o.r(t),o.d(t,"store",(function(){return je}));var n=o(3),r=o(0),i=o.n(r),c=o(19),a=o.n(c),s=o(22),l=o(9),d=o(37),m=o(26),j=o(122),u=o(121),b="REQUEST_MOVIES",f="GET_MOVIES_SUCCESS",p="GET_MOVIES_FAILURE",h="REQUEST_MOVIE_INFO",g="GET_MOVIE_INFO_SUCCESS",x="GET_MOVIE_INFO_FAILURE",O=function(e){return function(t,o){fetch("https://www.omdbapi.com/?apikey=".concat("28eba253","&plot=short&s=").concat(e)).then((function(e){return e.json()})).then((function(e){var o;console.log(e.Search),t((o=e.Search,{type:f,movies:o}))}),(function(e){console.log(e),t(function(e){return{type:p,error:e}}(e))}))}},v=o(118),I=o(126),S=o(125),w=o(123),N=o(117),T=Object(N.a)((function(e){return{root:{width:"100%",position:"fixed",bottom:12,textAlign:"center"},text:{color:"#4c3f3d",fontSize:"1rem",fontFamily:"monospace"}}})),y=function(e){var t=T();return Object(n.jsx)(u.a,{className:t.root,children:Object(n.jsx)(v.a,{variant:"h6",className:t.text,children:"Movie App by Trevor Mackin"})})},E=Object(N.a)((function(e){return{root:{width:"100vw"},title:{color:"#f5bc16",fontFamily:"'Acme', fantasy, sans-serif",paddingTop:150,marginBottom:30,fontSize:70,textAlign:"center",wordSpacing:".6rem"},formBox:{textAlign:"center"},FormControl:{width:500,backgroundColor:"white"},inputField:{fontSize:20,paddingLeft:10,backgroundColor:"white","&hover":{backgroundColor:"white"}},findMovieButton:{color:"#ffffff",padding:18.5,marginLeft:5,backgroundColor:"#3f51b5",borderTopLeftRadius:0,borderBottomLeftRadius:0,"&:hover":{background:"#f00"}}}})),V=Object(m.b)((function(e){return{movies:e.moviesSlice.movies,moviesError:e.moviesSlice.error}}))((function(e){var t=e.dispatch,o=E(),i=Object(r.useState)(""),c=Object(d.a)(i,2),a=c[0],s=c[1];return Object(n.jsxs)(u.a,{className:o.root,children:[Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v.a,{className:o.title,children:"SEARCH MOVIES BY TITLE"}),Object(n.jsxs)(u.a,{className:o.formBox,children:[Object(n.jsxs)(I.a,{className:o.FormControl,variant:"filled",children:[Object(n.jsx)(S.a,{htmlFor:"filled-adornment-amount",children:"Enter Movie Title Here"}),Object(n.jsx)(w.a,{className:o.inputField,onChange:function(e){s(e.target.value)}})]}),Object(n.jsx)(j.a,{className:o.findMovieButton,onClick:function(){t(O(a)),e.history.push("/movies")},children:"FIND MOVIE"})]}),Object(n.jsx)(u.a,{})]}),Object(n.jsx)(y,{})]})})),C=o(119),k=o(120),B=Object(N.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"80vh"},paper:{padding:20,width:200,backgroundColor:"#223037",borderTop:"5px solid #2f3940",borderRight:"5px solid #2f3940",borderBottom:"5px solid #2f3940",borderLeft:"5px solid #2f3940",height:300,marginBottom:15,cursor:"pointer"},moviePosterImg:{width:200,height:300}}})),L=function(e){var t=e.handleMovieInfo,o=e.poster,r=e.imdbID,i=B();return Object(n.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,lg:3,justify:"center",children:Object(n.jsx)(k.a,{className:i.paper,onClick:function(){return t(r)},children:Object(n.jsx)("img",{className:i.moviePosterImg,src:o,alt:"movie poster"})})})},D=Object(N.a)((function(e){return{root:{padding:"10% 13%"},returnHomeBox:{marginTop:60,marginBottom:200},returnHomeBtn:{color:"white",textDecoration:"none",fontSize:16,background:"#3f51b5",padding:"10px 75px 10px 50px",position:"absolute","&:hover":{background:"red"}}}})),F=function(e){return function(t,o){fetch("https://www.omdbapi.com/?apikey=".concat("28eba253","&plot=short&i=").concat(e)).then((function(e){return e.json()})).then((function(e){t({type:g,movieInfo:e})}),(function(e){console.log(e),t(function(e){return{type:x,error:e}}(e))}))}},M=Object(m.b)((function(e){return{movies:e.moviesSlice.movies,moviesError:e.moviesSlice.error,isLoading:e.moviesSlice.isLoading}}))((function(e){var t=e.dispatch,o=e.movies,r=e.moviesError,c=e.isLoading,a=D(),l=function(o){t(F(o)),setTimeout((function(){e.history.push("/movie-info")}),200)};return o&&o.length>0?Object(n.jsxs)(u.a,{className:a.root,children:[Object(n.jsx)(C.a,{container:!0,spacing:8,children:o.map((function(e,t){return Object(n.jsx)(L,{handleMovieInfo:l,poster:e.Poster,imdbID:e.imdbID},t)}))}),Object(n.jsx)(u.a,{className:a.returnHomeBox,children:Object(n.jsx)(j.a,{className:a.returnHomeBtn,component:s.b,to:"/",children:"RETURN HOME"})})]}):r?Object(n.jsxs)(i.a.Fragment,{children:["Error: ",r.message]}):c?Object(n.jsx)(u.a,{children:"...still loading"}):Object(n.jsx)(u.a,{children:"Sorry, we cannot find any movies with that name."})})),z=o(24),A=o(64),R=o.n(A),H=o(65),_=o.n(H),U={apiKey:"".concat("AIzaSyDYM0qdH4W5vnXn86ZcATr65lu5PzNRW9A"),authDomain:"movie-project-16799.firebaseapp.com",databaseURL:"https://movie-project-16799.firebaseio.com",projectId:"movie-project-16799",storageBucket:"movie-project-16799.appspot.com",messagingSenderId:"818486198423",appId:"1:818486198423:web:bbcfdf7953ea52782ca9d2",measurementId:"G-Z10T2TEQM1"},G=o(84);o(94),G.apps.length||G.initializeApp(U);var P=G.firestore(),W=o(63),Q=o.n(W),J=Object(N.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"79.5vh"},paperCon:{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgb(27, 38, 43)",color:"white",width:750,fontFamily:"sans-serif"},posterImgGridItem:{display:"flex",justifyContent:"center",paddingTop:50},posterImgCon:{backgroundColor:"#223037",width:"60%",minHeight:100,maxHeight:365,padding:"15px 15px 10px"},posterImg:{width:"100%",maxHeight:340},infoBox:{padding:"50px 50px 50px 0"},movieTitle:{fontSize:"2rem",fontFamily:"sans-serif",marginTop:20,color:"#f5bc16",lineHeight:"2.5rem"},dirNdate:{color:"#89b9df",fontSize:".9rem",marginTop:5},moviePlot:{fontSize:"1rem",letterSpacing:".02rem",lineHeight:"1.3",marginTop:25},actionAreaGridCon:{marginTop:50,borderTop:"1px solid #29383f",height:65,display:"flex",alignItems:"center"},backContainer:{display:"flex",alignItems:"center",marginLeft:62,height:40,marginTop:3},arrowIcon:{color:"#637c90"},backButton:{fontSize:".8rem",marginLeft:-8,color:"#637c90"},votesBox:{display:"flex",justifyContent:"center",alignItems:"center",marginRight:50,height:40,color:"#637c90"},voteText:{fontSize:".8rem",marginBottom:10},downThumbIcon:{margin:"0 2px 0 10px",fontSize:"large",cursor:"pointer"},upThumbIcon:{margin:"0 10px 0 2px",fontSize:"large",cursor:"pointer"}}})),Y=P.collection("movies"),Z=function(e){Y.doc(e.imdbID).set(e)};var q=Object(m.b)((function(e){return{movieInfo:e.movieInfoSlice.movieInfo,movieInfoError:e.movieInfoSlice.error,isLoading:e.movieInfoSlice.isLoading}}))((function(e){var t=e.movieInfo,o=e.movieInfoError,c=e.isLoading,s=t.Poster,l=t.Title,m=t.Director,b=t.Released,f=t.Plot,p=Object(r.useState)({upVotes:0,downVotes:0}),h=Object(d.a)(p,2),g=h[0],x=h[1],O=Object(r.useState)(!1),I=Object(d.a)(O,2),S=I[0],w=I[1],N=Object(r.useState)(!1),T=Object(d.a)(N,2),E=T[0],V=T[1],B=J();Object(r.useEffect)((function(){t.imdbID&&P.collection("movies").where("imdbID","==",t.imdbID).get().then((function(e){var t;e.forEach((function(e){return"upVotes"in(t=e.data())&&x(t),!1}))})).catch((function(e){console.log(e.message)}))}),[t.imdbID]),Object(r.useEffect)((function(){return function(){return console.log("unmounting...")}}),[]);return t?Object(n.jsxs)(u.a,{className:B.root,children:[Object(n.jsx)(k.a,{className:B.paperCon,children:Object(n.jsxs)(C.a,{container:!0,children:[Object(n.jsx)(C.a,{item:!0,xs:12,md:6,className:B.posterImgGridItem,children:Object(n.jsx)(u.a,{className:B.posterImgCon,children:Object(n.jsx)("img",{src:s,alt:"movie poster",className:B.posterImg})})}),Object(n.jsx)(C.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(C.a,{container:!0,children:Object(n.jsxs)(u.a,{className:B.infoBox,children:[Object(n.jsxs)(C.a,{item:!0,xs:12,children:[Object(n.jsx)(v.a,{className:B.movieTitle,children:l}),Object(n.jsxs)(v.a,{className:B.dirNdate,children:["Release Date (",b,")"]}),Object(n.jsxs)(v.a,{className:B.dirNdate,children:["Director by ",m]})]}),Object(n.jsx)(C.a,{item:!0,xs:12,children:Object(n.jsx)(v.a,{className:B.moviePlot,children:f})})]})})}),Object(n.jsxs)(C.a,{container:!0,className:B.actionAreaGridCon,children:[Object(n.jsx)(C.a,{item:!0,md:6,children:Object(n.jsxs)(u.a,{className:B.backContainer,onClick:function(){e.history.push("/movies")},children:[Object(n.jsx)(Q.a,{className:B.arrowIcon}),Object(n.jsx)(j.a,{className:B.backButton,children:"Back to Movies"})]})}),Object(n.jsx)(C.a,{item:!0,md:6,children:Object(n.jsx)(u.a,{className:B.votesBox,children:Object(n.jsxs)(v.a,{variant:"h6",children:[Object(n.jsxs)(v.a,{className:B.voteText,variant:"title",children:["DOWN VOTES  [ ",g.downVotes," ]"]}),Object(n.jsx)(R.a,{className:B.downThumbIcon,onClick:function(){return function(){if(S)return!1;var e={upVotes:g.upVotes,downVotes:g.downVotes+1,imdbID:t.imdbID,title:l};E?(e.downVotes=g.downVotes-1,Z(e),V(!1),x(Object(z.a)(Object(z.a)({},g),{},{downVotes:g.downVotes-1}))):(e.downVotes=g.downVotes+1,Z(e),V(!0),x(Object(z.a)(Object(z.a)({},g),{},{downVotes:g.downVotes+1})))}()},style:{color:E?"#89b9df":"#637c90",cursor:E||!E&&!S?"pointer":"no-drop"}}),Object(n.jsx)(_.a,{className:B.upThumbIcon,onClick:function(){return function(){if(E)return!1;var e={upVotes:g.upVotes,downVotes:g.downVotes,imdbID:t.imdbID,title:l};S?(e.upVotes=g.upVotes-1,Z(e),w(!1),x(Object(z.a)(Object(z.a)({},g),{},{upVotes:g.upVotes-1}))):(e.upVotes=g.upVotes+1,Z(e),w(!0),x(Object(z.a)(Object(z.a)({},g),{},{upVotes:g.upVotes+1})))}()},style:{color:S?"#89b9df":"#637c90",cursor:S||!S&&!E?"pointer":"no-drop"}}),Object(n.jsxs)(v.a,{className:B.voteText,variant:"title",children:["[ ",g.upVotes," ] UP VOTES"]})]})})})]})]})}),Object(n.jsx)(y,{})]}):o?Object(n.jsxs)(i.a.Fragment,{children:["Error: ",o.message]}):c?Object(n.jsx)(u.a,{children:"...still loading"}):Object(n.jsxs)(u.a,{children:[Object(n.jsx)(v.a,{variant:"h4",children:"There seems to be a problem."}),Object(n.jsx)(a.a,{to:"/",children:"Return Home"})]})})),K=Object(N.a)((function(e){return{root:{width:"100vw",height:"20vh",backgroundColor:"#f4433699",position:"absolute",top:0,left:0,borderBottom:"5px solid red"},homeIcon:{color:"#ffffff",fontSize:100,position:"fixed",top:50,right:50}}})),X=function(e){var t=K();return Object(n.jsx)(u.a,{className:t.root})},$=o(66),ee=o.n($),te=Object(N.a)((function(e){return{homeIcon:{top:30,color:"#00000082",right:30,position:"absolute",fontSize:50}}})),oe=function(e){var t=te();return Object(n.jsx)(u.a,{className:t.root,children:Object(n.jsx)(s.b,{to:"/",children:Object(n.jsx)(ee.a,{className:t.homeIcon})})})},ne=Object(N.a)((function(e){return{root:{fontSize:16,fontFamily:"monospace",textAlign:"center",color:"red",marginTop:170},errorText:{color:"red",fontFamily:"monospace",paddingTop:100},linkText:{textDecoration:"none",color:"dodgerblue",margin:"0 5px",fontFamily:"monospace"}}}));var re=function(e){var t=ne();return Object(n.jsxs)(u.a,{className:t.root,children:[Object(n.jsxs)(v.a,{variant:"h4",className:t.errorText,children:["The page ",e.location.pathname," does not exist!"]}),Object(n.jsxs)(v.a,{variant:"h6",children:["Would you like to return",Object(n.jsx)(s.b,{to:"/",className:t.linkText,children:"HOME"}),"instead?"]})]})},ie=Object(l.f)((function(){return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(X,{}),Object(n.jsx)(oe,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:V}),Object(n.jsx)(l.a,{path:"/movies",component:M}),Object(n.jsx)(l.a,{path:"/movie-info",component:q}),Object(n.jsx)(l.a,{component:re})]})]})})),ce=(o(96),o(31)),ae={isLoading:!1,movies:[],error:null},se={isLoading:!1,movieInfo:{},error:null},le=Object(ce.c)({moviesSlice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object.assign({},e,{isLoading:!0});case f:return Object.assign({},e,{isLoading:!1,movies:t.movies});case p:return Object.assign({},e,{isLoading:!1,error:t.error});default:return e}},movieInfoSlice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object.assign({},e,{isLoading:!0});case g:return Object.assign({},e,{isLoading:!1,movieInfo:t.movieInfo});case x:return Object.assign({},e,{isLoading:!1,error:t.error});default:return e}}}),de=o(67),me=function(e){return function(t){return function(o){console.log("Original State:",e.getState()),console.log("Current Action:",o),t(o),console.log("New Updated State:",e.getState())}}},je=Object(ce.d)(le,Object(ce.a)(de.a,me));a.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(m.a,{store:je,children:Object(n.jsx)(s.a,{children:Object(n.jsx)(ie,{})})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.b8cf067f.chunk.js.map
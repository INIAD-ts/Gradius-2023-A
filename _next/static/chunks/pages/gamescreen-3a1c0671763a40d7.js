(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[876],{2341:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamescreen",function(){return i(7103)}])},7103:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return x}});var n=i(5893),s=i(24),r=i(5371),o=i(8239),a=i(7294),l=i(2237),h=i(1290),u=function(){let t=Number(window.innerWidth),e=Number(window.innerHeight),[i,s]=(0,a.useState)([]),[r,o]=(0,a.useState)([]),[u,c]=(0,a.useState)([]),x=(0,a.useCallback)(async()=>{let t=await h.x.rooms.control.$get(),e=await h.x.rooms.gunPosition.$get(),i=await h.x.check.$get();d(i,e),s(t),o(e),c(i)},[]),d=(t,e)=>{t.map(t=>{e.map(e=>{let i=Math.sqrt((t.pos.x-e[0])**2+(t.pos.y-e[1])**2);i<t.radius+10&&(console.log("hit"),h.x.check.$post({body:t.id}))})})};return(0,a.useEffect)(()=>{let t=setInterval(x,50);return()=>{clearInterval(t)}},[x,i]),(0,n.jsx)(l.Hf,{width:t,height:e,children:(0,n.jsxs)(l.mh,{children:[(0,n.jsx)(l.UL,{stroke:"black",strokeWidth:1,x:0,y:0,width:t,height:e}),i.map((t,e)=>(0,n.jsx)(l.Cd,{x:t[0],y:t[1],width:50,height:50,fill:"red"},e)),r.map((t,e)=>(0,n.jsx)(l.Cd,{radius:10,x:t[0],y:t[1],fill:"green"},e)),u.map((t,e)=>(0,n.jsxs)(a.Fragment,{children:[(0,n.jsx)(l.Cd,{x:t.pos.x,y:t.pos.y,width:50,height:50,fill:"blue"},e),(0,n.jsx)(l.xv,{x:t.pos.x,y:t.pos.y,fontSize:15,fontFamily:"Arial",fill:"white",text:t.hp.toString()})]},e))]})})};let c=()=>{let[t]=(0,s.KO)(r.L);return t?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(u,{})}):(0,n.jsx)(o.g,{visible:!0})};var x=c}},function(t){t.O(0,[237,774,888,179],function(){return t(t.s=2341)}),_N_E=t.O()}]);
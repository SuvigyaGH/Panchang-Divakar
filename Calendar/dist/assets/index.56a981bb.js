var b=Object.defineProperty,y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var c=(e,t,o)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&c(e,o,t[o]);if(g)for(var o of g(t))j.call(t,o)&&c(e,o,t[o]);return e},d=(e,t)=>y(e,x(t));import{s as m,j as f,R as l,W as S,a as k}from"./vendor.cfb582f0.js";const v=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}};v();var C="/assets/hatch_backdrop.421f76b8.jpg";const W=m.div`
  padding-top: 100%; /* padding-top is based on the width - believe it or not!!! */
  position: relative;
  cursor: pointer;
  pointer-events: ${({enabled:e})=>e?"":"none"};

  .front {
    background: center / cover url(${e=>e.background});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transform: ${e=>e.open?"rotateY(180deg)":"rotateY(0deg)"};

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 20px;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.7);
      font-weight: 700;
      font-size: 4rem;
      user-select: none;
    }
  }

  .back {
    position: absolute;
    background: center / cover url(${C});
    top: 0px;
    left: 0px;
    z-index: ${e=>e.open?2:1};
    transform: ${e=>e.open?"rotateY(0deg)":"rotateY(180deg)"};

    p {
      font-family: 'Dancing Script', cursive;
      color: #fff;
      padding: 10px;
      font-size: 1.2rem;
      text-align: center;
      user-select: none;
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
    transform-style: preserve-3d;
    border-radius: 20px;
    border: 1px solid #fff;
    box-sizing: border-box;
  }
`,s=f.exports.jsx,h=f.exports.jsxs,E=({hatch:{nr:e,text:t,img:o,open:i},handleClick:n,enabledCallback:a})=>h(W,{open:i,background:o,enabled:a(e),onClick:()=>n(e),children:[console.log("re-render"),s("div",{className:"front",children:s("p",{children:e})}),s("div",{className:"back",children:s("p",{children:t})})]});var D=l.memo(E);const H=e=>{for(let t=e.length-1;t>0;t--){const o=Math.floor(Math.random()*(t+1));[e[t],e[o]]=[e[o],e[t]]}return e},I=[{nr:1,img:"./img/1.jpg",text:"Can I have your picture so I can show Santa what I want for Christmas?",open:!1},{nr:2,img:"./img/2.jpg",text:"What do you call people who are afraid of Santa Claus? Claustrophobic",open:!1},{nr:3,img:"./img/3.jpg",text:"What is the best Christmas present ever? A broken drum - you can't beat it!",open:!1},{nr:4,img:"./img/4.jpg",text:"How do you know when Santa's in the room? You can sense his presents.",open:!1},{nr:5,img:"./img/5.jpg",text:"STRESSED is just DESSERTS spelled backward.",open:!1},{nr:6,img:"./img/6.jpg",text:"What is the difference between snowmen and snowwomen? Snowballs.",open:!1},{nr:7,img:"./img/7.jpg",text:"What nationality is Santa Claus? North Polish",open:!1},{nr:8,img:"./img/8.jpg",text:"What kind of motorbike does Santa ride? A Holly Davidson!",open:!1},{nr:9,img:"./img/9.jpg",text:"Who is never hungry at Christmas? The turkey - he's always stuffed!",open:!1},{nr:10,img:"./img/10.jpg",text:"When you stop believing in Santa Claus is when you start getting clothes for Christmas!",open:!1},{nr:11,img:"./img/11.jpg",text:"What goes 'oh oh oh'? Santa walking backwards.",open:!1},{nr:12,img:"./img/12.jpg",text:"According to my kids' Christmas lists, they think this parenting gig pays pretty well.",open:!1},{nr:13,img:"./img/13.jpg",text:"Which of Santa's reindeers needs to mind his manners the most? 'Rude'olph",open:!1},{nr:14,img:"./img/14.jpg",text:"What will fall on the lawn first? An autumn leaf or a Christmas catalog?",open:!1},{nr:15,img:"./img/15.jpg",text:"What do elves learn in school? The Elf-abet!",open:!1},{nr:16,img:"./img/16.jpg",text:"How do you scare a snowman? You get a hairdryer!",open:!1},{nr:17,img:"./img/17.jpg",text:"The main thing I want this holiday season is for someone to wake me when it's over.",open:!1},{nr:18,img:"./img/18.jpg",text:"Remember, children. The best way to get a puppy for Christmas is to beg for a baby brother.",open:!1},{nr:19,img:"./img/19.jpg",text:"I bought my son a fridge for Christmas. \u2013 I can't wait to see his face light up when he opens it.",open:!1},{nr:20,img:"./img/20.jpg",text:"Santa's elves are just a bunch of subordinate Clauses.",open:!1},{nr:21,img:"./img/21.jpg",text:"What is the best evidence that Microsoft has a monopoly? Santa Claus had to switch from Chimneys to Windows.",open:!1},{nr:22,img:"./img/22.jpg",text:"Why do programmers always mix up Halloween and Christmas? Because 31 OCT = 25 DEC.",open:!1},{nr:23,img:"./img/23.jpg",text:"What does Santa suffer from if he gets stuck in a chimney? Claustrophobia!",open:!1},{nr:24,img:"./img/24.jpg",text:"What's red and white, red and white, red and white? Sant rolling off your roof.",open:!1}],A=()=>H(I),N=S`
  body {
    background: center / cover url("./img/calendar_backdrop.jpg");
    margin: 0;
    height: 100vh;
  }
`,O=m.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  padding: 40px;
`,R=()=>{const[e,t]=l.useState(localStorage.calendar?JSON.parse(localStorage.calendar):A());l.useEffect(()=>{localStorage.setItem("calendar",JSON.stringify(e))},[e]);const o=l.useCallback(n=>{t(a=>a.map(r=>r.nr===n?d(p({},r),{open:!r.open}):r))},[]),i=l.useCallback(n=>{const a=new Date,r=a.getUTCDate(),u=a.getMonth();return a.getFullYear()>2021||u===11&&n<=r},[]);return h(O,{children:[s(N,{}),e.map(n=>s(D,{hatch:n,handleClick:o,enabledCallback:i},n.nr))]})};k.render(s(l.StrictMode,{children:s(R,{})}),document.getElementById("root"));

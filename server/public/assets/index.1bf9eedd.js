var ue=Object.defineProperty,he=Object.defineProperties;var pe=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var Y=(t,e,r)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,T=(t,e)=>{for(var r in e||(e={}))_.call(e,r)&&Y(t,r,e[r]);if(R)for(var r of R(e))$.call(e,r)&&Y(t,r,e[r]);return t},G=(t,e)=>he(t,pe(e));var S=(t,e)=>{var r={};for(var o in t)_.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&R)for(var o of R(t))e.indexOf(o)<0&&$.call(t,o)&&(r[o]=t[o]);return r};import{L as ge,V as Q,F as fe,a as k,B as me,r as s,u as Z,W as xe,S as ye,P as we,b as H,c as C,C as be,T as ve,G as Ae,d as ke,M as Ce,e as Fe,f as Se,g as Ie,A as Ee,h as Re,j as l,i as n,k as ce,l as Oe,m as K,n as Le,s as d,o as Me,p as W,q as Be,t as ze,v as De,H as V,w as Ue,R as Pe,x as Ne,y as He,z as Je,D as O,O as Te,E as Ge,I as Xe}from"./vendor.4fb5213a.js";const je=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};je();const N=(t,e,r,o,i)=>(t-e)*(i-o)/(r-e)+o;class qe extends ge{constructor(e,r=new Q(-4096,-2048),o=new Q(4096,2048)){super(e);this.minCoord=r,this.maxCoord=o}load(e,r,o,i){const a=new fe(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setCrossOrigin(this.crossOrigin),a.load(e,h=>{try{let c=JSON.parse(h);r(this.parse(c))}catch(c){i(c)}},o,i)}parse(e){return e.type==="FeatureCollection"?this.parseFeatureCollection(e).filter(r=>r!==void 0):(console.warn("[MapLoader]",e.type,"type not yet implemented"),[])}parseFeatureCollection(e){let r=[];return e.features.forEach(o=>{if(o.type==="Feature"){let i=this.parseFeature(o);i instanceof Array?r.push(...i):r.push(i)}else console.warn("[MapLoader]",o.type,"type not yet implemented")}),r}parseFeature(e){if(e.geometry.type==="Polygon")return this.parsePolygon(e.geometry.coordinates);if(e.geometry.type==="MultiPolygon")return this.parseMultiPolygon(e.geometry.coordinates);console.warn("[MapLoader]",e.geometry.type,"type not yet implemented")}parsePolygon(e){let r=[];return e.forEach(o=>{o.forEach(i=>{r.push(new k(N(i[0],-180,180,this.minCoord.x,this.maxCoord.x),N(i[1],-90,90,this.minCoord.y,this.maxCoord.y)))})}),new me().setFromPoints(r)}parseMultiPolygon(e){let r=[];return e.forEach(o=>{r.push(this.parsePolygon(o))}),r}}const I=s.exports.createContext();var Qe="/assets/map-light.59c7ed87.jpg";const We=new k(0,0,-2924),Ze=new k(0,0,-2925),L=new Q(8192,4096),ee=(t,e)=>{let r=e[0][0],o=e[0][0],i=e[0][1],a=e[0][1];if(e.forEach(c=>{r=Math.min(c.x,r),o=Math.max(c.x,o),i=Math.min(c.y,i),a=Math.max(c.y,a)}),t.x<=r||t.x>=o||t.y<=i||t.y>=a)return!1;let h=!1;for(let c=0,u=e.length-1;c<e.length;u=c++)e[c][1]>=t.y!=e[u][1]>=t.y&&t.x<=(e[u][0]-e[c][0])*(t.y-e[c][1])/(e[u][1]-e[c][1])+e[c][0]&&(h=!h);return h},Ke=s.exports.forwardRef((t,e)=>{const{gl:r}=Z(),o=s.exports.useContext(I),i=s.exports.useRef(new xe(L.x,L.y)),a=s.exports.useRef(new ye),h=s.exports.useRef(new we(70,L.x/L.y,1,1e5)),[c,u]=s.exports.useState(!1),[p,m]=H(),[A,F]=s.exports.useState(!1),[x,E]=s.exports.useState(!1),[J]=C("/start");return s.exports.useEffect(()=>{console.log("scene init"),a.current.background=new be("#000000"),h.current.position.setZ(0),Promise.all([new Promise((g,f)=>{try{g(new qe().parse(o.data))}catch(b){f(b)}}),new ve().loadAsync(Qe)]).then(g=>{const f=new Ae;f.name="CountryLines",g[0].forEach(w=>{const y=new ke(w,new Ce({color:16777215}));y.position.setZ(We.z),f.add(y)}),a.current.add(f);const b=new Fe(new Se(g[1].image.width,g[1].image.height,1),new Ie({map:g[1]}));b.position.setZ(Ze.z),b.renderOrder=-1,a.current.add(b),u(!0)});{const g=new Ee([1,1,1],.25),f=new Re(16711680,1,100);f.position.set(75,75,75),a.current.add(f),a.current.add(g)}u(!0)},[]),s.exports.useEffect(()=>{console.log("render"),r.setRenderTarget(i.current),r.render(a.current,h.current),r.setRenderTarget(null),u(!1)},[c]),l("mesh",G(T({},t),{ref:e,onPointerDown:g=>E(!0),onPointerMove:g=>x?F(!0):null,onClick:g=>{if(!A){let f=null,b=new k(N(g.uv.x,0,1,-180,180),N(g.uv.y,0,1,-90,90));o.data.type==="FeatureCollection"&&o.data.features.every(w=>{if(w.geometry.type==="MultiPolygon"){let y=!1;return w.geometry.coordinates.every(v=>ee(b,...v)?(y=!0,!1):!0),y&&(f=w),!y}else if(w.geometry.type==="Polygon")return ee(b,...w.geometry.coordinates)?(f=w,!1):!0}),J&&f&&m(`/map/${f.properties.ADMIN}`)}E(!1),F(!1)},children:[n("sphereGeometry",{args:[4,64,32]}),n("meshStandardMaterial",{map:i.current.texture})]}))});var Ve="/assets/JosefinSans-Bold.2cd73747.woff",X="/assets/Raleway-SemiBold.99b5ad4e.woff";const j=s.exports.forwardRef((i,o)=>{var a=i,{hoverColor:t,children:e}=a,r=S(a,["hoverColor","children"]);const[h,c]=s.exports.useState(!1),u=()=>c(!0),p=()=>c(!1);return n(ce,G(T({},r),{ref:o,color:h?t:null,onPointerOver:u,onPointerOut:p,children:e}))});function Ye(e){var t=S(e,[]);const r=s.exports.useContext(I),[o,i]=H();return n(s.exports.Suspense,{fallback:null,children:l("group",{position:[0,0,2],children:[l(ce,{position:[0,0,0],color:"#8A4ADD",font:Ve,fontSize:1,children:[n("meshBasicMaterial",{children:n(Oe,{stops:[0,1],colors:["#ffffff","#8A4ADD"],size:100})}),"GEONOMY"]}),r.error?l(j,{position:[0,-.5,0],fonts:X,fontSize:.2,hoverColor:"red",children:[n("meshBasicMaterial",{}),"An error occurred!"]}):r.loading?l(j,{position:[0,-.7,0],fonts:X,fontSize:.3,hoverColor:"red",children:[n("meshBasicMaterial",{}),r.loadingStatus]}):l(j,{position:[0,-.5,0],font:X,fontSize:.2,hoverColor:"red",onClick:()=>i("/start"),children:[n("meshBasicMaterial",{}),"The world is in your hands!"]})]})})}function te({refToRotate:t,xAxis:e,yAxis:r,zAxis:o,speed:i,negative:a}){return K(()=>{if(t.current===void 0)return;let h=a?-1:1;e&&(t.current.rotation.x+=i*h),r&&(t.current.rotation.y+=i*h),o&&(t.current.rotation.z+=i*h),t.current.rotation.x>=360&&(t.current.rotation.x=0),t.current.rotation.y>=360&&(t.current.rotation.y=0),t.current.rotation.z>=360&&(t.current.rotation.z=0)}),s.exports.useEffect(()=>()=>{t.current!==void 0&&(t.current.rotation.x=0,t.current.rotation.y=0,t.current.rotation.z=0)}),null}function _e(t){const[e,r]=s.exports.useState(!0),[o,i]=s.exports.useState("Loading..."),[a,h]=s.exports.useState(null),[c,u]=s.exports.useState(null);return s.exports.useEffect(()=>{new Le().loadAsync(t,p=>{i(`${(p.loaded/p.total*100).toFixed(2)}%`)}).then(p=>{if(p=JSON.parse(p),h(p),p.type!=="FeatureCollection")throw new Error("Unparsable country data");r(!1)}).catch(p=>{console.error(p),u(p),r(!1)})},[]),[e,o,c,a]}function q({refToPosition:t,position:e,rotation:r,animate:o,animateSpeed:i}){const a=s.exports.useRef(!0);return s.exports.useEffect(()=>{if(t.current!==void 0)return o||(e&&(t.current.position.x=e[0],t.current.position.y=e[1],t.current.position.z=e[2]),r&&(t.current.rotation.x=r[0],t.current.rotation.y=r[1],t.current.rotation.z=r[2])),()=>{a.current=!1,t.current!==void 0&&(t.current.position.x=0,t.current.position.y=0,t.current.position.z=0,t.current.rotation.x=0,t.current.rotation.y=0,t.current.rotation.z=0)}}),o&&K(()=>{if(t.current!==void 0&&(e&&t.current.position.lerp(new k(e[0],e[1],e[2]),i),r)){const h=new k(t.current.rotation.x,t.current.rotation.y,t.current.rotation.z),c=new k(r[0],r[1],r[2]);let u=new k;u=u.lerpVectors(h,c,.1),t.current.rotation.x=u.x,t.current.rotation.y=u.y,t.current.rotation.z=u.z}}),null}function M({position:t,rotation:e}){const{camera:r}=Z();return s.exports.useEffect(()=>{console.log("mount"),r!==void 0&&(t&&(r.position.x=t[0],r.position.y=t[1],r.position.z=t[2]),e&&(r.rotation.x=e[0],r.rotation.y=e[1],r.rotation.z=e[2]))},[]),null}var le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQTSURBVHgBzVhRbttGEN1ZSkqRLwltDOSr7A0YoImN/pQ6QdITmAEax0A/4p7A1gmifhQI7AJmTlD7BGJ/ijQuYOYEYb4CJA5kBEjgkOJOZkSRXjKkJUaSkwcI4i7J3ceZndm3A6ImNtdemnH8zW0JsYUCbETRBsA230OEUwAR0FWAaHiGIQ4fPekEdcaHWR+8d/PEkVKsEwFb1AL4Qsj+7tPO45menvbA5tprWym5T19tirkAARHbmUasktCWPWy/exfvkAseiOrXfRDopy0UglwHJl1Zla8g9MNI9ly/c1o6Ylnn5trQVEr9XTYwucwTwtiJotNnrv9D6aCO9bx95Ur7Z8TYoeadkmkDKWW3bH1BBZlB0UVMJIqiu65/PRA14FgvzWazuU2WdmYhlSPEbnr/Xh3rZIgIWQF29o6+/UPMgY3VV1sC5cMCKT8MZVd3n9Rv85opkoki1Z2XDGP3v5U+orqRfGA2g9Vqqu0cxfSCw5rMuq/fDEN1w/VXfLFA3Lv5italHNBc7bRPKez+9f81j68zCwFAjiklua1ZyNxfPRls3DpB/tFHDaY9v3e04oNUPb2P1lJmCJmwPnEKrnIX4aYqsPvIQt55D5obt4brGSGyTi7XUDT1xJLx4UN0V29PUoSQHOaFfHNQJ7SVggNaiC7/ENGb9T2eQ7cSXdu//TT8vhHH6jaAPoFwRQ3M41ralHu0Vu20HUbqDq2n8w7GaGT8Iy4JZ2eNXNBIQEuSmc20g679qj1mGUjmAn0vtBtMKHUZLe5A1MT91TcPKY+M1yBvtLtH136v8z5N7ROR8fusrRp6gqKbn2EdtHhBJgPOLK/KyREXKb4yyPze8gUAkHmIuUhaNxkhhRcIqyVBDyrW4pK87qVNImc51rAtLgnJXOdG4KCSCkUuFzQao0uzUqsV23qbgsKThiEP9c7irr9MAMh1vR1F4aFkCVncU5L9bbngOUiwZXo7ScrXg3HYk4bOHU3iON4XSwaqglIE6PP/mBCJJpf+gvObwv71R9LASwKPjQIdrSvYffrd2ChZak0OhJApviQ/sZ5etIQdUmaPjwvdTkooy9SPnpCmxcRsY6bjLUUOEg28ODL0kXmZS3OmZHKEGHyi1HdfJkWRcLwI9yVjqEFamJggCKO3OXX6yW7IB7tWq8lfYeYfBBek7NWtZiTRFO+XFCmCMIy6RXVauj1XkZrggH6Pr141vL5Xrp34wHl2NrIo0W2XV0uQDoijX8qkcqVe4LQ+PsQBXuAudi8GumyhmpE1vdjwtldVF5gqYGhR0wFScs4wxXzgIpazd9S5UCLXKFgxMePBhV9fAi5SUHC4eiQthFCKpJrRopMK2lwLmkjgSUlPnLKcISnrKQS/1ZQHf/7beVFn/I91V/JTI3Yi0gAAAABJRU5ErkJggg==",$e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE/SURBVHgBxZdbEoIwDEWTrsydiI9FqB8y+qEuwgfshJUZCwMMSmmT0I73Tyw9Z2ibtgBtDvkjO5wfL0ic/elZ7E/3ZfcbOzgZaOCIUFyOmxUkSA0HoBZO2TXfljiE91YJJL7hXSgzZHDx25gIog6HG26fIC7Q1yDGl5iGQ3GzfWOo4RyJELzpn/OCRoIDHwnEkuDCnQJzJSTwSQGthBTuFZBKaOBBAa6EFs4SCEmQrSZaOFvAJ+EKFy4S4EpI4GKBkIQUXsdAxGg6iz4E0rKdZBJKJFhfzbfOLa4cPRecJ9SFaDjh5uwdqlLsmu1aCfFm5FtqGgnRdsxZ51IJ9oFEUmQkEqwjmabCcSWCh1INXCKBqeBcCUwJ50gYelOVEl7nmq8zd8WkqhmCnb0fYns/jA0fxnU57f+sJXZ/uJ5/AFvIX30COkyrAAAAAElFTkSuQmCC",et="/assets/alex.2e4a65d4.jpg",tt="/assets/value.30aeffca.jpg",rt="/assets/stani.f56d6a94.jpg",nt="/assets/misho.cdd6f2b3.jpg";d.button`
    width: "40px";
    height: "40px";
    position: "absolute";
    backgroundColor: "transparent";
    backgroundImage: url(${le});
    backgroundRepeat: "no-repeat";
    backgroundPosition: "center";
    right: "2vw";
    bottom: "3vh";
    border: "none";
    borderRadius: "100%";
`;const B=d.div`
    width: 35vw;
    height: 19.5vh;
    box-sizing: border-box;
    margin-left: 2.5vw;
    margin-top: 2vh;
    background: rgba(248, 248, 248, 0.2);
    border: 1px solid #8A8A8A;
    border-radius: 36px;
    filter: drop-shadow(0px 16px 21px rgba(0, 0, 0, 1));
`,z=d.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
`,D=d.div`
    width: 7.5vw;
    height: 15vh;
    grid-row: 1 / span 8;
    justify-content: center;
    margin-top: 1.5vh;
    margin-left: 0.5vw;
    background-size: cover;
    background-repeat: no-repat;
    background-position: center;
    border-radius: 100%;
`,U=d.div`
    width: 400px;
    padding: 20px 0;
    margin-left: 0.5vw;
    grid-row: 1 / 4;
    grid-column: 2 / 4;
    color: #FBFBFB;
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 700;
    ::selection {
        background: #ea4c89;
    }
`,P=d.div`
    grid-row: 2 / span 3;
    grid-column: 2 / span 5;
    padding: 20px 0;
    margin-top: 3vh;
    margin-left: 0.5vw;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    color: #C4C4C4;
    ::selection {
        background: #ea4c89;
    }
`;function ot(){const[t,e]=s.exports.useState(!1),[r]=C("/"),[o]=C("/start");return s.exports.useEffect(()=>{!r&&!o&&e(!1)},[r,o]),!r&&!o?null:t?l("section",{style:{width:"40vw",height:"100vh",position:"absolute",right:"0vw",background:"rgba(194, 151, 194, 0.13)",border:"1px solid #5E5E5E",boxSizing:"border-box",backdropFilter:"blur(15px)"},children:[n("button",{style:{width:"40px",height:"40px",position:"absolute",backgroundColor:"transparent",backgroundImage:`url('${$e}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",right:"37vw",top:"1.5vh",border:"none",borderRadius:"100%"},onClick:()=>e(!1)}),n("h3",{style:{textAlign:"center",color:"white",fontFamily:"Raleway, sans-serif",fontSize:"90px",fontWeight:"bold"},children:"About us"}),n(B,{children:l(z,{children:[n(D,{style:{backgroundImage:`url(${et})`}}),n(U,{children:"Alexander Manov"}),n(P,{children:"Our Backend Developer. Worked on map parsing and visualization on the globe. Worked on connecting the Wikipedia and country stats APIs."})]})}),n(B,{children:l(z,{children:[n(D,{style:{backgroundImage:`url(${tt})`}}),n(U,{children:"Valeri Ivanov"}),l(P,{children:["Our Frontend Developer. Worked on the designs made by himself and the designer - Mihail Petrov. He also implemented ",n("strong",{children:"all of"})," them to CSS and HTML."]})]})}),n(B,{children:l(z,{children:[n(D,{style:{backgroundImage:`url(${rt})`}}),n(U,{children:"Stanislav Tashev"}),n(P,{children:"Our Scrum Trainer. Worked on the documentation and the presentation. Helped with writing some of the comments in the code. He also managed the team very well."})]})}),n(B,{children:l(z,{children:[n(D,{style:{backgroundImage:`url(${nt})`}}),n(U,{children:"Mihail Petrov"}),l(P,{children:["Our Designer. Worked ",n("strong",{children:"primarily"})," on the designs and implemented ErrorBoundary.jsx as well as the infamous noscript page."]})]})})]}):n("button",{style:{width:"40px",height:"40px",position:"absolute",backgroundColor:"transparent",backgroundImage:`url('${le}')`,backgroundRepeat:"no-repeat",backgroundPosition:"center",right:"2vw",bottom:"3vh",border:"none",borderRadius:"100%"},onClick:()=>e(!0)})}const it=d.section`
    height: 100vh;
    background-color: #0E0034;
    overflow: hidden;
`,at=d.div`
    position: absolute;
    width: 100vw;
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20.5rem;
    color: #160643;
    user-select: none;
    overflow: hidden;
`,st=d.div`
    position: absolute;
    padding-bottom: 10vh;
    margin-left: 6vw;
    margin-top: 10vh;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14rem;
    line-height: 211px;
    color: #FFFFFF;
    overflow: auto;
    white-space: nowrap;
    ::selection {
        background: #ea4c89;
    }
`,ct=d.div`
    height: 28vh;
    width: 50vw;
    display: inline-block;
    margin-top: 37vh;
    margin-left: 6.7vw;
    padding: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 28.9843px;
    line-height: 35px;
    color: #FFFFFF;
    overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        background: linear-gradient(179.99deg, #180550 75.74%, rgba(24, 5, 80, 0) 112.02%);
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #2F0A7E;
        border-radius: 10px;
    }

    ::selection {
        background: #ea4c89;
    }
`,lt=d.div`
    height: 35vh;
    width: 30vw;
    float: right;
    display: inline-block;
    margin-right: 8vw;
    margin-top: 35vh;
    background-color: coral;
`,dt=d.div`
    height: 30vh;
    width: 80vw;
    display: flex;
    margin-left: 1vw;
    flex-direction: column;
`,ut=d.div`
    display: flex;
    margin-left: 5vw;
    line-height: 45px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    color: white;
    ::selection {
        background: #ea4c89;
    }
`,ht=d.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`,re=d.span`
    disaply: inline-block;
    background-image: linear-gradient(100deg, #2EEBC9, #214DEC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
`,pt=d.div`
    display: flex;
    margin-top: 2vh;
    margin-left: 5vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    line-height: 45px;
    color: white;
    ::selection {
        background: #ea4c89;
    }
`,gt=d.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`,ne=d.span`
    disaply: inline-block;
    background-image: linear-gradient(90.98deg, #FF5454, #FF54C5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
`,ft=d.div`
    display: flex;
    margin-top: 2vh;
    margin-left: 5vw;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 37.5777px;
    line-height: 45px;
    color: white;
    ::selection {
        background: #ea4c89;
    }
`,mt=d.div`
    // position: absolute;
    margin-top: 1.5vh;
    display: inline-block;
    text-align: right;
    ::selection {
        background: #ea4c89;
    }
`,oe=d.span`
    disaply: inline-block;
    background-image: linear-gradient(100deg, #FF4A4A, #CE9F44);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ::selection {
        background: #ea4c89;
    }
`;d.button`
    height: 5vh;
    width: 5vh;
    display: flex;
    margin-top: 1.5vh;
    margin-left: 1vw;
    background: transparent;
`;async function de(t){return await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=${t}&explaintext=1&exsectionformat=plain&format=json&origin=*`).then(e=>e.json()).then(e=>{let r=Object.keys(e.query.pages);if(r[0]==="-1")throw new Error("Country wasn't found");return e.query.pages[r[0]].extract?e.query.pages[r[0]].extract:"Wikipedia did not provide information summary about this country :("})}async function xt(t){return await fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${t}&prop=pageimages&format=json&pithumbsize=1000&origin=*`).then(e=>e.json()).then(e=>{let r=Object.keys(e.query.pages);if(r[0]==="-1")throw new Error("Country wasn't found");return e.query.pages[r[0]].thumbnail.source})}const yt="https://geonomy.herokuapp.com";function wt(t){const[e,r]=s.exports.useState(!0),[o,i]=s.exports.useState(null),[a,h]=s.exports.useState(null);return s.exports.useEffect(()=>(fetch(`${yt}/country/${encodeURIComponent(t)}`).then(c=>c.json()).then(c=>{if(c.error)throw c;i(c),r(!1)}).catch(c=>{console.error(c),h(c),r(!1)}),()=>!1),[]),[e,a,o]}function ie(t){const e={Billion:1e9,Million:1e6,"Hundred Thousand":1e5,Thousand:1e3};for(let r in e)if(e[r]<=t)return[t/e[r],r];return[t]}function bt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t)+t)}function vt(o){var i=o,{country:t,countryData:e}=i,r=S(i,["country","countryData"]);const[a,h]=s.exports.useState("Thinking..."),[c,u]=s.exports.useState("Also thinking..."),[p,m]=s.exports.useState(-1),[A,F,x]=wt(e.properties.ADMIN),[E,J]=s.exports.useState(!0),[g,f]=s.exports.useState(null),[b,w]=H();return s.exports.useEffect(()=>{let y=!0;return h(t),u("Thinking..."),m(bt(0,5)),de(t).then(v=>{y&&u(v)}).catch(v=>{console.error(v),y&&u("Could not fetch country data.")}),xt(t).then(v=>{!y||(f(v),J(!1))}).catch(v=>console.error(v)),()=>{y=!1}},[]),l(it,{children:[n(at,{children:a}),n(st,{children:a}),n(ct,{children:c}),n(lt,{style:{backgroundImage:E?"":`url(${g})`,backgroundSize:"100% 100%"}}),l(dt,{children:[l(ut,{children:[n(Me,{style:{fontSize:70}}),n(ht,{children:A&&!F?n(re,{children:"Thinking..."}):l(W,{children:["~",n(re,{children:x?ie(x.population*1e3)[0].toFixed(1):"\xAF\\_(\u30C4)_/\xAF"})," ",x?ie(x.population*1e3)[1]:""," people"]})})]}),l(pt,{children:[n(Be,{style:{fontSize:70}}),n(gt,{children:A&&!F?n(ne,{children:"Thinking..."}):l(W,{children:["The currency is ",n(ne,{children:x?x.currency.code:"\xAF\\_(\u30C4)_/\xAF"})," (",x?x.currency.name:"\xAF\\_(\u30C4)_/\xAF",")"]})})]}),l(ft,{children:[n(ze,{style:{fontSize:70}}),l(mt,{children:[A?n(oe,{children:"Thinking..."}):n(oe,{children:x?x[["gdp","region","unemployment","co2_emissions","capital"][p]]:"\xAF\\_(\u30C4)_/\xAF"}),A?"":[" USD (GDP)"," is the region","% (unemployment)"," CO2e (emissions)"," is the capital"][p]]})]}),n(De,{onClick:()=>w("/start"),style:{fontSize:50,position:"absolute",bottom:"30px",left:"30px",color:"#C4C4C4"}})]})]})}function At(e){var t=S(e,[]);const[r,o]=C("/map/:country/learn_more"),[i,a]=s.exports.useState(null),[h,c]=s.exports.useState(),u=s.exports.useContext(I);return s.exports.useEffect(()=>{let p=!0;if(!(u.loading||!p)){if(!u.data.features.map(m=>m.properties.ADMIN).includes(decodeURIComponent(o.country)))setLocation("/start");else{a(decodeURIComponent(o.country));let m=u.data.features.filter(A=>A.properties.ADMIN===decodeURIComponent(o.country))[0];c(m)}return()=>p=!1}},[u]),i?n(V,{as:"div",fullscreen:!0,position:[0,0,0],children:n(vt,{country:i,countryData:h})}):null}const kt=d.section`
    height: 100vh;
    width: 100vw;
`,Ct=d.hr`
    height: inherit;
    width: 0.55vw;
    border: 10px;
    border-color: none;
    border-radius: 7px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
`,Ft=d.div`
    height 30vh;
    width: 50vw;
    display: flex;
    padding-top: 40vh;
    margin-left: 12vw;
`,St=d.div`
    display: flex;
    flex-direction: column;
`,It=d.div`
    height: 1vh;
    margin-left: 1vw;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 7rem;
    color: #FFFFFF;
    white-space: nowrap;
    ::selection {
        background: #ea4c89;
    }
`,Et=d.div`
    height: 14vh;
    width: 30vw;
    margin-top: 13vh;
    margin-left: 1vw;
    font-weight: 400;
    font-size: 1.5rem;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    color: #FFFFFF;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    ::selection {
        background: #ea4c89;
    }    
`,Rt=d.button`
    width: 18vw;
    height: 8vh;
    margin-left: 13vw;
    display: inline-block;
    align-items: center;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.75rem;
    text-align: center;
    border: none;
    border-radius: 64px;
    cursor: pointer;
    background: linear-gradient(127.29deg, #8BE3FF -5.93%, #BE8BFF 96.13%);
    box-shadow: inset 12px 12px 24px #6FB5CB, inset -24px -24px 48px rgba(0, 0, 0, 0.25);
    filter: drop-shadow(24px 24px 48px rgba(0, 0, 0, 0.25));
    ::selection {
        background: #ea4c89;
        color: #fff;
    }
`;function Ot(){const[t,e]=C("/map/:country"),[r,o]=H(),[i,a]=s.exports.useState("Thinking..."),[h,c]=s.exports.useState("Also thinking..."),u=s.exports.useContext(I);return s.exports.useEffect(()=>{let p=!0;if(!u.loading)return u.data.features.map(m=>m.properties.ADMIN).includes(decodeURIComponent(e.country))?(a(decodeURIComponent(e.country)),c("Thinking..."),de(decodeURIComponent(e.country)).then(m=>{p&&c(m)}).catch(m=>{console.error(m),p&&c("Could not fetch country data.")})):o("/start"),()=>{p=!1}},[u]),n(V,{as:"div",fullscreen:!0,children:l(kt,{children:[l(Ft,{children:[n(Ct,{}),l(St,{children:[n(It,{children:i}),n(Et,{children:h})]})]}),l(Rt,{onClick:()=>o(`/map/${e.country}/learn_more`),children:["TAKE ME THERE ",n(Ue,{style:{fontSize:"20"}})]})]})})}function Lt({path:t,children:e}){const[r,o]=C(t);return r?null:e}var Mt="/assets/countries.ec97d0cb.geojson";function Bt({lightRef:t}){const{camera:e}=Z();return K(()=>{t.current.position.set(e.position.x,e.position.y,e.position.z)}),null}function ae(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.random()*(e-t)+t}function zt(){const[t,e,r,o]=_e(Mt),i=s.exports.useRef(),a=s.exports.useRef();return n(W,{children:l(Pe,{children:[l(Ne,{style:{position:"absolute",top:"0px",bottom:"0px",width:"100%",height:"100%"},children:[n("color",{attach:"background",args:["#0E0034"]}),n("ambientLight",{color:"#240085"}),n("pointLight",{ref:a,position:[8,8,8]}),n(He,{}),n(Bt,{lightRef:a}),l(I.Provider,{value:{loading:t,loadingStatus:e,error:r,data:o},children:[t?null:n(Ke,{position:[0,0,0],scale:1,ref:i}),n(Lt,{path:"/",children:t?n(V,{fullscreen:!0,children:n("h1",{style:{position:"absolute",fontSize:"70px",color:"white",bottom:"10px",right:"10px",fontFamily:"'Raleway'"},children:e})}):null}),l(Je,{children:[l(O,{path:"/",children:[n(Ye,{}),n(te,{refToRotate:i,xAxis:!0,negative:!0,speed:25e-5}),n(te,{refToRotate:i,yAxis:!0,negative:!0,speed:7e-4}),n(q,{refToPosition:i,position:[0,0,-3],animate:!0,animateSpeed:.1}),n(M,{position:[0,0,5],rotation:[0,0,0]})]}),l(O,{path:"/start",children:[n(Te,{enablePan:!1,minDistance:4.5,maxDistance:10,minPolarAngle:.5,maxPolarAngle:2.2}),n(q,{refToPosition:i,position:[0,0,0],aniamte:!0,animateSpeed:.1}),n(M,{position:[0,0,5]})]}),l(O,{path:"/map/:country",children:[n(Ot,{}),n(M,{position:[0,0,0],rotation:[0,0,0]}),n(q,{refToPosition:i,position:[4,0,-3],rotation:[ae(0,6),ae(0,6),0],animate:!0,animateSpeed:.1})]}),l(O,{path:"/map/:country/learn_more",children:[n(M,{rotation:[0,0,0],position:[0,0,5]}),n(At,{})]})]})]})]}),n(ot,{})]})})}const Dt=d.section`
    height: 100vh;
    width: 100vw;
    background-color: #0E0034;
    display: flex;
    flex-direction: column;
`;d.div`
    height: 100vh;
    width: 100vw;
    dispaly: flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
`;const Ut=d.div`
    height: 100vh;
    width: 100vw;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
`,Pt=d.div`
    background-image: linear-gradient(180deg, #FF2B91 26.02%, rgba(255, 48, 48, 0) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font: 6rem "Raleway", sans-serif;
    fill: #EC22CF;
    font-weight: 700;
    vertical-align: middle;
`,se=d.div`
    font: 1rem "Roboto", sans-serif;
    color: #FFFFFF;
    fill: white;
    font-weight: 500;
    vertical-align: middle;
    margin-left: 35vw;
    width: 30vw;
`;d.div`
    position: fixed;
    width: 30%;
    right: 0.5vw;
    bottom: 0;
`;class Nt extends s.exports.Component{constructor(e){super(e);this.state={error:null,stack:null}}componentDidCatch(e,r){this.setState({error:e,stack:r})}render(){return this.state.error?l(Dt,{children:[l("svg",{width:"1220",height:"1220",viewBox:"0 0 1255 1255",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{marginLeft:"20vw"},children:[n("circle",{cx:"627.288",cy:"627.288",r:"627.288",fill:"url(#paint0_radial_540_27)",fillOpacity:"0.86"}),n("circle",{cx:"627.288",cy:"626.822",r:"415.534",stroke:"white",strokeWidth:"5",strokeDasharray:"10 10"}),n("defs",{children:l("radialGradient",{id:"paint0_radial_540_27",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(627.288 627.288) rotate(90) scale(627.288)",children:[n("stop",{offset:"0.0206471",stopColor:"#0A0026",stopOpacity:"0"}),n("stop",{offset:"0.6664",stopColor:"#AAAAAA",stopOpacity:"0"}),n("stop",{offset:"0.6665",stopColor:"#1E0095"}),n("stop",{offset:"1",stopColor:"#1A0062",stopOpacity:"0"})]})})]}),l(Ut,{children:[n(Pt,{children:"Whoops..."}),n(se,{style:{marginTop:"2vh"},children:n("code",{children:this.state.error.toString()})}),n(se,{style:{marginTop:"1vh"},children:n("code",{children:this.state.stack.componentStack})})]})]}):this.props.children}}Ge.render(n(Xe.StrictMode,{children:n(Nt,{children:n(zt,{})})}),document.getElementById("root"));

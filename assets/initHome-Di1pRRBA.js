import{i as M,s as h,g as k}from"./url-XkLgVFj3.js";import{D as L,G as P,L as J,t as S,f as K}from"./fitText-Bd138XTN.js";import{c as Q}from"./boardFactory-CFSUbiZD.js";import{I as E}from"./icons-Bcd_E9sO.js";async function V(){if(!M)return null;const{data:{user:t}}=await h.auth.getUser();return t}async function Z(){if(!M){window.alert("Google auth is not configured for this deployment yet.");return}const{error:t}=await h.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});t&&console.error("Auth error:",t)}async function ee(){M&&await h.auth.signOut()}async function te(t){if(!M)throw new Error("Supabase is not configured.");const{data:o}=await h.from("rooms").select("id, guest_token, state").eq("owner_id",t).maybeSingle();if(o)return{id:o.id,guest_token:o.guest_token,hasActiveGame:!!o.state};const s=ne(),{data:e}=await h.from("rooms").insert({id:s,owner_id:t}).select("id, guest_token").single();return{id:e.id,guest_token:e.guest_token,hasActiveGame:!1}}function ne(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}const I=30*60*1e3,B=25,oe=350,ae=1e4,G=new Map;function C(t){return`nw_words_cache_${t}`}function se(t){const o=G.get(t);if(o&&Date.now()-o.ts<I)return o.words;try{const s=localStorage.getItem(C(t));if(!s)return null;const e=JSON.parse(s);return!(e!=null&&e.ts)||!Array.isArray(e==null?void 0:e.words)||Date.now()-e.ts>=I?null:(G.set(t,{ts:e.ts,words:e.words}),e.words)}catch{return null}}function ie(t,o){const s={ts:Date.now(),words:o};G.set(t,s);try{localStorage.setItem(C(t),JSON.stringify(s))}catch{}}function re(t,o){return Promise.race([t,new Promise((s,e)=>setTimeout(()=>e(new Error("Words request timeout")),o))])}async function A(t="uk",{force:o=!1}={}){if(!o){const w=se(t);if(w&&w.length>=B)return w}const s=h.from("words").select("word").eq("language",t).eq("active",!0).limit(oe),{data:e,error:y}=await re(s,ae),b=(e||[]).map(w=>w.word).filter(Boolean);if(y||b.length<B)throw new Error(`Cannot load words (language: ${t})`);return ie(t,b),b}function ce(){try{return localStorage.getItem("nw_lang")||L}catch{return L}}function le(t){try{localStorage.setItem("nw_lang",t)}catch{}}async function ge(t){let o=ce(),s=null,e=null,y=null,b=!0;function w(a=16){const v=7.140000000000001,$=19*.34,_=[];for(let d=0;d<4;d+=1)for(let g=0;g<4;g+=1)_.push({r:d,c:g});for(let d=_.length-1;d>0;d-=1){const g=Math.floor(Math.random()*(d+1));[_[d],_[g]]=[_[g],_[d]]}return _.slice(0,a).map(({r:d,c:g},O)=>{const F=8+21*(g+.5),q=12+19*(d+.5),z=Math.round(F+(Math.random()*2-1)*v),H=Math.round(q+(Math.random()*2-1)*$),X=Math.round(24+Math.random()*56),Y=(3+Math.random()*2).toFixed(2),R=(Math.random()*2.5).toFixed(2),j=(.3+Math.random()*.5).toFixed(2);return{id:O,size:X,left:z,top:H,period:Y,delay:R,alpha:j}})}const N=w(16);function T(a){return new Promise(n=>{var c;const i=document.createElement("div");i.className="confirm-modal",i.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${a.newGame}</h2>
                    <p class="confirm-modal__text">${a.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${a.cancel}
                        </button>
                        <button class="confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${a.confirmNewGameAction}
                        </button>
                    </div>
                </div>
            `;const m=()=>{K(i,".confirm-modal__btn",{widthRatio:.9,heightRatio:.42,minSize:11,step:.25})},r=l=>{document.removeEventListener("keydown",f),window.removeEventListener("resize",m),i.remove(),n(l)},f=l=>{l.key==="Escape"&&r(!1)};i.addEventListener("click",l=>{var v,$;const u=($=(v=l.target)==null?void 0:v.dataset)==null?void 0:$.close;u==="confirm"&&r(!0),u==="cancel"&&r(!1)}),document.addEventListener("keydown",f),window.addEventListener("resize",m),document.body.appendChild(i),requestAnimationFrame(m),(c=i.querySelector(".confirm-modal__btn--confirm"))==null||c.focus()})}function U(a){const n=document.createElement("div");return n.className="newgame-loading-modal",n.innerHTML=`
            <div class="newgame-loading-modal__backdrop"></div>
            <div class="newgame-loading-modal__content">
                <p class="newgame-loading-modal__title">${a.loading}</p>
                <p class="newgame-loading-modal__text">${a.preparingGame}</p>
                <div class="loader__dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `,document.body.appendChild(n),()=>n.remove()}function x(a){s&&y!==a&&(y=a,A(a).catch(()=>{y=null}))}async function p(){const a=S(o);document.body.className="",t.innerHTML=`
            <div class="app ${b?"":"app--intro"}">

                <div class="lang-toggle">
                    ${J.map(n=>`
                        <button
                            class="lang-toggle__btn ${n.code===o?"lang-toggle__btn--active":""}"
                            data-lang="${n.code}">
                            ${n.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="home-eyes" aria-hidden="true">
                        ${N.map(n=>`
                            <span class="home-eye"
                                style="--eye-size:${n.size}px;--eye-left:${n.left}%;--eye-top:${n.top}%;--eye-period:${n.period}s;--eye-delay:${n.delay}s;--eye-alpha:${n.alpha};">
                                <span class="home-eye__open">${E.eye}</span>
                                <span class="home-eye__closed">${E.eyeClosed}</span>
                            </span>
                        `).join("")}
                    </div>

                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${P}</h1>
                    </div>

                    ${s?`
                            <div class="lobby-screen__actions">
                                ${e!=null&&e.hasActiveGame?`
                                        <button class="lobby__btn lobby__btn--continue" id="continueBtn">
                                            ${a.continueGame}
                                        </button>
                                      `:""}
                                <button class="lobby__btn lobby__btn--newgame" id="newGameBtn">
                                    ${a.newGame}
                                </button>
                            </div>
                        `:`
                            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                                ${a.signIn}
                            </button>
                        `}

                </div>
            </div>

            ${s?`<button class="btn-logout btn-icon" id="logoutBtn" title="${s.email}">${E.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${E.maximize}</button>
        `,W(),x(o),b=!0}function W(a){var n,i,m,r,f;t.querySelectorAll(".lang-toggle__btn").forEach(c=>{c.addEventListener("click",()=>{o=c.dataset.lang,le(o),p()})}),(n=document.getElementById("loginBtn"))==null||n.addEventListener("click",Z),(i=document.getElementById("continueBtn"))==null||i.addEventListener("click",()=>{window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`}),(m=document.getElementById("newGameBtn"))==null||m.addEventListener("click",D),(r=document.getElementById("logoutBtn"))==null||r.addEventListener("click",async()=>{await ee(),s=null,e=null,p()}),(f=document.getElementById("fullscreenBtn"))==null||f.addEventListener("click",()=>{var c,l,u;document.fullscreenElement?(u=document.exitFullscreen)==null||u.call(document):(l=(c=document.documentElement).requestFullscreen)==null||l.call(c)})}async function D(){var m;const a=S(o),n=document.getElementById("newGameBtn");if(!n||!(e!=null&&e.id)||e!=null&&e.hasActiveGame&&!await T(a))return;n.disabled=!0;const i=U(a);try{const r=await A(o),{cells:f,startsFirst:c}=Q({size:5,words:r}),l={gameId:((m=crypto.randomUUID)==null?void 0:m.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:f,turn:{team:c,guideLimit:null,dreamwalkerMoves:0},gameOver:!1,winner:null},{error:u}=await h.from("rooms").update({state:l,language:o}).eq("id",e.id);if(u)throw u;window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`}catch(r){console.error("New game failed:",r),window.alert(a.newGameFailed),n.disabled=!1}finally{i()}}await p(),s=await V(),s&&(e=await te(s.id),await p())}export{ge as initHome};

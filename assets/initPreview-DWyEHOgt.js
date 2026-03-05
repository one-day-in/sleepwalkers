import{c as N}from"./boardFactory-CFSUbiZD.js";import{g as y,a as A}from"./renderCell-C7h02id-.js";import{b as j,a as G,g as $,t as h,D as g}from"./fitText-Bd138XTN.js";import{I as i}from"./icons-Bcd_E9sO.js";const F=`
.preview-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    gap: 6px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    overflow-x: auto;
}
.preview-nav__btn {
    flex: 0 0 auto;
    min-height: 34px;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.preview-nav__btn--active {
    border-color: var(--resonant-light);
    box-shadow: 0 0 16px rgba(255, 223, 174, 0.28);
}
.preview-clickable .cell {
    cursor: pointer;
}
.preview-clickable .cell:hover {
    outline: 1px solid rgba(255, 255, 255, 0.3);
    outline-offset: -1px;
}
`,I=[{id:"game",label:"Game"},{id:"guide-resonant",label:"Guide R"},{id:"guide-dissonant",label:"Guide D"},{id:"walker-resonant",label:"Walker R"},{id:"walker-dissonant",label:"Walker D"},{id:"home",label:"Home"}],R=["МРІЯ","ТІНЬ","ХВИЛЯ","ЗІРКА","КРИЛО","МІСЯЦЬ","ВОГОНЬ","ЛІХТАР","ДОРОГА","ПІСНЯ","КАМІНЬ","ВІТЕР","ОЗЕРО","РАНОК","ЛИСТОК","ТУМАН","БЕРЕГ","НЕБО","СТРУНА","КВІТКА","ЖАРА","ДУМКА","СЛОВО","МОРЕ","КЛЮЧ"];function W(){const{cells:t,startsFirst:a}=N({size:5,words:R});return{phase:"game",size:5,cells:t,turn:{team:a,guideLimit:3,dreamwalkerMoves:1},gameOver:!1,winner:null}}function D(t,a=190){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${a}x${a}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(t)}"
        width="${a}" height="${a}" />`}function P(t){const a=h(g),s={"guide-dissonant":!1,"walker-dissonant":!0,"guide-resonant":!0,"walker-resonant":!1};document.body.className=`team-${t.turn.team}`;const{cells:r}=t,_=r.filter(e=>e.role==="resonant").length,o=r.filter(e=>e.role==="dissonant").length,c=r.filter(e=>e.role==="resonant"&&e.revealed).length,d=r.filter(e=>e.role==="dissonant"&&e.revealed).length;return`
    <div class="screen-layout game-layout">
        <header class="screen-header game__header">
            <div class="game__header-bar">
                <button class="btn-back btn-icon">${i.arrowLeft}</button>
                <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                    <button class="game__qr-trigger btn-icon" type="button" aria-label="${a.showQr}">${i.qrCode}</button>
                    <span class="game__qr-caption">${a.connectControllers}</span>
                    <span class="game__eye-indicator" aria-hidden="true">
                        <span class="game__eye game__eye--closed">${i.eyeClosed}</span>
                        <span class="game__eye game__eye--open">${i.eye}</span>
                    </span>
                    <div class="game__qr-modal">
                        <div class="game__qr-modal-content">
                            <p class="game__qr-hint">${a.scanToControl}</p>
                            <div class="game__qr-columns">
                                ${["dissonant","resonant"].map(e=>`
                                    <section class="game__qr-team game__qr-team--${e}">
                                        <h3 class="game__qr-team-title">${$(e,g)}</h3>
                                        <div class="game__qr-cards">
                                            ${[{role:"guide",label:a.guide},{role:"walker",label:a.dreamwalker}].map(n=>`
                                                <article class="game__qr-card game__qr-card--${n.role}">
                                                    <div class="game__qr-code-wrap">${D(`${window.location.origin}/sleepwalkers/${n.role}.html?team=${e}`,130)}</div>
                                                    <p class="game__qr-role">
                                                        <span class="game__qr-role-eye ${s[`${n.role}-${e}`]?"is-connected":""}">
                                                            ${s[`${n.role}-${e}`]?i.eye:i.eyeClosed}
                                                        </span>
                                                        <span class="game__qr-role-text">${n.label}</span>
                                                    </p>
                                                </article>
                                            `).join("")}
                                        </div>
                                    </section>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="screen-body">
            <div class="game preview-clickable">
                <div class="grid grid--5">
                    ${r.map((e,n)=>`
                        <div class="${y(e)}" data-index="${n}">
                            <span class="cell__content">${e.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

        </main>

        <footer class="screen-footer game__footer">
            <div class="game__score">
                <span class="game__score-item game__score-item--resonant ${t.turn.team==="resonant"?"game__score-item--active":""}">${c} / ${_}</span>
                <span class="game__score-item game__score-item--dissonant ${t.turn.team==="dissonant"?"game__score-item--active":""}">${d} / ${o}</span>
            </div>
            <button class="fullscreen-btn btn-icon">${i.maximize}</button>
        </footer>
    </div>`}function f(t,a){const s=h(g);document.body.className="";const{guideLimit:r,team:_}=t.turn,d=_===a&&!(r!==null),e=`${$(a,g)} ${s.guide}`,n=s.chooseLimit,v=Array.from({length:8},(b,p)=>{const m=p+1;return`<button class="guide__num-btn ${r===m?"guide__num-btn--chosen":""}" ${d?"":"disabled"}>${m}</button>`}).join("");return`
    <div class="screen-layout guide-layout">
        <header class="screen-header">
            <div class="guide__header">
                <div class="guide__title ${d?"guide__title--active":"guide__title--muted"}">${e}</div>
                <div class="guide__hint">${n}</div>
                <div class="guide__btns ${d?"guide__btns--active":"guide__btns--muted"}">${v}</div>
            </div>
        </header>

        <main class="screen-body">
            <div class="guide guide--${a} preview-clickable">
                <div class="grid grid--5">
                    ${t.cells.map((b,p)=>`
                        <div class="${A(b)}" data-index="${p}">
                            <span class="cell__content">${b.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer guide__footer"></footer>
    </div>`}function w(t,a){const s=h(g);document.body.className=`team-${t.turn.team}`;const{team:r,guideLimit:_}=t.turn,c=r===a&&_!==null,d=`${$(a,g)} ${s.dreamwalker}`,e=c?`${_} ${s.steps}`:"";return`
    <div class="screen-layout walker-layout">
        <header class="screen-header">
            <div class="walker__header">
                <div class="walker__title ${c?"walker__title--active":"walker__title--muted"}">${d}</div>
                <div class="walker__meta">
                    <div class="${c?"walker__turn-info walker__turn-info--active":"walker__turn-info walker__turn-info--muted"}">${e}</div>
                    <div class="walker__actions">
                        <span class="walker__end-hint">${s.end}</span>
                        <button class="walker__action-btn walker__refresh-btn ${c?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" aria-label="${s.endTurn}" ${c?"":"disabled"}>${i.refreshCw}</button>
                    </div>
                </div>
        </div>
        </header>

        <main class="screen-body">
            <div class="walker walker--${a} preview-clickable">
                <div class="grid grid--5">
                    ${t.cells.map((v,b)=>`
                        <div class="${y(v)}" data-index="${b}">
                            <span class="cell__content">${v.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer walker__footer"></footer>
    </div>`}function z(){return document.body.className="",`
    <div class="app">
        <div class="lang-toggle">
            <button class="lang-toggle__btn lang-toggle__btn--active">UK</button>
            <button class="lang-toggle__btn">EN</button>
        </div>
        <div class="lobby-screen">
            <div class="home-eyes" aria-hidden="true">
                ${((s=16)=>{const b=7.140000000000001,p=19*.34,m=[];for(let l=0;l<4;l+=1)for(let u=0;u<4;u+=1)m.push({r:l,c:u});for(let l=m.length-1;l>0;l-=1){const u=Math.floor(Math.random()*(l+1));[m[l],m[u]]=[m[u],m[l]]}return m.slice(0,s).map(({r:l,c:u},k)=>{const x=8+21*(u+.5),q=12+19*(l+.5),C=Math.round(x+(Math.random()*2-1)*b),E=Math.round(q+(Math.random()*2-1)*p),T=Math.round(24+Math.random()*56),M=(3+Math.random()*2).toFixed(2),L=(Math.random()*2.5).toFixed(2),S=(.3+Math.random()*.5).toFixed(2);return{id:k,size:T,left:C,top:E,period:M,delay:L,alpha:S}})})(16).map(s=>`
                    <span class="home-eye"
                        style="--eye-size:${s.size}px;--eye-left:${s.left}%;--eye-top:${s.top}%;--eye-period:${s.period}s;--eye-delay:${s.delay}s;--eye-alpha:${s.alpha};">
                        <span class="home-eye__open">${i.eye}</span>
                        <span class="home-eye__closed">${i.eyeClosed}</span>
                    </span>
                `).join("")}
            </div>
            <div class="lobby__title-wrap"><h1 class="lobby__title">SLEEPWALKERS</h1></div>
            <div class="lobby-screen__actions">
                <button class="lobby__btn lobby__btn--continue">Continue Game</button>
                <button class="lobby__btn lobby__btn--newgame">New Game</button>
            </div>
        </div>
    </div>
    <button class="btn-logout btn-icon">${i.user}</button>
    <button class="fullscreen-btn btn-icon">${i.maximize}</button>`}function H(){return new URLSearchParams(location.search).get("screen")||"game"}function X(t){const a=new URL(location.href);a.searchParams.set("screen",t),history.pushState({},"",a)}function Q(t){const a=document.createElement("style");a.textContent=F,document.head.appendChild(a);const s=W();function r(){var d;const _=H();let o="";switch(_){case"guide-resonant":o=f(s,"resonant");break;case"guide-dissonant":o=f(s,"dissonant");break;case"walker-resonant":o=w(s,"resonant");break;case"walker-dissonant":o=w(s,"dissonant");break;case"home":o=z();break;case"game":default:o=P(s);break}const c=`
            <div class="preview-nav">
                ${I.map(e=>`
                    <button class="preview-nav__btn ${e.id===_?"preview-nav__btn--active":""}" data-screen="${e.id}">${e.label}</button>
                `).join("")}
            </div>`;t.innerHTML=`${o}${c}`,requestAnimationFrame(()=>{t.querySelectorAll(".cell").forEach(e=>j(e)),G(t)}),(d=t.querySelector(".preview-nav"))==null||d.addEventListener("click",e=>{const n=e.target.closest("[data-screen]");n&&(X(n.dataset.screen),r())}),t.querySelectorAll(".preview-clickable .cell").forEach(e=>{e.addEventListener("click",()=>{const n=Number(e.dataset.index);Number.isNaN(n)||(s.cells[n].revealed=!s.cells[n].revealed,r())})})}window.addEventListener("popstate",r),r()}export{Q as initPreview};

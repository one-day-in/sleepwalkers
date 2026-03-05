import{k as E,o as R,c as I,a as S,R as g,e as C}from"./sanitize-hr0MzWWz.js";import{a as f,t as x}from"./fitText-Bd138XTN.js";import{g as A}from"./renderCell-C7h02id-.js";import{a as N,g as m}from"./url-XkLgVFj3.js";import{I as r}from"./icons-Bcd_E9sO.js";function L(l,s=130){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(l)}"
        width="${s}" height="${s}" />`}async function G(l){const{roomId:s,token:p}=N();if(!s||!p){window.location.href=m()+"/index.html";return}const d=I(s);d.listen(),E(d);const o=S(s);if(await o.init(),!o.getState()){window.location.href=m()+"/index.html";return}function b(t,c){return`${m()}/${t}.html?room=${s}&token=${p}&team=${c}`}function v(t,c,_){const a=x(c),{cells:i}=t,h=i.filter(e=>e.role==="resonant").length,q=i.filter(e=>e.role==="dissonant").length,y=i.filter(e=>e.role==="resonant"&&e.revealed).length,w=i.filter(e=>e.role==="dissonant"&&e.revealed).length,k=[{team:"dissonant",role:"guide",label:a.guide,presenceRole:g.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:a.dreamwalker,presenceRole:g.WALKER_DISSONANT},{team:"resonant",role:"guide",label:a.guide,presenceRole:g.GUIDE_RESONANT},{team:"resonant",role:"walker",label:a.dreamwalker,presenceRole:g.WALKER_RESONANT}];document.body.className=`team-${t.turn.team}`,l.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${r.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                        <button class="game__qr-trigger btn-icon" type="button" aria-label="${a.showQr}">${r.qrCode}</button>
                        <span class="game__qr-caption">${a.connectControllers}</span>
                        <span class="game__eye-indicator" aria-hidden="true">
                            <span class="game__eye game__eye--closed">${r.eyeClosed}</span>
                            <span class="game__eye game__eye--open">${r.eye}</span>
                        </span>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${a.scanToControl}</p>
                                <div class="game__qr-columns">
                                    ${["dissonant","resonant"].map(e=>`
                                        <section class="game__qr-team game__qr-team--${e}">
                                            <h3 class="game__qr-team-title">${e==="dissonant"?a.dissonant:a.resonant}</h3>
                                            <div class="game__qr-cards">
                                                ${k.filter(n=>n.team===e).map(n=>`
                                                    <article class="game__qr-card game__qr-card--${n.role}">
                                                        <div class="game__qr-code-wrap">${L(b(n.role,n.team),130)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${_[n.presenceRole]?"is-connected":""}">
                                                                ${_[n.presenceRole]?r.eye:r.eyeClosed}
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
                <div class="game">
                    <div class="grid grid--5">
                        ${i.map(e=>`
                            <div class="${A(e)}">
                                <span class="cell__content">${C(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--resonant ${t.turn.team==="resonant"?"game__score-item--active":""}">${y} / ${h}</span>
                    <span class="game__score-item game__score-item--dissonant ${t.turn.team==="dissonant"?"game__score-item--active":""}">${w} / ${q}</span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${r.maximize}</button>
            </footer>
        </div>
        `,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=m()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,n,$;document.fullscreenElement?($=document.exitFullscreen)==null||$.call(document):(n=(e=document.documentElement).requestFullscreen)==null||n.call(e)}),requestAnimationFrame(()=>f(l))}function u(){const t=o.getState(),c=o.getLanguage(),_=d.getPresenceState();if(!t){window.location.href=m()+"/index.html";return}if(t.phase==="lobby"){o.startGame().catch(a=>{console.error("Failed to start game:",a)});return}v(t,c,_)}o.subscribe(u),d.onChange(u),R(()=>f(l)),u()}export{G as initGame};

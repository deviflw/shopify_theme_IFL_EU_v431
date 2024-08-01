/* Publish by EComposer at 2024-08-01 12:31:20*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-5wtq3brpat2"]=  window.__ectimmers["ecom-5wtq3brpat2"] || {};
if(!this.settings||!this.$el||this.isLive)return;const e=this.$el;let i=e.querySelectorAll('script:not([type="application/json"])');i.length>0&&i.forEach(function(t){let n=document.createElement("script");n.type="text/javascript",n.innerText=t.innerText,t.src&&(n.src=t.src),e.appendChild(n),t.remove()})

                    });
                    
                        document.querySelectorAll('.ecom-5wtq3brpat2').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5wtq3brpat2', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-exvdxp7asv"]=  window.__ectimmers["ecom-exvdxp7asv"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-exvdxp7asv').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-exvdxp7asv', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-fpr0n6x99l4').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-fpr0n6x99l4', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-wep8u6a2w3').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-wep8u6a2w3', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-5tvm3z62dfs').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-5tvm3z62dfs', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jfokee0yrm7').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jfokee0yrm7', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-jl4dq737zr').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-jl4dq737zr', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-kgvtmy68h3o').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-kgvtmy68h3o', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-t8aiuaraa4c').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-t8aiuaraa4c', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-l51woccg6m').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-l51woccg6m', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-nn92865ncll').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-nn92865ncll', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ajkq0nj6pb').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ajkq0nj6pb', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-q4qw98q662"]=  window.__ectimmers["ecom-q4qw98q662"] || {};
var g,f,b,h,m;let e=this.$el;if(!e)return;let i=this.isLive;const t=(g=this.settings.disable_auto_close)!=null?g:!1,n=(f=this.settings.disable_auto_close__tablet)!=null?f:!1,s=(b=this.settings.disable_auto_close__mobile)!=null?b:!1,o=(h=this.settings.scroll_on_mobile)!=null?h:!1,a=(m=this.settings.disable_effect)!=null?m:!1,r=e.querySelectorAll(".ecom-accordion__item > .ecom-accordion__title");function c(v){const y=v.getBoundingClientRect();return y.top>=0&&y.left>=0&&y.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&y.right<=(window.innerWidth||document.documentElement.clientWidth)}function u(v){let y=window.screen.width;window.EComposer.TEMPLATE_ID||(y=window.innerWidth),v.forEach((w,C)=>{let $=w.parentNode.querySelector(".ecom-accordion__body");!a&&$&&$.classList.add("ecom-effect-accodion"),w.onclick=function(M){M.preventDefault();let L=this.parentNode,S=L.parentNode;const T=S.querySelectorAll(".ecom-accordion__item"),q=S.querySelectorAll(".ecom-accordion__title");if(this.classList&&this.classList.contains("ecom-item-active"))s&&y<768||n&&y>767&&y<1025||t&&y>1024?(this.classList.remove("ecom-item-active"),L.querySelector(".ecom-accordion__body").style.height="0px",L.querySelector(".ecom-accordion__title").classList.remove("ecom-item-active"),L.classList.remove("ecom-item-active")):(T.forEach(P=>l(P)),q.forEach(P=>P.classList.remove("ecom-item-active")));else{s&&y<768||n&&y>767&&y<1025||t&&y>1024||(T.forEach(W=>l(W)),q.forEach(W=>W.classList.remove("ecom-item-active"))),w.classList.add("ecom-item-active"),L.classList.add("ecom-item-active");let P=w.parentNode.querySelector(".ecom-accordion__body");w.parentNode.closest(".ecom-accordion__body")&&(w.parentNode.closest(".ecom-accordion__body").style.height="auto"),P.style.height="auto";let V="auto";a||(V=i?P.clientHeight+"px":"auto",P.classList.add("ecom-effect-accodion")),P.style.height="0px",setTimeout(()=>{P.style.height=V},10)}window.dispatchEvent(new window.Event("renderScroll")),setTimeout(()=>{window.dispatchEvent(new window.Event("renderScroll")),o?c(this)||I():!c(this)&&y>1024&&I()},500);function A(P){let V=0;if(P.offsetParent){do V+=P.offsetTop;while(P=P.offsetParent);return[V]}}function I(P){window.scroll(0,A(e)-100)}}})}function l(v){v.classList.remove("ecom-item-active"),v.querySelector(".ecom-accordion__body").style.height="0"}u(r),window.addEventListener("resize",function(){u(r)})

                    });
                    
                        document.querySelectorAll('.ecom-q4qw98q662').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-q4qw98q662', settings: {"disable_auto_close":false,"disable_effect":false},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-zdufcc4jyh8"]=  window.__ectimmers["ecom-zdufcc4jyh8"] || {};
var e=this.$el;if(e&&this.isLive){var o=e.querySelectorAll(".element-social-link:not(.element-social-link__custom)");o.length&&o.forEach(function(s){var n=s.getAttribute("href")||"#",r=n.replace("{current-link}",location.href);s.setAttribute("href",r)})}

                    });
                    
                        document.querySelectorAll('.ecom-zdufcc4jyh8').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-zdufcc4jyh8', settings: {},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}
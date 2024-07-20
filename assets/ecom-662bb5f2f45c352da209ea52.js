/* Publish by EComposer at 2024-07-20 18:41:44*/
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-9ws1hh95uy"]=  window.__ectimmers["ecom-9ws1hh95uy"] || {};
if(!this.$el)return;const e=this.$el,i=e.querySelector(".ecom-text_view-more-btn"),t=e.querySelector(".ecom-text_view-less-btn"),n=e.querySelector(".text-content.ecom-html");!n||(i&&i.addEventListener("click",()=>{n.classList.remove("ecom-text--is-mark"),n.style.maxHeight="",i.style.display="none",t.style.display=""}),t&&t.addEventListener("click",()=>{n.classList.add("ecom-text--is-mark"),n.style.maxHeight="var(--ecom-text-height)",t.style.display="none",i.style.display=""}))

                    });
                    
                        document.querySelectorAll('.ecom-9ws1hh95uy').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-9ws1hh95uy', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-sszvhipl0f').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-sszvhipl0f', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-mlg3iph98j').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-mlg3iph98j', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-ijsp0xkllei').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-ijsp0xkllei', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-iw7x5x79ik').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-iw7x5x79ik', settings: {},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-y9401arygj').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-y9401arygj', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-taqzts8tt1"]=  window.__ectimmers["ecom-taqzts8tt1"] || {};
var e=this.$el;if(e&&this.isLive){var o=e.querySelectorAll(".element-social-link:not(.element-social-link__custom)");o.length&&o.forEach(function(s){var n=s.getAttribute("href")||"#",r=n.replace("{current-link}",location.href);s.setAttribute("href",r)})}

                    });
                    
                        document.querySelectorAll('.ecom-taqzts8tt1').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-taqzts8tt1', settings: {},isLive: true});
                        });
                    

                })();
            
                (function(){
                    const Func = (function() {
                        'use strict';
window.__ectimmers = window.__ectimmers ||{};window.__ectimmers["ecom-xm6j91rn11"]=  window.__ectimmers["ecom-xm6j91rn11"] || {};
if(!this.$el)return;const e=this.$el,i=this,c=this.settings.layout;let l=e.closest(".core__row--columns");const n=e.querySelector(".ecom-shopify__menu-list--mobile"),s=e.querySelector(".ecom-menu__icon-humber"),m=e.querySelector(".ecom-menu-collapse-close--mobile");let u=e.closest("div.ecom-core.core__block")||"",d=e.closest("div.ecom-column.ecom-core")||"",y=e.querySelectorAll(".ecom-shopify__menu-item--link");for(u&&(u.style.overflow="visible"),y&&n&&y.forEach(function(t){t.addEventListener("click",function(){g()})}),s&&(s.addEventListener("click",v),m.addEventListener("click",g));l;)l.style.zIndex="100",l=l.parentElement.closest(".core__row--columns");function v(){!n||(n.parentNode.style.display="block",n.classList.add("ecom-show"),u&&(u.style.zIndex="100"),d&&(d.style.zIndex="100"),document.querySelector("body").classList.add("ecom-menu-opened"),setTimeout(function(){document.addEventListener("click",p),document.addEventListener("keydown",f)},500))}function p(t){let a=t.target;do{if(a==n)return;a=a.parentNode}while(a);a!=n&&(g(),document.removeEventListener("click",p),document.removeEventListener("keydown",f))}function f(t){(t.isComposing||t.keyCode===27)&&(g(),document.removeEventListener("keydown",f),document.removeEventListener("click",p))}function g(){n.parentNode.style.display="none",n.classList.remove("ecom-show"),u&&(u.style.zIndex="1"),d&&(d.style.zIndex="1"),document.querySelector("body").classList.remove("ecom-menu-opened"),document.removeEventListener("keydown",f),document.removeEventListener("click",p)}let z=e.querySelector('.ecom-shopify__menu-list[data-menu-layout="horizontal"]'),k=null;z&&(k=z.querySelectorAll(".ecom-shopify__menu-item--has-children>.ecom-menu_item>.ecom-element--menu_title")),k&&k.forEach(function(t){t.addEventListener("click",function(a){a.preventDefault()})});function S(){var t=e.querySelectorAll(".ecom-shopify__menu-list .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item"),a=e.querySelectorAll(".ecom-shopify__menu-list--mobile .ecom-shopify__menu-item--has-children > .ecom-menu_item, .ecom-shopify__menu-list--mobile .ecom-shopify__menu-child-link-item--has-children > .ecom-menu_item");if(!!t){var r,b="false",w=e.querySelector(".ecom-shopify__menu-wrapper");if(w&&w.dataset.showAll)var b=w.dataset.showAll;for(r=0;r<t.length;r++){let x=function(o){let _=o.nextElementSibling,h=null;if(o.classList.contains("ecom-item-active")){if(o.classList.remove("ecom-item-active"),_){_.style.maxHeight=null;var $=_.querySelectorAll(".ecom-menu_item");$&&$.forEach(L=>{var E=L.nextElementSibling;E&&(E.style.maxHeight=null),L.classList.remove("ecom-item-active")}),h=o.closest(".ecom-shopify__menu-sub-menu"),h&&(h.style.maxHeight=parseInt(h.style.maxHeight)-_.scrollHeight+"px")}}else o.classList.add("ecom-item-active"),_&&(h=o.closest(".ecom-shopify__menu-sub-menu"),h&&(h.style.maxHeight=parseInt(h.style.maxHeight)+_.scrollHeight+"px"),_.style.maxHeight=_.scrollHeight+"px")};c==="horizontal"&&!i.isLive?t[r].addEventListener("click",function(o){o.preventDefault()}):c==="horizontal"&&i.isLive?t[r].addEventListener("click",function(o){o.stopPropagation()}):(c==="vertical"||!i.isLive)&&(b&&b=="true"&&x(t[r]),t[r].addEventListener("click",function(o){o.preventDefault(),x(this)})),a[r]&&a[r].addEventListener("click",function(o){o.preventDefault(),x(this)})}}}S()

                    });
                    
                        document.querySelectorAll('.ecom-xm6j91rn11').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-xm6j91rn11', settings: {"layout":"vertical"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-1js5rqford9').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-1js5rqford9', settings: {"layout":"vertical"},isLive: true});
                        });
                    
                        document.querySelectorAll('.ecom-bs5s79f7ml6').forEach(function(el){
                            Func.call({$el: el, id: 'ecom-bs5s79f7ml6', settings: {"layout":"vertical"},isLive: true});
                        });
                    

                })();
            
;try{
 
} catch(error){console.error(error);}
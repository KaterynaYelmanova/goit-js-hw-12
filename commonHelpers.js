import{a as L,i as l,S as v}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();async function p(r,o){try{const s={q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o,key:"43144570-5608d834234b71965ee211368"};return(await L.get("https://pixabay.com/api/?",{params:s})).data}catch(s){console.error("Помилка запиту:",s.message)}}function g(r){d.innerHTML="";const o=r.hits;o.length==0&&l.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const s=o.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}" 
            data-source="${e.largeImageURL}" 
            alt="${e.tags}"
            />
            <ul class="gallery-description">
            <li><h3>Likes</h3><p>${e.likes}</p></li>
            <li><h3>Views</h3><p>${e.views}</p></li>
            <li><h3>Comments</h3><p>${e.comments}</p></li>
            <li><h3>Downloads</h3><p>${e.downloads}</p></li>
            </ul>
            </a>
            </li>`).join("");d.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let t=new v(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const d=document.querySelector("ul.gallery");let n="",c=1,y=0;const w=15,b=()=>{d.innerHTML+='<span class="loader"></span>'},a=document.getElementById("search-input");a.addEventListener("input",r=>{n=a.value.trim()});const f=document.getElementById("search-button");f.addEventListener("click",async()=>{if(n&&n.length>=3){b(),c=1;try{const r=await p(n,c);y=Math.ceil(r.totalHits/w),g(r);const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"}),a.value="",m()}catch{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.value=""}}else l.info({title:"Info",message:"Please enter a valid search query with at least 3 characters.",position:"topRight"})});a.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),f.click())});const h=document.querySelector(".next-page-btn");h.addEventListener("click",async()=>{c+=1;try{const r=await p(n,c);g(r),a.value="",m()}catch{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.value=""}});function E(){h.classList.remove("hidden")}function R(){h.classList.add("hidden")}function m(){c>=y?(R(),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):E()}
//# sourceMappingURL=commonHelpers.js.map

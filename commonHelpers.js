import{a as d,i as c,S as h}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();async function f(r){r=encodeURIComponent(r);try{return(await d.get(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).data}catch(s){console.error("Помилка запиту:",s.message)}}function g(r){u.innerHTML="";const s=r.hits;s.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const a=s.map(e=>`<li class="gallery-item">
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
            </li>`).join("");u.insertAdjacentHTML("beforeend",a);const i={captionsData:"alt"};let t=new h(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const u=document.querySelector("ul.gallery");let n="";const m=()=>{u.innerHTML+='<span class="loader"></span>'},o=document.getElementById("search-input");o.addEventListener("input",r=>{n=o.value.trim()});const p=document.getElementById("search-button");p.addEventListener("click",async()=>{if(n&&n.length>=3){m();try{const r=await f(n);g(r),o.value=""}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.value=""}}else c.info({title:"Info",message:"Please enter a valid search query with at least 3 characters.",position:"topRight"})});o.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),p.click())});
//# sourceMappingURL=commonHelpers.js.map

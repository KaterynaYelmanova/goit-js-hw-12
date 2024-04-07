import{i as c,S as p}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();function d(r){return r=encodeURIComponent(r),fetch(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(o.ok)return o.json();throw new Error(o.status)}).catch(o=>{console.error("Помилка запиту:",o.message)})}function f(r){u.innerHTML="";const o=r.hits;o.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const l=o.map(e=>`<li class="gallery-item">
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
            </li>`).join("");u.insertAdjacentHTML("beforeend",l);const i={captionsData:"alt"};let t=new p(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const u=document.querySelector("ul.gallery");let n="";const g=()=>{u.innerHTML+='<span class="loader"></span>'},s=document.getElementById("search-input");s.addEventListener("input",r=>{n=s.value.trim()});const h=document.getElementById("search-button");h.addEventListener("click",()=>{n&&n.length>=3?(g(),d(n).then(r=>{f(r),s.value=""}).catch(r=>{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),s.value=""})):c.info({title:"Info",message:"Please enter a valid search query with at least 3 characters.",position:"topRight"})});s.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),h.click())});
//# sourceMappingURL=commonHelpers.js.map

import{a as h,i as c,S as f}from"./assets/vendor-95dc692e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();let p=1;async function g(r){r=encodeURIComponent(r);try{const s=await h.get(`https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`);return p++,s.data.totalHits===0&&(p=1),s.data}catch(s){console.error("Помилка запиту:",s.message)}}function m(r){u.innerHTML="";const s=r.hits;s.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const n=s.map(e=>`<li class="gallery-item">
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
            </li>`).join("");u.insertAdjacentHTML("beforeend",n);const i={captionsData:"alt"};let t=new f(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const u=document.querySelector("ul.gallery");let a="";const y=()=>{u.innerHTML+='<span class="loader"></span>'},o=document.getElementById("search-input");o.addEventListener("input",r=>{a=o.value.trim()});const d=document.getElementById("search-button");d.addEventListener("click",async()=>{if(a&&a.length>=3){y();try{const r=await g(a);m(r),o.value=""}catch{c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.value=""}}else c.info({title:"Info",message:"Please enter a valid search query with at least 3 characters.",position:"topRight"})});o.addEventListener("keypress",r=>{r.key==="Enter"&&(r.preventDefault(),d.click())});
//# sourceMappingURL=commonHelpers.js.map

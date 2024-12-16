document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent,e.replaceChild(t,e.firstChild),t.addEventListener("click",function(t){var l=e.querySelector("ul");l&&(l.style.display="none"===l.style.display?l.style.display="block":l.style.display="none")})});
//# sourceMappingURL=index.a70a1c11.js.map

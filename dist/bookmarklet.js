// Copy this to your URL bar:
javascript:!function(){function n(e){if(e.children.length>0)for(var l=0;l<e.children.length;l++)n(e.children[l]);else e.textContent=t(e.textContent)}function t(n){for(var t=n.split(" "),l=0;l<t.length;l++)t[l].length>3&&Math.random()<.1&&(t[l]=e(t[l]));return t.join(" ")}function e(n){for(var t=n[0],e=n.slice(1,n.length-1).split("");e.length;){var l=Math.floor(Math.random()*e.length),r=e.splice(l,1);t+=r}return t+=n[n.length-1]}window.setInterval(function(){n(document)},50)}();
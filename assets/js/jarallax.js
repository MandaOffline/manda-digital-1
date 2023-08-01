/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.0.0
 * Author  : _nK http://nkdev.info
 * GitHub  : https://github.com/nk-o/jarallax
 */(function(e){"use strict";typeof define=="function"&&define.amd?define(["jquery"],e):typeof exports!="undefined"?module.exports=e(require("jquery")):e(jQuery)})(function(e){Date.now||(Date.now=function(){return(new Date).getTime()}),window.requestAnimationFrame||function(){"use strict";for(var e,n,s=["webkit","moz"],t=0;t<s.length&&!window.requestAnimationFrame;++t)e=s[t],window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"];(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame)&&(n=0,window.requestAnimationFrame=function(e){var t=Date.now(),s=Math.max(n+16,t);return setTimeout(function(){e(n=s)},s-t)},window.cancelAnimationFrame=clearTimeout)}();var n,s=function(){for(var t="transform WebkitTransform MozTransform OTransform msTransform".split(" "),n=document.createElement("div"),e=0;e<t.length;e++)if(n&&n.style[t[e]]!==void 0)return t[e];return!1}(),o=function(){if(!window.getComputedStyle)return!1;var t,n,e=document.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};(document.body||document.documentElement).insertBefore(e,null);for(n in s)e.style[n]!==void 0&&(e.style[n]="translate3d(1px,1px,1px)",t=window.getComputedStyle(e).getPropertyValue(s[n]));return(document.body||document.documentElement).removeChild(e),t!==void 0&&t.length>0&&t!=="none"}(),t=function(){var t=0;function n(n,s){var i,o=this;o.$item=e(n),o.defaults={speed:.5,imgSrc:null,imgWidth:null,imgHeight:null,enableTransform:!0,zIndex:-100},i=o.$item.data("jarallax")||{},o.options=e.extend({},o.defaults,i,s),o.options.speed=Math.min(1,Math.max(0,parseFloat(o.options.speed))),o.instanceID=t++,o.image={src:o.options.imgSrc||null,$container:null,$item:null,width:o.options.imgWidth||null,height:o.options.imgHeight||null},o.initImg()&&(o.initEvents(),o.init())}return n}();t.prototype.initImg=function(){var e=this;return e.image.src===null&&(e.image.src=e.$item.css("background-image").replace(/^url\(['"]?/g,"").replace(/['"]?\)$/g,"")),!!e.image.src&&e.image.src!=="none"},t.prototype.init=function(){var t=this;t.image.$container=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden","pointer-events":"none",transition:"transform linear -1ms, -webkit-transform linear -1ms"}).prependTo(t.$item),t.image.$item=t.image.$container.clone().css({position:"fixed","pointer-events":"none","background-position":"50% 50%","background-repeat":"no-repeat no-repeat","background-image":"url("+t.image.src+")"}).prependTo(t.image.$container),t.image.$container.css({visibility:"hidden","z-index":t.options.zIndex}).attr("id","jarallax-container-"+t.instanceID).prependTo(t.$item),t.getImageSize(t.image.src,function(n,s){t.image.width=n,t.image.height=s,window.requestAnimationFrame(e.proxy(t.coverImage,t)),window.requestAnimationFrame(e.proxy(t.clipContainer,t)),window.requestAnimationFrame(e.proxy(t.onScroll,t)),t.$item.data("JarallaxOriginalStyles",t.$item.attr("style")),setTimeout(function(){t.$item.css({"background-image":"none","background-attachment":"scroll","background-size":"auto"})},0)})},t.prototype.initEvents=function(){var n,t=this;e(window).on("scroll.jarallax.jarallax-"+t.instanceID,function(){window.requestAnimationFrame(e.proxy(t.onScroll,t))}),e(window).on("resize.jarallax.jarallax-"+t.instanceID+" load.jarallax.jarallax-"+t.instanceID+"",function(){clearTimeout(n),n=setTimeout(function(){window.requestAnimationFrame(function(){t.coverImage(),t.clipContainer(),t.onScroll()})},100)})},t.prototype.destroy=function(){var t=this;e("head #jarallax-clip-"+t.instanceID).remove(),e(window).off(".jarallax-"+t.instanceID),t.$item.attr("style",t.$item.data("JarallaxOriginalStyles")),t.$item.removeData("JarallaxOriginalStyles"),t.image.$container.remove(),delete t.$item[0].jarallax},t.prototype.getImageSize=function(e,t){if(!e||!t)return!1;var n=new Image;n.onload=function(){t(n.width,n.height)},n.src=e},t.prototype.clipContainer=function(){var s,t=this,o=t.image.$container.outerWidth(!0),i=t.image.$container.outerHeight(!0),n=e("head #jarallax-clip-"+t.instanceID);n.length||(e("head").append('<style type="text/css" id="jarallax-clip-'+t.instanceID+'"></style>'),n=e("head #jarallax-clip-"+t.instanceID)),s=["#jarallax-container-"+t.instanceID+" {","   clip: rect(0px "+o+"px "+i+"px 0);","   clip: rect(0px, "+o+"px, "+i+"px, 0);","}"].join(`
`),n[0].styleSheet?n[0].styleSheet.cssText=s:n.html(s)},t.prototype.coverImage=function(){if(t=this,!t.image.width||!t.image.height)return;var t,i,a,r=t.image.$container.outerWidth(!0),c=t.image.$container.outerHeight(!0),l=e(window).outerWidth(!0),d=e(window).outerHeight(!0),s=t.image.width,o=t.image.height,n={width:Math.max(l,r)*Math.max(t.options.speed,1),height:Math.max(d,c)*Math.max(t.options.speed,1)};n.width/n.height>s/o?(i=n.width*o/s,n.backgroundSize=n.width+"px "+i+"px"):(a=n.height*s/o,n.backgroundSize=a+"px "+n.height+"px"),t.image.$item.css(n)},t.prototype.onScroll=function(){if(t=this,!t.image.width||!t.image.height)return;var t,i,a=e(window).scrollTop(),c=e(window).height(),r=t.$item.offset().top,l=t.$item.outerHeight(!0),n={visibility:"visible",backgroundPosition:"50% 50%"};if(r+l<a||r>a+c)return;i=-(a-r)*t.options.speed,s&&t.options.enableTransform?(n.transform="translateY("+i+"px)",o&&(n.transform="translate3d(0, "+i+"px, 0)")):n.backgroundPosition="50% "+Math.round(i)+"px",t.image.$item.css(n)},n=e.fn.jarallax,e.fn.jarallax=function(){var o,n=this,s=arguments[0],i=Array.prototype.slice.call(arguments,1),a=n.length,e=0;for(e;e<a;e++)if(typeof s=="object"||typeof s=="undefined"?n[e].jarallax=new t(n[e],s):o=n[e].jarallax[s].apply(n[e].jarallax,i),typeof o!="undefined")return o;return this},e.fn.jarallax.noConflict=function(){return e.fn.jarallax=n,this},e(document).on("ready.data-jarallax",function(){e("[data-jarallax]").jarallax()})})
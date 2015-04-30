/*
 CSS Image Gallery
 Version: 1.1.5
 (c) 2013 DMXzone.com
 @build 03-07-2013 18:53:44
*/
(function(d){function k(b){var a=b||window.event,g=[].slice.call(arguments,1),c=0,e=0,h=0,f=0,f=0,b=d.event.fix(a);b.type="mousewheel";a.wheelDelta&&(c=a.wheelDelta);a.detail&&(c=-1*a.detail);a.deltaY&&(c=h=-1*a.deltaY);a.deltaX&&(e=a.deltaX,c=-1*e);void 0!==a.wheelDeltaY&&(h=a.wheelDeltaY);void 0!==a.wheelDeltaX&&(e=-1*a.wheelDeltaX);f=Math.abs(c);if(!j||f<j)j=f;f=Math.max(Math.abs(h),Math.abs(e));if(!i||f<i)i=f;a=0<c?"floor":"ceil";c=Math[a](c/j);e=Math[a](e/i);h=Math[a](h/i);g.unshift(b,c,e,h);
return(d.event.dispatch||d.event.handle).apply(this,g)}var l=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],g="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],j,i;if(d.event.fixHooks)for(var m=l.length;m;)d.event.fixHooks[l[--m]]=d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var b=g.length;b;)this.addEventListener(g[--b],k,!1);else this.onmousewheel=k},teardown:function(){if(this.removeEventListener)for(var b=
g.length;b;)this.removeEventListener(g[--b],k,!1);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(b){return b?this.bind("mousewheel",b):this.trigger("mousewheel")},unmousewheel:function(b){return this.unbind("mousewheel",b)}})})(jQuery);

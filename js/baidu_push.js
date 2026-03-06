// 今日头条自动推送脚本
(function(){
var el = document.createElement("script");
el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?b0009362b58aaa3f70c2cd87e17f1a4e2d0d7dab3dc7c406028f95003f2fe34565e0a2ada1d5e86b11e7de7c1a83287d04743a02fd1ee8dd8558a8cad50e91cb354f8c6f3f78e5fd97613c481f678e6d";
el.id = "ttzz";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(el, s);
})(window);
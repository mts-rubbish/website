var posts=["posts/26758.html","posts/60079.html","posts/33380.html","posts/6890.html","posts/10822.html","posts/31539.html","posts/43751.html","posts/44190.html","posts/62288.html","posts/6147.html","posts/57354.html","posts/60544.html","posts/16986.html","posts/13943.html","posts/13619.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
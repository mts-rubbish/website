var posts=["posts/43751.html","posts/62288.html","posts/6147.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
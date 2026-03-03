var posts=["2024/04/20/slice/","2026/03/03/投稿说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
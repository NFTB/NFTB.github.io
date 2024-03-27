var posts=["2024/03/14/c-多线程/","2024/03/27/LRU-K-15445p1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
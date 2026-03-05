// 百度自动推送脚本
(function(){
    // 创建script标签
    var bp = document.createElement('script');
    // 根据当前协议选择对应的推送脚本地址
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    // 插入到页面第一个script标签前面
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
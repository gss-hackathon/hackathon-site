
    const isDemoSite = false;
    // 為迴避 CDN 快取，採用動態載入的方式
    function loadScript(url, callback) {
        var scriptTag = document.createElement('script');
        scriptTag.src = url + '?_=' + new Date().getTime();
        scriptTag.onload = function () {
            if (callback) {
                callback();
            }
        };
        document.head.appendChild(scriptTag);
    }
    loadScript('https://cai.gss.com.tw/webchat/caiwebchat-config.js', function () {
        loadScript('https://cai.gss.com.tw/webchat/caiwebchat-loader.js');
        loadScript('https://cai.gss.com.tw/webchat/bots/baseinfo/custom.js');
    });

    // 頁面剛載入時 `CaiWebChat.init` 仍會是 `undefined`，
    // 故此處採用宣告指定 handler 的方式，於載入完畢後自動呼叫
    window.onCaiWebChatLoaded = function () {
        CaiWebChat.init({ botId: 'baseinfo' });
        loadScript('https://cai.gss.com.tw/webchat/bots/baseinfo/customWebChatLoaded.js');
    };

    // WebChat 連線完要做的事情
    window.onConnectFulfill = function () {
        loadScript('https://cai.gss.com.tw/webchat/bots/baseinfo/customConnectFulfill.js');
    }


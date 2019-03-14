document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnRun').addEventListener('click', function() {

        chrome.tabs.query({
            active:true,
            windowType:"normal", 
            currentWindow: true
        },
        function(tabs)
        {
            var tabID = tabs[0].id;
            chrome.extension.getBackgroundPage().console.log(tabs[0]);
            chrome.tabs.sendMessage(tabID, {text: 'run'}, chrome.extension.getBackgroundPage().console.log);
        });
    });
});
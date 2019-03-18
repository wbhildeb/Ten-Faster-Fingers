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
            window.close();
            chrome.extension.getBackgroundPage().console.log("still run tho");
            chrome.tabs.sendMessage(tabID, {text: 'run'}, chrome.extension.getBackgroundPage().console.log);
        });
    });
});
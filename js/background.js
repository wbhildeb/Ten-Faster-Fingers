chrome.runtime.onInstalled.addListener(function(details)
{
    var ruleOnTFF = {
        conditions: [
            new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: '10fastfingers.com', schemes: ['https'] },
                css: ["input[id='inputfield']"]
            })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
    }

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function()
    {
        chrome.declarativeContent.onPageChanged.addRules([ruleOnTFF]);
    });

});
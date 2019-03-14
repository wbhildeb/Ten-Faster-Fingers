chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    console.log('aklsjdj');
    if (msg.text === 'run') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument

        var input = document.getElementById('inputfield');

        // $(document).on('focus', 'inputfield', function(e){
        //     // set field here
        //     $(this).val("adsdads")
        // });

        $('#inputfield').val("fgg");

        sendResponse("hello");
    }
});
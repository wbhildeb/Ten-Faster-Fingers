
var parseURL = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l;
};

const STATES = 
{
    "TenFastFingers":
    {
        "test": 101,
        "multiplayer": 102,
        "anticheat": 103
    }
}

const getState = function()
{
    switch (document.domain)
    {
        case "10fastfingers.com":
        {
            if (document.URL.includes('typing-test') ||
                document.URL.includes('typingtest')
            ) {
                return STATES.TenFastFingers.test;
            }
            else if (document.URL.includes('multiplayer'))
            {
                return STATES.TenFastFingers.multiplayer;
            }
            else if (document.URL.includes('anticheat'))
            {
                return STATES.TenFastFingers.anticheat;
            }
            break;
        }
    }

    if (!state) return null;
}


document.onkeydown = function(event)
{
    switch (getState())
    {
        case STATES.TenFastFingers.test:
        {
            if (event.key == " ")
            {
                console.log("Ready for typing test hack...");

                var selectedWord = $('span[wordnr][class="highlight"]').text();
                var inputfield = $('#inputfield');
                inputfield.val(selectedWord);
                inputfield.focus();
            }

            break;
        }
        case STATES.TenFastFingers.multiplayer:
        {
            console.log("Ready for multiplayer hack...");
            break;
        }
        case STATES.TenFastFingers.anticheat:
        {
            var startButton = $('#start-btn');
            var inputfield = $('#word-input');
            var submitButton = $('#submit-anticheat');

            javascript:start_test();

            // startButton.click();

            // do {
            //     var image = $('#word-img > [img]')[0];
            // } while (!image);
            
            console.log("Found image... extracting plaintext now...");

            Tesseract
                .recognize(image)
                .then(function(result){
                    var text = result.text;
                    text.replace('\n', ' ');
                    text.replace(/[^a-z ]/gi, '');
                    inputfield.val(text);
                    submitButton.click();
                });
            break;
        }
        default:
        {
            console.log("No site to act on");
            break;
        }
    }
}
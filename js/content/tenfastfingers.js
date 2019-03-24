$(document).ready(() =>
{
    if (
        document.URL.includes('10fastfingers.com/typing-test/') ||
        document.URL.includes('10fastfingers.com/advanced-typing-test/') ||
        document.URL.includes('10fastfingers.com/widgets/typingtest') ||
        document.URL.includes('10fastfingers.com/competition/'))
    {
        cheat_typetest();
    }
    else if (document.URL.includes('10fastfingers.com/multiplayer'))
    {
        cheat_multiplayer();
    }
    else if (document.URL.includes('10fastfingers.com/anticheat/view/'))
    {
        cheat_anticheat();
    }
});


const cheat_typetest = function()
{
    var inputfield = $('#inputfield');
    inputfield.attr('placeholder', 'Spam spacebar to type real fast...');
    inputfield.keydown((event) =>
        {
            if (event.key == " ")
            {
                var selectedWord = $('span[wordnr].highlight, span[wordnr].highlight-wrong').text();
                inputfield.val(selectedWord);
                inputfield.focus();
            }
        }
    );
}

const cheat_multiplayer = function()
{

}

const cheat_anticheat = function()
{
    var inputfield = $('#word-input');
    var submitbutton = $('#submit-anticheat');
    inputfield.attr('placeholder', 'Click start, and ten faster fingers will handle the typing for you...');

    $('#start-btn').click(() =>
    {
        $('#word-img > img').on('load', () =>
        {
            var image = $('#word-img > img')[0];
            Tesseract
                    .recognize(image)
                    .then(function(result){
                        var text = result.text;
                        console.log(text);
                        inputfield.val(text);
                        submitbutton.click();
                    });
        });
    });
}
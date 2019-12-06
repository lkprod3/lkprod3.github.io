var language = 'br'
var langfile = 'dependencies/text_br.json'

$(document).ready(function(){
    $("#lang_en").click(function(){
        var language = 'en';
        Cookies.set('language', 'en');
});
$("#lang_br").click(function() {
    var language = 'br';
    Cookies.set('language', 'br');
});
checkCookieValues();
});

function checkCookieValues(){
    if (Cookies.get('name')=='en') {
        var langfile = 'dependencies/text_br.json';
    }
    if (Cookies.get('name')=='br') {
        var langfile = 'dependencies/text_en.json';
    }
}
$(function menutext() {
    var site_text = [];
    $.getJSON((langfile), function(data) {
        $.each(data, function(i, f) {
           var texto1 = '<span>' + f.design + '</span>'
            $(texto1).appendTo(".text-1");
            var texto2 = '<span>' + f.traducao + '</span>'
             $(texto2).appendTo(".text-2");
             var texto3 = '<span>' + f.musica + '</span>'
              $(texto3).appendTo(".text-3");
        });
    });
});
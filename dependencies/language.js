var language
var langfile

if (Cookies.get('language')== null) {
    var language = 'br';
    var langfile = 'dependencies/text_br.json';
}
if (Cookies.get('language')=='br') {
        var langfile = 'dependencies/text_br.json';
        $("#lang_br").hide()
    }
    if (Cookies.get('language')=='en') {
        var langfile = 'dependencies/text_en.json';
        $("#lang_en").hide()
    }

$(document).ready(function(){
    $("#lang_en").click(function(){
        var language = 'en';
        Cookies.set('language', 'en');
});
$("#lang_br").click(function() {
    var language = 'br';
    Cookies.set('language', 'br');
});
});


$(function menutext() {
    var site_text = [];
    $.getJSON((langfile), function(data) {
        $.each(data, function(i, f) {
            var titletext = '<span>' + f.nome + '</span>'
            $(titletext).appendTo(".title-text")
           var texto1 = '<span>' + f.design + '</span>'
            $(texto1).appendTo(".text-1");
            var texto2 = '<span>' + f.traducao + '</span>'
             $(texto2).appendTo(".text-2");
             var texto3 = '<span>' + f.musica + '</span>'
              $(texto3).appendTo(".text-3");
              var t02_text = f.tooltip_project_t2
              $(".project-t2").attr('data-original-title', t02_text);
              var t03_text = f.tooltip_project_t3
              $(".project-t3").attr('data-original-title', t03_text)
        });
    });
});

$('[data-toggle="tooltip"]').tooltip({
    delay: {
        show: 220,
        hide: 0
    }
});
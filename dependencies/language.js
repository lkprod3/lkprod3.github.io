var language
var langfile
var langfile_projects

if (Cookies.get('language')== null) {
    var language = 'br';
    var langfile = 'dependencies/text_br.json';
    var langfile_projects = 'dependencies/projects_br.json';
}
if (Cookies.get('language')=='br') {
        var langfile = 'dependencies/text_br.json';
        var langfile_projects = 'dependencies/projects_br.json';
        $("#lang_br").hide()
    }
    if (Cookies.get('language')=='en') {
        var langfile = 'dependencies/text_en.json';
        var langfile_projects = 'dependencies/projects_br.json';
        $("#lang_en").hide()
    }

$(document).ready(function(){
    $("#lang_en").click(function(){
        Cookies.set('language', 'en');
});
$("#lang_br").click(function() {
    Cookies.set('language', 'br');
});
});



$(function menutext() {
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
        });
    });
});

$(function projectcard() {
    $.getJSON((langfile_projects), function(data) {
        $.each(data, function(a, b) {
            var projectcards = '<div class="project-' + b.id + ' project" data-toggle="tooltip" data-placement="bottom" data-html="true" title="' + b.tooltip + '" alt="' + b.name + '"></div>'
            if ((b.id).indexOf('t') == -1) {
            $(projectcards).appendTo("#design-projects-inner");
            } else if ((b.id).indexOf('d') == -1) {
                $(projectcards).appendTo("#translation-projects-inner");
            }
            $('.project-' + b.id).css('background-image', 'url("' + b.cover_img + '")');
            $('[data-toggle="tooltip"]').tooltip({
                    delay: {
                        show: 220,
                        hide: 0
                    }
                });
            });
        });
    });
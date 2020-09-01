var language
var langfile
var langfile_projects

if (Cookies.get('language')== null) {
    var language = 'br';
    var langfile = 'dependencies/text_br.json';
    var langfile_projects = 'dependencies/projects_br.json';
    var date_prefix = 'Originalmente concluído em '
    var roles_prefix = 'Cargos no projeto:'
    var desc_prefix = 'Descrição do projeto:'
    var returnbtn = 'Voltar'
}
if (Cookies.get('language')=='br') {
        var langfile = 'dependencies/text_br.json';
        var langfile_projects = 'dependencies/projects_br.json';
        var date_prefix = 'Originalmente concluído em '
        var roles_prefix = 'Cargos no projeto:'
        var desc_prefix = 'Descrição do projeto:'
        var returnbtn = 'Voltar'
        $("#lang_br").hide()
    }
    if (Cookies.get('language')=='en') {
        var langfile = 'dependencies/text_en.json';
        var langfile_projects = 'dependencies/projects_en.json';
        var date_prefix = 'Originally finished in '
        var roles_prefix = 'Roles in the project:'
        var desc_prefix = 'Project description:'
        var returnbtn = 'Back'
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
            var textoAbout = '<div class="project-desc-text-body bright-pink mx-5"><p>' + f.about_text + '</p></div>'
            $(textoAbout).appendTo(".about-page-inner");
            var titletext = '<span>' + f.nome + '</span>'
            $(titletext).appendTo(".title-text")
           var texto1 = '<span>' + f.design + '</span>'
            $(texto1).appendTo(".text-1");
            var texto2 = '<span>' + f.traducao + '</span>'
             $(texto2).appendTo(".text-2");
             var texto3 = '<span>' + f.sobre + '</span>'
              $(texto3).appendTo(".text-3");
        });
    });
});

$(function projectcard() {
    var d = 0
    var t = 0
    $.getJSON((langfile_projects), function(data) {
        $.each(data, function(a, b) {
            var projectcards = '<div class="project-' + b.id + ' project" data-toggle="tooltip" data-placement="bottom" data-html="true" title="' + b.tooltip + '" alt="' + b.name + '"></div>'
            if ((b.id).indexOf('t') == -1) {
                d++
            $(projectcards).appendTo("#design-projects-inner");
            if (d % 5 == 0) {
                var w100 = '<div class="w-100 my-5"></div>'
                $(w100).appendTo("#design-projects-inner");
                if(!$("#page-bottom").hasClass("page-bottom")) {
                $("#page-bottom").addClass("page-bottom")
                }
            }
            } else if ((b.id).indexOf('d') == -1) {
                t++
                $(projectcards).appendTo("#translation-projects-inner");
                if (t % 5 == 0) {
                    var w100 = '<div class="w-100 my-5"></div>'
                    $(w100).appendTo("#translation-projects-inner");
                    if(!$("#page-bottom").hasClass("page-bottom")) {
                    $("#page-bottom").addClass("page-bottom")
                    }
                }   
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

    $(function clicky() {
        $.getJSON((langfile_projects), function(data) {
            $.each(data, function(l, m) {
            $('.project-' + m.id).click(function () {
                $(this).toggleClass("activated");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                $("#everythinghome").hide("drop", { direction: "up"}, 450);
                window.setTimeout(  
                    function() {  
                         $('.project-' + m.id).toggleClass("activated");
                    },  
                    455
                );
                var scrollablecontent = m.scrollable_column_content
                $(".project-desc-content").html(scrollablecontent)
                var textcontent = '<div class="container-fluid d-flex ml-3 back-button"><?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" class="svg-icon-back mt-3"><path d="m472.75 190.93h-238.93l46.08-46.08c15.36-15.36 15.36-40.96 0-56.32l-35.84-37.547c-15.36-15.36-40.96-15.36-56.32 0l-175.79 175.79c-6.827 8.534-11.947 18.774-11.947 29.014 0 11.947 3.413 22.186 11.947 30.72l175.79 174.08c6.827 6.827 17.067 11.947 29.013 11.947 10.24 0 20.48-3.413 27.307-11.947l35.84-35.84c15.36-15.36 15.36-40.96 0-56.32l-49.494-47.786h242.35c22.186 0 39.253-18.774 39.253-40.96v-49.493c0-22.187-17.067-39.254-39.253-39.254zm6.826 88.747h-1.706c0 3.413-3.413 6.827-5.12 6.827h-283.31c-6.827 0-13.653 3.413-15.36 10.24-3.413 6.827-1.707 13.653 3.413 18.774l78.507 76.8c1.707 1.707 1.707 5.12 0 8.534l-35.84 35.84c-1.707 1.707-5.12 3.413-8.534 0l-175.79-175.79c-1.706-1.706-1.706-3.413-1.706-5.119s0-3.413 1.706-5.12l175.79-175.79c1.707-1.706 3.413-1.706 3.413-1.706 1.707 0 3.413 0 3.413 1.706l37.547 35.839c1.707 1.706 1.707 6.827 0 8.533l-75.093 76.8c-5.12 5.12-6.827 11.946-3.413 18.774 3.413 6.827 8.534 10.24 15.36 10.24h281.6c1.706 0 5.12 0 5.12 3.413v51.201z"/></svg><h2 class="dark-purple ml-3 mb-0 align-middle">' + returnbtn + '</h2></div><hr class="page-desc-divider-top mt-3"><h2 class="display-font-bigger bright-pink-outline pink-glow ml-5">' + m.name + '</h2><hr class="page-desc-divider"><div class="project-desc-text-body bright-pink mx-5"><p><span class="smallertext">' + date_prefix + m.date + '</span><br><br><span class="smallertext">' + roles_prefix + '</span><br>' + m.roles + '<br><br><span class="smallertext">' + desc_prefix + '</span><br>' + m.desc + '</p>'
                $(".project-desc-text").html(textcontent)
                $("#projectdescriptions").delay(100).show("slide", { direction: "down", easing: "easeOutQuad"}, 500);
                $(".project-desc-content").css('position', 'inherit');
            });
        });
    });
});
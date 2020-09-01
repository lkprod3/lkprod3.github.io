var current_tab = "design"
$(".text-1").addClass("current-selection")

$(".menu-1").mouseover(function(){
         $(".selectbar1").css('margin-left', '0%');
     });
     $(".menu-1").mouseout(function() {
         if (current_tab == "design") {
             $(".selectbar1").css('margin-left', '0%');
         }
         else if (current_tab == "translation") {
            $(".selectbar1").css('margin-left', '34.5%');
         }
         else if (current_tab == "sobre") {
            $(".selectbar1").css('margin-left', '69%');
         }
     });

     $(".menu-2").mouseover(function(){
        $(".selectbar1").css('margin-left', '34.5%');
    });
    $(".menu-2").mouseout(function() {
        if (current_tab == "design") {
            $(".selectbar1").css('margin-left', '0%');
        }
        else if (current_tab == "translation") {
           $(".selectbar1").css('margin-left', '34.5%');
        }
        else if (current_tab == "sobre") {
           $(".selectbar1").css('margin-left', '69%');
        }
    });

    $(".menu-3").mouseover(function(){
        $(".selectbar1").css('margin-left', '69%');
    });
    $(".menu-3").mouseout(function() {
        if (current_tab == "design") {
            $(".selectbar1").css('margin-left', '0%');
        }
        else if (current_tab == "translation") {
           $(".selectbar1").css('margin-left', '34.5%');
        }
        else if (current_tab == "sobre") {
           $(".selectbar1").css('margin-left', '69%');
        }
    });

      $(".menu-1").click(function() {
        if (current_tab == "translation") {
            $(".text-2").removeClass("current-selection")
      $("#translation-projects").hide("slide", { direction: "right"}, 150);
        $("#design-projects").delay(100).show("slide", { direction: "left" }, 450);
        } else if (current_tab == "sobre") {
            $(".text-3").removeClass("current-selection")
          $("#about-page").hide("slide", { direction: "right"}, 150);
          $("#design-projects").delay(100).show("slide", { direction: "left" }, 450);
        }
        $(".selectbar1").css('margin-left', '0%');
        $(".text-1").addClass("current-selection")
        current_tab = "design"
    });

      $(".menu-2").click(function() {
          if (current_tab == "design") {
            $(".text-1").removeClass("current-selection")
        $("#design-projects").hide("slide", { direction: "left"}, 150);
          $("#translation-projects").delay(100).show("slide", { direction: "right" }, 450);
          } else if (current_tab == "sobre") {
            $(".text-3").removeClass("current-selection")
            $("#about-page").hide("slide", { direction: "right"}, 150);
            $("#translation-projects").delay(100).show("slide", { direction: "left" }, 450);
          }
          $(".selectbar1").css('margin-left', '34.5%');
          $(".text-2").addClass("current-selection")
          current_tab = "translation";
      });

      $(".menu-3").click(function() {
        if (current_tab == "design") {
            $(".text-1").removeClass("current-selection")
            $("#design-projects").hide("slide", { direction: "left"}, 150);
            $("#about-page").delay(100).show("slide", { direction: "right" }, 450);
        } else if (current_tab == "translation") {
            $(".text-2").removeClass("current-selection")
          $("#translation-projects").hide("slide", { direction: "left"}, 150);
          $("#about-page").delay(100).show("slide", { direction: "right" }, 450);
        }
        $(".selectbar1").css('margin-left', '69%');
        $(".text-3").addClass("current-selection")
        current_tab = "sobre"
    });

    
  $(document).on('click', '.back-button', function(){ 
    $("#everythinghome").show();
    $("#projectdescriptions").delay(50).hide("slide", { direction: "down"}, 450);
    $(".about-page-inner").empty()
    menutext();
});
     $(".menu-1").mouseover(function(){
         $(".selectbar1").css('margin-left', '0%');
     });
     $(".menu-1").mouseout(function() {
         if ($(".menu-1").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
             $(".selectbar1").css('margin-left', '0%');
         }
         else if ($(".menu-2").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
            $(".selectbar1").css('margin-left', '34.5%');
         }
         else if ($(".menu-3").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
            $(".selectbar1").css('margin-left', '69%');
         }
     });

     $(".menu-2").hover(function(){
        $(".selectbar1").css('margin-left', '34.5%');
    });
    $(".menu-2").mouseout(function() {
        if ($(".menu-1").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
            $(".selectbar1").css('margin-left', '0%');
        }
        else if ($(".menu-2").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
           $(".selectbar1").css('margin-left', '34.5%');
        }
        else if ($(".menu-3").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
           $(".selectbar1").css('margin-left', '69%');
        }
    });

    $(".menu-3").hover(function(){
        $(".selectbar1").css('margin-left', '69%');
    });
    $(".menu-3").mouseout(function() {
        if ($(".menu-1").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
            $(".selectbar1").css('margin-left', '0%');
        }
        else if ($(".menu-2").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
           $(".selectbar1").css('margin-left', '34.5%');
        }
        else if ($(".menu-3").css('text-shadow' == '0px 0px 5px #FF00D6, 0px 0px 30px #FF00D6')) {
           $(".selectbar1").css('margin-left', '69%');
        }
    });

      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
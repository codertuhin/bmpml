$(document).ready(function(){
    $curtainopen = false;

    $(".rope").click(function(){

        $(this).blur();

        if ($curtainopen == false){

            $(this).stop().animate({top: '0px' }, {queue:false, duration:350, easing:'easeOutBounce'});
            $(".leftcurtain").stop().animate({width:'60px'}, 2000 );
            $(".rightcurtain").stop().animate({width:'60px'},2000 );
            $curtainopen = true;

        }else{

            $(this).stop().animate({top: '-40px' }, {queue:false, duration:350, easing:'easeOutBounce'});
            $(".leftcurtain").stop().animate({width:'50%'}, 2000 );
            $(".rightcurtain").stop().animate({width:'51%'}, 2000 );
            $curtainopen = false;

        }
        $(this).hide();
        return false;

    });
    $(window).load(function(){
        $('#welcome-modal').modal('show');
        $.fn.snow({ minSize: 5, maxSize: 50, newOn: 500, flakeColor: '#F44336' });
    });
});
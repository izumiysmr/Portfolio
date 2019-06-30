$(function() {
    var duration = 500;
    var $sidebar = $('.sidebar');
    var $button = $('.button a');

    $button.addClass('open');
    $button.click(function() {
        $button.toggleClass('close');
        $button.removeClass('open');
        if ($button.hasClass('close')) {
            $sidebar.stop().animate({
                left: '0px'
            }, duration, 'easeOutQuint');
        } else {
            $sidebar.stop().animate({
                left: '-400px'
            }, duration, 'easeOutQuint');
            $button.addClass('open');
        };
    });
});






/*
$(function() {
    var duration = 300;
    
    var $aside = $('.sidebar > aside');
    var $asideButton = $aside.find('button')
        .on('click',function(){
            $aside.toggleClass('open');
            if($aside.hasClass('open')){
                $aside.stop(true).animate({
                    left:'-70px'
                },duration,'easeOutBack');
                $asideButton.find('img')
                    .attr('src','images/btn_close.png');
            }else{
                $aside.stop(true).animate({
                    left:'-350px'
                },duration,'easeInBack');
                $asideButton.find('img')
                    .attr('src','images/btn_open.png');
            }
         });
}); */
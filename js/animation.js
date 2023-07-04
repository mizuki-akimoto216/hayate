$(document).ready(
    
    function(){
        $(".openbtn1").click(function () {
            $(this).toggleClass('active');
              $("#g-nav").toggleClass('panelactive');
        });
          
        $("#g-nav a").click(function () {
              $(".openbtn1").removeClass('active');
              $("#g-nav").removeClass('panelactive');
        });

        function fadeAnime(){
            $('.fadeUpTrigger').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                    $(this).addClass('fadeUp');
                }else{
                    $(this).removeClass('fadeUp');
                }
            });

            $('.lineTrigger').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                    $(this).addClass('line');
                }else{
                    $(this).removeClass('line');
                }
            });

            $('.line2Trigger').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                    $(this).addClass('line2');
                }else{
                    $(this).removeClass('line2');
                }
            });

            $('.lineinappearTrigger').each(function(){ 
                var elemPos = $(this).offset().top-50;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll >= elemPos - windowHeight){
                    $(this).addClass('lineinappear');
                }else{
                    $(this).removeClass('lineinappear');
                }
            });
        }

        $(window).scroll(function (){
            fadeAnime();
        });

        var bar = new ProgressBar.Line(splash_text, {
            easing: 'easeInOut',
            duration: 3000,
            strokeWidth: 0.2,
            color: '#555',
            trailWidth: 0.2,
            trailColor: '#bbb',
            text: {    
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: '0',
                    margin: '-30px 0 0 0',
                    transform:'translate(-50%,-50%)',
                    'font-size':'1rem',
                    color: '#fff'
                },
                autoStyleContainer: false
            },
            step: function(state, bar) {
                bar.setText(Math.round(bar.value() * 100) + ' %');
            }
        });
        
        bar.animate(1.0, function () {
            $("#splash_text").fadeOut(10);
            $(".loader_cover-up").addClass("coveranime");
            $(".loader_cover-down").addClass("coveranime");
            $("#splash").fadeOut();
        });
    }
);


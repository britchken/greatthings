<script type="text/javascript" src="jquery-3.0.0.min.js"></script>
<script type="text/javascript" src="jquery-css-transform.js"></script>
<script type="text/javascript" src="jquery-animate-css-rotate-scale.js"></script>    
<script type="text/javascript" src="jquery.easing.1.3.js"></script>


var speed = [];
var h;
var w;
var x = [];
var y = [];
var t = [];
var newx = [];
var newy = [];
var time = [];
var numJellies = 35;
var jCount = 0;

    function clickMe() {
        var el = document.getElementById("sinker");
        el.innerHTML = "You found the king jelly!!!";
    }

    $(document).ready(function(){
        animateDivStart();   
    });



function animateDiv(){

    for (i = 0; i < numJellies; i = i + 1) {
        time[i] = time[i] + 1;
        if (time[i] > 2) {
            if (x[i] > w - 100 || x[i] < 100 || y[i] > h - 100 || y[i] < 100) {
                t[i] = t[i] + .6;
            } else {
                if (Math.random() > .6) {
                    t[i] = t[i] + .3;
                } else {
                    t[i] = t[i] - .3;
                }
            }
        } else {
            t[i] = Math.PI*3/2 + Math.random()*.5;
        }
        newx[i] = x[i] + Math.floor (speed[i] * Math.cos( t[i] ));
        newy[i] = y[i] + Math.floor (speed[i] * Math.sin( t[i] ));
        x[i] = newx[i];
        y[i] = newy[i];
    }

    $('.jell').each(function(index, jell){
          
        $(jell).delay(index*20).animate({
            rotate: t[index]*180/Math.PI+90
        }, 200);

        $(jell).animate({
            left: newx[index],
            top: newy[index]
        }, 900, "easeInOutBack");
        
    });
    animateDiv();
};

function animateDivStart() {

    h = $(window).height() - 50;
    w = $(window).width() - 50;

    for (i = 0; i < numJellies; i = i + 1) {
        x[i] = Math.floor(w/12) + Math.floor(Math.random()*5/6*w) - 100;
        y[i] = h + 100;
        t[i] = 2*Math.random()*Math.PI;
        time[i] = 0;
        speed[i] = Math.random()*150+50;
    }
    $('body').addClass('loaded');
    animateDiv();
}

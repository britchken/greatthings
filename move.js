var xspeed;
var yspeed;
var h;
var w;

var theta;

function makeNewPosition(x, y){

    if (x > w - 70 || x < 70 || y > h - 70 || y < 70) {
        theta = theta + .6;
    } else {
        if (Math.random() > .5) {
            theta = theta + .3;
        } else {
            theta = theta - .3;
        }
    }
    var nh = y + xspeed * Math.sin(theta);
    var nw = x + yspeed * Math.cos(theta);

    return [nh,nw];    
}

/*
function slowRotate(angle){
    for (i = 0; i < 5; i++) {
        $('.a').animate({rotate: i/4*angle}, 0);
    }
}
*/
function animateDiv(){

    var oldq = $('.a').offset();
    var newq = makeNewPosition(oldq.left, oldq.top);
    $('.a').animate({rotate: theta/Math.PI*180 + 90}, 250);
    $('.a').animate({ top: newq[0], left: newq[1]}, 800, "easeInOutBack", function(){
      animateDiv();        
    });

};

function animateDivStart() {
    xspeed = 100;
    yspeed = 100;
    h = $(window).height() - 50;
    w = $(window).width() - 50;
    theta = 0;
    //$( "p" ).append("<div class='a'></div>");
    animateDiv();
}

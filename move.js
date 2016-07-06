var xspeed;
var yspeed;
var h;
var w;

var theta;

function makeNewPosition(x, y){

    if (x > w - 100 || x < 100 || y > h - 100 || y < 100) {
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

function done() {
    alert("Your jelly has been going for a while!");
}

function letsGo() {
    $('.a').each(function(){
        animateDivStart(this);
    });
}

function animateDiv(that){
    var oldq = $('.a').offset();
    var newq = makeNewPosition(oldq.left, oldq.top);
    $(that).animate({rotate: theta/Math.PI*180 + 91}, 350);
    $(that).animate({ top: newq[0], left: newq[1]}, 800, "easeInOutBack", function(){
      animateDiv(that);        
    });

};

function animateDivStart(that) {

    xspeed = 100;
    yspeed = 100;
    h = $(window).height() - 50;
    w = $(window).width() - 50;
    totalJells = 0;
    theta = 0;
    animateDiv(that);
    
}





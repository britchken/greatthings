var xxspeed;
var yyspeed;
var h;
var w;
var xx;
var yx;
var tt;

function makeNewPosition(x, y, xspeed, yspeed, theta){

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

    return [nh,nw, theta];    
}

function done() {
    alert("Your jelly has been going for a while!");
}


function animateDiv(x, y, xspeed, yspeed, theta){
    var oldq = $('.a').offset();
    var newq = makeNewPosition(oldq.left, oldq.top, theta);


    $(that).animate({rotate: newq[2]/Math.PI*180 + 91}, 350);
    $(that).animate({ top: newq[0], left: newq[1]}, 800, "easeInOutBack", function(){
      animateDiv(that);        
    });

};

function animateDivStart() {
    h = $(window).height() - 50;
    w = $(window).width() - 50;
    for (i = 0; i < 10; i = i + 1) {
	xx[i] = Math.floor(Math.random()*w);
	yy[i] = Math.floor(Math.random()*h);
	theta[i] = 2*Math.random()*Math.PI;
	yyspeed[i] = Math.floor(Math.random()*200);
        xxspeed[i] = Math.floor(Math.random()*200);
	}
    
    $('.a').each(function (idx, a)
	{
	$(a).animateDiv({left: xx[idx].x, top: ep[idx].y}, 800, "easeInOutBack", 
    
}





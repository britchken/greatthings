var xspeed;
var yspeed;
var h;
var w;
var x[];
var y;
var t;
var newx;
var newy;


function done() {
    alert("Your jelly has been going for a while!");
}


function animateDiv(x, y, xspeed, yspeed, theta){
    for (i = 0; i < 10; i = i + 1) {
        if (x[i] > w - 100 || x[i] < 100 || y[i] > h - 100 || y[i] < 100) {
            t[i] = t[i] + .6;
        } else {
            if (Math.random() > .5) {
                t[i] = t[i] + .3;
            } else {
                t[i] = t[i] - .3;
            }
        }
        newx[i] = x[i] + xspeed[i] * Math.sin(t[i]);
        newy[i] = x[i] + yspeed[i] * Math.cos(t[i]);
    }



    $('.a').each(function (idx, a)
    {
        $(a).animate({left: newx[idx], top: newy}, 100);
    });
};

function animateDivStart() {
    h = $(window).height() - 50;
    w = $(window).width() - 50;

    for (i = 0; i < 10; i = i + 1) {
        document.write(x);
    	x[i] = Math.floor(Math.random()*w);
        document.write("yoo");
    	y[i] = Math.floor(Math.random()*h);
        document.write("yoo");
    	t[i] = 2*Math.random()*Math.PI;
        document.write("yoo");
    	yspeed[i] = Math.floor(Math.random()*200);
        xspeed[i] = Math.floor(Math.random()*200);
        document.write("yoo");
    }
    
    animateDiv();
}





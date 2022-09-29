gsap.from(".fade-in", {
    duration: 2,
    scale: 0.5, 
    // opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic",
});

function fakeLoad(){
    var distance = $(".content").offset().top;    
    var timer  = setTimeout(function(){
        $(".loader").fadeOut(250);
        $('html,body').animate({
        scrollTop: distance
        }, 500);
        }, 3000);
    }
    var animate  = setTimeout(function(){$(".animate").addClass("disppear");},5000);
    $(document).ready(function(){fakeLoad();}
);

$(document).ready(function() {
    var i = 0;
    var clone = $(".banner .img li").first().clone(); 
    $(".banner .img").append(clone);
    var size = $(".banner .img li").length;

    for (var j = 0; j < size - 1; j++) {
    $(".banner .num").append("<li></li>");
    }
    $(".banner .num li").first().addClass("on");
    var t = setInterval(function() {
    i++;
    move();
    }, 2000);
    $(".banner").hover(function() {
    clearInterval(t); 
    }, function() {
    t = setInterval(function() {
        i++;
        move();
    }, 2000);
    });
    $(".banner .num li").hover(function() {
    var index = $(this).index();
    i = index;
    $(".banner .img").stop().animate({
        left: -index * 500
    }, 500);
    $(this).addClass("on").siblings().removeClass("on");
    });
    function move() {
    if (i == size) {
        $(".banner .img").css({
        left: 0
        });
        i = 1;
    }
    if (i == -1) {
        $(".banner .img").css({
        left: -(size - 1) * 500
        });
        i = size - 2;
    }
    $(".banner .img").stop().animate({
        left: -i * 500
    }, 500);

    if (i == size - 1) {
        $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
    } else {
        $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
    }
    }
});

function load() {
    var element = $(this);
    element.fadeOut(0, function() {
    element.fadeIn(1000);
    });
}

window.addEventListener('load', function() {
    $('.load').one('appear', load);
})

function nav_scroll(){
    var top =$(".bg1").offset().top;
    var scrollTop =$(window).scrollTop();
    if(scrollTop<=top){
        $(".n_b").css("background-color","transparent")
    }else{
        $(".n_b").css("background-color","#ebe6d7")
        $(".n_b").css("border-bottom","0.5px solid #62615fa1")
    }
}
$(window).on("scroll",function(){
    nav_scroll();
});

let menuOpened = false; 

const openMenu = () => {
    document.querySelector(".nav_hidden").classList.add("is-open");
};
const closeMenu = () => {
    document.querySelector(".nav_hidden").classList.remove("is-open");
};

const showMenu = () => {
    menuOpened = !menuOpened;
    if (menuOpened) {
        openMenu();
    } else {
        closeMenu();
    }
};

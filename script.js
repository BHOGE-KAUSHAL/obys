function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
}); 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
function loadingAnimation(){
    var t1 = gsap.timeline()
    t1.from(".line h1",{
        y:150,
        stagger:0.2,
    duration:0.6,
        delay:0.5
    })
    t1.from("#line1-part1",{
        opacity:0,
        onStart: function (){
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function (){
                if(grow<100){
                    h5timer.innerHTML = grow++
                }else{
                    h5timer.innerHTML = grow
                }
            },33);
        }
    
        }
    )
    t1.to(".line h2",{
        animationName:"anime",
        opacity:1,
    })
    t1.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:0,//
    })
    t1.from("#page1",{
        delay:0.2,
        y:1600,
        opacity:0,
        ease:Power4,
        duration:0.5,
    })
    t1.to("#loader",{
        display:"none",
    })
    t1.from("#nav",{
       opacity:0,
    })
    t1.from("#hero1 h1,#hero2 h1 ,#hero3 h2,#hero4 h1",{
        y:120,
        stagger:0.2,
    })
    t1.from("#hero1 , #page2",{
       opacity:0,
    },"-=1.2");
}
function cursorAnimation(){
        document.addEventListener("mousemove",(e)=>{
            gsap.to("#crsr",{
                opacity:1,
                zIndex: 2999,
            });
            gsap.to("#crsr",{
                x: e.x,
                y: e.y,
                duration: .1,
            });
        });
      
}
function sheryAnimation(){
    Shery.imageEffect(".image-div", {
        style: 5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"-9996999","range":[-9999999,9999999]},"aspect":{"value":0.7272614206201047},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.15,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.53,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true,
      });
}
locomotiveAnimation();
cursorAnimation();
loadingAnimation();
sheryAnimation();
var video = document.querySelector("#video-container video")


var videoContainer =  document.querySelector("#video-container")
videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mouseenter",function(dets){
        gsap.to(".mousefollower",{
            opacity:0,
        })
        gsap.to("#video-cursor",{
            left: dets.x - 570,
            y: dets.y - 300,

        });
    });
 });
videoContainer.addEventListener("mouseleave",function(){
    gsap.to("",{
      display :"inital",
    });
    gsap.to("#video-cursor",{
       left:"70%",
       top:"-15",
    });
 });
 videoContainer.addEventListener("click",function(){
    video.play()
    video.style.opacity = 1 
    document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
    gsap.to("#video-cuesor",{
scale:0.5,
    })
 });
    
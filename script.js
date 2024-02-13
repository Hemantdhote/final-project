gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



function lodingAnimation() {


  var tl = gsap.timeline();


  tl.from("#loader .load h1, #loader .load h2, #loader .wait h4", {
    y: 130,
    duration: 0.7,
    delay: 0.2,
    stagger: 0.2,
  })
  tl.to(".load", {
    opacity: 0,
    delay: 3,
    stagger: -0.2
  })
  tl.to("#loader", {
    top: "-130%",
    duration: 1,
    ease: "power4.out"

  })


  var timer = document.querySelector(".timer h4");
  var grow = 0;

  var int = setInterval(function () {
    if (grow < 100) {
      grow++;
      timer.innerHTML = grow;
    }
  }, 40)

  setTimeout(function () {
    clearInterval(int);
  }, 4000)

  tl.from(".content h1", {
    y: 120,
    duration: 1,
    delay: 0.1,
    stagger: 0.2,

  })

}
lodingAnimation();

function page2Animation() {
  var videoC = document.querySelector(".container");
  videoC.addEventListener("mouseenter", function () {
    gsap.to(".mousefollower", {
      opacity: 0
    })
  })
  videoC.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1
    })
    gsap.to(".play-btn", {
      left: "65%",
      top: "-7%",
    })
  })


  videoC.addEventListener("mousemove", function (dets) {
    gsap.to(".play-btn", {
      left: dets.x - 550,
      top: dets.y - 200
    })
  })


  var image = document.querySelector(".container-image image");
  var video = document.querySelector(".container-image video");


  var flag = 0
  videoC.addEventListener("click", function () {
    if (flag == 0) {
      gsap.to(video, {
        opacity: 1,
      })
      gsap.to(".play-btn", {
        scale: 0.7
      })
      document.querySelector(".play-btn ").innerHTML = '<i class="ri-pause-fill"></i>'

      video.play();
      flag = 1

    }

    else {
      gsap.to(video, {
        opacity: 0,
      })
      gsap.to(".play-btn", {
        scale: 1
      })
      document.querySelector(".play-btn ").innerHTML = '<i class="ri-play-fill"></i>'

      video.pause()
      flag = 0

    }

  })








}
page2Animation();






function SheryAnimation(){
  Shery.mouseFollower()

  Shery.makeMagnet(".nav-part2 h4")

  Shery.imageEffect(".images",{
      style:6,
      // debug:true,
      gooey:true,
      config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333134651184},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}
  })
}


SheryAnimation()





function page4Animation() {
  gsap.to(".line1", {
      x: -1000,
      scrollTrigger: {
          trigger: ".page6",
          scroller: "#main",
          start: "top 150%",
          end: "top -50%",
          scrub: 2,
          
      }
  })

  gsap.from(".line2", {
      x: -1000,
      scrollTrigger: {
          trigger: ".page6",
          scroller: "#main",
          start: "top 150%",
          end: "top -50%",
          scrub: 2,
          
      }
  })
  gsap.to(".line3", {
    x: -1000,
    scrollTrigger: {
        trigger: ".page6",
        scroller: "#main",
        start: "top 150%",
        end: "top -50%",
        scrub: 2,
        
    }
})

gsap.from(".line4", {
    x: -1000,
    scrollTrigger: {
        trigger: ".page6",
        scroller: "#main",
        start: "top 150%",
        end: "top -100%",
        scrub: 2,
        
    }
})

}

page4Animation()




var h11=document.querySelector(".footer .box1");
var h2box1=document.querySelector(".footer .box1 h2");
var h1box1=document.querySelector(".footer .box1 h1");
h11.addEventListener("mouseenter",function(){
  gsap.to(h2box1,{
    y:-50
  })
})

h11.addEventListener("mouseenter",function(){
  gsap.to(h1box1,{
    y:-40
  })
})
h11.addEventListener("mouseleave",function(){
  gsap.to(h2box1,{
    y:0
  })
})

h11.addEventListener("mouseleave",function(){
  gsap.to(h1box1,{
    y:0
  })
})


var h22=document.querySelector(".footer .box2");
var h2box2=document.querySelector(".footer .box2 h2");
var h1box2=document.querySelector(".footer .box2 h1");
h22.addEventListener("mouseenter",function(){
  gsap.to(h2box2,{
    y:-50
  })
})

h22.addEventListener("mouseenter",function(){
  gsap.to(h1box2,{
    y:-40
  })
})
h22.addEventListener("mouseleave",function(){
  gsap.to(h2box2,{
    y:0
  })
})

h22.addEventListener("mouseleave",function(){
  gsap.to(h1box2,{
    y:0
  })
})


var h33=document.querySelector(".footer .box3");
var h2box3=document.querySelector(".footer .box3 h2");
var h1box3=document.querySelector(".footer .box3 h1");
h33.addEventListener("mouseenter",function(){
  gsap.to(h2box3,{
    y:-50
  })
})

h33.addEventListener("mouseenter",function(){
  gsap.to(h1box3,{
    y:-40
  })
})
h33.addEventListener("mouseleave",function(){
  gsap.to(h2box3,{
    y:0
  })
})

h33.addEventListener("mouseleave",function(){
  gsap.to(h1box3,{
    y:0
  })
})


var h44=document.querySelector(".footer .box4");
var h2box4=document.querySelector(".footer .box4 h2");
var h1box4=document.querySelector(".footer .box4 h1");
h44.addEventListener("mouseenter",function(){
  gsap.to(h2box4,{
    y:-50
  })
})

h44.addEventListener("mouseenter",function(){
  gsap.to(h1box4,{
    y:-40
  })
})
h44.addEventListener("mouseleave",function(){
  gsap.to(h2box4,{
    y:0
  })
})

h44.addEventListener("mouseleave",function(){
  gsap.to(h1box4,{
    y:0
  })
})


var h55=document.querySelector(".footer .box5");
var h2box5=document.querySelector(".footer .box5 h2");
var h1box5=document.querySelector(".footer .box5 h1");
h55.addEventListener("mouseenter",function(){
  gsap.to(h2box5,{
    y:-50
  })
})

h55.addEventListener("mouseenter",function(){
  gsap.to(h1box5,{
    y:-40
  })
})
h55.addEventListener("mouseleave",function(){
  gsap.to(h2box5,{
    y:0
  })
})

h55.addEventListener("mouseleave",function(){
  gsap.to(h1box5,{
    y:0
  })
})



var info=document.querySelector(".footer .info");
var h2info=document.querySelector(".footer .info h2");
var h1info=document.querySelector(".footer .info h1");
info.addEventListener("mouseenter",function(){
  gsap.to(h2info,{
    y:-50
  })
})

info.addEventListener("mouseenter",function(){
  gsap.to(h1info,{
    y:-40,
    
  })
})
info.addEventListener("mouseleave",function(){
  gsap.to(h2info,{
    y:0
  })
})

info.addEventListener("mouseleave",function(){
  gsap.to(h1info,{
    y:0
  })
})



var footerText=document.querySelectorAll(".right .text");
footerText.forEach(function(elem){
  var elemText=elem.textContent;
  var splited=elemText.split("");
  var clutter="";
  splited.forEach(function(e){
    clutter+=`<span>${e}</span>`
  })
  elem.innerHTML=clutter;
  console.log(clutter)
});
var footerRight=document.querySelector(".create .right");
footerRight.addEventListener("mouseenter",function(){
  gsap.to(".create .right h1 span",{
    opacity:0,
    stagger:0.1,
    duration:0.5
  })
  gsap.to(".create .right h2 span",{
    opacity:1,
    stagger:0.1,
    delay:0.4,
    duration:0.5
  })
})
footerRight.addEventListener("mouseleave",function(){
  gsap.to(".create .right h1 span",{
    opacity:1,
    stagger:0.05,
    duration:0.3
  })
  gsap.to(".create .right h2 span",{
    opacity:0,
    stagger:0.05,
    delay:0.1,
    duration:0.1
  })
})


var theme=document.querySelector(".page1 .nav .nav-part1 .ob svg");
var flag=0;
theme.addEventListener("click",function(){
  if(flag==0){
  document.documentElement.style.setProperty("--primary","#fff")
  document.documentElement.style.setProperty("--secondry","#151515")
  flag=1;
  }
  else{
    document.documentElement.style.setProperty("--primary","#151515")
    document.documentElement.style.setProperty("--secondry","#fff")
    flag=0;

  }
})


var flagText=document.querySelector(".page1 .content .text #flag");
var flag=document.querySelector(".page1 .content .move img");
flagText.addEventListener("mousemove",function(dets){
  gsap.to(".move",{
    left:dets.x-550,
    top:dets.y-300,
   
  })

})
flagText.addEventListener("mouseenter",function(){
  gsap.to(".move",{
    opacity:1
  })
})
flagText.addEventListener("mouseleave",function(){
  gsap.to(".move",{
    opacity:0
  })
})



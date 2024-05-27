function navAnimation() {
    const bottomMenu = document.querySelector(".bottom-menu");
    const categoryMenu = document.querySelectorAll(".category-menu h4")
    
    categoryMenu.forEach((element) => {
    
        element.addEventListener("mouseenter", function() {
    
            let tl = gsap.timeline();
    
            tl.to(".bottom-menu",{
                height:"120px",
                duration: 0.5
            })
            tl.to(".category-menu h5",{
                display:"block",
                duration: 0.1
            })
            tl.to(".category-menu h5 span",{
                y:0,
                stagger:{
                    amount:0.5
                }
            })
        });
    });
    
    categoryMenu.forEach((element) => {
        element.addEventListener("mouseleave", function() {
            let tl = gsap.timeline();
            tl.to(".category-menu h5 span",{
                y:25,
                stagger:{
                    amount:0.2
                }
            });

            tl.to(".bottom-menu",{
                height:"0px",
                duration:0.1
            })  
    
            tl.to(".category-menu h5",{
                display:"none",
                duration:0.2
            });
                  
        });
    });
}

navAnimation();

// page 2 animation
 
function page2Animation () {
    const page2right = document.querySelectorAll("#page2-right div");
    // const page2image = document.querySelectorAll(".page2-image")
    
    page2right.forEach((element,index) => {
        element.addEventListener("mouseenter", ()=>{
        //    page2image[index].style.opacity = "1";
            //   element.childNodes[3].style.opacity="1";
              gsap.to(element.childNodes[3],{
                opacity : 1,
                scale : 1
              })
        })
        element.addEventListener("mouseleave", ()=>{
            // page2image[index].style.opacity = "0";
            // element.childNodes[3].style.opacity="0";
            gsap.to(element.childNodes[3],{
                opacity : 0,
                scale : 0
              })
         });
    
         element.addEventListener("mousemove",(dets)=>{
            gsap.to(element.childNodes[3],{
                x: dets.x - element.getBoundingClientRect().x-40,
                y: dets.y - element.getBoundingClientRect().y- 40
            })
         })
    })
}

page2Animation();

// page3 video animation

function page3Animation(){
    var playDiv = document.querySelector("#play-div");
    var videop = document.querySelector("#page3 video");
    
    playDiv.addEventListener("click", ()=>{
        videop.play();
        gsap.to(videop,{
            transform:"scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    });
    
    videop.addEventListener("click", ()=>{
        videop.pause();
        gsap.to(videop,{
            transform:"scaleX(0) scaleY(0)",
            opacity:0,
            borderRadius:"30px"
        })
    })
}

page3Animation();

function page7Animation () {
let page7play = document.querySelector(".page7-child2");
let page7video = document.querySelector(".page7-child2 video");
let moving7 = document.querySelector("#moving7");
page7play.addEventListener("mouseenter", () => {
    page7video.play();
    gsap.to(moving7, {
        scale : 1,
        opacity:1
    })
});

page7play.addEventListener("mouseleave", () => {
    page7video.load();
    page7video.pause();
    gsap.to(moving7, {
        scale : 0,
        opacity:0
    })
});

page7play.addEventListener("mousemove", (dets) => {
    gsap.to(moving7, {
        x: dets.x - page7video.getBoundingClientRect().x-60,
        y: dets.y - page7video.getBoundingClientRect().y-60
    })
});

// up arrow animation

let upArrow = document.querySelector(".page7-child1 span i");
let leftDiv7 = document.querySelector(".page7-child1");

leftDiv7.addEventListener("mouseenter", () => {
    gsap.from(upArrow, {
        transform : "translateX(10px) translateY(-10px)",
        duration: 0.1
    })
})

leftDiv7.addEventListener("mouseleave", () => {
    gsap.from(upArrow, {
        transform : "translateX(10px) translateY(-10px)",
        duration: 0.1
    })
})

}

page7Animation();

// page 8 animation

function page8Animation(){
   let video8 = document.querySelector("#page8 #page-right video");
   let right_child8 = document.querySelector("#page8 #page-right")
   let moving8 = document.querySelector("#page8 #moving8");

   video8.addEventListener("mouseenter", () => {
     video8.play();
     gsap.to("#moving8",{
        scale: 1,
        opacity: 1
     })
   })

   video8.addEventListener("mouseleave", () => {
    video8.load();
    video8.pause();
    gsap.to("#moving8",{
        scale: 0,
        opacity: 0
     })
   })

   right_child8.addEventListener("mousemove", (dets) => {
    gsap.to(moving8,{
        x : dets.x - video8.getBoundingClientRect().x-60,
        y : dets.y - video8.getBoundingClientRect().y-60
    })
   })

//    arrow animation at left side
let upArrow = document.querySelector("#page-left span i");
let leftDiv8 = document.querySelector("#page-left");

leftDiv8.addEventListener("mouseenter", () => {
    gsap.from(upArrow, {
        transform : "translateX(10px) translateY(-10px)",
        duration: 0.1
    })
})

leftDiv8.addEventListener("mouseleave", () => {
    gsap.from(upArrow, {
        transform : "translateX(10px) translateY(-10px)",
        duration: 0.1
    })
})
   
}
page8Animation();

// page9 animation
function page9animation() {
    let page9div = document.querySelectorAll("#page9 div");

    page9div.forEach((element,index) => {
        element.addEventListener("mouseenter", () => {
            gsap.to(element.childNodes[7].childNodes[1],{
                height:"70vh"
            })
            element.childNodes[7].childNodes[1].play();
            // console.log(element.childNodes[7].childNodes[1])
        })

        element.addEventListener("mouseleave", () => {
            console.log(element.childNodes[7])
            gsap.to(element.childNodes[7].childNodes[1],{
                height:"50vh"
            })
            element.childNodes[7].childNodes[1].pause();
        })

    })
}

page9animation()
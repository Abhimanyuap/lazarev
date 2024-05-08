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
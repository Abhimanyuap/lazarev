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
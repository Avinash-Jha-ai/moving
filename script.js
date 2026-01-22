
window.addEventListener("wheel",(dets)=>{
    if(dets.deltaY>0){
        gsap.to(".content",{
            transform:"translateX(-200%)",
            duration:2,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".content img",{
            rotate:180
        })
    }
    else{
        gsap.to(".content",{
            transform:"translateX(0%)",
            duration:2,
            repeat:-1,
            ease:"none"
        })

        gsap.to(".content img",{
            rotate:0
        })
    }
})
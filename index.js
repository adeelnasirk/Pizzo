var tl = gsap.timeline()

tl.to('.box',{rotation:360, duration:1.5})
tl.to('.box',{x:0, y:0, duration:1.2 , ease: "bounce.out"},1)

tl.from('.nav-item', {y:-100, opacity:0, duration:1, stagger:0.1})
tl.from('.hero-item', {x:-100, opacity:0, duration:1, stagger:0.1})
  
tl.to(".delivery-tag", {
    opacity:1,
    xPercent: -50,
    duration: 10,
    repeat: -1,
    ease: "linear"
  });


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.section-2',
    start:'0% 90%',
    end:'50% 50%',
    scrub:true,
  }
})

tl2.to('.box',{
  top: '100%',
  right:'50%',
  rotation:180,
  scale:0.6,
})

var tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:'.section-3',
    start:'10% 90%',
    end:'50% 60%',
    scrub:true,
  }
})

tl3.to('.box',{
  top: '185%',
  right:'25%',
  rotate:'120deg',
  scale: 0.5,
})


tl3.to('.card-img img',{
    top:'-10%',
    ease: 'power2.out',
  })
var tl = gsap.timeline()

tl.to('.box',{rotation:360, duration:3})
tl.to('.box',{x:0, y:0, duration:2 , ease: "bounce.out"},1)

tl.from('.nav-item', {y:-100, opacity:0, duration:1, stagger:0.3})
tl.from('.hero-item', {x:-100, opacity:0, duration:1, stagger:0.3})
  
tl.to(".delivery-tag", {
    opacity:1,
    xPercent: -50,
    duration: 10,
    repeat: -1,
    ease: "linear"
  });


tl.to('.box',{
  scrollTrigger:{
    trigger:'.hero',
    start:'90% 70%',
    end:'150% 50%',
    scrub:true,
  },
  top: '100%',
  right:'50%',
  scale:0.6,
})

tl.to('.box',{
  scrollTrigger:{
    trigger:'.section-2',
    start:'50% 50%',
    end:'120% 40%',
    scrub:true,
  },
  top: '185%',
  right:'25%',
  scale: 0.5,
})


tl.to('.card-img img',{
    scrollTrigger: {
      trigger: '.section-3',
      start: '20% 50%',
      end: '40% 50%%',
      scrub:true
    },
    top:'-10%',
    ease: 'power2.out',
  })
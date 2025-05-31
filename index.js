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


gsap.to('.box',{
  scrollTrigger:{
    trigger:'.hero',
    start:'90% 70%',
    end:'150% 50%',
    scrub:true,
  },
  top: '90%',
  right:'50%',
  rotation:90,
  scale:0.6,
})
gsap.to('.box',{
  scrollTrigger:{
    trigger:'.section-3',
    start:'10% 90%',
    end:'55% 70%',
    scrub:true,
  },
  top: '185%',
  right:'21%',
  scale: 0.5,
})


gsap.to('.card-img img',{
    scrollTrigger: {
      trigger: '.section-3',
      start: '20% 50%',
      end: '40% 50%%',
      scrub:true
    },
    top:'-10%',
    ease: 'power2.out',
  })
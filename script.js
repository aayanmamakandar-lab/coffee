var t1 = gsap.timeline();

t1.from("section", {
  y: 250,
  opacity: 0,
  duration: 1,
});

t1.from("ul li", {
  y: -50,
  stagger: 0.3,
  duration: 1,
  opacity: 0,
});
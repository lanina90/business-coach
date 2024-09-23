import {Draggable} from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(Draggable);

export const dragAndDropAnimation = (target, bounds, ...rest) => {
  Draggable.create(target, {
    type: "x",
    bounds: bounds,
    throwProps: true,
    dragClickables: true,
    ...rest
  });
}

export const elementAppearingEffect = (target) => {
  const tl = gsap.timeline({
    delay: 0.5,
    repeat: 0,
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      scrub: false,
    }
  });

  const animatedElements = gsap.utils.toArray(target?.children)

  tl.fromTo(animatedElements, {
    opacity: 0,
    y: 100
  }, {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    stagger: 0.5
  });

}
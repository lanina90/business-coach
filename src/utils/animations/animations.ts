import { Draggable, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(Draggable, ScrollTrigger);

interface Bounds {
  minX: number;
  maxX: number;
}

export const dragAndDropAnimation = (target: HTMLDivElement | null, bounds: Bounds) => {
  Draggable.create(target, {
    type: 'x',
    throwProps: true,
    bounds: bounds,
    dragClickables: true,
  });
};

export const elementAppearingEffect = (target: HTMLElement) => {
  const tl = gsap.timeline({
    delay: 0.5,
    repeat: 0,
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      scrub: false,
      toggleActions: 'restart none none none',
    },
  });

  let animatedElements;
  if ('children' in target) {
    animatedElements = gsap.utils.toArray(target?.children);
  } else {
    animatedElements = target
  }


  tl.fromTo(
    animatedElements,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out',
      stagger: 0.5,
    }
  );
};

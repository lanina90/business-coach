import { MutableRefObject, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useParallaxAnimation = (): MutableRefObject<HTMLDivElement | null> => {
  const imgRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      imgRef.current,
      {
        backgroundPosition: '50% 0px',
      },
      {
        backgroundPosition: '50% 400px',
        ease: 'none',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, [imgRef]);

  return imgRef;
};

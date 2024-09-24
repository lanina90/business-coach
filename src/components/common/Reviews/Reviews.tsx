import React, { useRef, useState} from 'react';
import {testimonials} from "../../../constants/constants.ts";
import styles from "./reviews.module.css"
import ReviewCard from "./components/ReviewCard.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {Draggable} from "gsap/all";
import {MdArrowForwardIos} from "react-icons/md";

gsap.registerPlugin(useGSAP, Draggable);

const Reviews = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragTarget = useRef<HTMLDivElement | null>(null);
  const proxyRef = useRef<HTMLDivElement | null>(null);
  const btnNextRef = useRef<HTMLButtonElement | null>(null);
  const btnPrevRef = useRef<HTMLButtonElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 1.5;
  const totalSlides = testimonials.length;

  const getSlideWidth = () => {
    return sliderRef.current ? sliderRef.current?.clientWidth : 0;
  };

  const animateSlides = (direction) => {
    const slideWidth = getSlideWidth();
    if (!slideWidth) return;

    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);

    gsap.to(dragTarget.current, {
      x: -newIndex * slideWidth,
      duration: slideDuration,
      ease: "power2.inOut",
    });
  }

  useGSAP(() => {

    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      const moveX = e.touches[0].clientX;
      const deltaX = moveX - startX;

      if (deltaX > 30) {
        animateSlides(-1);
      }

      if (deltaX < -30) {
        animateSlides(1);
      }
    };

    const slider = sliderRef.current;

    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
    }

    const btnNext = btnNextRef.current;
    const btnPrev = btnPrevRef.current;

    btnNext.addEventListener("click", () => animateSlides(-1));
    btnPrev.addEventListener("click", () => animateSlides(1));

    return () => {
      if (slider) {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
      }

      if (btnNext && btnPrev) {
        btnNext.removeEventListener("click", () => animateSlides(-1));
        btnPrev.removeEventListener("click", () => animateSlides(1));
      }
    };

  }, [currentIndex, totalSlides, sliderRef]);

  return (
    <>
      <div ref={sliderRef} className={styles["reviews"]}>
        <div ref={proxyRef} className={styles["proxy-hidden"]}></div>
        <div ref={dragTarget} draggable="true" className={styles["reviews-carousel"]}>
          {testimonials.map(({id, img, name, testimonial, role}) => (
            <ReviewCard key={id} {...{img, name, testimonial, role}} />
          ))}
        </div>
      </div>
      <div className={styles["review-btns"]}>
        <button ref={btnNextRef} className={styles["review-btns-next"]}>
          <MdArrowForwardIos size={32}
                             color={"rgb(252, 173, 75, .7)"}/>
        </button>
        <button ref={btnPrevRef} className={styles["review-btns-prev"]}>
          <MdArrowForwardIos size={32}
                             color={"rgb(252, 173, 75, .7)"}/>
        </button>
      </div>

    </>
  )
    ;
};

export default Reviews;
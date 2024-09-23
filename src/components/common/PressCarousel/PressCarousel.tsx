import React, {useRef} from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {pressData} from "../../../constants/constants.ts";
import styles from "./press.module.css"
import {dragAndDropAnimation} from "../../../utils/animations/animations.ts";

gsap.registerPlugin(useGSAP);

const PressCarousel = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragTarget = useRef<any>(null);

  useGSAP(() => {
    dragAndDropAnimation(dragTarget.current, sliderRef.current )
  }, []);

  return (
    <div ref={sliderRef} className={styles["press-carousel"]}>
      <div ref={dragTarget} draggable="true" className={styles["press"]}>
        {pressData.map(({id, title, url}, index) => (
          <img key={id} src={url} alt={title} title={title}/>
        ))}
      </div>
    </div>
  );
};

export default PressCarousel;
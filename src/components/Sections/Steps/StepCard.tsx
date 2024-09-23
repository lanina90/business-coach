import React, {useRef} from 'react';
import {IStep} from "../../../types/IStep.ts";
import styles from "./steps.module.css"
import {useGSAP} from "@gsap/react";
import {elementAppearingEffect} from "../../../utils/animations/animations.ts";

const StepCard: React.FC<IStep>= ({id,img, title, desc, icon}) => {

  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    elementAppearingEffect(textRef.current)
  }, [textRef])

  return (
    <div className={styles["step-card"]}
         style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${img})`}}>
      <div className={styles["step-card-content"]}  ref={textRef}>
        <img src={icon} alt={`step-${id}`}/>
        <h2>{`Step ${id}`}</h2>
        <h3>{title}</h3>
        <div className={styles.separator}/>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default StepCard;
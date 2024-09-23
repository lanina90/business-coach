import React from 'react';
import {ITestimonial} from "../../../../types/ITestimonial.ts";
import styles from "../reviews.module.css"

const ReviewCard: React.FC<ITestimonial> = ({img, name, testimonial, role}) => {
  return (
    <div className={styles["review-card"]}>
      <div className={styles["review-card-img"]} style={{backgroundImage: `url(${img})`}}/>
      <img src="/src/assets/large-gradient-shadow.png" alt="gradient" sizes="(max-width: 1282px) 100vw, 1282px"
           className={styles["review-card-gradient"]}/>
      <p className={styles["review-card-text"]}>{testimonial}</p>
      <p className={styles["review-card-role"]}>{name} | {role}</p>
    </div>
  );
};

export default ReviewCard;
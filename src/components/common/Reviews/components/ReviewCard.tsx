import React from 'react';
import {ITestimonial} from "../../../../types/ITestimonial.ts";
import styles from "../reviews.module.css"
import Gradient from "../../Gradient/Gradient.tsx";

const ReviewCard: React.FC<ITestimonial> = ({img, name, testimonial, role}) => {
  return (
    <div className={styles["review-card"]}>
      <div className={styles["review-card-img"]} style={{backgroundImage: `url(${img})`}}/>
      <Gradient className={styles["review-card-gradient"]}/>
      <p className={styles["review-card-text"]}>{testimonial}</p>
      <p className={styles["review-card-role"]}>{name} | {role}</p>
    </div>
  );
};

export default ReviewCard;
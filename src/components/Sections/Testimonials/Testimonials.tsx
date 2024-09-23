import styles from "./testimonials.module.css"
import Container from "../../common/Container/Container.tsx";
import {useParallaxAnimation} from "../../../hooks/useParalaxAnimation.ts";
import PressCarousel from "../../common/PressCarousel/PressCarousel.tsx";
import Reviews from "../../common/Reviews/Reviews.tsx";

const Testimonials = () => {
  const imgRef = useParallaxAnimation();
  return (
    <section className={styles.testimonials} ref={imgRef} id="reviews">
      <Container className={styles["testimonials-container"]}>
        <PressCarousel/>
        <Reviews/>
      </Container>
    </section>
  );
};

export default Testimonials;
import styles from "./hero.module.css"
import Container from "../../common/Container/Container.tsx";
import classNames from "classnames";
import Button from "../../UI/Button/Button.tsx";
import {useParallaxAnimation} from "../../../hooks/useParalaxAnimation.ts";
import Gradient from "../../common/Gradient/Gradient.tsx";

const Hero = () => {

  const imgRef= useParallaxAnimation()

  return (
    <section className={styles.hero} ref={imgRef}>
      <Container className={styles["hero-content"]}>
        <h1 className={styles["hero-content-title"]}>John Doe - Lorem ipsum dolor sit amet </h1>
        <h2 className={styles["hero-content-subtitle"]}>Build & Sustain Workplace Cultures of Joyful Peak
          Performance</h2>
        <Gradient  className={styles["hero-gradient"]}/>
        <div className={styles["hero-buttons"]}>
          <Button buttonStyle="gradient">Watch My Video</Button>
          <Button href={'#contact'} buttonStyle="primary">Partner with me</Button>
        </div>
      </Container>
      <div className={classNames('flex-row flex-between', styles["hero-bottom"])}>
        <img
          src="/src/assets/triangular-overlay-1.png"
          alt="overlay"
          sizes="(max-width: 1282px) 100vw, 1282px"/>
        <div className={styles["hero-content-about"]}>
          <p><strong>John Doe</strong><br/>
            Founder &amp; CEO, Just Do It Global<br/>
            Best-selling Author, <em>Just Do It</em><br/>
            Keynote Speaker, Coach &amp; Consultant</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
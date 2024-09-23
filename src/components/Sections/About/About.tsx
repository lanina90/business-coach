import {useParallaxAnimation} from "../../../hooks/useParalaxAnimation.ts";
import styles from "./about.module.css";
import Container from "../../common/Container/Container.tsx";
import Gradient from "../../common/Gradient/Gradient.tsx";
import Button from "../../UI/Button/Button.tsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {elementAppearingEffect} from "../../../utils/animations/animations.ts";

const About = () => {

  const imgRef = useParallaxAnimation();
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(()=> {
    elementAppearingEffect(textRef.current);
  }, [])

  return (
    <section className={styles["about"]} ref={imgRef}>
      <Container>
        <h2 className={styles["about-h2"]}>Hi! I am John</h2>
        <Gradient/>
        <div ref={textRef} className={styles["about-content"]}>
          <p>Over a decade ago, I was drowning in the despondency of yet another workday. My success as the top regional
            performer had been numbed by a culture of incessant workplace bullying. And, I’d recently made the situation
            worse by filing a formal complaint. In short, I was collateral damage in a company without the process or
            intention to address my experience.</p>
          <p>Exhausted from the drama, with an unrecognizable version of myself at the wheel, I intentionally swerved
            off the interstate in an attempt to take my own life. But in that half-second, my reflexes responded, and I
            yanked the wheel away from disaster. As I clipped the guardrail on I 405, something changed...</p>
          <p className={styles["about-content-gradient"]}>I uncovered a power within myself</p>
          <p>...a burning desire to reverse a trend that happens daily to sixty-five million people in this country
            alone. This catalyst has since become John Doe Movement - a transformational roadmap of mindset,
            behaviors, and tools that transform workplace cultures and drive results.</p>
          <Button href={'#contact'} buttonStyle="primary">Partner with John</Button>
        </div>

      </Container>
    </section>
  );
};

export default About;
import styles from "./cta.module.css"
import {useParallaxAnimation} from "../../../hooks/useParalaxAnimation.ts";
import Container from "../../common/Container/Container.tsx";
import Button from "../../UI/Button/Button.tsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import {useRef} from "react";
import {elementAppearingEffect} from "../../../utils/animations/animations.ts";

gsap.registerPlugin(ScrollTrigger)


const CTA = () => {
  const imgRef = useParallaxAnimation();

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    elementAppearingEffect(sectionRef.current)
  }, [])

  return (
    <section className={styles["cta"]} ref={imgRef}>
      <Container className={styles["cta-content"]} id="text" ref={sectionRef}>
        <h1 className={styles["cta-content-title"]}>Do you foster a business environment...</h1>
        <p>where <span>leaders</span> embrace strategies and practices...</p>
        <p>that motivate and equip your team to <span>perform</span> at their highest level, so...</p>
        <p>your <span>business</span> can achieve sustainable success and growth?</p>
        <img
          src="/src/assets/large-gradient-shadow.png"
          alt="gradient"
          sizes="(max-width: 1282px) 100vw, 1282px"
          className={styles["cta-gradient"]}
        />
        <p className={styles["cta-content-text"]}>Through a transformational approach focused on mindset, behaviors, and
          strategies, John Doe helps you
          build and sustain a <strong><em>thriving business culture</em></strong> where peak performance, growth, and
          fulfillment become the new
          standard.</p>
        <Button href={'#contact'} buttonStyle="primary">Partner with me</Button>
      </Container>
    </section>
  );
};

export default CTA;
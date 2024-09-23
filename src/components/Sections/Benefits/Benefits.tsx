import styles from "./benefits.module.css"
import {useParallaxAnimation} from "../../../hooks/useParalaxAnimation.ts";
import Container from "../../common/Container/Container.tsx";
import {benefits} from "../../../constants/constants.ts";
import BenefitCard from "./BenefitCard.tsx";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import {elementAppearingEffect} from "../../../utils/animations/animations.ts";
import Button from "../../UI/Button/Button.tsx";


const Benefits = () => {

  const imgRef = useParallaxAnimation();
  const animRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    elementAppearingEffect(animRef.current)
  }, [animRef])

  return (
    <section className={styles["benefits"]} ref={imgRef}>
      <Container className={styles["benefits-container"]}>
        <h2>What happens when we <br/> <span>Just DO IT?</span></h2>
        <div className={styles["benefits-content"]} ref={animRef}>
          {benefits.map(({id, title, desc, icon}) => (
            <BenefitCard key={id} {...{id, title, desc, icon}}/>
          ))}
        </div>
        <Button href={'#contact'} buttonStyle="primary">Partner with Me</Button>
      </Container>
    </section>
  );
};

export default Benefits;
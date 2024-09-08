import styles from "./hero.module.css"
import Container from "../../common/Container/Container.tsx";
import classNames from "classnames";
import Button from "../../UI/Button/Button.tsx";
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const imgRef= useRef<HTMLDivElement | null>(null)

  useGSAP(() => {

    gsap.fromTo(imgRef.current,
      {
        backgroundPosition: "50% 0px",
      },
      {
        backgroundPosition: "50% 400px",
        ease: "none",
        scrollTrigger: {
          trigger: `.${styles["hero"]}`,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

  }, [imgRef])

  return (
    <section className={styles.hero}>
      <div className={styles['hero-background']} ref={imgRef}>
        <Container className={'flex-col'}>
          <div className={classNames(styles["hero-content"], 'flex-col')}>
            <div>
              <h1 className={styles["hero-content-title"]}>John Doe - Lorem ipsum dolor sit amet </h1>
              <h2 className={styles["hero-content-subtitle"]}>Build & Sustain Workplace Cultures of Joyful Peak
                Performance</h2>
            </div>
            <div>
              <img
                src="/src/assets/large-gradient-shadow.png"
                alt="gradient"
                sizes="(max-width: 1282px) 100vw, 1282px"
                className={styles["hero-gradient"]}
              />
            </div>
            <div className={styles["hero-buttons"]}>
              <Button buttonStyle="gradient">Watch My Video</Button>
              <Button href={'#contact'} buttonStyle="primary">Partner with me</Button>
            </div>

          </div>
        </Container>
      </div>
      <div className={classNames('flex-row flex-between', styles["hero-bottom"])}>
        <img
          src="/src/assets/triangular-overlay-1.png"
          alt="overlay"
          sizes="(max-width: 1282px) 100vw, 1282px"/>
        <div className={"hero-content-about"}>
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
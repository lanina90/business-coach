import styles from './styles.module.css';
import { useRef } from 'react';
import { useParallaxAnimation } from '../../../hooks/useParalaxAnimation.ts';
import Container from '../../common/Container/Container.tsx';
import { useGSAP } from '@gsap/react';
import { elementAppearingEffect } from '../../../utils/animations/animations.ts';

const WorkWithMe = () => {
  const imgRef = useParallaxAnimation();
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (textRef && textRef.current) {
      elementAppearingEffect(textRef.current as HTMLDivElement);
    }
  }, [textRef]);

  return (
    <section className={styles['work']} ref={imgRef}>
      <Container ref={textRef}>
        <h2 className={styles['work-title']}>
          Leveraging my personal experience and the <br /> <span>Just Do It Global framework</span>
        </h2>
        <p className={styles['work-text']}>
          I help organizations build compassion, competence, and accountability in the workplace. As a result,
          sustainable and joyful peak productivity, engagement, and satisfaction become the new norm.
        </p>
      </Container>
    </section>
  );
};

export default WorkWithMe;

import styles from './testimonials.module.css';
import Container from '../../common/Container/Container.tsx';
import { useParallaxAnimation } from '../../../hooks/useParalaxAnimation.ts';
import PressCarousel from '../../common/PressCarousel/PressCarousel.tsx';
import Reviews from '../../common/Reviews/Reviews.tsx';
import layer from "../../../assets/testimonials-layer.jpg"

const Testimonials = () => {
  const imgRef = useParallaxAnimation();
  return (
    <section className={styles.testimonials} ref={imgRef} id="reviews" style={{backgroundImage: `url(${layer})`}}>
      <Container className={styles['testimonials-container']}>
        <PressCarousel />
        <Reviews />
      </Container>
    </section>
  );
};

export default Testimonials;

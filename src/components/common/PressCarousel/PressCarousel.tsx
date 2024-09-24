import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { pressData } from '../../../constants/constants.ts';
import styles from './press.module.css';
import { dragAndDropAnimation } from '../../../utils/animations/animations.ts';

gsap.registerPlugin(useGSAP);

const PressCarousel = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const dragTarget = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (dragTarget.current && sliderRef.current) {
      const bounds = {minX:-(dragTarget.current?.clientWidth - sliderRef.current?.clientWidth), maxX: 0}
      dragAndDropAnimation(dragTarget.current, bounds);
    }
  }, [dragTarget, sliderRef ]);

  return (
    <div ref={sliderRef} className={styles['press-carousel']}>
      <div ref={dragTarget} draggable="true" className={styles['press']}>
        {pressData.map(({ id, title, url }) => (
          <img key={id} src={url} alt={title} title={title} />
        ))}
      </div>
    </div>
  );
};

export default PressCarousel;

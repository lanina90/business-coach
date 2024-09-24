import Container from '../../common/Container/Container.tsx';
import styles from './header.module.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const icons = [<FaFacebookF />, <FaInstagram />, <FaTwitter />, <FaLinkedinIn />];

const Header = () => {
  useGSAP(() => {
    gsap.to('#header', {
      scrollTrigger: {
        trigger: '#header',
        start: 'bottom top',
        end: 'top top',
        onLeave: () => gsap.to('#header', { background: 'black' }),
        onEnterBack: () => gsap.to('#header', { background: 'transparent' }),
      },
      background: 'black',
    });
  }, []);

  return (
    <header className={styles.header} id="header">
      <Container>
        <div className="flex-row flex-between">
          <div className={styles['header-logo']}>
            <img src="/src/assets/logo.png" alt="logo" width={150} height={100} />
          </div>
          <div className={styles['header-social']}>
            {icons.map((item, index) => (
              <div key={index} className={styles['header-social-icon']}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import styles from './footer.module.css';
import Container from '../../common/Container/Container.tsx';
import Input from '../../common/Input/Input.tsx';
import Button from '../../UI/Button/Button.tsx';
import logo from "../../../assets/logo.png"

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <Container className={styles['footer-container']}>
        <div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#reviews">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Connect</a>
            </li>
          </ul>
        </div>
        <div className={styles['footer-logo']}>
          <img src={logo} alt="" width={200} height={130} />
        </div>
        <div className={styles['footer-subscribe']}>
          <h3>JOIN THE JUST DO IT MOVEMENT</h3>
          <p>to receive your weekly positivity email.</p>
          <form action="" className={styles['form']}>
            <Input
              label='First Name'
              type="text"
              classes={{
                label: styles['form-label'],
              }}
              placeholder='Enter name'
            />
            <Input
              label="Email"
              type="email"
              classes={{
                label: styles['form-label'],
              }}
              placeholder='Enter email'
            />
            <Button type="submit" buttonStyle="primary">
              Submit
            </Button>
          </form>
        </div>
      </Container>
      <div className={styles['copyrights']}>© John Doe. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;

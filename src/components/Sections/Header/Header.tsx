import Container from "../../common/Container/Container.tsx";
import styles from  './header.module.css'


const Header = () => {

  return (
    <header className={styles.header}>
      <Container>
        <div className='flex-row flex-between'>
          <div className={styles['header-logo']}>
            Logo
          </div>
          <div className={styles['header-social']}>Social</div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
import styles from "./styles.module.css";
import Container from "../../common/Container/Container.tsx";
import Button from "../../UI/Button/Button.tsx";
import {useState} from "react";
import Modal from "../../common/Modal/Modal.tsx";
import ContactForm from "../../common/ContactForm/ContactForm.tsx";

const LetsConnect = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <section id={"contact"} className={styles["connect"]}>
        <Container className={styles["connect-content"]}>
          <h3>Let's Connect</h3>
          <p>Start a Conversation with John</p>
          <Button onClick={() => setOpen(!open)} buttonStyle="secondary">Connect</Button>
        </Container>
      </section>
      {open &&
        <Modal>
          <ContactForm onClick={() => setOpen(!open)}/>
        </Modal>
      }
    </>
  );
};

export default LetsConnect;
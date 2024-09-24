import React, { useState } from 'react';
import Input from '../Input/Input.tsx';
import Button from '../../UI/Button/Button.tsx';
import { MdClose } from 'react-icons/md';
import styles from './styles.module.css';

interface IContactForm {
  onClick?: () => void;
}

const ContactForm: React.FC<IContactForm> = ({ onClick }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [formVal, setFormVal] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onFormSubmit = () => {
    const errors: { [key: string]: string } = {};

    Object.entries(formVal).forEach(([key, value]) => {
      if (value.trim() === '') {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className={styles['contact-form']}>
      <div className={styles['contact-form-close']}>
        <MdClose onClick={onClick} size={32} />
      </div>
      {isSubmitted ? (
        <div className={styles['form-success']}>
          <h2>Success</h2>
          <p>Message sent successfully! I'll contact with you as soon as I</p>
        </div>
      ) : (
        <form action="" onSubmit={() => onFormSubmit()}>
          <h2>Let's Connect</h2>
          <Input
            value={formVal.name}
            onChange={(e) => setFormVal({ ...formVal, name: e.target.value })}
            label='Name'
            id='name'
            type='text'
            placeholder='Enter your name'
            error={formErrors.name ?? undefined}
          />
          <Input
            value={formVal.email}
            onChange={(e) => setFormVal({ ...formVal, email: e.target.value })}
            label='Email'
            id='email'
            type='text'
            placeholder="Enter your email"
            error={formErrors.email ?? undefined}
          />
          <Input
            value={formVal.phone}
            onChange={(e) => setFormVal({ ...formVal, phone: e.target.value })}
            label='Phone'
            id='phone'
            type='text'
            placeholder='Enter your phone'
            error={formErrors.phone ?? undefined}
          />
          <Button type="submit" buttonStyle="gradient" btnClassName={styles['form-button']}>
            Send Message
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

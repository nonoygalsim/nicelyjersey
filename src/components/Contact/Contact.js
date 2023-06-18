import React, { useState } from 'react';
import Button from '../Button';
import axios from 'axios';

import FormInputField from '../FormInputField/FormInputField';
import { useForm, ValidationError } from '@formspree/react';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  //from - https://javascript.plainenglish.io/explainlikeim5-2-how-to-create-a-form-with-react-and-formspree-easy-5510947e6b88
  const [inputs, setInputs] = useState({
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };

    setContactForm(tempForm);
    setInputs((prev) => ({
      ...prev,
      [id]: e,
    }));
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(e);
    //setContactForm(initialState);
  };
  function ContactForm() {
    const [state, handleSubmit] = useForm('mgeqgdel');
    if (state.succeeded) {
      return <p>Thanks for joining!</p>;
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mgeqgdel',
      data: inputs,
    });
    /*
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      })
      */
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Send Us A Message</h4>
        <p>This is WIP</p>
        <p>We look forward to hearing from you.</p>
      </div>

      <div className={styles.section}>
        <h4>Phone</h4>
        <p>+1 XXX XXX XXXX</p>
        <p>Monday to Friday - 9am - 5pm AEDT</p>
      </div>

      <div className={styles.section}>
        <h4>Email</h4>
        <p>
          You can n our Customer Service team at thehappyfam.com@gmail.com or
          via the contact form below:
        </p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            {/*
            <FormInputField
              id={'name'}
              value={contactForm.name}
              //handleChange={(id, e) => handleChange(id, e)}
              type={'text'}
              labelName={'Full Name'}
              required
            />
            <FormInputField
              id={'phone'}
              value={contactForm.phone}
              //handleChange={(id, e) => handleChange(id, e)}
              type={'number'}
              labelName={'Phone Number / optional'}
              required
            />
            */}
            <FormInputField
              id={'email'}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={'email'}
              labelName={'Email'}
              required
            />
            <div className={styles.commentInput}>
              <FormInputField
                id={'message'}
                value={contactForm.message}
                handleChange={(id, e) => handleChange(id, e)}
                type={'textarea'}
                labelName={'Comments / Questions'}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={'primary'}
            type={'buttonSubmit'}
          >
            submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

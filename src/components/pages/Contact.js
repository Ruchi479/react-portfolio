import React, { useState } from 'react';
import '../../styles/Contact.css';
import { validateEmail } from '../utils/helpers';

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  const styles ={
    contactStyle: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      backgroundColor: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '30px',
    }, 
    contactFormStyle:{
      display:'block',
      width:' 500px',
      margin: '0 auto',
      border: '1px solid #c1c1c1',
      padding: '15px',
      borderRadius:'5px',
      backgroundColor: '#eaeaea',
      marginBottom:' 50px',
    }
  }

  return (
    <section className="contact" style={styles.contactStyle}>
      <h1 className='headings'>Contact me</h1>
      <form className='contactFormStyle' onSubmit={handleSubmit} style={styles.contactFormStyle}>
          <label htmlFor="name">Name:</label><br/>
          <input type="text"  className="input-field" name="name" defaultValue={name} onBlur={handleChange} /><br/>

          <label htmlFor="email">Email:</label><br/>
          <input type="email" className="input-field" name="email" defaultValue={email} onBlur={handleChange} /><br/>
        
          <label htmlFor="message">Message:</label><br/>
          <textarea name="message" className="input-field" rows="5" defaultValue={message} onBlur={handleChange} />
        
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button id="submit-btn" type="submit">Submit</button>
      </form>
    </section>
  );
}
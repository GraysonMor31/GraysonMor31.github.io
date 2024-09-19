import './App.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function App() {
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (e) => {
    const errors = {};
    const { name, email, message } = e.target.elements;

    if (!name.value) {
      errors.name = 'Name is required';
    }

    if (!email.value) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = 'Email address is invalid';
    }

    if (!message.value) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm(e)) {
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grayson Morris</h1>
        <p>Cybersecurity Intern</p>
        <p>Computer Science Student</p>
      </header>
      <section className='About'></section>
      <section className='Education'></section>
      <section className='Experience'></section>
      <section className='Skills'></section>
      <section className='Projects'></section>
      <section className='Contact'>
        <h2>Contact Me</h2>
        <p>Email: grayson.r.morris@gmail.com</p>
        <p>Phone: 719.237.6876</p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/morris31/'>Grayson Morris</a></p>
        <p>GitHub: <a href='https://github.com/GraysonMor31'>GraysonMor31</a></p>
        <h3>Or Send a Message</h3>
        <form onSubmit={sendEmail}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' name='name' required />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
          
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' name='email' required />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
          
          <label htmlFor='message'>Message:</label>
          <textarea id='message' name='message' required></textarea>
          {formErrors.message && <span className="error">{formErrors.message}</span>}
          
          <button type='submit'>Send</button>
        </form>
      </section>
      <footer className='Footer'>
        <p>&copy; 2024 Grayson Morris</p>
      </footer>
    </div>
  );
}

export default App;
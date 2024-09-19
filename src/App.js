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
      <section className='About'>
        <h2>About Me</h2>
        <p>I am a Cybersecurity Intern at a local company and a Computer Science student at the University of Colorado Colorado Springs. I have a passion for technology and learning new things. I am always looking for new opportunities to grow and expand my skillset.</p>
      </section>
      <section className='Education'>
        <h2>Education</h2>
        <div className='School'>
          <h3>School 1</h3>
          <p>Degree</p>
          <p>Graduation Date</p>
        </div>
        <div className='School'>
          <h3>School 2</h3>
          <p>Degree</p>
          <p>Graduation Date</p>
        </div>
        <div className='School'>
          <h3>School 3</h3>
          <p>Degree</p>
          <p>Graduation Date</p>
        </div>
      </section>
      <section className='Experience'>
        <h2>Experience</h2>
        <div className='Job'>
          <h3>Job 1</h3>
          <p>Job Title</p>
          <p>Job Description</p>
        </div>
        <div className='Job'>
          <h3>Job 2</h3>
          <p>Job Title</p>
          <p>Job Description</p>
        </div>
        <div className='Job'>
          <h3>Job 3</h3>
          <p>Job Title</p>
          <p>Job Description</p>
        </div>
      </section>
      <section className='Skills'>
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>Git</li>
          <li>Linux</li>
          <li>Networking</li>
          <li>Security</li>
        </ul>
      </section>
      <section className='Projects'>
        <h2>Projects</h2>
        <div className='Project'>
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className='Project'>
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        <div className='Project'>
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
        </div>
      </section>
      <section className='Contact'>
        <h2>Contact Me</h2>
        <p>Email: grayson.r.morris@gmail.com</p>
        <p>Phone: 719.237.6876</p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/graysonmorris31/'>GraysonMorris31</a></p>
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
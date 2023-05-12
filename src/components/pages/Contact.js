import React, { useState } from 'react';
import '../../styles/Contact.css';

const styles = {
  contactStyle: {
    background: "#489D7C",
  },
  button: {
    backgroundColor: 'white',
    color:'#489D7C',
    border: 'none',
    borderRadius: '15px'
  }
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    if (name.trim() === ""){
      setErrorMessage("Please include your name");
      return;
    }
    else if (email.trim() === "") {
      setErrorMessage("Please include your email");
      return;
    } 
    else if (message.trim() === "") {
      setErrorMessage("Please include your message");
      return;
    } 
    else {
      alert(`Thank you, ${name}`)
      setErrorMessage('');
    }

    // alert(`Thank you, ${name}`);

    setName('');
    setEmail('');
    setMessage('');

  };

  return (
    <div style={styles.contactStyle}>
      <h1 className='form'>Contact Page</h1>
      <form className="form">
      <input 
          className="form input"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          className="form input"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className="form input"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
          style={{ width: '500px' }}
        />
        
        <button type="button" className="form input" style={styles.button} onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
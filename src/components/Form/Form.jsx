import React, { useState } from 'react'
import emailjs from 'emailjs-com'

import './Form.css'

const Form = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
          setError('Email is invalid');
        } else {
          setError(null);
        }
    
        setEmail(event.target.value);
      };

    const submit = () => {
        if (name && email && message) {
           // TODO - send mail
    
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Porfavor rellena todos los campos.');
        }
    }

   
    return (
        <div className="form">
           <input type="text" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} className=' col-md-4 col-form-label mb-2 ' />
           <input type="email" placeholder='Email' value={email} onChange={handleChange} className='col-md-4 col-form-label mb-2 mt-3'/>
           <textarea placeholder='Tu mensaje' value={message} onChange={e => setMessage(e.target.value)} className='col-md-4 col-form-label mb-2 mt-3'>{error && <p style={{color: 'red'}}>{error}</p>}</textarea>
           <button  onClick={submit} className='mt-2 col-md-4 button'>Enviar Mensaje</button>
           <span className="mt-3" >Gracias por tu mensaje, en breve contestare ♡</span> 
        </div>
    );
}

export default Form;


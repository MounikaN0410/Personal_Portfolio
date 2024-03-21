import React from 'react'
import './contact.scss'
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
// require("dotenv").config()
// import { useState } from 'react';

export default function Contact() {
 
 


  
    const form = useRef(null); // Create a ref for the form element
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4hshqo1', 'template_4jq3126', form.current, 'Kf1tU2iVkLUTdw2yP')
        .then((result) => {
            console.log(result.text);
            
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <div className='contact' id='contact'>
        <div className="left">
          <img src='assets/Portfolio_Images/shake.svg' alt=''/>
        </div>
        <div className="right" >
          

          
          <h2>Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} style={{borderStyle:'solid',borderRadius:'10px' }}> 
            <input type='text' placeholder='Email' name='email'/> 
            <textarea placeholder='Message' name='message'/> 
            <button type="submit">Submit</button> 
          </form>
         
        </div>
      </div>
    );
  };

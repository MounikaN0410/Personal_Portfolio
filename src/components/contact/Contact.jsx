import React from 'react'
import './contact.scss'
// import emailjs from '@emailjs/browser';
// import { useState } from 'react';

export default function Contact() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [stateMessage, setStateMessage] = useState(null);
  // const sendEmail = (e) => {
  //   e.persist();
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   emailjs
  //     .sendForm(
  //       'service_9tbk9wf',
  //       'template_w2pzvae',
  //       e.target,
  //       'n9Ba_xsmtd8AzzFMp'
  //     )
  //     .then(
  //       (result) => {
  //         setStateMessage('Message sent!');
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       },
  //       (error) => {
  //         setStateMessage('Something went wrong, please try again later');
  //         setIsSubmitting(false);
  //         setTimeout(() => {
  //           setStateMessage(null);
  //         }, 5000); // hide message after 5 seconds
  //       }
  //     );
    
  //   // Clears the form after sending the email
  //   e.target.reset();
  // };


//   const sendEmail = async (e) => {
//     e.preventDefault();

//     try {
//         const result = await emailjs.sendForm('service_9tbk9wf', '__ejs-test-mail-service__', e.target, 'n9Ba_xsmtd8AzzFMp');
//         console.log(result.text);
//     } catch (error) {
//         console.log(error.text);
//     }
// };


  return (
    <div className='contact'id='contact'>
      <div className="left">
        <img src='assets/Portfolio_Images/shake.svg' alt=''/>

      </div>
      <div className="right">
        <h2>Contact  </h2>
        <form >
        <input type='text' placeholder='Email'/>
        <textarea placeholder='Message'/>
        <button >Submit</button>


        </form>
      </div>
    </div>
  )
}

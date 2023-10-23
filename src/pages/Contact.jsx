import React, { useState, useRef } from 'react'
import '/src/styles/contact.css'
import Modal from '/src/components/Modal'
import Failed from '/src/components/Failed'
import Zoom from 'react-reveal/Zoom';
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser';
import { Element } from 'react-scroll';


function Contact() {
  const service_id = process.env.SERVICE_ID;
  const template_id = process.env.TEMPLATE_ID;
  const user_id = process.env.USER_ID;


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setshowModal] = useState(false);
  const [showFModal, setshowFModal] = useState(false);

  const closeModal = () => setshowModal(false);
  const closeFModal = () => setshowFModal(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  }

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm()

  const form = useRef();

  const submit = (e) => {
    console.log(`${service_id}${template_id}${user_id}`);
    emailjs.sendForm(service_id, template_id, form.current, user_id)
      .then((result) => {
        setshowModal(true);
        resetForm();
      }, (error) => {
        setshowFModal(true);
        resetForm();
      });
  }
  return (
    <Element id='contact'>
      <div className="bg-contact3">
        {showModal && <Modal closeModal={closeModal} /> }
        {showFModal && <Failed closeFModal={closeFModal} /> }
        <Zoom>
          <div className="container-contact3">
            <div className="wrap-contact3">
              <form className="contact3-form validate-form" ref={form}>
                <span className="contact3-form-title">Contact Me</span>
                <div
                  className="wrap-input3 validate-input"
                  data-validate="Name is required"
                >
                  <input
                    className="input3"
                    type="text"
                    name="user_name"
                    {...register("name", {
                      required: true,
                      minLength: 3
                    })}
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete='off'
                    required
                  />
                  <span className="focus-input3" />
                </div>
                <div height="27px" style={{ color: "red" }}>{errors.name && (
                  "Please enter a valid name"
                )}&nbsp;</div>
                <div
                  className="wrap-input3 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    className="input3"
                    type="text"
                    name="user_email"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })}
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='off'
                    required
                  />
                  <span className="focus-input3" />
                </div>
                <div height="27px" style={{ color: "red" }}>{errors.email && (
                  "Please enter a valid email"
                )}&nbsp;</div>
                <div
                  className="wrap-input3 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    className="input3"
                    name="message"
                    {...register("message", {
                      required: true,
                      minLength: 3
                    })}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <span className="focus-input3" />
                </div>
                <div height="27px" style={{ color: "red" }}>{errors.message && (
                  "Please enter a valid message"
                )}&nbsp;</div>
                <div className="container-contact3-form-btn">
                  <button className="contact3-form-btn" type='submit' onClick={handleSubmit(submit)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </Zoom>
      </div>
    </Element>
  )
}

export default Contact
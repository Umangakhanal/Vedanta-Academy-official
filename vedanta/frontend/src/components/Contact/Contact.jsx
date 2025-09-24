import React from "react";
import Styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import ContactCard from "../Card/ContactCard";
import QuickAction from "./QuickAction";

const Contact = () => {
  return (
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.textContainer}>
        <h1>Contact Vedanta Academy</h1>
        <p>
          Ready to start your learning journey? We're here to help you choose
          the right program and answer all your questions. Reach out to us
          today!
        </p>
        </div>
      </div>
      <div className={Styles.formpart}>
        <div className={Styles.contactForm}>
            <ContactForm/>
        </div>
        <div className={Styles.contactInfo}>
            <ContactCard/>
            <QuickAction/>
        </div>
      </div>
    </>
  );
};

export default Contact;

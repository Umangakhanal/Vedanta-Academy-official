import React, { useEffect, useState } from "react";
import Styles from "./ContactCard.module.css";
import { FaRegEnvelope, FaRegClock } from "react-icons/fa";
import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

const ContactCard = () => {
  const [contact, setContact] =useState(null);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/contact-info`)
    .then((res)=> res.json())
    .then((data)=> setContact(data))
    .catch((err)=> console.error("Error fetching contact info:", err))
  },[]);
  if (!contact) return null;
  return (
    <>
      <div className={Styles.card}>
        <h2>Contact Information</h2>
        {/* Phone */}
        <div className={Styles.item}>
          <div className={Styles.icon}>
            <HiOutlinePhone />
          </div>
          <div className={Styles.textArea}>
            <h6>Phone</h6>
            <p>{contact.phone}</p>
            <p>Call us for immediate assistance</p>
          </div>
        </div>
        {/* Email */}
        <div className={Styles.item}>
          <div className={Styles.icon}>
            <FaRegEnvelope />
          </div>
          <div className={Styles.textArea}>
            <h6>Email</h6>
            <p>{contact.email}</p>
            <p>Send us your queries anytime</p>
          </div>
        </div>
        {/* Address */}
        <div className={Styles.item}>
          <div className={Styles.icon}>
            <HiOutlineMapPin />
          </div>
          <div className={Styles.textArea}>
            <h6>Address</h6>
            <p>{contact.address}</p>
            <p>Visit Us</p>
          </div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.icon}>
            <FaRegClock />
          </div>
          <div className={Styles.textArea}>
            <h6>Office Hours</h6>
            <p>{contact.officeHoursWeek}</p>
            <p>{contact.officeHoursSat}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

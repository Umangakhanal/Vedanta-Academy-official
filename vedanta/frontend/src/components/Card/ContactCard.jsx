import React from "react";
import Styles from "./ContactCard.module.css";
import { FaRegEnvelope, FaRegClock } from "react-icons/fa";
import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";

const ContactCard = () => {
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
            <p>+977 9812345678</p>
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
            <p>info@vedantaacademy</p>
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
            <p>M9F6+X2W, Madhyapur Thimi 44600</p>
            <p>Visit Us</p>
          </div>
        </div>
        <div className={Styles.item}>
          <div className={Styles.icon}>
            <FaRegClock />
          </div>
          <div className={Styles.textArea}>
            <h6>Office Hours</h6>
            <p>Sun - Fri : 10:00AM - 5:00PM</p>
            <p>Saturday : Closed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;

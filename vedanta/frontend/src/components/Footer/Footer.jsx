import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import {FaPhoneAlt, FaEnvelope , FaMapMarkerAlt} from 'react-icons/fa';
const Footer = () => {
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.top}>
          <div className={Styles.left}>
            <div className={Styles.logoContainer}>
              <div className={Styles.logo}>
                <h2>VA</h2>
              </div>
              <h2>Vedanta Academy</h2>
            </div>
            <p>
              Empowering minds through comprehensive educational programs. We
              specialize in handwriting improvement, public speaking, creative
              writing, and innovative learning methodologies.
            </p>
          </div>
          <div className={Styles.mid}>
            <h2> QUICK LINKS</h2>
            <div className={Styles.links}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/programs"}>Programs</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={Styles.right}>
            <h2>CONTACT INFO</h2>
            <div className={Styles.info}>
                <div className={Styles.contact}>
                    <FaPhoneAlt size={16} color="var(--color-secondary)"/>
                    <p>+977 9812345670</p>
                </div>
                <div className={Styles.contact}>
                    <FaEnvelope size={16} color="var(--color-secondary)"/>
                    <p>info@vedanta.com</p>
                </div>
                <div className={Styles.contact}>
                    <FaMapMarkerAlt size={16} color="var(--color-secondary)"/>
                    <p>M9F6+X2W,Madhyapur Thimi</p>
                </div>
            </div>
          </div>
        </div>
       <div className={Styles.line}></div>
        <div className={Styles.bottom}>
            <p>© 2025 Vedanta Academy. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;

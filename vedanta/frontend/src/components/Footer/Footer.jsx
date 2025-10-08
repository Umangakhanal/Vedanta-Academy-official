import { useState, useEffect } from "react";
import Styles from "./Footer.module.css";
import { data, Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/contact-info")
      .then((res) => res.json())
      .then((data) => setContact(data))
      .catch((err) => console.error("Error fetching contact info:", err));
  }, []);
  if (!contact) return null;
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
            <p>{contact.description}</p>
            {/*Social Media Icons */}
            <div className={Styles.socials}>
              {contact.socialLinks?.facebook && (
                <a
                  href={contact.socialLinks.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook size={30} color="var(--color-secondary)" />
                </a>
              )}
              {contact.socialLinks?.instagram && (
                <a
                  href={contact.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={30} color="var(--color-secondary)" />
                </a>
              )}
              {contact.socialLinks?.linkedin && (
                <a
                  href={contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={30} color="var(--color-secondary)" />
                </a>
              )}
            </div>
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
            <h2>{contact.heading || "CONTACT INFO"}</h2>
            <div className={Styles.info}>
              <div className={Styles.contact}>
                <FaPhoneAlt size={16} color="var(--color-secondary)" />
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
              <div className={Styles.contact}>
                <FaEnvelope size={16} color="var(--color-secondary)" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className={Styles.contact}>
                <FaMapMarkerAlt size={16} color="var(--color-secondary)" />
                <a href={`https://maps.app.goo.gl/MV1Sdgs1WABRpVob8`} target="_blank" rel="noreferrer">{contact.address}</a>
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

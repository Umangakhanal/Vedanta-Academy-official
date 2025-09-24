import React from "react";
import Styles from "./QuickAction.module.css";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
const QuickAction = () => {
  const phoneNumber = "+9779812345678";
  const email = "info@vedantaacademy.com";
  const address = "https://maps.app.goo.gl/aZqCL1sfo9DZ8YqcA";

  return (
    <>
      <div className={Styles.card}>
        <h5>Quick Actions</h5>
        <div className={Styles.actions}>
          <a href={`tel:${phoneNumber}`}>
            <div className={Styles.container}>
              <HiOutlinePhone />
              <span>Call Now</span>
            </div>
          </a>
          <a href={`mailto:${email}`}>
            <div className={Styles.container}>
              <HiOutlineEnvelope />

              <span>Send Mail</span>
            </div>
          </a>
          <a href={address} target="_blank" rel="noopener noreferrer">
            <div className={Styles.container}>
              <HiOutlineMapPin />

              <span>Get Directions</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default QuickAction;

import  { useEffect, useState } from "react";
import Styles from "./QuickAction.module.css";
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
} from "react-icons/hi2";
const QuickAction = () => {
 const [contact, setContact]= useState(null );

 useEffect(()=>{
  fetch("http://localhost:5000/api/contact-info")
  .then(res => res.json())
  .then(data => {
      console.log(data); 
      setContact(data);
    })
  .catch(err => console.error( "Error fetching contact info :",err));
 }, []);

 if (!contact) return null;

  return (
    <>
      <div className={Styles.card}>
        <h5>Quick Actions</h5>
        <div className={Styles.actions}>
          <a href={`tel:${contact.phone }`}>
            <div className={Styles.container}>
              <HiOutlinePhone/>
              <span>Call Now</span>
            </div>
          </a>
          <a href={`mailto:${contact.email}`}>
            <div className={Styles.container}>
              <HiOutlineEnvelope/>

              <span>Send Mail</span>
            </div>
          </a>
          <a href={`${contact.mapLink}`} target="_blank" rel="noopener noreferrer">
            <div className={Styles.container}>
              <HiOutlineMapPin/>

              <span>Get Directions</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default QuickAction;

import React from "react";
import Styles from "./Card.module.css";
import { useNavigate } from "react-router-dom";
const Card = ({
  title,
  shortDesc,
  fullDesc,
  duration,
  image,
  showFull,
  buttonText,
  keyBenefits,
}) => {
  const navigate = useNavigate();

   const handleButtonClick =()=>{
    if (buttonText==="Learn More →")
    {
      navigate('/programs');
    }
    else if(buttonText==="Enroll Now")
    {
      navigate('/contact');
    }
  }
  return (
    <div>
      <div className={Styles.card}>
        <img src={image} alt={title} className={Styles.image} />
        <div className={Styles.content}>
          <h3>{title}</h3>
          <p>{showFull ? fullDesc : shortDesc}</p>
          {showFull && (
            <p className={Styles.keyBenefits}>
              <strong>Key Benefits:</strong>{keyBenefits}
            </p>
          )}
          <p className={Styles.duration}>
            <strong>Duration:</strong> {duration}
          </p>
          <button onClick={handleButtonClick} className={Styles.btn}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

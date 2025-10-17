import React, { useEffect, useState } from "react";
import Styles from "./About.module.css";
import { FaBullseye, FaRegLightbulb } from "react-icons/fa6";
import CountUp from "react-countup";
import { FaUsers, FaBookOpen, FaAward,FaStar  } from "react-icons/fa6";
import Staff from "./Staff";

const About = () => {
  const [hero,setHero]=useState(null);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_API_URL}/api/about`)
    .then((res)=> res.json())
    .then((data)=> setHero(data.result))
    .catch((err)=> console.error("Error fetching About hero:",err));
  },[]);

  const iconMap = {
    FaBullseye: FaBullseye,
    FaRegLightbulb: FaRegLightbulb,
  };
   const icons = {
      FaUsers: <FaUsers size={30} color="var(--color-custom)" />,
      FaBookOpen: <FaBookOpen size={30} color="var(--color-custom)" />,
      FaAward: <FaAward size={30} color="var(--color-custom)" />,
      FaStar: <FaStar size={30} color="var(--color-custom)" />,
    };
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch(
` ${import.meta.env.VITE_API_URL}/api/missionVision`    )
      .then((res) => res.json())
      .then((data) => setCards(data.result))
      .catch((err) => console.error("Error fetching missionVision:",err));
  }, []);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/stats`    )
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err)=> console.error("Error fetching stats:", err));
  }, []);
  return (
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.textSide}>
          <h1>{hero?.heading}</h1>
          <p>
            {hero?.content}
          </p>
        </div>
        <div className={Styles.imageSide}>
          <img
            src={hero?.image} 
            alt=" About Vedanta Academy"
          />
        </div>
      </div>
      <div className={Styles.cardsContainer}>
        {cards.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={item._id} className={Styles.card}>
              <div
                className={Styles.iconCircle}
                style={{ backgroundColor: item.circleColor || "#eee" }}
              >
                {IconComponent ? (
                  
                  <IconComponent  color={item.iconColor} size={30} />    
                ):(
                  <FaBullseye size={30} color={item.iconColor} />
                )
              }
              </div>
              <div className={Styles.text}>
                <h3>{item.title}</h3>
                <p style={{ paddingLeft: 10, paddingRight: 10 }}>
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={Styles.Achievements}>
        <div className={Styles.textcontainer}>
        <h2>Our Achievements</h2>
        <p>Numbers that reflect our commitment to educational excellence and student success.</p>
        </div>
        <div className={Styles.Stats}>

        {stats.map((stat) => {
          const IconComponent = icons[stat.icon];
          return(
            <div className={Styles.statCard} key={stat._id}>
            <div className={Styles.icon}>
              {IconComponent?IconComponent:<FaUsers size={30} color="var(--color-custom)"/>}
              </div>
            <div className={Styles.data}>
              <h2>
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h2>
              <p>{stat.label}</p>
            </div>
          </div>
          );
          
})}
        </div>
      </div>
      <Staff/>
    </>
  );
};

export default About;

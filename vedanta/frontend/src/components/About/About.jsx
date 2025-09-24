import React, { useEffect, useState } from "react";
import Styles from "./About.module.css";
import { FaBullseye, FaRegLightbulb } from "react-icons/fa6";
import CountUp from "react-countup";
import { FaUsers, FaBookOpen, FaAward,FaStar  } from "react-icons/fa6";

const About = () => {
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
      "https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/master/MissionVision.json"
    )
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error(err));
  }, []);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/refs/heads/master/Stats.json"
    )
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);
  return (
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.textSide}>
          <h1>About Vedanta Academy</h1>
          <p>
            Vedanta Academy began with a simple vision: to improve handwriting
            standards in Nepal. Over the years, it has grown into a pioneer in
            shaping the academic journey of students, teachers, and parents.With
            more than 9 years of experience, our programs have reached 300+
            schools, 100,000+ students, and 10,000+ teachers, leaving a lasting
            impact on learning.
            <br />
            But our journey does not stop at handwriting. As education evolves,
            so do we. We now focus on 21st Century Skills, ensuring that
            students are prepared not only for exams but also for the challenges
            of real life. At Vedanta Academy, students are encouraged to think
            creatively, communicate confidently, and solve problems effectively,
            helping them develop essential skills that go beyond textbooks. Our
            programs nurture public speaking, creative writing, leadership, and
            entrepreneurial abilities, empowering students to express themselves
            clearly, embrace innovation, and take initiative in their learning
            journey.
          </p>
        </div>
        <div className={Styles.imageSide}>
          <img
            src="https://static.wixstatic.com/media/ef1862_3ae5fb45057c4dbd804a94a9cb30d400~mv2.png/v1/fill/w_672,h_461,al_c,lg_1,q_85,enc_auto/ef1862_3ae5fb45057c4dbd804a94a9cb30d400~mv2.png"
            alt="Vedanta Academy"
          />
        </div>
      </div>
      <div className={Styles.cardsContainer}>
        {cards.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={item.id} className={Styles.card}>
              <div
                className={Styles.iconCircle}
                style={{ backgroundColor: item.circleColor }}
              >
                <IconComponent color={item.iconColor} size={30} />
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

        {stats.map((stat) => (
          <div className={Styles.statCard} key={stat.id}>
            <div className={Styles.icon}>{icons[stat.icon]}</div>
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
        ))}
        </div>
      </div>
    </>
  );
};

export default About;

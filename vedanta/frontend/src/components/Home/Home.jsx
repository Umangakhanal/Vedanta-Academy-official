import Styles from "./Home.module.css";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { FaUsers, FaBookOpen, FaAward, FaStar } from "react-icons/fa";
import Card from "../Card/Card";
import {useNavigate} from 'react-router-dom' 
const Home = () => {
  const navigate =useNavigate();
  const iconMap = {
    FaUsers: <FaUsers size={30} color="var(--color-custom)" />,
    FaBookOpen: <FaBookOpen size={30} color="var(--color-custom)" />,
    FaAward: <FaAward size={30} color="var(--color-custom)" />,
    FaStar: <FaStar size={30} color="var(--color-custom)" />,
  };
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch(
" http://localhost:5000/api/stats "
    )
      .then((res) => res.json())
      .then((data) => setStats(data))
       .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  // const [programs, setPrograms] = useState([]);
  // useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/refs/heads/master/Program.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setPrograms(data))
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <div className={Styles.textcontainer}>
            <h1>
               <span>Vedanta Academy</span>
            </h1>
            <p>
              At Vedanta Academy, we believe education goes beyond textbooks.
              For the past 9+ years, we have been transforming classrooms with
              our handwriting training programs in both English and
              Nepali—helping more than 100,000 students and 10,000 teachers
              across 300+ schools, 16 districts, and 2 countries. Today, we
              extend our expertise into essential 21st Century Skills—public
              speaking, creative writing, problem solving, and
              entrepreneurship—because we believe every student should not only
              write with clarity but also express creatively, speak with
              confidence, think critically, and act responsibly. With a team of
              30 dedicated educators, currently serving 75+ schools, we continue
              to grow as a trusted partner in education, nurturing skills that
              truly prepare students for life.
            </p>
          </div>
          <div className={Styles.card}>
            <h3>Why Choose Vedanta Academy?</h3>
            <ul>
              <li>&#10140; Expert instructors with proven track records</li>
              <li>&#10140; Personalized learning approach</li>
              <li>&#10140; Comprehensive skill development</li>
              <li>&#10140; Flexible scheduling options</li>
            </ul>
          </div>
        </div>
        <div className={Styles.buttons}>
          <button className={Styles.btn1}>Explore Programs &#10140; </button>
          <button className={Styles.btn2}>Contact us </button>
        </div>
      </div>
      <div className={Styles.cardContainer}>
        {stats.map((stat) => {
          const icon = iconMap[stat.icon] ||<FaStar size={30} color="var(--color-primary)"/>;
          return(

          <div className={Styles.statCard} key={stat._id || stat.id}>
            <div className={Styles.icon}>
              {icon}
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
      {/* <div className={Styles.program}>
        <div className={Styles.text}>
          <h2>Our Training Programs</h2>
          <p>
            Discover our comprehensive range of educational programs designed to
            enhance your skills and unlock your potential.
          </p>
        </div>
        <div className={Styles.cardsContainer}>
          {programs.map((program) => (
            <Card
              key={program.id}
              title={program.title}
              shortDesc={program.shortDesc}
              fullDesc={program.fullDesc}
              duration={program.duration}
              image={program.image}
              showFull={false}
              buttonText={'Learn More →'}
            />
          ))}
        </div>
        <button onClick={()=> navigate("/programs")}>View All Programs &#10140;</button>
      </div> */}
    </>
  );
};

export default Home;

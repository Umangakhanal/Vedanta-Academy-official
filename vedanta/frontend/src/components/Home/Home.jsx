import Styles from "./Home.module.css";
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { FaUsers, FaBookOpen, FaAward, FaStar } from "react-icons/fa";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const iconMap = {
    FaUsers: <FaUsers size={30} color="var(--color-custom)" />,
    FaBookOpen: <FaBookOpen size={30} color="var(--color-custom)" />,
    FaAward: <FaAward size={30} color="var(--color-custom)" />,
    FaStar: <FaStar size={30} color="var(--color-custom)" />,
  };
  const [heroData, setHeroData] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/home`)
      .then((res) => res.json())
      .then((data) => setHeroData(data.result[0]))
      .catch((err) => console.error("Error fetching hero data:", err));
  }, []);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    fetch(` ${import.meta.env.VITE_API_URL}/api/stats `)
    .then((res) => res.json())
    .then((data) => setStats(data))
    .catch((err) => console.error("Error fetching stats:", err));
  }, []);
  
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/programs`)
    .then((res) => res.json())
    .then((data) => setPrograms(data))
    .catch((err) => console.log("Error fetching programs:", err));
  }, []);
  if (!heroData) return <p>Loading...</p>;
  return (
    <>
      <div
        className={Styles.main}      >
        <div className={Styles.container} >
          <div className={Styles.textcontainer}  style={{
          backgroundImage: heroData.heroImage ? `url(${heroData.heroImage})`:"none",
          backgroundSize: "fill",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
            <h1>
              <span>{heroData.heroTitle}</span>
            </h1>
            <p>{heroData.content}</p>
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
          <button className={Styles.btn1} onClick={() => navigate("/programs")}>
            Explore Programs &#10140;{" "}
          </button>
          <button className={Styles.btn2} onClick={() => navigate("/contact")}>
            Contact us{" "}
          </button>
        </div>
      </div>
      <div className={Styles.cardContainer}>
        {stats.map((stat) => {
          const icon = iconMap[stat.icon] || (
            <FaStar size={30} color="var(--color-primary)" />
          );
          return (
            <div className={Styles.statCard} key={stat._id || stat.id}>
              <div className={Styles.icon}>{icon}</div>
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
      {/* Program section */}
      <div className={Styles.program}>
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
              key={program._id || program.id}
              title={program.title}
              shortDesc={program.shortDesc}
              fullDesc={program.fullDesc}
              duration={program.duration}
              image={program.imageUrl}
              showFull={false}
              buttonText={"Learn More →"}
            />
          ))}
        </div>
        <button onClick={() => navigate("/programs")}>
          View All Programs &#10140;
        </button>
      </div>
    </>
  );
};

export default Home;

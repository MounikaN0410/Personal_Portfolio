import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      // icon:"react_portfolio/public/assets/Portfolio_Images/mobile.png",
      // icon: "./assets/mobile.png",
      icon:'https://files.realpython.com/media/Python-driven-Web-Applications_Watermarked.c5692cb81de8.jpg',
      title: "Venue Finder",
      tech:'React.js,Flask,My SQL,Git,Javascript',
      desc:" Spearheaded the development of a user-friendly web application catering to customized venue/banquet hall booking with additional features: Space bookmarking,Session management,payments. Achieved a 20% reduction in API response times through optimized query execution and data caching strategies, demonstrating proficiency in both frontend and backend technologies.",
      img:
        "https://www.interviewbit.com/blog/wp-content/uploads/2021/11/Software-Engineer-Skills.png",
    },
    {
      id: "2",
      icon: "https://learnerbits.com/wp-content/uploads/2023/10/data-analysis.webp",
      title: "Financial Analysis of Artist's in New York",
      tech:'Tableau,Python,Web Scraping,Data Preprocessing',
      desc:
        "Led a data collection and visualization initiative for the Financial State of New York artists, creating a sophisticated dashboard with a stability index based on multiple attributes and Implemented action filters and parameters for dynamic financial exploration.",
      img:
      "https://img-c.udemycdn.com/course/750x422/2095410_943c_2.jpg",
    },
    {
      id: "3",
      icon: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318225814/ML-Tutorial.jpg",
      title: "Accident Severity Prediction",
      tech:'Python,Machine Learning,Data Preprocessing,Streamlit',
      desc:
      "Developed predictive models to enhance safety measures by accurately predicting crash severity, leveraging statistical calculations, data analysis expressions (DAX), and machine learning techniques (XGBoost, RF). Achieved 90.1% accuracy through rigorous evaluation and hyperparameter fine-tuning.",






      img:
        "https://miro.medium.com/v2/resize:fit:1200/1*29oTLzeQn5MIQjnX6tqauw.jpeg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1 style={{color:'white',position:'absolute',marginTop: '-550px',fontSize:'40px'}}>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <i style={{color:'GrayText'}}>{d.tech}</i>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* <img src='assets/Portfolio_Images/shake.svg' alt=''/> */}
      <img
        src="./assets/Portfolio_Images/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/Portfolio_Images/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
   
  );
}
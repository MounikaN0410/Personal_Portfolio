import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      // icon:"react_portfolio/public/assets/Portfolio_Images/mobile.png",
      // icon: "./assets/mobile.png",
      title: "Venue Finder",
      desc:"Led the development of a user-friendly web application for customized venue/banquet hall recommendations, integrating React and Flask for frontend and backend functionality. Implemented features like space bookmarking, session management, and payment gateway processing while optimizing data storage with MySQL.",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      // icon: "./assets/globe.png",
      title: "Financial Analysis of Artist's in New York",
      desc:
        "Led a data collection and visualization initiative for the Financial State of New York artists, creating a sophisticated dashboard with a stability index based on multiple attributes and Implemented action filters and parameters for dynamic financial exploration.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      // icon: "./assets/writing.png",
      title: "Accident Severity Prediction",
      desc:
      "Developed predictive models to enhance safety measures by accurately predicting crash severity, leveraging statistical calculations, data analysis expressions (DAX), and machine learning techniques (XGBoost, RF). Achieved 90.1% accuracy through rigorous evaluation and hyperparameter fine-tuning.",






      img:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fiverr.com%2Fjeetkpal%2Fdo-data-analysis-dashboard-ml-assignment-and-project-using-python-tableau&psig=AOvVaw0WRH0l3KIK8BBBQmGGa781&ust=1709524268004000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjPlK2Y14QDFQAAAAAdAAAAABAa",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      {/* <h1 style={{color:'white'}}>Academic Projects</h1> */}
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  {/* <span>Projects</span> */}
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
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
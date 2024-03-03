import React from 'react';
import './WorkExperienceCard.scss';

// const descriptionPoints = description.split('\n'); // Assuming description is separated by newline characters
const WorkExperienceCard = ({ title, company, date, description }) => {
  return (
    <div className="work-experience-card">
      <h2 className="title">{title}</h2>
      <h3 className="company">{company}</h3>
      <p className="date">{date}</p>
      <p className="description">{description}</p>
      
    </div>
  );
};
  


export default WorkExperienceCard;

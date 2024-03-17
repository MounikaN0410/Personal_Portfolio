import React from 'react';
import './WorkExperienceCard.scss';

// const descriptionPoints = description.split('\n'); // Assuming description is separated by newline characters
const WorkExperienceCard = ({ title, company, date, description1,description2,description3 }) => {
  return (
    <div className="work-experience-card">
      <h2 className="title">{title}</h2>
      <h3 className="company">{company}</h3>
      <p className="date">{date}</p>
      {/* <ul className="description">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul> */}

      <p className='description'>{description1}</p>
      <p className='description'>{description2}</p>
      <p className='description'>{description3}</p>
      
    </div>
  );
};
  


export default WorkExperienceCard;

import React from 'react'
import './portfolio.scss'
import WorkExperienceCard from './workexperience'

export default function Portfolio() {
  return (
    

   
    <div style={{border: '2px solid black', padding:'20px'}}className='portfolio' id='portfolio'>
      <div className='left' >
      <h1>Technnical Skills</h1>

      <div class="skills">
  <div class="category">
    <div class="category-title">Programming Languages</div>
    <ul class="skill-list">
      
      <li class="skill">Python</li>
      <li class="skill">C</li>
      <li class="skill">Java</li>
      <li class="skill">SQL</li>
    </ul>
  </div>

  <div class="category">
    <div class="category-title">Web Development</div>
    <ul class="skill-list">
      <li class="skill">React</li>
      <li class="skill">HTML</li>
      <li class="skill">CSS</li>
      <li class="skill">SCSS</li>
      <li class="skill">Flask</li>
      <li class="skill">Node.js</li>
      <li class="skill">Express</li>
      <li class="skill">Git</li>
      <li class="skill">Rest API</li>
      <li class="skill">Relational Databases</li>
      <li class="skill">Mongo DB</li>

      
    </ul>
  </div>
  <div class="category">
    <div class="category-title"> Data Analysis and ML</div>
    <ul class="skill-list">
      <li class="skill">SQL</li>
      <li class="skill">Statistical Analysis</li>
      <li class="skill">Scikit-learn</li>
      <li class="skill">Pandas</li>
      <li class="skill">MS Excel</li>
    </ul>
  </div>
  <div class="category">
    <div class="category-title">Data Visualization</div>
    <ul class="skill-list">
      <li class="skill">Tableau</li>
      <li class="skill">Power BI</li>
      <li class="skill">Matplotlib</li>
      <li class="skill">Seaborn</li>
    </ul>
  </div>

  
</div>



        
      </div>
      <div className='right' >
      <h1>My Work Experiences</h1>
      <div className="cardContainer">
      <WorkExperienceCard
        title="Python Developer Intern"
        company="Techsol Corp"
        
        date="Nov 2021 – Feb 2022"
        
        description={["Implemented RESTful APIs using Python, facilitating seamless communication between backend services and frontend solutions. Developed and deployed web applications, leveraging React and its frameworks for intuitive user interfaces.","Implemented role-based access control, allowing different team members to view and update project data based on their roles and permissions.","Implemented modular and reusable React components, reducing code duplication by 30% and enhancing code maintainability, resulting in a 20% increase in development efficiency."]}
      />

      <WorkExperienceCard
        title="Intern, Data Analyst"
        company="INMOVIDU Tech, Apsis Solutions"
        
        date="July 2020 – September 2020"
        description={["Extracted meaningful insights and identified patterns from raw data by engaging in data wrangling and conducting both qualitative and quantitative analyses.","Achieved 19% improvement in data quality and accuracy through SQL data transformation. Reduced data processing time and increased pipeline efficiency by 13% through optimization efforts.", "Created interactive visual reports using Tableau and Power BI, resulting in a 29%. improvement in data accessibility for non-technical team members. Collaborated closely with data collection teams, playing a key role in web data scraping, cleaning, and pre-processing to enhance analytics capabilities."]}
      />


      </div>

      
      
    </div>
    </div>
  )
}

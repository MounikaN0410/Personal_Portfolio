import React from 'react'
import './portfolio.scss'
import WorkExperienceCard from './workexperience'

export default function Portfolio() {
  return (
    

   
    <div style={{border: '2px solid black', padding:'20px'}}className='portfolio' id='portfolio'>
      <div className='left'>
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
      <li class="skill">Javascript</li>
      
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
      <div className='right'>
      
      <h1>My Work Experiences</h1>
      <div className="cardContainer">
      <WorkExperienceCard
        title="Python Developer Intern"
        company="Techsol Corp"
        
        date="Nov 2021 – Feb 2022"
        
        description="Implemented role-based access control, allowing different team members to view and update project data based on their roles and permissions. 
        Leveraged Flask-RESTful for API development, allowing seamless integration with existing systems and services.
       Collaborated with cross-functional teams to integrate accessibility considerations into the website’s ongoing development process. Contributed to the continuous improvement of the company’s digital accessibility initiatives."
        
      />

      <WorkExperienceCard
        title="Intern, Data Analyst"
        company="INMOVIDU Tech, Apsis Solutions"
        
        date="July 2020 – September 2020"
        description="Extracted meaningful insights from raw data, achieved improvement in data quality and accuracy, created interactive visual reports using Tableau and Power BI, and worked on implementing accessibility features."
      />


      </div>

      
      
    </div>
    </div>
  )
}

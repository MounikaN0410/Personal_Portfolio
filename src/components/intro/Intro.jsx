import React from 'react'
import './intro.scss'
// import resume from './assets/Portfolio_Images/Full_Stack (2).pdf'


export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left' style={{backgroundColor:'#ffe6b3'}}>
        <div className="imgContainer">
          <img src='assets/Portfolio_Images/portfoliopicture.jpg' alt=""/>
        </div>
        <div style={{margin:'40px'}}>
        <h1 style={{color:'crimson'}}>About Me👩🏻‍💼</h1>
        <h3 style={{margin:'20px'}}>Hello!! I am a skilled Full Stack Developer👩🏻‍💻 and a Data Analyst proficient in using cutting-edge programming techniques and tools to craft swift, impactful solutions 🌟. With a strong grasp of foundational concepts, I'm ready to effortlessly embrace new technologies.📊 Let's connect and explore exciting collaboration opportunities! 🚀/</h3>
        </div>
        

      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2 style={{fontSize:' 35px'}}>Hi There, I'm</h2>
          <h1 style={{ fontSize: '60px', margin: '10px 0' }}>Mounika Nadimpalli</h1>

          <h3 style={{color: 'darkblue',fontSize: '30px'}}>Software Development</h3>
          <h3 style={{color: 'darkblue',fontSize: '30px'}}>Data Analytics</h3>
          <h3 style={{color: 'darkblue',fontSize: '30px'}}>Web Development</h3>
         

          <a href="./assets/Portfolio_Images/Full_Stack (2).pdf" download="Mounika Resume" style={{textDecoration: 'none'}}>
            <button type="button" style={{color: 'green', backgroundColor: 'lightgreen', fontSize:'18px', border: 'none', cursor: 'pointer'}}>Download Resume</button>
          </a>

         
          

          

        </div>
        
      <a href="#portfolio">
        <img src='assets/Portfolio_Images/down.png' alt=''/>
        </a>  
        
      </div>
      {/* intro */}
      
    </div>
  )
}

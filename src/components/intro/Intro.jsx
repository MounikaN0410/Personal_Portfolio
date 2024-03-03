import React from 'react'
import './intro.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className="imgContainer">
          <img src='assets/Portfolio_Images/portfoliopicture.jpg' alt=""/>
        </div>

      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2 style={{fontSize:' 35px'}}>Hi There, I'm</h2>
          <h1 style={{ fontSize: '60px', margin: '10px 0' }}>Mounika Nadimpalli</h1>

          <h3 style={{color: 'crimson',fontSize: '30px'}}>Web Development</h3>
          <h3 style={{color: 'crimson',fontSize: '30px'}}>Data Analytics</h3>

        </div>
      <a href="#portfolio">
        <img src='assets/Portfolio_Images/down.png' alt=''/>
        </a>  
        
      </div>
      {/* intro */}
      
    </div>
  )
}

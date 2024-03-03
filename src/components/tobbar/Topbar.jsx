import React from 'react'
import './topbar.scss'
import {Person,Mail} from '@material-ui/icons'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen ? 'active' : '')}>

        <div className="wrapper">
            <div className='left'>
                <a href="#intro" className="logo">Mounika Nadimpalli</a>
                <div className='itemContainer'>
                    <Person/>
                    <span>+1 812 778 5193</span>
                </div>
                <div className='itemContainer'>
                    <Mail/>
                    <span>nmounika0410@gmail.com</span>
                </div>
                <div className='itemContainer'>
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', '_blank')} />

                    {/* <span>LinkedIn</span> */}
                </div>
                <div className='itemContainer'>
                    <GitHubIcon onClick={() => window.open('https://github.com/MounikaN0410', '_blank')} />

                    {/* <span>Mounika</span> */}
                </div>

            </div>
            
            <div className='right'>
                <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>

            </div>
        </div>
      
    </div>
  )
}

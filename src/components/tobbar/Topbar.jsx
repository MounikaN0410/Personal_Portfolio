import React from 'react'
import './topbar.scss'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen ? 'active' : '')}>

        <div className="wrapper">
            <div className='left'>
                <a href="#intro" className="logo">Mounika Nadimpalli</a>
                <div className='itemContainer'>
                <IoPersonSharp />
                    <span>+1 812 778 5193</span>
                </div>
                <div className='itemContainer'>
                <MdEmail/>
                    <span>nmounika0410@gmail.com</span>
                </div>
                <div className='itemContainer'>
                    <FaLinkedin onClick={() => window.open('https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile', '_blank')} />

                    {/* <span>LinkedIn</span> */}
                </div>
                <div className='itemContainer'>
                    <AiFillGithub onClick={() => window.open('https://github.com/MounikaN0410', '_blank')} />

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

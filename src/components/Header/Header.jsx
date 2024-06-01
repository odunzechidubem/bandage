import React from 'react'
import "./Header.css"
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import instagram from '../assets/instagram.png'
import youtubes from '../assets/youtube.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import user from '../assets/user.png'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import heart from '../assets/heart.png'






export default function Header() {
  return (
   <>
   <header className="">
    <div className="header">
    <div className="row">
        <div className="col">
            <div className="text"><img className='icon' src={phone} alt="phone-icone" /> <h6>(225) 555-0118</h6> </div>
            <div className="col"> <img className='icon' src={email} alt="email" /> <h6>(225) 555-0118</h6> </div>
        </div>

        <div className="col"><h6> Follow Us  and get a chance to win 80% off</h6></div>
        <div className="col"><h6> Follow Us  : </h6> 
        <img className='icon2' src={instagram} alt="instagram" />
        <img className='icon2' src={youtubes} alt="youtube" />
        <img className='icon2' src={facebook} alt="facebook" />
        <img className='icon2' src={twitter} alt="twitter" />
        </div>   
    </div>
    </div>
    
    <div className="row"> <div className="navbar-brand"><h3>Bandage</h3></div>
     <div className="collaps-section">
        <div className="navbarbar">
            <ul>
                <li> Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
            </ul>
        </div>
        <div className="btn-signs"> <img className='icon'  src={user} alt=" user-icon" srcset="" /> <a href="">Login</a> / <a href="">Register</a>
       <span className='icons'>
      <img className='icon' src={search} alt="" />
      <img className='icon' src={cart} alt="" />
      <img className='icon' src={heart} alt="" />
       </span>
       
       
         </div>
     
       
        
     </div>
    
    </div>
    
   </header>
   
  
   </>
  )
}


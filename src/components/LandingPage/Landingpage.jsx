import React from 'react'
import './Landingpage.css'
import Header from "../Header/Header"
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';
// import Productcards from "../Productcards"

export default function Landingpage() {
  return (
    <>
     <Header />
     <div className="container  fixed-width">
        <div className="rows">
            <div className="card1 cards "><img src={card1} alt="" /> 
            <div className="attachment"> 
            <h6 className='green' >5 Items</h6>
            <h2 className='highlight' >FURNITURE</h2>
            <h6  className='watch-more'>Read More</h6>
            </div>
            </div>

            <div className="card2 cards"><img src={card2} alt="" /> 
            <div className="attachment"> 
            <h6 className='green' >5 Items</h6>
            <h2 className='highlight' >FURNITURE</h2>
            <h6  className='watch-more'>Read More</h6>
            </div>
            <div className="small-card-wrapper">
             <div className="card3"> <img src={card3} alt="" />
             <div className="attachment"> 
            <h6 className='green' >5 Items</h6>
            <h2 className='highlight' >FURNITURE</h2>
            <h6  className='watch-more'>Read More</h6>
            </div>
             </div>
             <div className="card3"> <img src={card4} alt="" />
             <div className="attachment"> 
            <h6 className='green' >5 Items</h6>
            <h2 className='highlight' >FURNITURE</h2>
            <h6  className='watch-more'>Read More</h6>
            </div>
             </div>
                </div>
            </div>
        </div>


   {/* <Productcards/> */}






     </div>
    </>
  )
}

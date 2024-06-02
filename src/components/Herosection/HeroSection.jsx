import './HeroSection.css';
import card1 from '../../assets/images/card1.png';
import card2 from '../../assets/images/card2.png';
import card3 from '../../assets/images/card3.png';
import card4 from '../../assets/images/card4.png';

const HeroSection = () => {
  return (
    <>
      <div className="container fixed-width">
        <div className="rows">
          <div className="card1 cards">
            <img src={card1} alt="Card 1" /> 
            <div className="attachment">
              <h6 className="green">5 Items</h6>
              <h2 className="highlight">FURNITURE</h2>
              <h6 className="watch-more">Read More</h6>
            </div>
          </div>

          <div className="card2 cards">
            <img src={card2} alt="Card 2" />
            <div className="attachment">
              <h6 className="green">5 Items</h6>
              <h2 className="highlight">FURNITURE</h2>
              <h6 className="watch-more">Read More</h6>
            </div>
            <div className="small-card-wrapper">
              <div className="card3 cards">
                <img src={card3} alt="Card 3" />
                <div className="attachment">
                  <h6 className="green">5 Items</h6>
                  <h2 className="highlight">FURNITURE</h2>
                  <h6 className="watch-more">Read More</h6>
                </div>
              </div>
              <div className="card3 cards">
                <img src={card4} alt="Card 4" />
                <div className="attachment">
                  <h6 className="green">5 Items</h6>
                  <h2 className="highlight">FURNITURE</h2>
                  <h6 className="watch-more">Read More</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

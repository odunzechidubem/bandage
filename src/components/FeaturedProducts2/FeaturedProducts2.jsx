import './FeaturedProducts2.css';
import coolicon1 from "../../assets/images/coolicon1.svg"
import coolicon2 from "../../assets/images/coolicon2.svg"
import coolicon3 from "../../assets/images/coolicon3.svg"

const FeaturedProducts2 = () => {
    return (
        <section className="best-services">
            <h2 className="section-title">Featured Products</h2>
            <h3 className="section-subtitle">THE BEST SERVICES</h3>
            <p className="section-description">Problems trying to resolve the conflict between</p>
            
            <div className="services-grid">
                <div className="service-card">
                    <img src={coolicon1} alt="Easy Wins" className="service-icon" />
                    <h4>Easy Wins</h4>
                    <p>Get your best looking smile now!</p>
                </div>
                <div className="service-card">
                    <img src={coolicon2} alt="Concrete" className="service-icon" />
                    <h4>Concrete</h4>
                    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className="service-card">
                    <img src={coolicon3} alt="Hack Growth" className="service-icon" />
                    <h4>Hack Growth</h4>
                    <p>Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts2;

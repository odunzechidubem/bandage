import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Herosection/HeroSection';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import FeaturedProducts2 from './components/FeaturedProducts2/FeaturedProducts2';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <HeroSection />
        <FeaturedProducts />
        <FeaturedProducts2 />
      </div>
    </div>

  );
};

export default App;


import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Herosection/HeroSection';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <Navbar />
        <HeroSection />
        <FeaturedProducts />
      </div>
    </div>

  );
};

export default App;


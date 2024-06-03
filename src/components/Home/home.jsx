import Navbar from "../Navbar/navbar";
import Slide from "../HeroSection/HeroSection";
import Feature from "../Product/feature";
import Post from "../Product/post";
import Testimonial from "../Product/testimonial";
import CartBackground from "../Product/productBackground";
import Footer from "../Footer/footer";
import ProductContainer from "../Product/productContainer";
import HeroSection from "../HeroSection/HeroSection";

function Main() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductContainer />
      <Feature />
      <Post />
      <Testimonial />
      <CartBackground />
      <Footer />
    </>
  );
}

export default Main;

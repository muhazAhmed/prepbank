import Footer from "@/components/Footer";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="w-full p-2">
      <Hero />
      <WhyUs />
      <Newsletter />
      <Footer/>
    </div>
  );
};

export default Home;

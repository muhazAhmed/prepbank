import Hero from "./Hero";
import Newsletter from "./Newsletter";
import WhyUs from "./WhyUs";

const Home = () => {
  return (
    <div className="w-full p-2">
      <Hero />
      <WhyUs />
      <Newsletter />
    </div>
  );
};

export default Home;

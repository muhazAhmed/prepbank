import AboutUserSection from "./components/AboutUserSection";
import BannerImage from "./components/BannerImage";
import IntroSection from "./components/IntroSection";

const UserProfile = () => {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="w-full flex gap-3 justify-center">
        <BannerImage />
        <IntroSection />
      </div>
      <div className="w-full flex items-center justify-center">
        <AboutUserSection />
      </div>
    </div>
  );
};

export default UserProfile;

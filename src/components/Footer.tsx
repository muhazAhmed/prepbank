import { GrInstagram } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full flex items-start justify-evenly py-20">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1>Logo</h1>
        <p className="text-[14px]">
          All Rights Reserved to <br />
          PrepBank
        </p>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="font-bold text-[16px]">Features</h2>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">
          About us
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">News</h5>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="font-bold text-[16px]">Learn more</h2>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">
          Contacts
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">FAQ</h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">
          Terms & Conditions
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen">
          Cookies settings
        </h5>
      </div>
      <div className="flex flex-col items-start justify-center gap-2">
        <h2 className="font-bold text-[16px]">Follow us</h2>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen flex items-center gap-2">
          <GrInstagram className="text-[18px]" /> Instagram
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen flex items-center gap-2">
          <FaFacebook className="text-[18px]" /> Facebook
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen flex items-center gap-2">
          <BiLogoGmail className="text-[18px]" /> GMail
        </h5>
        <h5 className="text-[13px] cursor-pointer hover:text-csgreen flex items-center gap-2">
          <FaGithub className="text-[18px]" /> GitHub
        </h5>
      </div>
    </div>
  );
};

export default Footer;

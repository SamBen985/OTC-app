import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-full h-[90px]">
      <Link
        to="/"
        className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-xl text-cyan flex items-center ml-16
     "
      >
        <img src={logoSvg} alt="CryptoBucks" />
        <span>OTC</span>
      </Link>
    </div>
  );
};

export default Logo;

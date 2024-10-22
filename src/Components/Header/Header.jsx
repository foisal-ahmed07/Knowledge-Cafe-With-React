import React from "react";
import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-auto border-b-2 w-11/12">
      <h1 className="text-3xl  font-bold ">Knowledge-Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;

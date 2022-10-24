import React from "react";
import Button from "../Button";

const Header = () => {
  return (
    <section className="flex justify-between items-center pt-16">
      <div className="flex gap-4 items-center">
        <div className="bg-primary-green h-13 w-13 rounded-full" />
        <h1 className="text-content-green-primary font-bold text-2xl">
          Buildit
        </h1>
      </div>
      <ul className="flex justify-around text-content-green-secondary text-xsm font-medium w-1/2">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <Button title="Need a projets ?" />
    </section>
  );
};

export default Header;

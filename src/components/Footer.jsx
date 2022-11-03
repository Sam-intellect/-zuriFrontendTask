import React from 'react';
import Zuri from '../assets/Zuri.svg';
import ingressiveLogo from '../assets/I4G.svg';

const Footer = () => {
  return (
    <>
      <footer className=" container mx-5 md:mx-auto md:mt-32 mb-32">
        <div className="flex flex-col gap-4 md:flex-row justify-between mt-4 ">
          <img src={Zuri} alt="zuri" className=" w-1/2 md:w-1/5 " />
          <h1 className="md:mt-10">HNG Internship 9 Frontend Task</h1>
          <img src={ingressiveLogo} alt="zuri" className="w-1/3 md:w-1/5" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

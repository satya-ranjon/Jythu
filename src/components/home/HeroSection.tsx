import React from "react";
import Container from "../ui/Container";
import hero from "../../assets/hero.png";
import herobg from "../../assets/herobg.png";
import Vector from "../../assets/Vector.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center "
      style={{ backgroundImage: ` URL(${herobg})` }}>
      <Container>
        <div className="flex justify-between items-center gap-20 ">
          <img className="w-full " src={hero} alt="hero" />
          <div className=" w-full">
            <div className="">
              <h1 className=" font-semibold text-xl bg-gradient-to-r from-[#14a08d] to-[#36ea7e] bg-clip-text text-transparent flex justify-start items-center gap-3">
                <img src={Vector} alt="Vector" />
                WELCOME TO JYTHU
              </h1>
              <h1 className="font-bold text-[88px] text-white leading-tight">
                A Marketing{" "}
                <u className=" border-b-8 border-[#14a08d] bg-gradient-to-r from-[#14a08d] to-[#22be86] bg-clip-text text-transparent">
                  Agency
                </u>{" "}
                To Grow Your Business
              </h1>
              <p className=" text-[#ffffffba] text-xl ">
                We are 100+ professional software engineers with more than 10
                year of experience in delivering superior products Believe it
                because you have seen it. Here are real numbers
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;

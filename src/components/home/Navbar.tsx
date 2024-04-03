import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

const menu = [
  { link: "#", label: "Home", dropdown: true },
  { link: "#", label: "About Us", dropdown: false },
  { link: "#", label: "Pages", dropdown: true },
  { link: "#", label: "Service", dropdown: true },
  { link: "#", label: "News & Event", dropdown: true },
  { link: "#", label: "Contact", dropdown: false },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window?.addEventListener("resize", handleResize);

      return () => {
        window?.removeEventListener("resize", handleResize);
      };
    }
  }, [width]);

  return (
    <div className=" w-full bg-gradient-to-r from-[#c5e8e2] to-[#38ef7e69] px-10 py-5 flex justify-between items-center">
      <img src={logo} alt="logo" />
      <div
        onClick={() => setIsOpen(false)}
        className={` ${
          width < 958
            ? `fixed top-0 w-full h-full bg-black
            duration-300
            ${isOpen ? "visible opacity-40" : "opacity-0 invisible"}`
            : "hidden"
        } `}></div>
      <div
        className={`${
          width < 958
            ? `absolute top-0 left-0  w-[90%]  space-y-5 max-w-[30%] min-w-[200px] p-4
          h-full bg-green-50  drop-shadow-lg duration-300
${isOpen ? "translate-x-0 " : "translate-x-[-100%] "}`
            : "flex justify-center gap-5 xl:gap-8 items-center"
        }`}>
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className={` ${
            width < 958 ? "block" : "hidden"
          } float-end cursor-pointer text-2xl text-green-500`}
        />
        <img
          className={`${width < 958 ? "block" : "hidden"} mx-auto  pt-10 w-24`}
          src={logo}
          alt="logo"
        />
        <div
          className={`${
            width < 958 ? "block" : "hidden"
          } pt-2 w-full relative mx-auto text-gray-600`}>
          <input
            className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <IoSearchSharp className=" text-lg" />
          </button>
        </div>
        {menu.map((item, i) => (
          <a
            className="text-neutral-900 font-semibold flex justify-center items-end gap-1 text-lg"
            href={item.link}
            key={i}>
            {item.label} {item.dropdown && <IoIosArrowDown className=" pb-1" />}
          </a>
        ))}
      </div>
      <div className=" flex justify-center gap-5 items-center">
        <div className=" relative hidden md:block ">
          <MdOutlineShoppingBag className="text-2xl" />
          <span className=" absolute -bottom-2 -left-1 p-1 w-4 h-4 flex justify-center items-center  text-xs bg-[#00c397] text-white rounded-full">
            0
          </span>
        </div>
        <IoSearchSharp className="text-lg hidden" />
        <button className=" hidden md:flex px-4 py-3 text-white rounded-full font-semibold bg-gradient-to-r from-[#14a08d] to-[#36ea7e]  justify-center items-center gap-2">
          GET QUOTE <FaArrowRightLong />
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className=" lg:hidden px-4 py-3 text-white rounded-md font-semibold bg-gradient-to-r from-[#14a08d] to-[#36ea7e] flex justify-center items-center gap-2">
          <CgMenuGridO className=" text-2xl" /> Menu
        </button>
      </div>
    </div>
  );
};

export default Navbar;

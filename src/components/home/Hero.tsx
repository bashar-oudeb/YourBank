import icon from "../../assets/hero/Icon.svg";
import arrow from "../../assets/hero/Abstrac.png";
import cash from "../../assets/hero/cash.png";

const Hero = () => {
  return (
    <section className=" pt-10">
      <div className="">
        <div className=" flex items-center  gap-1  w-fit mx-auto bg-Grey rounded-full px-4 py-2 ">
          <img src={icon} alt="" />
          <span className=" font-Lexend text-xs leading-6 text-White font-light">
            No LLC Required, No Credit Check.
          </span>
        </div>
        <div className=" mt-8">
          <h1 className=" font-Lexend  text-White font-semibold text-3xl leading-10 text-center ">
            Welcome to YourBank <br />
            Empowering Your <br />
            <span className=" text-secondary">Financial Journey</span>
          </h1>
        </div>
        <div className=" mt-8 px-4">
          <p className=" font-Lexend text-White2 font-light text-sm text-center leading-6">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers' needs.
          </p>
        </div>
        <div className="mt-6 text-center ">
          <button className="  bg-secondary text-primary font-Lexend text-sm leading-5 py-4 px-6  rounded-full hover:bg-hover transition-all ">
             Open Account
          </button>
        </div>
      </div>

      <div className=" relative mt-12 overflow-hidden">
        <div className=" absolute right-0 ">
          <img src={arrow} alt="" /></div> 
        <div className=" relative z-10 left-5">
          <img src={cash} alt="" /></div> 
      </div>
    </section>
  );
};

export default Hero;

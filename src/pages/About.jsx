import React from "react";
import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import { GoDotFill } from "react-icons/go";

const About = () => {
  return (
    <>
      <Section id="about" variant="relative bg-gray-200 -mt-28 h-[d20px] z-[9]">
        <Container variant="flexColCenter">
          <div className="about_title relative ">
            <h1 className=" relative  title-bold text-[45rem] md:text-[20rem] -translate-y-[20rem] md:-translate-y-40 text-[#121212] z-[7] bg-rd-500">
              Artist
            </h1>
            <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-red-500 rounded-full absolute top-0 right-20"></div>
          </div>
          <div className=" -translate-y-52 w-full ">
            <div className="translate-x-40 md:translate-x-0 flexColStart relative ">
              <div className="max-w-7xl md:max-w-sm ">
                <h1 className="text-[9rem] md:text-5xl font-semibold">
                  About Me
                </h1>
                <p className="text-[4rem] md:text-base text-[#232323] tracking-wider mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore rerum delectus vero esse? Distinctio soluta
                  reprehenderit non in exercitationem! Molestiae praesentium.
                </p>
              </div>
              <div className="max-w-7xl md:max-w-sm absolute top-full translate-y-20 left-0">
                <h1 className="text-[9rem] md:text-5xl font-semibold">
                  My Works
                </h1>
                <p className="text-base text-[#232323] tracking-wider mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>

                <ul className="flexColStart mt-9 gap-4 border-l-[5px] border-black">
                  <li className="-translate-x-3 flexCenter text-[5rem] md:text-2xl">
                    <GoDotFill />
                    Singer
                  </li>
                  <li className="-translate-x-3 flexCenter text-[5rem] md:text-2xl">
                    <GoDotFill />
                    Singer
                  </li>
                  <li className="-translate-x-3 flexCenter text-[5rem] md:text-2xl">
                    <GoDotFill />
                    Singer
                  </li>
                  <li className="-translate-x-3 flexCenter text-[5rem] md:text-2xl">
                    <GoDotFill />
                    Singer
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative pic w-full max-w-7xl  md:max-w-3xl mx-auto flexCenter -translate-y-10 translate-x-48">
              <img
                src="/img/about2.jpg"
                alt=""
                className="w-full md:w-[600px] h-[400px] relative z-[10] border-[5px] border-white pointer-events-none"
              />
              <img
                src="/img/about2.jpg"
                alt=""
                className="w-full md:w-[600px] h-[400px] absolute  z-[8] left-5 top-10 -rotate-6 border-[5px] border-white pointer-events-none"
              />
            </div>
          </div>
        </Container>
        <img
          src="/img/contact.png"
          alt=""
          className="absolute top-0 -left-[30%] w-full opacity-[0.05] scale-x-[-1]"
        />
      </Section>
    </>
  );
};

export default About;

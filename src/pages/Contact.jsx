import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/Title";
import Social from "../components/Social";

const Contact = () => {
  return (
    <>
      <Section id="" variant="bg-gray-300  border- z-[20]">
        <Container variant="border-t-[3px] border-red-500 ">
          <div className="contact_title relative flexCenter">
            <h1 className=" relative  title-bold text-[40rem] md:text-[20rem]  text-[#121212] z-[7] bg-rd-500">
              CONTACT
            </h1>
            <div className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] bg-red-500 rounded-full absolute top-0 right-20"></div>
          </div>
        </Container>
        <div className="relative h-[550px] bg-[#121212] -mt-[19rem] md:-mt-40 ">
          <div className="absolute top-40 left-10">
            <Title />
          </div>
          <div className="absolute top-40 right-20 flexColStart">
            <h1 className="text-3xl font-bold -translate-x-20 text-gray-200 mb-12">
              kingCombs@gmail.com
            </h1>
            <Social />
            <p className="text-lg text-white -translate-x-20 mt-7 font-medium tracking-wider">
              kingCombs &copy; copy right alright Reserved.
            </p>
          </div>
          <img
            src="/img/contact.png"
            alt=""
            className="w-full md:max-w-2xl mx-auto opacity-30"
          />
          <div className="h-[150px] w-[150px] md:h-[300px] md:w-[300px] bg-red-500 rounded-full absolute -bottom-28 -left-28"></div>
        </div>
      </Section>
    </>
  );
};

export default Contact;

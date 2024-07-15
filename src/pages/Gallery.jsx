import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import { collection } from "../constants";

const Gallery = () => {
  return (
    <>
      <Section id="gallery" variant="bg-[#121212] -mt-20  bg-gray-200 z-[15]">
        <Container variant="border-t-[3px] border-red-500 py-14">
          <div className="w-full flexBetween mb-12">
            <h1 className="text-[#232323] text-[7rem] md:text-4xl font-bold">
              2013-2024
            </h1>
            <div className="max-w-7xl md:max-w-lg">
              <h1 className="text-[#232323] text-[8rem] md:text-5xl font-semibold">
                MY COLLECTIONS
              </h1>
              <p className="text-[3rem] md:text-base text-[#232323] tracking-wider mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, quo doloremque provident facilis repellat nisi.
              </p>
            </div>
          </div>
          <div className="w-full columns-2 gap-3 lg:gap-5 sm:columns-3 lg:columns-4 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 justify-center items-center">
            {" "}
            {collection.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="border-[2px] border-[#232323] relative z-[15] pointer-events-none"
              />
            ))}
          </div>
        </Container>
        <img
          src="/img/contact.png"
          alt=""
          className="absolute top-0 -right-[30%] w-full opacity-[0.05] "
        />
      </Section>
    </>
  );
};

export default Gallery;

import React from "react";
import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Title from "../components/Title";
import Social from "../components/Social";

const Hero = () => {
  return (
    <Section id="hero" variant="bg-[#121212] z-[7]">
      <Container variant="relative   flexColEnd ">
        <div className="flexCenter translate-y-5  relative border w-full rounded-lg ">
          <div className="translate-y-32 flex flex-col gap-12 md:translate-x-0 translate-x-[25rem]">
            <Social />
            <Title />
          </div>
          <img
            src="/img/hero.png"
            alt=""
            className="max-w-[700px] w-full relative z-[99]"
          />
          <p className="text-[4rem] md:text-base text-gray-300 tracking-wider mt-4 absolute left-14 top-32 max-w-5xl md:max-w-sm z-[20]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            perspiciatis accusamus nostrum ad, pariatur rem eligendi harum aut
            quia reiciendis!
          </p>
          <img
            src="/img/hero_float.png"
            className="absolute -left-20 bottom-10 opacity-[0.06] z-[4]"
            alt=""
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

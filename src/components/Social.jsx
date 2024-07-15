import React from "react";
import { social } from "../constants";

const Social = () => {
  return (
    <div className="flexColStart pl-20 gap-8">
      <h1 className=" text-[5rem] md:text-3xl font-bold text-white">
        Please Follow Us:
      </h1>
      <div className="flexCenter gap-12 md:gap-7">
        {social.map((Item, index) => (
          <a href="">
            <Item.icon size={35} className={Item.color} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;

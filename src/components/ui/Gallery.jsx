import React from "react";
import { gallery } from "../constants";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full relative my-12">
      <div className="relative max-w-6xl mx-auto flexColCenter gap-9 z-[998]">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="cat_title_img text-7xl font-bold text-[#454545]"
        >
          Gallery
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8"
        >
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-ms cursor-cell z-[99]"
            >
              <img
                src={item}
                alt=""
                className="hover:scale-[1.1] duration-500 transition-all ease-in-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

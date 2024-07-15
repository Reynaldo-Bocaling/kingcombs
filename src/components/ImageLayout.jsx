import React from "react";

function ImageLayout() {
  return (
    <div className="max-w-7xl">
      <div className="grid grid-cols-3 gap-4">
        {/* Top row */}
        <div className="col-span-2">
          <img
            src="/img/c1.jpg"
            alt="Image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/img/c2.jpg"
            alt="Image 2"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Middle row */}
        <div className="col-span-2">
          <img
            src="/img/c3.jpg"
            alt="Image 3"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-red-500"></div>
          <img
            src="/img/c4.jpg"
            alt="Image 4"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/img/c5.jpg"
            alt="Image 5"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom row */}
        <div className="col-span-2">
          <img
            src="/img/c6.jpg"
            alt="Image 6"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            src="/img/c7.jpg"
            alt="Image 7"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageLayout;

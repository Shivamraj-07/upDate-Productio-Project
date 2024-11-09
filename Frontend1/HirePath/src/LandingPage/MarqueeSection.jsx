import React from "react";
import img1 from "../assets/pngwing.com.png";
import img2 from "../assets/pngwing.com (1).png";
import img3 from "../assets/pngwing.com (2).png";
import img4 from "../assets/pngwing.com (3).png";
import img5 from "../assets/pngwing.com (4).png";
import img6 from "../assets/pngwing.com (5).png";
import "./NavBar.css";
const MarqueeSection = () => {
  return (
    <>
      {/* marequee tag code */}
      <div className="marque h-40  md:h-20 w-full ">
        <h1 className="h-[10rem]">
          <img src={img1} alt="" width={120} height={120} className="" />
        </h1>
        <h1>
          <img
            src={img2}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img3}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img4}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img6}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img5}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img1}
            alt=""
            width={120}
            height={120}
            className="w-[5rem]"
          />
        </h1>
        <h1>
          <img
            src={img2}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img3}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img4}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img6}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
        <h1>
          <img
            src={img5}
            alt=""
            height={120}
            className="w-[5rem]"
            width={120}
          />
        </h1>
      </div>
    </>
  );
};

export default MarqueeSection;

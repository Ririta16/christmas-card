import { useState } from "react";
import img2 from "../assets/60_20241214231712.png";
import wave from "../assets/danger.png";
import stamp from "../assets/73_20241216135317.png";
import snow from "../assets/71_20241216132950.png";
import reindeer from "../assets/70_20241216131449.png";

function Back() {
  const [selectedImage, setSelectedImage] = useState<string>(img2);
  const [stampColor, setStampColor] = useState<string>("#c5d5d4");
  const [bgColor, setBgColor] = useState<string>("#1E7E73");

  const handleSelect = (img: string, sColor: string, bgcolor: string) => {
    setSelectedImage(img);
    setStampColor(sColor);
    setBgColor(bgcolor);
  };

  return (
    <div className="mask-out duration-500 py-[30px] px-[25px] bg-[#1E7E73] relative w-[300px] h-[550px] sm:w-[670px] sm:h-[295px] sm:py-[20px] sm:px-[35px]">
      <div className="absolute w-full top-0 left-0 sm:w-auto sm:rotate-90">
        <span className="left-[55px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[95px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[135px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[175px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[215px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
      </div>

      <div className="h-full relative p-2 before:mask-borderbox before:absolute before:inset-0 before:bg-black">
        <div className="mask-out2 h-full grid grid-cols-1 sm:grid-cols-2 before:bg-[#fffaef] before:inset-0 before:absolute before:z-[-1]">
          <div className="text-center pt-7 sm:mr-[-70px] sm:text-left sm:pl-5 ">
            <div className="font-font font-semibold text-xl mt-2 sm:text-2xl sm:mt-0">
              To. Gingerbread🍪🥛
            </div>
            <div className="font-font font-semibold mt-2 mx-2 sm:text-lg ">
              <span className="font-font border-b-[3px] border-dashed border-red-600">
                Santa Claus 
              </span>
              {""} is coming along with a rainbow of gifts especially for you. Wish
              you a {""}
              <span className="font border-b-[3px] border-dashed border-green-700">
                Merry Christmas.
              </span>
              <div className="flex justify-evenly mt-5 sm:mt-4 sm:ml-2">
                <div
                  className="stamp2 w-max p-2 h-max bg-[#c5d5d4]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(img2, "#1E7E73", "#c5d5d4");
                  }}
                >
                  <img
                    className="w-[40px] mx-[2px] bg-[#1E7E73] rounded-sm"
                    src={img2}
                  />
                </div>
                <div
                  className="stamp2 w-max p-2 h-max bg-[#fad898]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(snow, "#F1A00B", "#fad898");
                  }}
                >
                  <img
                    className="w-[40px] mx-[2px] bg-[#F1A00B] rounded-sm"
                    src={snow}
                  />
                </div>
                <div
                  className="stamp2 w-max p-2 h-max bg-[#f7d3d1]"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(reindeer, "#e19793", "#f7d3d1");
                  }}
                >
                  <img
                    className="w-[40px] mx-[2px] bg-[#e19793] rounded-sm"
                    src={reindeer}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center p-8 pt-6 sm:px-9 sm:ml-11 sm:pt-8">
            <div className="absolute w-24 top-5 z-10 left-[15px]">
              <img className="absolute top-1" src={wave} />
              <img className="absolute top-[18px]" src={wave} />
              <img className="absolute top-[32px]" src={wave} />
            </div>
            <div
              className={`stamp p-7 duration-200 ${
                bgColor ? `bg-[${bgColor}]` : ""
              }`}
            >
              <img
                className={`w-[180px] sm:mx-[-2px] rounded-sm duration-200 ${
                  stampColor ? `bg-[${stampColor}]` : ""
                }`}
                src={selectedImage}
              />
            </div>

            <img
              className="absolute rotate-[70deg] w-[62px] bottom-7 right-[22px] sm:w-[75px] sm:bottom-4 sm:right-[18px]"
              src={stamp}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-auto bottom-0 w-full sm:w-auto sm:top-0 sm:rotate-90 right-0 sm:bottom-auto">
        <span className="left-[55px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[95px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[135px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[175px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
        <span className="left-[215px] absolute w-[25px] h-[25px] block rounded-full bg-[#A1151C] top-0 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default Back;

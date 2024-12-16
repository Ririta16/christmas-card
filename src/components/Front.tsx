import img1 from "../assets/58_20241214205135.png";
import deer from "../assets/reindeer (1).png";
import candy from "../assets/candy-cane (1).png";

function Front() {
  return (
    <div className="font-fontmain mask-out duration-200 py-[30px] px-[25px] bg-[#A1151C] relative w-[300px] h-[550px] sm:w-[670px] sm:h-[295px] sm:py-[20px] sm:px-[35px]">
      <div className="absolute w-full top-0 left-0 sm:w-auto sm:rotate-90">
        <span className="left-[55px] absolute w-[25px] h-[25px] block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[95px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[135px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[175px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[215px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
      </div>

      <div className="h-full relative before:mask-borderbox before:z-10 before:absolute before:inset-0 before:bg-black">
        <div className="mask-out h-full flex flex-col-reverse before:bg-[#fffaef] before:inset-0 before:absolute before:z-[-1] sm:grid-cols-2 sm:grid">
          <img
            className="absolute w-14 top-[205px] left-[15px] rotate-[25deg] sm:w-16 sm:left-[177px] sm:top-6"
            src={candy}
          />
          <div>
            <img
              className="w-[200px] ml-6 mb-3 rotate-[-5deg] sm:w-[310px] sm:ml-0 sm:mb-0 sm:rotate-[-10deg] sm:left-[-20px] sm:top-[-20px] sm:absolute"
              src={img1}
            />
          </div>
          <div className="text-border text-center tracking-[0.1em] leading-none mb-3 mt-2 text-[50px] sm:text-left sm:text-[75px] sm:ml-[-40px]">
            <span className="text-[#EDA9A6]">M</span>
            <span className="text-[#E87D6B]">E</span>
            <span className="text-[#1E7E73]">R</span>
            <span className="text-[#E44E4F]">R</span>
            <span className="text-[#EDA9A6]">Y</span>
            <br />
            <span className="text-[#E87D6B]">C</span>
            <span className="text-[#1E7E73]">H</span>
            <span className="text-[#EDA9A6]">R</span>
            <span className="text-[#E44E4F]">I</span>
            <span className="text-[#1E7E73]">S</span>
            <span className="text-[#E87D6B]">T</span>
            <br />
            <span className="text-[#E44E4F]">M</span>
            <span className="text-[#1E7E73]">A</span>
            <span className="text-[#EDA9A6]">S</span>
            <span className="text-[#E87D6B]">!</span>
            <img
              className="w-[54px] rotate-[-10deg] absolute right-[26px] top-[215px] sm:w-[60px] sm:right-14 sm:top-[170px] sm:rotate-[-5deg]"
              src={deer}
            />
          </div>
        </div>
      </div>
      
      <div className="absolute top-auto right-0 bottom-0 w-full sm:w-auto sm:top-0 sm:rotate-90 sm:bottom-auto">
        <span className="left-[55px] absolute w-[25px] h-[25px] block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[95px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[135px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[175px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
        <span className="left-[215px] absolute w-[25px] h-[25px]  block rounded-full bg-[#0f4b44] top-0 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default Front;

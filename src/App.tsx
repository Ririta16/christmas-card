import { useState } from "react";
import "./App.css";
import Front from "./components/Front";
import Back from "./components/Back";
import { motion } from "motion/react";

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${
        isFlipped
          ? "bg-[url('./assets/4d72c32d-60a4-45ef-b29c-a3912cebddb4.jpg')]"
          : "bg-[url('./assets/5bd0aa54-c6c7-404d-b8ea-0547a7b86eae.jpg')]"
      } duration-500 bg-cover flex justify-center items-center h-screen overflow-hidden select-none`}
    >
      <div
        className="w-[670px] h-[295px] perspective-[1000px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`transform-preserve-3d relative w-full h-full duration-500 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="backface-hidden absolute inset-0 flex justify-center items-center"
          >
            <Front />
          </motion.div>
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex justify-center items-center">
            <Back />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

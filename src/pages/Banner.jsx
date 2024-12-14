import { color, motion } from "framer-motion";
import { easeInOut } from "motion";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
const Banner = () => {
    useEffect(() => {
        const typewriter = new Typewriter('#typewriter', {
          strings: ["Latest Job For You !"],
          autoStart: true,
          loop:true
        });
    
        // Cleanup to avoid memory leaks
        return () => {
          typewriter.stop();
        };
      }, []);

  return (
    <div className="hero  min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse ">
     
        <div className="flex-1 ">
          <motion.img
          animate={{y:[10, 40, 10]}}
          transition={{duration:10, repeat:Infinity , ease:easeInOut}}
            src="https://i.ibb.co.com/8cQjXMV/businesspeople-having-informal-meeting.jpg"
            className="max-w-sm w-80 rounded-r-[40px] border-blue-500 border-l-[6px]  border-b-[6px] rounded-br-[40px] rounded-tr-[40px]  rounded-tl-[40px] shadow-2xl"
          />
          <motion.img
          animate={{x:[100, 150, 100]}}
          transition={{duration:10, repeat:Infinity ,delay:5, ease:easeInOut}}
            src="https://i.ibb.co.com/nbGFh3w/corporate-workers-brainstorming-together.jpg"
            className="max-w-sm w-80 rounded-r-[40px] border-blue-500 border-l-[6px]  border-b-[6px] rounded-br-[40px] rounded-tr-[40px]  rounded-tl-[40px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1 
            animate={{ x: 100 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: easeInOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold"
          >
            Latest
            <motion.span
              animate={{ color: ["#e0ed11", "#10daea"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Job
            </motion.span>
            For You !
          </motion.h1>

          <h1 id="typewriter" className="text-5xl font-bold"></h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

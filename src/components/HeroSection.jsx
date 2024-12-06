// // import Ripple from "@/components/ui/ripple";
// import { BackgroundLines } from "./ui/background-lines";
// // import Name from "assets";

// const HeroSection = () => {
//   return (
//     <section className="hero-section text-center py-16 bg-vibrantPurple relative overflow-hidden">
//       {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
//         <h1 className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
//           Vibrant Reload
//         </h1> */}
//       {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white"> */}
//       {/* <div style="position: relative; width: 100%; height: 0; padding-top: 141.4286%;
//         padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
//         border-radius: 8px; will-change: transform;">
//             <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
//               src="https://www.canva.com/design/DAGXX6SeWT4/_eK9rVAs8Gs1DDfKk6e7FA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
//             </iframe>
//         </div> */}
//       {/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGXX6SeWT4&#x2F;_eK9rVAs8Gs1DDfKk6e7FA&#x2F;view?utm_content=DAGXX6SeWT4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Black Party Music Poster</a> by Jaswanth sai K */}
//       {/* </p> */}
//       {/* <Ripple /> */}
//       {/* </div>   */}
//       <BackgroundLines>
//         <div className="min-h-screen relative overflow-hidden width-full flex items-center justify-center">
//           {/* Geometric shapes background */}
//           <div className="absolute inset-0">
//             <div className="absolute top-1/4 left-1/4 w-72 h-72 border-2 border-purple-500 transform rotate-45 opacity-50"></div>
//             <div className="absolute top-1/3 right-1/4 w-60 h-60 border-2 border-cyan-400 transform -rotate-12 opacity-50"></div>
//           </div>

//           <div className="text-center z-10 space-y-4">
//             {/* <div className="text-orange-500 font-bold text-4xl md:text-6xl mb-4">
//               LIVE IN
//               <br />
//               TIRUPATI
//               <br />
//               DEC 31<sup>ST</sup>
//             </div> */}
//             <image src="/name.png" alt="name" />

//             {/* Main title with glow effect */}
//             <div className="relative">
//               <h1
//                 className="text-yellow-300 text-6xl md:text-8xl font-bold tracking-wider"
//                 style={{
//                   fontFamily: "Cubao Narrow, sans-serif",
//                   textShadow: "0 0 20px rgba(255, 255, 0, 0.5)",
//                 }}
//               >
//                 VIBRANT
//                 <br />
//                 RELOAD
//               </h1>
//             </div>

//             {/* NYE 2025 with distressed effect */}
//             <div className="mt-4">
//               <h2
//                 className="text-white text-5xl md:text-7xl font-bold tracking-wide"
//                 style={{
//                   fontFamily: "Zuume Rough Bold, sans-serif",
//                   WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
//                   textShadow:
//                     "4px 4px 0px rgba(0, 255, 255, 0.3), -4px -4px 0px rgba(255, 0, 255, 0.3)",
//                 }}
//               >
//                 NYE 2025
//               </h2>
//             </div>
//           </div>
//         </div>
//       </BackgroundLines>
//     </section>
//   );
// };

// export default HeroSection;

//

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { Spotlight } from "./ui/spotlight";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* First Section with Aurora Background */}
      {/* <AuroraBackground className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Background lights are cool you know.
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            And this, is chemical burn.
          </div>
          <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground> */}
      <AuroraBackground className="w-full bg-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold text-[#FFE600] text-center">
            Vibrant Reload
          </div>
          <div className="font-extralight text-base md:text-4xl text-neutral-200 py-4">
            NYE 2025
          </div>
          <button className="bg-white rounded-full w-fit text-black hover:bg-neutral-200 transition-colors px-4 py-2">
            Debug now
          </button>
        </motion.div>
      </AuroraBackground>

      {/* Second Section with Spotlight */}
      {/* <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Spotlight <br /> is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out
            of copy.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;

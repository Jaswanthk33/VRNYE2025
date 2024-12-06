// import { Routes, Route } from "react-router-dom";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import "./index.css";
// // import LoginForm from "./_auth/sign-in";
// // import AuthLAyout from "./_auth/AuthLAyout";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
// import FeaturesSection from "./components/FeaturesSection";
// import BentoGridDemo from "./components/GiveawaySection";
// import FAQ from "./components/FaqSection";

// // export default function App() {
// //   return (
// //     <header>
// //       <SignedOut>
// //         <SignInButton />
// //       </SignedOut>
// //       <SignedIn>
// //         <UserButton />
// //       </SignedIn>
// //     </header>
// //   );
// // }
// const App = () => {
//   return (
//     <main className="h-full">
//       {/* <header>
//         <SignedOut>
//           <SignInButton />
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </header>
//       {/* Public Routes */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <HeroSection />
//               <FeaturesSection />
//               <BentoGridDemo />
//               {/* <FAQ /> */}
//             </>
//           }
//         />
//         <Route path="/login" element={<sign-in />} />
//         {/* Private Routes */}
//       </Routes> */}
//     </main>
//   );
// };

// export default App;

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen">
      <div className="text-center px-6">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 text-yellow-400">
          Website Under Maintenance
        </h1>

        {/* Description */}
        <p className="text-lg mb-6 text-gray-300">
          We are currently improving your experience. The website will be live
          by <br />
          <span className="font-semibold text-blue-400">
            Tomorrow at 10:00 AM
          </span>
          .
        </p>

        {/* Contact Info */}
        <p className="text-lg text-gray-300 mt-6">
          For any urgent queries, please contact us at: <br />
          <a
            href="mailto:vibrantreload2025@vibrantentertainments.live"
            className="text-yellow-400 font-medium underline hover:text-yellow-300 transition"
          >
            vibrantreload2025@vibrantentertainments.live
          </a>
        </p>
        <p className="mt-4">
          <span className="block text-yellow-400 font-medium">Phone:</span>
          <a
            href="tel:+919030893336"
            className="text-yellow-400 font-medium underline hover:text-yellow-300 transition"
          >
            +919030893336
          </a>
        </p>

        {/* Footer */}
        <p className="mt-8 text-gray-500 text-sm">
          Thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default App;

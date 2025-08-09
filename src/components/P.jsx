// import React from "react";
// import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
// import profilePic from "../assets/profile.jpg"; // replace with your image

// const experiences = [
//   {
//     title: "Influcon Digitals",
//     subtitle:
//       "Frontend Developer Intern • Kolkata (Remote) • May 2025 – June 2025",
//     desc: "Built and deployed the official website using React & Tailwind CSS with pixel-perfect Figma designs, responsive layouts, and smooth animations.",
//     links: [{ icon: <FaGlobe size={14} />, text: "Live Site", url: "#" }],
//   },
// ];

// const projects = [
//   {
//     title: "StreamHub",
//     subtitle: "Browser-based Livestreaming",
//     desc: "Livestream to YouTube & HLS using MediaRecorder, FFmpeg, and Docker.",
//     links: [{ icon: <FaGlobe size={14} />, text: "Project Link", url: "#" }],
//   },
//   {
//     title: "DSA Duel",
//     subtitle: "Real-time Competitive Coding",
//     desc: "Coding duel platform with MERN, Socket.IO, and Judge0 API.",
//     links: [{ icon: <FaGlobe size={14} />, text: "Project Link", url: "#" }],
//   },
// ];

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-custom-bg text-white font-sans px-6 py-12">
//       <div className="max-w-2xl mx-auto animate-pageReveal">
//         {/* Header */}
//         <div className="flex items-center gap-6.5">
//           <img
//             src={profilePic}
//             alt="Profile"
//             className="w-24 h-24 rounded-full border border-custom-border"
//           />
//           <div>
//             <h1 className="text-xl font-bold">Hey, I’m Krishnam Biyani</h1>
//             <p className="text-custom-gray-dark mt-0.5 text-base">
//               📍 Bengaluru, India
//             </p>
//             <div className="flex gap-4 mt-2 text-xl">
//               <a href="#" className="hover:text-custom-blue">
//                 <FaLinkedin />
//               </a>
//               <a href="#" className="hover:text-custom-gray">
//                 <FaGithub />
//               </a>
//               <a href="#" className="hover:text-[#FFA116]">
//                 <SiLeetcode />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bio */}
//         <p className="mt-6.5 text-base text-custom-gray leading-[1.6]">
//           Full-stack developer crafting real-time, scalable applications — from
//           livestreaming platforms to collaborative coding tools and chat apps.
//           Skilled in React, Tailwind CSS, Node.js, and MongoDB, with experience
//           delivering production-ready projects and client solutions.
//         </p>

//         {/* Work Highlights */}
//         <h2 className="mt-5 text-xl font-semibold border-b border-custom-border pb-2">
//           Work Highlights
//         </h2>
//         <div className="mt-6 space-y-8">
//           {experiences.map((item, idx) => (
//             <div key={idx}>
//               <h3 className="font-semibold text-base">{item.title}</h3>
//               {item.subtitle && (
//                 <p className="text-sm text-custom-gray-dark">{item.subtitle}</p>
//               )}
//               <p className="text-custom-gray mt-1 leading-relaxed text-base">
//                 {item.desc}
//               </p>
//               {item.links?.length > 0 && (
//                 <div className="flex gap-4 mt-2 text-sm text-custom-gray-dark">
//                   {item.links.map((link, i) => (
//                     <a
//                       key={i}
//                       href={link.url}
//                       className="flex items-center gap-1 hover:text-custom-blue transition-colors"
//                     >
//                       {link.icon} {link.text}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Projects */}
//         <h2 className="mt-10 text-xl font-semibold border-b border-custom-border pb-2">
//           Projects
//         </h2>
//         <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mt-6">
//           {projects.map((item, idx) => (
//             <div key={idx}>
//               <h3 className="font-semibold text-base">{item.title}</h3>
//               {item.subtitle && (
//                 <p className="text-sm text-custom-gray-dark">{item.subtitle}</p>
//               )}
//               <p className="text-custom-gray mt-1 leading-relaxed text-base">
//                 {item.desc}
//               </p>
//               {item.links?.length > 0 && (
//                 <div className="flex gap-4 mt-2 text-sm text-custom-gray-dark">
//                   {item.links.map((link, i) => (
//                     <a
//                       key={i}
//                       href={link.url}
//                       className="flex items-center gap-1 hover:text-custom-blue transition-colors"
//                     >
//                       {link.icon} {link.text}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

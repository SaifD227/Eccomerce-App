// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// const links = [
//   { name: "All", path: "/all" },
//   { name: "Electronics", path: "/electronics" },
//   { name: "Jewellery", path: "/jewellery" },
//   { name: "Bags", path: "/bags" },
//   { name: "Women", path: "/women" },
//   { name: "Men", path: "/men" },
//   { name: "Clothing", path: "/clothing" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-gray-800 p-4 flex justify-between items-center">
//       <div className="flex items-center">
//         <button onClick={toggleSidebar} className="text-white md:hidden">
//           {isOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>
//         <ul className="hidden md:flex space-x-4">
//           {links.map((link) => (
//             <li key={link.name}>
//               <Link
//                 href={link.path}
//                 className="text-white hover:text-gray-300 transition duration-300"
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="hover:underline text-white">
//         <p className="text-yellow-600">Sign Out</p>
//       </div>

//       {/* Sidebar */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden">
//           <div className="fixed top-0 left-0 w-64 bg-gray-900 h-full p-4 transition-transform transform duration-300">
//             <button onClick={toggleSidebar} className="text-white">
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <ul className="mt-4 space-y-4">
//               {links.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.path}
//                     className="text-white hover:text-gray-300 transition duration-300"
//                     onClick={toggleSidebar}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;






"use client";

import React, { useState } from "react";
import Link from "next/link";

const links = [
  { name: "All", path: "/all" },
  { name: "Electronics", path: "/electronics" }, // Ensure no extra space
  { name: "Jewellery", path: "/jewellery" },
  { name: "Bags", path: "/bags" },
  { name: "Women", path: "/women" },
  { name: "Men", path: "/men" },
  { name: "Laptop", path: "/Laptop" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-white md:hidden">
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="hover:underline text-white">
        <p className="text-yellow-600">Sign Out</p>
      </div>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-40 md:hidden">
          <div className="fixed top-0 left-0 w-64 bg-gray-900 h-full p-4 transition-transform transform duration-300">
            <button onClick={toggleSidebar} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="mt-4 space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-white hover:text-gray-300 transition duration-300"
                    onClick={toggleSidebar}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

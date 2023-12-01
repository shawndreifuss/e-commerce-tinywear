import React from "react";

const data = [
  { title: "Solutions", list: ["Marketing", "Analytics", "Commerce", "Insights"] },
  { title: "Support", list: ["Pricing", "Documentation", "Guides", "API Status"] },
  { title: "Company", list: ["About", "Blog", "Jobs", "Press", "Partners"] },
  { title: "Legal", list: ["Claim", "Privacy", "Terms of Use"] },
];

const Footer = ({ theme = "dark" }) => {
  return (
    <>
      <div
        className={`w-screen px-4 pt-8 md:pt-28 text-xs sm:text-sm
      ${theme === "dark" ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"}
      `}
      >
        <div className="flex-col md:flex-row gap-8 sm:gap-20 ml-6 mr-12 flex justify-center">
          <div className="self-center">
            <div className="mb-2 md:mb-6">
            Tiny Threads, Big Dreams: Where Fashion Meets Fun for Your Little Ones!
            </div>
          </div>
        </div>

        <div
          className={`mt-8 sm:mt-16 border-t py-7 text-gray-500 text-xs flex justify-center
          ${theme === "dark" ? "border-t-gray-800" : "border-t-gray-300"} `}
        >
          &copy; 2023 Tiny Wear, Inc. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;




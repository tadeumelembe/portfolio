"use client";
import localFont from "next/font/local";
import { motion } from "framer-motion";
import Image from "next/image";

import { maxWidthContent, userData } from "@/utils/constants";
import Title from "@/components/TitleComponent";
import BorderSeparetor from "@/components/BorderSeparator";

const tektur = localFont({
  src: "../../../public/fonts/Tektur-VariableFont_wdth,wght.ttf",
});

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2021;

export default function Projects() {
  return (
    <div
      id="projects"
      className=" flex flex-col justify-center px-10 md:px-20 [1330px]:px-0 max-w-[1366px] mx-auto"
    >
      <div className="">
        <Title title="Work" />
      </div>

      <div className="mt-20">
        {userData.projects.map((element, index) => {
          let reverseFlex = "sm:flex flex-row";
          if (index % 2 !== 0) {
            reverseFlex = "sm:flex flex-row-reverse";
          }

          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              key={`project-item-${index}`}
              className={``}
            >
              <div
                className={`${reverseFlex} justify-between gap-10 mt-16 items-start`}
              >
                <div className="md:w-1/2">
                  <h6 className="font-semibold text-xl">{element.name}</h6>

                  <div className="flex md:hidden sm:w-1/2 sm:mt-0 mb-4">
                    <div className=" border-0 border-fuchsia-300 w-full h-auto">
                      <Image
                        src={element.image}
                        alt="Haras-Pro banner"
                        width={1000}
                        height={500}
                      />
                    </div>
                  </div>

                  <p className="font-semibold text-gray-300 md:mt-5">
                    {element.description}
                  </p>

                  <div className="flex flex-row gap-5 my-6">
                    {element.tools.map((el,index) => (
                      <div key={`skills-itemm-${index}`} className=" bg-slate-500 px-3 py-2 rounded-full">
                        <p className=" text-xs">{el}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => window.open(element.link, "_blank")}
                    className=" bg-transparent py-3 px-5 rounded text-green-water border-2 border-green-water font-bold"
                  >{`Read more`}</button>
                </div>

                <div className="hidden md:flex sm:w-1/2 mt-8 sm:mt-0">
                  <div className=" border-0 border-fuchsia-300 w-full h-72">
                    <a href={element.link} target="_blank">
                    <Image
                      src={element.image}
                      alt="Haras-Pro banner"
                      width={1000}
                      height={500}
                    />
                    </a>
                  </div>
                </div>
              </div>
              {index < userData.experiemce.length - 1 && <BorderSeparetor />}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

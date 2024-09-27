import {
  FaArrowDown,
  FaCircle,
  FaEmber,
  FaGithub,
  FaLaravel,
  FaLinkedin,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import Menu from "./Menu";
import Skill from "./Skill";
import { MenuContext } from "../context/MenuContext";
import { useContext } from "react";
import { SiJavascript, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const SKILLS = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Ember", icon: <FaEmber /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <BiLogoPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

const Hero = () => {
  const { setIsOpen } = useContext(MenuContext);

  return (
    <>
      <div className="custom-container">
        <div>
          <p className="pr-12 lg:pr-0 text-3xl md:text-5xl font-medium sm:leading-10 md:leading-[4rem] lg:max-w-6xl ">
            I&apos;m <span className="text-rose-600">Nhielsan Albuero</span>. I
            build modern, user-centric applications with a focus on clean code,
            impactful design, and seamless digital experiences.
          </p>
          <div className="mt-10 hidden lg:flex flex-wrap items-center gap-4 text-2xl md:text-3xl">
            {SKILLS.map((skill) => (
              <Skill key={skill.name} {...skill} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-16  mt-auto relative">
          <div className="absolute inset-0 mb-16 sm:mb-0 m-auto w-fit flex items-center">
            <a
              href="#projects"
              className="flex items-center gap-2 text-sm md:text-base tracking-widest font-medium"
            >
              <span>PROJECTS</span>
              <FaArrowDown className="text-rose-600" />
            </a>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 md:gap-6 text-2xl md:text-3xl">
              <a href="https://www.linkedin.com/in/nhielsan-albuero/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/njalbuero">
                <FaGithub />
              </a>
            </div>
            <button className="menu-button" onClick={() => setIsOpen(true)}>
              <FaCircle />
              <span>MENU</span>
            </button>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Hero;

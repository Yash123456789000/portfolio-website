import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Crypto-Portfolio App",
    year: "Mar2023",
    align: "right",
    image: "/images/website-img-5.png",
    link: "https://voluble-daifuku-5daed0.netlify.app/",
  },
  {
    name: "StatusBit (Admin Dashboard)",
    year: "Sept2023",
    align: "left",
    image: "/images/website-img-1.png",
    link: "https://plivo-task-frontend-xtds.vercel.app/",
  },
  {
    name: "Official Webpage of PPGS",
    year: "Jan2023",
    align: "right",
    image: "/images/website-img-3.png",
    link: "https://ppgsiitkgp.in/",
  },
  {
    name: "Car-Sharing App",
    year: "May2024",
    align: "left",
    image: "/images/website-img-4.png",
    link: "https://car-sharing-app-one.vercel.app/",
  },
  {
    name: "Task Management App",
    year: "Nov2023",
    align: "right",
    image: "/images/website-img-2.png",
    link: "https://flowboard-b0f9e.web.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

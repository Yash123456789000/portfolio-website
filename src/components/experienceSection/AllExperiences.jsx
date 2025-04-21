import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Senior Executive Member",
    company: "KodeinKGP",
    date: "2022 - 2024",
    responsibilities: [
      "Authored an article on data preprocessing analysis.",
      "Led workshops for 40+ executive members on frontend development.",
      "Conducted an introductory seminar for the society.",
    ],
  },
  {
    job: "Executive Member",
    company: "PPGS",
    date: "2022 - 2024",
    responsibilities: [
      "Worked on the development of Official webpage of the Society.",
      "Developed different pages and ensured in efficiency in loading.",
      "Collaborated with the team of tech and media for this.",
    ],
  },
  {
    job: "Tech and Media Head",
    company: "PPGS",
    date: "2024 - Present",
    responsibilities: [
      "Mentored a group of junior members to develop and optimize society's webpage.",
      "Managed to get 100k+ visits in our webpages.",
      "Achieved a Country Rank of 77K for our official Websites.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

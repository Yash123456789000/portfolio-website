import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Hi, I’m Yash Priyadarshy, a passionate full-stack developer with a strong
        foundation in building scalable web applications from the ground up. I
        enjoy turning ideas into real-world products using modern technologies
        like React, Node.js, and PostgreSQL. Whether it’s crafting intuitive UIs
        or designing robust backend systems, I love tackling challenges across
        the full development stack. I’ve worked on everything from dynamic
        single-page apps to full-featured admin dashboards, always aiming to
        write clean, efficient, and maintainable code. Beyond development, I’m
        constantly learning, exploring new tools, and refining my skills to stay
        on top of the evolving tech landscape. When I’m not coding, you’ll find
        me diving into technical deep-dives, mentoring peers, or experimenting
        with new project ideas that push my limits.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;

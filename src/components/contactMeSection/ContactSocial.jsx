import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/yash-priyadarshy-60a27a26b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial link="https://github.com/Yash123456789000" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;

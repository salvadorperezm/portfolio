import { Box, Link } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { SiUpwork } from "react-icons/si";

import {
  socialMediaFooterContainer,
  socialMediaFooterIcon,
} from "./SocialMediaFooterStyles";

export const SocialMediaFooter = () => {
  return (
    <Box {...socialMediaFooterContainer}>
      <Link href="#contact" aria-label="email icon">
        <Box>
          <HiOutlineMail {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://github.com/salvadorperezm"
        aria-label="github icon"
      >
        <Box>
          <FiGithub {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://www.upwork.com/freelancers/~018af8c84df7c21c03"
        aria-label="upwork icon"
      >
        <Box>
          <SiUpwork {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://www.linkedin.com/in/salvadorperezm/"
        aria-label="linkedIn icon"
      >
        <Box>
          <FaLinkedinIn {...socialMediaFooterIcon} />
        </Box>
      </Link>
    </Box>
  );
};

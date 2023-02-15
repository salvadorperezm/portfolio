import { Box, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RxDiscordLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

import {
  socialMediaContainer,
  socialMediaIcon,
  socialMediaIconContainer,
} from "./SocialMediaStyles";

export const SocialMedia = () => {
  return (
    <Box {...socialMediaContainer}>
      <Link href="#contact" aria-label="email icon">
        <Box {...socialMediaIconContainer}>
          <HiOutlineMail {...socialMediaIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://github.com/salvadorperezm"
        aria-label="github icon"
      >
        <Box {...socialMediaIconContainer}>
          <FiGithub {...socialMediaIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://www.upwork.com/freelancers/~018af8c84df7c21c03"
        aria-label="upwork icon"
      >
        <Box {...socialMediaIconContainer}>
          <SiUpwork {...socialMediaIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="discordapp.com/users/salva#4492"
        aria-label="discord icon"
      >
        <Box {...socialMediaIconContainer}>
          <RxDiscordLogo {...socialMediaIcon} />
        </Box>
      </Link>
    </Box>
  );
};

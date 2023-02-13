import { Box, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RxDiscordLogo } from "react-icons/rx";
import { SiUpwork } from "react-icons/si";

import {
  socialMediaFooterContainer,
  socialMediaFooterIcon,
} from "./SocialMediaFooterStyles";

export const SocialMediaFooter = () => {
  return (
    <Box {...socialMediaFooterContainer}>
      <Link href="#contact">
        <Box>
          <HiOutlineMail {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link isExternal href="https://github.com/salvadorperezm">
        <Box>
          <FiGithub {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link
        isExternal
        href="https://www.upwork.com/freelancers/~018af8c84df7c21c03"
      >
        <Box>
          <SiUpwork {...socialMediaFooterIcon} />
        </Box>
      </Link>
      <Link isExternal href="discordapp.com/users/salva#4492">
        <Box>
          <RxDiscordLogo {...socialMediaFooterIcon} />
        </Box>
      </Link>
    </Box>
  );
};

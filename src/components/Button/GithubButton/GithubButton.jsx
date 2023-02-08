import { Button, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

import { buttonContainer, buttonLink } from "./GithubButtonStyles";

export const GithubButton = ({ link }) => {
  return (
    <Link isExternal href={link.url} {...buttonLink}>
      <Button
        leftIcon={<FiGithub />}
        {...buttonContainer}
      >{`GitHub Repository ${link.stack}`}</Button>
    </Link>
  );
};

import { Button, Link } from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";

import { buttonContainer, buttonLink } from "./GithubButtonStyles";

export const GithubButton = ({ link }) => {
  return (
    <Link
      isExternal={link.url ? true : false}
      href={link.url ? link.url : "#"}
      {...buttonLink}
    >
      <Button
        isDisabled={link.isDisabled}
        leftIcon={<FiGithub />}
        {...buttonContainer}
      >{`GitHub Repository ${link.stack}`}</Button>
    </Link>
  );
};

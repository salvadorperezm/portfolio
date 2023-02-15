import { Button, Link } from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";
import { buttonContainer, buttonLink } from "./LiveDemoButtonStyles";

export const LiveDemoButton = ({ link }) => {
  return (
    <Link
      {...buttonLink}
      isExternal={link.url ? true : false}
      href={link.url ? link.url : "#"}
    >
      <Button
        isDisabled={link.isDisabled}
        leftIcon={<TbWorld />}
        {...buttonContainer}
      >
        Live Demo
      </Button>
    </Link>
  );
};

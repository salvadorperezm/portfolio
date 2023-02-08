import { Button, Link } from "@chakra-ui/react";
import { TbWorld } from "react-icons/tb";
import { buttonContainer, buttonLink } from "./LiveDemoButtonStyles";

export const LiveDemoButton = () => {
  return (
    <Link {...buttonLink}>
      <Button isDisabled leftIcon={<TbWorld />} {...buttonContainer}>
        Live Demo
      </Button>
    </Link>
  );
};

import { Box, Image, Link, Text } from "@chakra-ui/react";
import {
  technologyContainer,
  technologyIcon,
  technologyLink,
  technologyText,
} from "./TechnologyStyles";

export const Technology = ({ technology }) => {
  return (
    <Link isExternal href={technology.link} {...technologyLink}>
      <Box {...technologyContainer}>
        <Image
          {...technologyIcon}
          src={technology.icon}
          alt={technology.name}
        />
        <Text {...technologyText}>{technology.name}</Text>
      </Box>
    </Link>
  );
};

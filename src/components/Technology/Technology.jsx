import { Box, Image, Text } from "@chakra-ui/react";
import {
  technologyContainer,
  technologyIcon,
  technologyText,
} from "./TechnologyStyles";

export const Technology = ({ technology }) => {
  return (
    <Box {...technologyContainer}>
      <Image {...technologyIcon} src={technology.icon} alt={technology.name} />
      <Text {...technologyText}>{technology.name}</Text>
    </Box>
  );
};

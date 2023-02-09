import { Box, Text } from "@chakra-ui/react";
import { tagContainer, tagText } from "./TagStyles";

export const Tag = ({ tag }) => {
  return (
    <Box {...tagContainer}>
      <Text {...tagText}>{tag}</Text>
    </Box>
  );
};

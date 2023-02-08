import { Box, Text } from "@chakra-ui/react";
import { tagContainer } from "./TagStyles";

export const Tag = ({ tag }) => {
  return (
    <Box {...tagContainer}>
      <Text>{tag}</Text>
    </Box>
  );
};

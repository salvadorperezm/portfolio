import { Box, Text } from "@chakra-ui/react";

import { SocialMediaFooter } from "../SocialMedia";

import { footerContainer, footerText } from "./FooterStyles";

export const Footer = () => {
  return (
    <Box {...footerContainer}>
      <SocialMediaFooter />
      <Text {...footerText}>Created by @salvadorperezm.</Text>
    </Box>
  );
};

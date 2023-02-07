import { Box, Text } from "@chakra-ui/react";

import { ProfilePicture, SocialMedia } from "../../components";

import {
  aboutContainer,
  aboutContentContainer,
  textBody,
  textHeader,
  textTitle,
} from "./AboutStyles";

export const About = () => {
  return (
    <Box id="#about" {...aboutContainer}>
      <Box {...aboutContentContainer}>
        <Text {...textTitle}>{`<Hello World />`}</Text>
        <ProfilePicture />
        <Text {...textHeader}>I am Salvador Perez</Text>
        <Text {...textBody}>
          I am a Full Stack Software Developer based in Managua, Nicaragua. 🇳🇮
        </Text>
        <SocialMedia />
      </Box>
    </Box>
  );
};

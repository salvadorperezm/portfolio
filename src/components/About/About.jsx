import { Box, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

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
        <Box {...textHeader}>
          <Text>I am</Text>
          <Typewriter
            options={{
              strings: [
                "Salvador Perez.",
                "Software Developer.",
                "Web Enthusiast.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>

        <Text {...textBody}>
          I am a Full Stack Software Developer based in Managua, Nicaragua. 🇳🇮
        </Text>
        <SocialMedia />
      </Box>
    </Box>
  );
};

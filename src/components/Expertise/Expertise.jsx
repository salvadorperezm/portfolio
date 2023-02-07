import { Box, Text, useColorModeValue } from "@chakra-ui/react";

import { Technology } from "../Technology";
import {
  frontendTechnologies,
  backendTechnologies,
  tools,
} from "../../assets/icons";

import {
  frontendTechnologiesGrid,
  expertiseContainer,
  expertiseContentContainer,
  mainContainer,
  technologiesContainer,
  technologiesGrid,
  textHeader,
  textTitle,
  backendTechnologiesGrid,
  toolsGrid,
} from "./ExpertiseStyles";

export const Expertise = () => {
  const bg = useColorModeValue("#f5f5f5", "#144272");

  return (
    <Box id="#expertise" {...expertiseContainer} bg={bg}>
      <Box {...expertiseContentContainer}>
        <Text {...textTitle}>{`<Expertise />`}</Text>
        <Box {...mainContainer}>
          <Box {...technologiesContainer} {...frontendTechnologiesGrid}>
            <Text {...textHeader}>Frontend</Text>
            <Box {...technologiesGrid}>
              {frontendTechnologies.map((technology, index) => {
                return <Technology key={index} technology={technology} />;
              })}
            </Box>
          </Box>
          <Box {...technologiesContainer} {...backendTechnologiesGrid}>
            <Text {...textHeader}>Backend</Text>
            <Box {...technologiesGrid}>
              {backendTechnologies.map((technology, index) => {
                return <Technology key={index} technology={technology} />;
              })}
            </Box>
          </Box>
          <Box {...technologiesContainer} {...toolsGrid}>
            <Text {...textHeader}>Tools</Text>
            <Box {...technologiesGrid}>
              {tools.map((tool, index) => {
                return <Technology key={index} technology={tool} />;
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

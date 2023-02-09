import { Box, Text } from "@chakra-ui/react";

import { ProjectCard } from "../ProjectCard";
import projects from "../../../utils/projects";

import {
  projectsCardsContainer,
  projectsContainer,
  projectsContentContainer,
  textTitle,
} from "./ProjectsStyles";

export const Projects = () => {
  return (
    <Box {...projectsContainer}>
      <Box {...projectsContentContainer}>
        <Text {...textTitle}>{`<Projects />`}</Text>
        <Box {...projectsCardsContainer}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

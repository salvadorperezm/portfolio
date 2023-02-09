import { Box, Text } from "@chakra-ui/react";

import { GithubButton, LiveDemoButton } from "../../Button";
import { Carrousel } from "../../Carrousel";
import { Tag } from "../../Tag";

import {
  projectButtonsContainer,
  projectCardContainer,
  projectCarrouselContainer,
  projectDescription,
  projectTagsContainer,
  projectTextContainer,
  projectTitle,
} from "./ProjectCardStyles";

export const ProjectCard = ({ project }) => {
  return (
    <Box {...projectCardContainer}>
      <Box {...projectCarrouselContainer}>
        <Carrousel projectImages={project.images} />
      </Box>
      <Box {...projectTextContainer}>
        <Text {...projectTitle}>{project.title}</Text>
        <Text {...projectDescription}>{project.description}</Text>
        <Box {...projectTagsContainer}>
          {project.tags.map((tag, index) => {
            return <Tag key={index} tag={tag} />;
          })}
        </Box>
        <Box {...projectButtonsContainer}>
          {project.links.map((link, index) => {
            if (link.host === "github") {
              return <GithubButton key={index} link={link} />;
            }
            return <LiveDemoButton key={index} link={link} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

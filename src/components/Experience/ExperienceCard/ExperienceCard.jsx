import { Box, Text, ListItem, UnorderedList } from "@chakra-ui/react";

import { Tag } from "../../Tag";

import {
  experienceTagsContainer,
  experienceTextContainer,
  experienceTextContainerBottom,
  experienceTextContainerTop,
  jobDescription,
  jobDuration,
  jobPlace,
  jobTitle,
} from "./ExperienceCardStyles";

export const ExperienceCard = ({ currentJob }) => {
  return (
    <Box {...experienceTextContainer}>
      <Box {...experienceTextContainerTop}>
        <Text {...jobTitle}>{currentJob.title}</Text>
        <Text {...jobPlace}>{currentJob.place}</Text>
        <Text {...jobDuration}>{currentJob.duration}</Text>
        <Box {...experienceTagsContainer}>
          {currentJob.tags &&
            currentJob.tags.map((tag, index) => {
              return <Tag key={index} tag={tag} />;
            })}
        </Box>
      </Box>
      <Box {...experienceTextContainerBottom}>
        <UnorderedList>
          {currentJob.descriptions &&
            currentJob.descriptions.map((description, index) => {
              return (
                <ListItem key={index} {...jobDescription}>
                  {description}
                </ListItem>
              );
            })}
        </UnorderedList>
      </Box>
    </Box>
  );
};

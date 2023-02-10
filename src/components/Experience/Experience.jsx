import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ExperienceButton } from "../Button";
import { Tag } from "../Tag";
import jobs from "../../utils/jobs";

import {
  experienceButtonsContainer,
  experienceContainer,
  experienceContentContainer,
  experienceMainContainer,
  experienceTagsContainer,
  experienceTextContainer,
  experienceTextContainerBottom,
  experienceTextContainerTop,
  jobDescription,
  jobDuration,
  jobPlace,
  jobTitle,
  textTitle,
} from "./ExperienceStyles";

export const Experience = () => {
  const [currentJob, setCurrentJob] = useState({});

  useEffect(() => {
    setCurrentJob(jobs[0]);
  }, []);

  return (
    <Box {...experienceContainer}>
      <Box {...experienceContentContainer}>
        <Text {...textTitle}>{`<Experience />`}</Text>
        <Box {...experienceMainContainer}>
          <Box {...experienceButtonsContainer}>
            {jobs.map((job, index) => {
              return (
                <ExperienceButton
                  key={index}
                  job={job}
                  setCurrentJob={setCurrentJob}
                />
              );
            })}
          </Box>
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
        </Box>
      </Box>
    </Box>
  );
};

import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ExperienceButton } from "../Button";
import { ExperienceCard } from "./ExperienceCard";

import jobs from "../../utils/jobs";

import {
  experienceButtonsContainer,
  experienceContainer,
  experienceContentContainer,
  experienceMainContainer,
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
          <ExperienceCard currentJob={currentJob} />
        </Box>
      </Box>
    </Box>
  );
};

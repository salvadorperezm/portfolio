import { Button } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

import { experienceButtonContainer } from "./ExperienceButtonStyles";

export const ExperienceButton = ({ job, setCurrentJob, isActive }) => {
  return (
    <Button
      leftIcon={<CalendarIcon />}
      onClick={() => setCurrentJob(job)}
      isActive={isActive}
      {...experienceButtonContainer}
    >
      {job.duration}
    </Button>
  );
};

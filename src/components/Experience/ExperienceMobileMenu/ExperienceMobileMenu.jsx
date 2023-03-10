import { CalendarIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import {
  experienceMobileMenuButton,
  experienceMobileMenuItem,
  experienceMobileMenuList,
} from "./ExperienceMobileMenuStyles";

export const ExperienceMobileMenu = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <Menu autoSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            leftIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            {...experienceMobileMenuButton}
          >
            {currentJob.duration}
          </MenuButton>
          <MenuList {...experienceMobileMenuList}>
            {jobs.map((job, index) => {
              return (
                <MenuItem
                  key={index}
                  icon={<CalendarIcon />}
                  onClick={() => setCurrentJob(job)}
                  {...experienceMobileMenuItem}
                >
                  {job.duration}
                </MenuItem>
              );
            })}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

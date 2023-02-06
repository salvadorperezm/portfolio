import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

import { ToggleTheme } from "../Toggle";
import navLinks from "../../utils/navLinks";

import { asideContent, asideNav, asideNavLink } from "./AsideStyles";

export const Aside = ({ isOpen, onClose }) => {
  const background = useColorModeValue("#ffffff", "#0A2647");

  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg={background}>
        <DrawerCloseButton />

        <DrawerBody {...asideContent}>
          <Box {...asideNav}>
            {navLinks.map((navLink) => {
              return (
                <Link
                  key={navLink.id}
                  href={navLink.reference}
                  onClick={onClose}
                  {...asideNavLink}
                >
                  {`${navLink.id}. ${navLink.name}`}
                </Link>
              );
            })}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <ToggleTheme boxSize={"60px"} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

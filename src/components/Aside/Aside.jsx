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

import { asideContent, asideNav, asideNavLink } from "./AsideStyles";

export const Aside = ({ isOpen, onClose }) => {
  const background = useColorModeValue("#ffffff", "#0A2647");

  const navLinks = [
    {
      id: 1,
      name: "About",
      reference: "#about",
    },
    {
      id: 2,
      name: "Expertise",
      reference: "#expertise",
    },
    {
      id: 3,
      name: "Projects",
      reference: "#projects",
    },
    {
      id: 4,
      name: "Experience",
      reference: "#experience",
    },
    {
      id: 5,
      name: "Contact",
      reference: "#contact",
    },
  ];

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

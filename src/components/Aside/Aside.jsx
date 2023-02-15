import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Box,
} from "@chakra-ui/react";

import navLinks from "../../utils/navLinks";

import {
  asideCloseButton,
  asideContent,
  asideNav,
  asideNavLink,
} from "./AsideStyles";

export const Aside = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton {...asideCloseButton} />

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
      </DrawerContent>
    </Drawer>
  );
};

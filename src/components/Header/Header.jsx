import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Link, useDisclosure } from "@chakra-ui/react";

import { Aside } from "../Aside";
import { ToggleTheme } from "../Toggle";

import {
  headerContainer,
  headerLogo,
  headerMobileMenuIcon,
  headerNav,
  headerNavLink,
} from "./HeaderStyles";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    <Box {...headerContainer} id="header">
      <Link href="#" {...headerLogo}>{`<salvadorperezm />`}</Link>
      <Box {...headerNav}>
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.reference} {...headerNavLink}>
              {`${navLink.id}. ${navLink.name}`}
            </Link>
          );
        })}
        <ToggleTheme />
      </Box>
      <HamburgerIcon {...headerMobileMenuIcon} onClick={onOpen} />
      {isOpen && <Aside isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};

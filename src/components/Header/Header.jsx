import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Link, useDisclosure } from "@chakra-ui/react";

import { Aside } from "../Aside";
import navLinks from "../../utils/navLinks";

import {
  headerContainer,
  headerLogo,
  headerMobileMenuIcon,
  headerNav,
  headerNavLink,
} from "./HeaderStyles";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      </Box>
      <HamburgerIcon {...headerMobileMenuIcon} onClick={onOpen} />
      {isOpen && <Aside isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};

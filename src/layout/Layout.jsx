import { Box, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {
  Header,
  About,
  Expertise,
  Projects,
  Experience,
  Contact,
  Footer,
} from "../components";

import {
  layoutContainer,
  loadingText,
  spinner,
  spinnerContainer,
} from "./LayoutStyles";

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadingApp();
  }, []);

  const loadingApp = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <Box {...spinnerContainer}>
          <Spinner {...spinner} />
          <Text {...loadingText}>Loading...</Text>
        </Box>
      ) : (
        <Box {...layoutContainer}>
          <Header />
          <About />
          <Expertise />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </Box>
      )}
    </>
  );
};

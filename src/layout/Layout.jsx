import { Box, Spinner, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { Header } from "../components";

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

  const background = useColorModeValue("#ffffff", "#0A2647");

  return (
    <>
      {isLoading ? (
        <Box bg={background} {...spinnerContainer}>
          <Spinner {...spinner} />
          <Text {...loadingText}>Loading...</Text>
        </Box>
      ) : (
        <Box bg={background} {...layoutContainer}>
          <Header />
        </Box>
      )}
    </>
  );
};

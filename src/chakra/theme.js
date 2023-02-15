import { extendTheme } from "@chakra-ui/react";

const fonts = {
  plusJakarta: `"Plus Jakarta Sans", sans-serif`,
  azeretMono: `"Azeret Mono", monospace`,
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts,
  config,
});

export default theme;

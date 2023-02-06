import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

import { themeIcon } from "./ToggleThemeStyles";

export const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {colorMode === "dark" ? (
        <SunIcon {...themeIcon} onClick={toggleColorMode} />
      ) : (
        <MoonIcon {...themeIcon} onClick={toggleColorMode} />
      )}
    </>
  );
};

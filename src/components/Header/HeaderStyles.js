export const headerContainer = {
  backgroundColor: `#0A2647`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `space-between`,
  px: { base: `10px`, lg: `20px` },
  py: `10px`,
  fontFamily: "azeretMono",
};

export const headerLogo = {
  fontSize: { base: `22px`, lg: `30px` },
  _hover: {
    textDecoration: `none`,
  },
  paddingBottom: `5px`,
  borderBottom: `1px solid transparent`,
};

export const headerNav = {
  display: { base: `none`, lg: `flex` },
  alignItems: `center`,
  gap: `22px`,
};

export const headerNavLink = {
  _hover: {
    textDecoration: `none`,
    borderBottom: `1px solid #2C74B3`,
  },
  paddingBottom: `5px`,
  borderBottom: `1px solid transparent`,
};

export const headerMobileMenuIcon = {
  display: { base: `block`, lg: `none` },
  boxSize: `35px`,
  paddingBottom: `5px`,
};

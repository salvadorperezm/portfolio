export const experienceContainer = {
  backgroundColor: `#0A2647`,
  minHeight: `100vh`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  color: `#ffffff `,
};

export const experienceContentContainer = {
  maxWidth: `1200px`,
  flex: `1`,
};

export const experienceMainContainer = {
  padding: `20px`,
  borderRadius: `5px`,
  display: `grid`,
  gridTemplateColumns: { base: `1fr`, lg: `30% 1fr` },
  gridTemplateRows: `auto`,
  gap: { base: `20px`, lg: `40px` },
  margin: { base: `10px`, lg: `0px` },
};

export const experienceButtonsContainer = {
  display: { base: `none`, lg: `flex` },
  flexDirection: `column`,
  gap: `20px`,
};

export const textTitle = {
  textAlign: `center`,
  mb: `20px`,
  fontFamily: `azeretMono`,
  fontSize: { base: `22px`, lg: `32px` },
};

export const experienceContainer = {
  backgroundColor: `#0A2647`,
  minHeight: `100vh`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
};

export const experienceContentContainer = {
  maxWidth: `1200px`,
  flex: `1`,
};

export const experienceMainContainer = {
  backgroundColor: `#144272`,
  padding: `20px`,
  borderRadius: `5px`,
  display: `grid`,
  gridTemplateColumns: { base: `1fr`, lg: `30% 1fr` },
  gridTemplateRows: `auto`,
  gap: { base: `20px`, lg: `100px` },
  margin: { base: `10px`, lg: `0px` },
  boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
};

export const experienceButtonsContainer = {
  display: `flex`,
  flexDirection: `column`,
  gap: `20px`,
};

export const textTitle = {
  textAlign: `center`,
  mb: `20px`,
  fontFamily: `azeretMono`,
  fontSize: { base: `22px`, lg: `32px` },
};

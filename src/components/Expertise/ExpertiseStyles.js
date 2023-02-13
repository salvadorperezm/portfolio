export const expertiseContainer = {
  backgroundColor: `#144272`,
  minHeight: `100vh`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  color: `#ffffff`,
};

export const expertiseContentContainer = {
  flex: `1`,
  maxWidth: `1200px`,
  mx: { base: `10px`, lg: `0px` },
  padding: { base: `10px`, lg: `0px` },
};

export const textTitle = {
  fontFamily: `azeretMono`,
  fontSize: { base: `22px`, lg: `32px` },
  textAlign: `center`,
  mb: { base: `20px`, lg: `40px` },
};

export const mainContainer = {
  display: { base: `block`, md: `grid` },
  gridTemplateColumns: `1fr 1fr 1fr 1fr`,
  gridTemplateRows: `auto`,
  gap: `30px`,
};

export const frontendTechnologiesGrid = {
  gridRow: `1`,
  gridColumn: `1 / 3`,
};

export const backendTechnologiesGrid = {
  gridRow: `1`,
  gridColumn: `3 / 5`,
};

export const toolsGrid = {
  gridRow: `2`,
  gridColumn: `2 / 4`,
};

export const textHeader = {
  fontFamily: `plusJakarta`,
  fontSize: `22px`,
  textAlign: `center`,
  mb: `10px`,
};

export const technologiesContainer = {
  borderRadius: `5px`,
  padding: { base: `10px`, lg: `20px` },
  mb: { base: `10px`, sm: `20px`, md: `0px` },
  backgroundColor: `#0A2647`,
  boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
};

export const technologiesGrid = {
  display: `grid`,
  gridTemplateColumns: { base: `1fr`, sm: `1fr 1fr` },
  gridTemplateRows: `auto`,
  gap: `10px`,
};

import { Box, Image } from "@chakra-ui/react";

import profilePicture from "../../assets/images/profile-picture.jpg";

import { profilePictureContainer } from "./ProfilePictureStyles";

export const ProfilePicture = () => {
  return (
    <Box {...profilePictureContainer}>
      <Image src={profilePicture} />
    </Box>
  );
};

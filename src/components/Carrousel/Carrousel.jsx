import { Box, Image, Text } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

import toDoAppImages from "../../assets/images/to-do-app";

import { carrouselContainer, carrouselIcon } from "./CarrouselStyles";

export const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    currentImage - 1 < 0
      ? setCurrentImage(toDoAppImages.length - 1)
      : setCurrentImage(currentImage - 1);
  };

  const nextImage = () => {
    currentImage + 1 > toDoAppImages.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };

  return (
    <Box {...carrouselContainer}>
      <ArrowLeftIcon onClick={previousImage} {...carrouselIcon} />
      <Image
        src={toDoAppImages[currentImage].image}
        alt={toDoAppImages[currentImage].name}
      />
      <ArrowRightIcon onClick={nextImage} {...carrouselIcon} />
    </Box>
  );
};

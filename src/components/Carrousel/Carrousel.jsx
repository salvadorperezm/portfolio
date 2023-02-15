import { Box, Image } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
  carrouselContainer,
  carrouselContainerOnlyImage,
  carrouselIcon,
  carrouselImage,
} from "./CarrouselStyles";

export const Carrousel = ({ projectImages }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    currentImage - 1 < 0
      ? setCurrentImage(projectImages.length - 1)
      : setCurrentImage(currentImage - 1);
  };

  const nextImage = () => {
    currentImage + 1 > projectImages.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1);
  };

  return projectImages.length > 1 ? (
    <Box {...carrouselContainer}>
      <ArrowLeftIcon onClick={previousImage} {...carrouselIcon} />
      <Image
        src={projectImages[currentImage].image}
        alt={projectImages[currentImage].name}
        {...carrouselImage}
      />
      <ArrowRightIcon onClick={nextImage} {...carrouselIcon} />
    </Box>
  ) : (
    <Box {...carrouselContainerOnlyImage}>
      <Image
        src={projectImages[currentImage].image}
        alt={projectImages[currentImage].name}
        {...carrouselImage}
      />
    </Box>
  );
};

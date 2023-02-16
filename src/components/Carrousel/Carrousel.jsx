import { Box, Image, Spinner } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useState } from "react";

import {
  carrouselContainer,
  carrouselContainerOnlyImage,
  carrouselIcon,
  carrouselImage,
  carrouselSpinner,
} from "./CarrouselStyles";

export const Carrousel = ({ projectImages }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const previousImage = () => {
    setIsLoading(true);
    try {
      currentImage - 1 < 0
        ? setCurrentImage(projectImages.length - 1)
        : setCurrentImage(currentImage - 1);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const nextImage = () => {
    setIsLoading(true);
    try {
      currentImage + 1 > projectImages.length - 1
        ? setCurrentImage(0)
        : setCurrentImage(currentImage + 1);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return projectImages.length > 1 ? (
    <Box {...carrouselContainer}>
      <ArrowLeftIcon onClick={previousImage} {...carrouselIcon} />
      {isLoading ? (
        <Spinner {...carrouselSpinner} />
      ) : (
        <Image
          src={projectImages[currentImage].image}
          alt={projectImages[currentImage].name}
          {...carrouselImage}
        />
      )}
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

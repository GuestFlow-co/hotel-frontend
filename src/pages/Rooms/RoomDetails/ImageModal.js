import React, { useState } from "react";
import { Box, Image, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const modalStyle = {
    cursor: isZoomed ? "zoom-out" : "zoom-in",
    transition: "transform 0.2s ease",
    
  };

  const imageStyle = {
    cursor: isZoomed ? "zoom-out" : "zoom-in",
    width: "100%",
    height: "auto",
    transition: "transform 0.2s ease",
    transform: isZoomed ? "scale(1.4)" : "scale(1)",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" style={modalStyle}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box position="relative" textAlign="center">
            <Image
              src={imageUrl}
              alt="Full-size Image"
              style={imageStyle}
              onClick={toggleZoom}
              padding={"25px"}
            />
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;

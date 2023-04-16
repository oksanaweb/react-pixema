import { Portal, PortalTarget } from "components/Portal/Portal";
import React from "react";
import { Close, Message, Title } from "./styles";
import { AnimatePresence } from "framer-motion";
import { CloseIcon } from "assets";
import { Colors } from "ui";

interface FavoriteProps {
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isOpen: boolean;
}

export const FavoriteModal = ({ isOpen, toggleModal }: FavoriteProps) => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <AnimatePresence>
        {isOpen && (
          <Message
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Close onClick={toggleModal}>
              <CloseIcon stroke={Colors.DARK} />
            </Close>
            <Title>This movie has been added to your favorite list</Title>
          </Message>
        )}
      </AnimatePresence>
    </Portal>
  );
};

import { Dialog } from "radix-ui";

import React from "react";

import { useModal } from "~/contexts/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";

interface ModalWrapperProps {
  children: React.ReactNode;
  modalKey: number;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, modalKey }) => {
  const { hideModal, goBack, isBackButtonVisible } = useModal();

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <Dialog.Overlay asChild>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-10 bg-S5/30 backdrop-blur-md"
        />
      </Dialog.Overlay>
      {/* aria-describedby={undefined} is used to prevent the modal from being announced as a dialog */}
      <Dialog.Content asChild aria-describedby={undefined}>
        <motion.div className="ModalOuterContainer fixed inset-0 z-20 flex items-center justify-center">
          <AnimatePresence>
            <motion.div
              className="ModalInnerContents absolute flex max-h-[90%] max-w-[90%] flex-col items-center rounded-[20px] border border-solid border-G3 bg-N1 p-10 text-G5 shadow-optii"
              onClick={handleModalContentClick}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              key={modalKey}
            >
              {isBackButtonVisible && (
                <ArrowLeft
                  className="absolute left-5 top-5 opacity-80 hover:cursor-pointer hover:opacity-100"
                  onClick={goBack}
                />
              )}
              <Dialog.Close asChild>
                <button
                  className="absolute right-7 top-7 text-G3 opacity-70 hover:text-G4 hover:opacity-100"
                  aria-label="Close"
                  onClick={hideModal}
                >
                  <X className="h-7 w-7" />
                </button>
              </Dialog.Close>
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Dialog.Content>
    </>
  );
};

export default ModalWrapper;

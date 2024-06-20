import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

interface ModalComponentProps {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  hasilKhodam: string;
}

export default function ModalComponent({
  modalIsOpen,
  setModalIsOpen,
  hasilKhodam,
}: ModalComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (modalIsOpen) {
      onOpen();
    }
    if (!isOpen) setModalIsOpen(false);
  }, [modalIsOpen, setModalIsOpen, isOpen, onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent
          className="backdrop-blur"
          style={{ backgroundColor: "rgb(0, 0, 0, .5)" }}
        >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="my-8 mx-auto">
                  <h1 className="text-4xl">{hasilKhodam}</h1>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="shadow" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

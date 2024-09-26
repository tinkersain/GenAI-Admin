import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { t } from "i18next";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const students = [
    "John",
    "Alice",
    "Bob",
    "Emma",
    "Liam",
    "Sophia",
    "Ethan",
    "Mia",
    "Noah",
    "Isabella",
  ];
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          }
          subtitle="4 unread messages"
          title="Chung Miller"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Janelle Lenard"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          }
          subtitle="3 incompleted steps"
          title="Janelle Lenard"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              color="warning"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
          }
          subtitle={
            <p className="flex">
              2 issues to<span className="text-primary ml-1">fix now</span>
            </p>
          }
          title="Zoey Lang"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>

      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "60px",
          zIndex: 1000,
        }}
      >
        <div className="flex gap-4 items-center">
          <Button
            color="danger"
            endContent={<IoIosSend style={{ fontSize: "30px" }} />}
            style={{ fontSize: "20px" }}
            variant="shadow"
            onPress={onOpen}
          >
            Compose
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior="inside"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Send a Message
                  </ModalHeader>
                  <ModalBody>
                    <div className="w-full flex flex-col flex-wrap gap-4">
                      <div>
                        <Select
                          key="success"
                          color="success"
                          label="Student Name"
                          placeholder="Select a student"
                          // defaultSelectedKeys={}
                        >
                          {students.map((student) => (
                            <SelectItem key={student}>{student}</SelectItem>
                          ))}
                        </Select>
                      </div>
                      <div>
                        <Textarea
                          label="Description"
                          placeholder="Enter the message"
                          className="max-w-full"
                        />
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button
                      color="primary"
                      onPress={() => {
                        toast.success(t("Message Sent Successfully"), {
                          position: "bottom-center",
                        });
                        onClose();
                      }}
                      endContent={<IoIosSend />}
                    >
                      Send
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
}

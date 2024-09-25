import { Accordion, AccordionItem, Avatar, Button } from "@nextui-org/react";
import { IoIosSend } from "react-icons/io";

export default function App() {
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
          >
            Compose
          </Button>
        </div>
      </div>
    </>
  );
}

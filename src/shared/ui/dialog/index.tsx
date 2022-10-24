import * as RadixDialog from "@radix-ui/react-dialog";
import clsx from "clsx";
import { Icon } from "../icon";
import styles from "./dialog.module.css";

interface DialogProps {
  children?: React.ReactNode;
}

export const Dialog = ({ children }: DialogProps) => {
  return (
    <RadixDialog.Portal>
      <RadixDialog.Overlay
        className={clsx(
          styles.overlay,
          "bg-[#fffffff2] fixed top-0 left-0 right-0 bottom-0 grid place-items-center overflow-y-auto"
        )}
      >
        <RadixDialog.Content className="my-auto bg-white p-7 rounded-md shadow-md relative flex flex-col items-center text-center justify-center min-w-[50%] min-h-[70%]">
          {children}
          <RadixDialog.Close className="absolute top-2 right-2">
            <Icon name="close" />
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Overlay>
    </RadixDialog.Portal>
  );
};

export const DialogRoot = RadixDialog.Root;
export const DialogTrigger = RadixDialog.Trigger;

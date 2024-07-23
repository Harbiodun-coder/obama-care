import React from "react";
import { IoClose } from "react-icons/io5";

type ModalProps = {
  action: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  open?: boolean;
};

const Modal: React.FC<ModalProps> = ({ action, children, open }) => {
  return (
    <div
      className={`modal-background h-full w-full bg-[#00000080] bg-opacity-40 left-0 top-0 justify-center items-center ${
        open ? "flex" : "hidden"
      } flex-col text-center absolute z-[1000]`}
      onClick={() => action(false)}
    >
      <div className="relative flex flex-col justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div
          className={`bg-white rounded-2xl max-h-[calc(100vh-100px)] relative ${
            open ? "overflow-auto" : "overflow-hidden"
          } w-full mx-auto`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative bg-white rounded-2xl shadow-lg">
            <div
              onClick={() => action(false)}
              className="absolute top-4 right-4 cursor-pointer p-2 hover:bg-gray-200 rounded-full"
            >
              <IoClose className="h-6 w-6" />
            </div>
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

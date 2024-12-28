import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { X } from "lucide-react";

type Props = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    name: string;
};

const Modal = ({ children, isOpen, onClose, name }: Props) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50">
          <div
            className="relative mx-auto w-full max-w-2xl rounded-lg bg-white shadow-lg p-1dark:bg-dark-secondary"
            style={{
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Modal Header 
            <div className="flex items-center justify-between border-b pb-2">
              <h2 className="text-lg font-medium">{name}</h2>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-primary text-white hover:bg-blue-600"
                onClick={onClose}
              >
                <X size={18} />
              </button>
            </div> */}
    
            {/* Modal Content */}
            <div className="mt-4">{children}</div>
          </div>
        </div>,
        document.body
      );
    }
export default Modal; 
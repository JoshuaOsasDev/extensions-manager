import type { JSX } from "react";
import type { dataType } from "../../Data/data";

type ModalProps = {
  onClose: () => void;
  extended: dataType | undefined;
  onConfirm: () => void;
};

function Modal({ onClose, extended, onConfirm }: ModalProps): JSX.Element {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg md:max-w-md dark:bg-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="mb-6 text-center text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Are you sure you want to remove{" "}
          <span className="font-bold text-red-400">{extended?.name}</span>{" "}
          extention?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="rounded-md border border-neutral-300 px-4 py-2 text-neutral-700 transition hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

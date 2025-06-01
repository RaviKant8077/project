import React from 'react';
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { Dialog } from "@headlessui/react";

const DeleteModal = ({
  open,
  setOpen,
  title,
  onDeleteHandler,
  loader,
}) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" aria-hidden="true" />

      <div className="fixed inset-0 z-10 flex items-center justify-center p-4 overflow-y-auto">
        <Dialog.Panel className="relative w-full max-w-xl transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
          <div className="absolute right-4 top-4">
            <button
              disabled={loader}
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <span className="sr-only">Close</span>
              <FaTimes className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
              <FaExclamationTriangle className="text-red-600" />
            </div>
            <div>
              <Dialog.Title as="h3" className="text-lg font-semibold font-metropolis">
                {title}
              </Dialog.Title>
              <p className="mt-2 text-xl font-semibold text-gray-600 font-metropolis">
                Are you sure you want to delete?
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              disabled={loader}
              type="button"
              onClick={onDeleteHandler}
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
            >
              {loader ? "Loading..." : "Delete"}
            </button>
            <button
              disabled={loader}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-md bg-gray-500 px-4 py-2 text-white hover:bg-gray-600 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DeleteModal;

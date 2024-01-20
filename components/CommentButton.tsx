"use client"
import { useState } from 'react';

const CommentModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e:any) => {
    e.stopPropagation();
  };

  return (
    <>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Comment
      </button>
      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div onClick={stopPropagation} className="bg-white p-6 rounded shadow-lg z-100">
            <h2 className="text-lg font-bold mb-4">Comment Section</h2>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="border border-gray-300 rounded p-2 mb-4 w-full"
              placeholder="Write your comment here..."
            ></textarea>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded z-100"
            >
              Comment
            </button>
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded z-100"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentModal;

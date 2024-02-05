"use client"
import { useState } from 'react';

const CommentModal = ({ comments, tid }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [commentText, setCommentText] = useState("");


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };

  const handleCommentSubmit = async () => {
    // Perform the POST request to submit the comment
    // You need to replace the placeholder URL with your actual server endpoint
    const username = localStorage.getItem("username");
    console.log("elemanlar: " +username + tid+ commentText);
    const response = await fetch(`http://musicee.us-west-2.elasticbeanstalk.com/tracks/post_comment?user_name=${username}&track_id=${tid}&comment_text=${commentText}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Handle success, e.g., update the UI with the new comment
      console.log('Comment submitted successfully');
      console.log(response);
      // You can also fetch the updated comments and update the state if needed
    } else {
      // Handle error
      console.error('Failed to submit comment:', response.statusText);
    }

    // Close the modal after comment submission (you can adjust this based on your needs)
    closeModal();
  };

  const renderComments = () => {
    if (Array.isArray(comments)) {
      return comments.map((comment: any, index: number) => (
        <article className="p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
            <img
              className="mr-2 w-6 h-6 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Profile"
            />
            {comment.username}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">

          </p>
        </div>
        <button
          id="dropdownComment3Button"
          data-dropdown-toggle="dropdownComment3"
          className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          type="button"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 3"
          >
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdownComment3"
          className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Remove
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Report
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400 overflow-x-auto">{comment.comment}</p>

    </article>
      ));
    } else {
      return <div>No comments available.</div>;
    }
  };

  return (
    <>
      <button data-testid="outComment" onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Comment
      </button>
      {isOpen && (
        <div
        onClick={closeModal}
        className="fixed inset-0 bg-black overflow-y-auto w-full bg-opacity-50 flex items-center justify-center z-50 "
      >
        <div onClick={stopPropagation} className="bg-white p-6 rounded shadow-lg z-51 max-w-screen-md h-3/4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Comment Section</h2>
          <div className="comment-container space-x">{renderComments()}</div>

          <textarea
            name=""
            id=""
            cols={15}
            rows={5}
            className="border border-gray-300 rounded p-2 mb-4 w-full"
            placeholder="Write your comment here..."
            onChange={(e) => setCommentText(e.target.value)}
          ></textarea>
          {/* Render comments on the DOM */}
          <button
            data-testid="inComment"
            onClick={handleCommentSubmit}
            className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-2 rounded"
          >
            Comment
          </button>
          <button
            onClick={closeModal}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

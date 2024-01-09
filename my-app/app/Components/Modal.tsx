import React, { useState, useEffect } from 'react';

const Modal = () => {
  // Other state variables
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // State for Add Transaction modal

  // Other functions to be added in the future

  return (
    <div className="flex flex-col items-center mt-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add Transaction
      </button>

      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-1/3 p-4 rounded-lg shadow-lg">
            {/* Add Transaction Form */}
            <form>
              {/* Form fields go here */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  // Add input properties
                  className="mt-1 p-2 w-full rounded border-gray-300"
                />
              </div>
              {/* Other form fields */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded mr-2"
                  onClick={() => setIsAddModalOpen(false)} // Close modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

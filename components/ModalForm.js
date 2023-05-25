import { useState } from "react";
import Link from "next/link";
import PlusButton from "./PlusButton";
import { createWorkout } from "../network/network";

export default function ModalForm({ updateData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: "", load: 0, reps: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    createWorkout(formData)
      .then((res) => {
        console.log(res.data);
        handleModalClose();
        setFormData({ title: "", load: 0, reps: "" });
        updateData();
      })
      .catch((err) => console.log(err));
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onChangeFormFields = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="relative">
        {isModalOpen && (
          <div
            className="fixed top-0 left-0 z-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center"
            onClick={handleModalClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white absolute z-10 rounded-lg shadow-lg p-4 max-w-md w-10/12"
            >
              <h2 className="text-lg font-bold mb-2">Add Exercise</h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    name="title"
                    type="text"
                    required
                    placeholder="Enter title"
                    value={formData.title}
                    onChange={(event) => onChangeFormFields(event)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="numberOfSets"
                  >
                    Number of Sets
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numberOfSets"
                    name="reps"
                    required
                    placeholder="Enter number of sets"
                    value={formData.sets}
                    onChange={(event) => onChangeFormFields(event)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="numberOfKgs"
                  >
                    Weight (kg)
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="numberOfKgs"
                    type="number"
                    required
                    name="load"
                    placeholder="Enter number of kgs"
                    value={formData.load}
                    onChange={(event) => onChangeFormFields(event)}
                  />
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="bg-gray-600 text-white mr-2 py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={handleModalClose}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>{" "}
      <PlusButton onModalOpen={handleModalOpen} />
    </>
  );
}

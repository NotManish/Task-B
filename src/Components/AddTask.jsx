import { useState } from "react";
import { useContext } from "react";
import { myContext } from "../App";

function AddTask({ boardId }) {
  const { addTask } = useContext(myContext);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle && taskDescription) {
      addTask(boardId, taskTitle, taskDescription); 
      setTaskTitle(""); 
      setTaskDescription("");
      setIsAddingTask(false); 
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {isAddingTask ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="pl-2 rounded-md border border-gray-300"
          />
          <textarea
            placeholder="Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="pl-2 rounded-md border border-gray-300"
          />
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => {
                setTaskTitle(""); 
                setTaskDescription("");
                setIsAddingTask(false); // Hide the input fields on cancel
              }}
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setIsAddingTask(true)} // Show the input fields when clicked
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Add Task
        </button>
      )}
    </div>
  );
}

export default AddTask;

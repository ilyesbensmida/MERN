import React from "react";

const Display = ({tasks,deleteTasks, readTasks }) => {
//   const { tasks } = props;

  return (
    <div>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <ul className="divide-y divide-gray-200 px-4">
          {tasks.map((oneTask, index) => (
            <li className="py-4 flex items-center" key={index}>
              <div className="flex items-center">
                <input
                  onChange={(e) => {
                    readTasks(index);
                  }}
                  name="todo1"
                  type="checkbox"
                  checked={oneTask.status}
                  className="h-4 w-4  focus:ring-teal-500 border-gray-300 rounded"
                />
                <label for="todo1" className="ml-3 block text-gray-900">
                  <span className="text-lg font-medium">{oneTask.title}</span>
                </label>
              </div>
              <div>
                <button
                onClick={(e)=>deleteTasks(index)}
                  className=" ml-20 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Display;
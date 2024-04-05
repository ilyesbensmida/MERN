import { useState } from 'react';
import React from 'react'
const Tasks = ({tasks, setTask}) => {
const [title, setTitle]= useState("");
const [status, setStatus]= useState("");

const handlesubmit = (e) =>{
    e.preventDefault();
    const newTask = {
        title,
        status,
    };

    setTask([...tasks, newTask]);
    setTitle("");
    setStatus("");
};

  return (
   
    <div>
    <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form onSubmit={handlesubmit} className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
            onChange={(e)=>{setTitle(e.target.value)}}
            value={title}
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"type="text" placeholder="Add a task"/>
            <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit">
                Add
            </button>
        </div>
    </form>
    </div>
    
      )
}

export default Tasks;
import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: "wash the car", id: 1 },
    { title: "go for a walk", id: 2 },
    { title: "coding", id: 3 },
  ]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearTask = () => {
    setTasks([]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, clearTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;


import { createContext, useState } from "react";
import BoardContainer from "./Components/BoardContainer";
import Header from "./Components/Header";
import { v4 as uuidv4 } from "uuid";

export const myContext = createContext();
function App() {
  const [boards, setBoard] = useState([
    {
      id: uuidv4(),
      title: "To Do",
      cards: [
        { id: uuidv4(), title: "Task 1", description: "I am task 1" },
        { id: uuidv4(), title: "Task 2", description: "I am task 2" },
      ],
    },
    {
      id: uuidv4(),
      title: "In Progress",
      cards: [{ id: uuidv4(), title: "Task 3", description: "I am task 3" }],
    },
    {
      id: uuidv4(),
      title: "Completed",
      cards: [{ id: uuidv4(), title: "Task 4", description: "I am task 4" }],
    },
  ]);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <myContext.Provider value={{ boards, setBoard }}>
        <BoardContainer />
      </myContext.Provider>
    </div>
  );
}

export default App;



import { createContext, useState, useEffect } from "react";
import BoardContainer from "./Components/BoardContainer";
import Header from "./Components/Header";
import { v4 as uuidv4 } from "uuid";

export const myContext = createContext();

function App() {
  // Default boards data
  const defaultBoards = [
    {
      id: uuidv4(),
      title: "To Do",
      cards: [], 
    },
    {
      id: uuidv4(),
      title: "In Progress",
      cards: [], 
    },
    {
      id: uuidv4(),
      title: "Completed",
      cards: [], 
    },
  ];

  const BoardsFromLocalStorage = () => {
    const savedBoards = localStorage.getItem("boards");
    return savedBoards ? JSON.parse(savedBoards) : defaultBoards;
  };

  const [boards, setBoard] = useState(() => {
    const savedBoards = localStorage.getItem("boards");

    if (!savedBoards) {
      localStorage.setItem("boards", JSON.stringify(defaultBoards)); // Set default data to localStorage
    }

    return BoardsFromLocalStorage();
  });

  // Update localStorage whenever the boards state changes
  useEffect(() => {
    localStorage.setItem("boards", JSON.stringify(boards));
  }, [boards]);

  const addTask = (boardId, taskTitle, taskDescription) => {
    const updatedBoards = [...boards];
    const targetBoard = updatedBoards.find((board) => board.id === boardId);

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      description: taskDescription,
    };

    targetBoard.cards.push(newTask);
    setBoard(updatedBoards); 
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <myContext.Provider value={{ boards, setBoard, addTask }}>
        <BoardContainer />
      </myContext.Provider>
    </div>
  );
}

export default App;

import { createContext, useState } from "react";
import BoardContainer from "./Components/BoardContainer";
import Header from "./Components/Header";
import { v4 as uuidv4 } from 'uuid';

export const myContext = createContext();
function App() {

  const [boards, setBoard] = useState([
    {
      id: uuidv4(),
      title: "To Do",
      cards: [
        {
          id: uuidv4(),
          title: "title of task",
          description: "I am task 1"
        },
        {
          id: uuidv4(),
          title: "title of task",
          description: "I am task 2"
        }
      ]
    },
    {
      id: uuidv4(),
      title: "On progress",
      cards: [
        {
          id: uuidv4(),
          title: "title of task",
          description: "Description of task"
        }
      ]
    },
    {
      id: uuidv4(),
      title: "Completed",
      cards: [
        {
          id: uuidv4(),
          title: "title of task",
          description: "Description of task"
        }
      ]
    }]);
    console.log("type of board is ", typeof(boards));
    console.log(boards[0]);


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
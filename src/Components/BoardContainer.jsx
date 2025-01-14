import AddBoard from "../AddBoard";
import Board from "./Board";
import { myContext } from "../App";
import { useContext } from "react";

function BoardContainer() {
  const { boards } = useContext(myContext);
  console.log(boards);

  return (
    <div className="flex flex-row gap-1 overflow-x-scroll no-scrollbar h-full border-red-400 border-4 mt-10 md:gap-2">
      {
        boards.map((item, index) => {
          return <Board key={item.id} item={item} />;  {/* Add return here */}
        })
      }
      <AddBoard />
    </div>
  );
}

export default BoardContainer;

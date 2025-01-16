import { myContext } from "../App";
import { useContext } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Board from "./Board";
import AddBoard from "./AddBoard";

function BoardContainer() {
  const { boards, setBoard } = useContext(myContext);

  // Handle drag and drop
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    const updatedBoards = [...boards];
    const sourceBoard = updatedBoards.find(
      (board) => board.id === source.droppableId
    );
    const destinationBoard = updatedBoards.find(
      (board) => board.id === destination.droppableId
    );

    const [movedTask] = sourceBoard.cards.splice(source.index, 1);
    destinationBoard.cards.splice(destination.index, 0, movedTask);

    setBoard(updatedBoards);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>

     <div className="flex flex-row gap-1 overflow-x-scroll no-scrollbar h-full md:gap-2 p-2">
        {boards.map((item) => (
          <Board key={item.id} item={item} />
        ))}
              <AddBoard/>

      </div>
    </DragDropContext>
  );
}

export default BoardContainer;

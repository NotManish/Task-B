import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { MoreHorizontal } from "react-feather";
import { myContext } from "../App";
import { useContext, useState } from "react";

function Board({ item }) {
  const { boards, setBoard } = useContext(myContext);
  const [isDeletingBoard, setIsDeletingBoard] = useState(false);

  const isDeletable = !["To Do", "In Progress", "Completed"].includes(item.title);

  const deleteBoard = () => {
    const boardAfterDelete = boards.filter((board) => board.title !== item.title);
    setBoard(boardAfterDelete);
    setIsDeletingBoard(false);
  };

  return (
    <Droppable droppableId={item.id}>
      {(provided) => (
        <div
          className="min-w-[210px] flex flex-col h-fit bg-slate-300 sm:min-w-[230px] p-3 gap-3 md:min-w-[240px] lg:min-w-[260px]"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {/* Board Header */}
          <div className="flex justify-between pl-2">
            <span className="flex gap-2 text-gray-500 text-lg font-medium">
              <p>{item.title}</p>
              <p>{item.cards?.length || 0}</p>
            </span>

            {isDeletable && (
              <span>
                {!isDeletingBoard ? (
                  <MoreHorizontal
                    className="cursor-pointer"
                    onClick={() => setIsDeletingBoard(true)}
                  />
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-red-500 px-2 py-1 rounded-md text-white text-sm"
                      onClick={deleteBoard}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-gray-500 px-2 py-1 rounded-md text-white text-sm"
                      onClick={() => setIsDeletingBoard(false)}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </span>
            )}
          </div>

          {/* Task Cards Container */}
          <div className="bg-slate-200 flex flex-col items-center gap-3 p-3 overflow-y-scroll no-scrollbar h-[200px] md:h-[250px] lg:h-[280px]">
            {item.cards?.length > 0 ? (
              item.cards.map((card, index) => (
                <TaskCard key={card.id} card={card} index={index} />
              ))
            ) : (
              <p className="text-gray-400 text-sm">No tasks available</p>
            )}
            {provided.placeholder}
          </div>

          {/* Add Task Button */}
          <div className="flex justify-center">
            <AddTask boardId={item.id} />
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Board;

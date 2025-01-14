import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";

function Board({ item }) {
  return (
    <Droppable droppableId={item.id}>
      {(provided) => (
        <div
          className="min-w-[49%] flex flex-col h-fit bg-slate-300 sm:min-w-[200px] sm:max-w-[300px] sm:flex-1 p-3 gap-3"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="flex justify-between pl-2">
            <span className="flex gap-2 text-gray-500 text-lg font-medium">
              <p>{item.title}</p>
              <p>{item.cards.length}</p>
            </span>
          </div>
          <div className="bg-slate-200 flex flex-col items-center gap-3 p-3 overflow-y-scroll no-scrollbar h-[200px] md:h-[250px] lg:h-[300px]">
            {item.cards.length > 0 && (
              item.cards.map((card, index) => (
                <TaskCard key={card.id} card={card} index={index} />
              ))
            ) 
            }
            {provided.placeholder}
          </div>
          <div className="flex justify-center">
            <AddTask boardId={item.id} />
          </div>
        </div>
      )}
    </Droppable>
  );
}

export default Board;

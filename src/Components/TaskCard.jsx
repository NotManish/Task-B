import { Draggable } from "react-beautiful-dnd";

function TaskCard({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          className="w-full text-left bg-blue-400 rounded-md p-2 "
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="font-bold">{card.title}</p>
          <p>{card.description}</p>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;

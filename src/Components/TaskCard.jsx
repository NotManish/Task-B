function TaskCard({ card }) {
    console.log("card is", card);
    return (
        <div className="w-full text-left bg-blue-400 rounded-md p-2">
            {card.description}
        </div>
    );
}

export default TaskCard;

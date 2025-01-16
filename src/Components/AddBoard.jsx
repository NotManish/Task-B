import { useState } from "react";
import { useContext } from "react";
import { myContext } from "../App";
import { v4 as uuidv4 } from "uuid";

function AddBoard() {
    const { boards, setBoard } = useContext(myContext);
    const [isAddingBoard, setIsAddingBoard] = useState(false);
    const [boardTitle, setBoardTitle] = useState(""); // State for the input value

    const handleAdd = () => {
        if (boardTitle.trim() === "") {
            alert("Board title cannot be empty.");
            return;
        }

        setBoard([
            ...boards,
            {
                id: uuidv4(),
                title: boardTitle,
                cards: [],
            },
        ]);
        setIsAddingBoard(false);
        setBoardTitle(""); // Reset the input field after adding
    };

    return (
        <div>
            {!isAddingBoard ? (
                <button
                    className="bg-blue-100 p-3 hover:opacity-60 text-gray-500 font-semibold rounded-lg"
                    onClick={() => setIsAddingBoard(true)}
                >
                    +Board
                </button>
            ) : (
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Board title"
                        value={boardTitle} 
                        onChange={(e) => setBoardTitle(e.target.value)} // Update state on change
                        className="p-2 rounded-md border border-gray-300"
                    />
                    <button className="bg-slate-400 p-2 rounded-md" onClick={handleAdd}>
                        Add
                    </button>
                    <button
                        className="bg-red-500 p-2 rounded-md"
                        onClick={() => setIsAddingBoard(false)}
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}

export default AddBoard;

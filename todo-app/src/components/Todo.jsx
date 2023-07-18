import React from 'react'
import { useDispatch } from "react-redux";
import cancelImage from '../assets/images/cancel.png';
import { toggled, colorSelected, deleted } from '../redux/todos/actions';

function Todo({ todo }) {
    const dispatch = useDispatch()
    const { text, id, completed, color } = todo;
    console.log(todo);
    
    const handleStatusChange = (todoId) => {
        dispatch(toggled(todoId))
    }

    const handleColorChange = (todoId, color) => {
        dispatch(colorSelected(todoId, color))
    }

    const handleDeleteTodo = (todoId) => {
        dispatch(deleted(todoId))
    }

    return (
        <div
                className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0"
            >
                <div
                    className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${completed && "border-green-500 focus-within:border-green-500"}`}
                >
                    <input
                        type="checkbox"
                        className="opacity-0 absolute rounded-full"
                        checked={completed}
                        onChange={() => handleStatusChange(id)}
                    />
                    {completed && (
                        <i class="fa-solid fa-check"></i>
                    )}
                </div>

                <div className={`select-none flex-1 ${completed && "line-through"}`}>
                    {text}
                </div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${color === 'green' && "bg-green-500"}`}
                    onClick={() => handleColorChange(id, 'green')}
                ></div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500 ${color === 'yellow' && "bg-yellow-500"}`}
                    onClick={() => handleColorChange(id, 'yellow')}
                ></div>

                <div
                    className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-red-500 border-red-500 ${color === 'red' && "bg-red-500"}`}
                    onClick={() => handleColorChange(id, 'red')}
                ></div>

                <img
                    src={cancelImage}
                    className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                    alt="Cancel"
                    onClick={() => handleDeleteTodo(id)}
                />
            </div>
    )
}

export default Todo
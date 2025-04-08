import { Component } from "react";
import TasksList from "./TasksList";

export default class TodoList extends Component{

    render() {
        return (
        <>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6">
                <h1 className="text-2xl font-bold text-center text-white">My To-Do List</h1>
                <form className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                        Add
                    </button>
                </form>
               <TasksList />
            </div>
        </div>
        </>)
    }
}
import { Component } from "react";
import { v4 as uuid } from "uuid";

interface Tasks{
    id: string,
    text: string,
}
interface PropsI {
    tasks: Tasks[];
    deleteTask: (id: string) => void;
}

export default class TasksList extends Component<PropsI> {
    constructor(props: PropsI){
        super(props);
    }

    render() {
        return (
            <ul className="space-y-3">
                {this.props.tasks.map((task) => { 
                    const id = uuid();
                    return(
                        <li key={id} className="flex items-center justify-between bg-gray-700 p-3 rounded-xl shadow-sm">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="w-4 h-4 text-blue-500 bg-gray-800 border-gray-600 cursor-pointer" />
                                <span className="text-gray-100">{task.text}</span>
                            </div>
                            <button
                                onClick={() => this.props.deleteTask(id)}
                                className="text-red-400 hover:text-red-600 cursor-pointer">Delete
                            </button>
                        </li>)
                })}
            </ul>
        );
    } 
}
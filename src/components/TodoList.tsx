import { ChangeEvent, Component, FormEvent } from "react";
import TasksList from "./TasksList";
import { th } from "framer-motion/client";

interface StatesI {
    task: string,
    tasks: string[],
}
export default class TodoList extends Component<unknown, StatesI>{
    constructor(props: unknown){
        super(props);
        this.state = {
            'task': '',
            'tasks': ["Clean the house", "Feed the dog", "Feed the cat", "Go to the store"]
        }
        this.formChange = this.formChange.bind(this);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
        this.addTask = this.addTask.bind(this);
    }
    formChange(e: ChangeEvent<HTMLInputElement>){
        const { value } = e.target;
        this.setState({ 'task': value });
    }

    formSubmitHandler(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const task: string = this.state.task;
        if(task.trim() === '') return;

        this.addTask(this.state.task);
        this.setState({task: ''});
    }

    addTask = (task: string) => {
        this.setState({tasks: [task, ...this.state.tasks]});
    }

    

    render() {
        return (
            <>
            <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-6 space-y-6">
                    <h1 className="text-2xl font-bold text-center text-white">My To-Do List</h1>
                    <form onSubmit={this.formSubmitHandler} className="flex gap-2">
                        <input
                            onChange={this.formChange}  
                            type="text"
                            value={this.state.task}
                            placeholder="Add a new task..."
                            name="task"
                            className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                            Add
                        </button>
                    </form>
                <TasksList tasks={this.state.tasks} />
                </div>
            </div>
        </>)
    }
}
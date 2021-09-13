import React from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.sate = {
            tasks: [],
        };
    }
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div>
                    <CreateTask />
                    <br/>
                    <TaskList />
                </div>
            </div>
        )
    }
}
import { Component } from "react";

interface TestStates{
    word: string,
}

interface TestProps{
    message: string,
}

export default class Test extends Component<TestProps, TestStates> {
    constructor(props: TestProps) {
        super(props);

        this.state = {
            word: "Hello"
        }
    }
    render() {
        return (
        <>
            <div>{this.state.word} World!</div>
            <div>{this.props.message}</div>
        </>)
    }
}
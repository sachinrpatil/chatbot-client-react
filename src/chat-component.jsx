import axios from "axios";
import React from "react";

import './chatcomponent.css'

export default class ChatComponent extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        currentQuestion: '',
        history: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    console.log("ChatComponent constructor")
}

componentDidMount() {
    console.log("ChatComponent componentDidMount")
}

    render() {
        console.log("ChatComponent render")
        return (
            <form onSubmit={this.handleSubmit} className="chatForm">
                <div className="historySection">
                    {
                        this.state.history.reverse().map(historyItem =>{
                            return this.getHistoryItemElement(historyItem)
                        })
                    } 
                </div>
                <div className="questionInputSection">
                    <input className="questionInput" type="text" placeholder="Ask a question" value={this.state.currentQuestion} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </div>
            </form>
        );
    }

    getHistoryItemElement(historyItem) {
        return (
            <div className="divhistoryItem">
                <div className="divQuestion" >{historyItem.question}</div>
                <div className="divAnswer">{historyItem.answer}</div>
            </div>
        )
    }

    handleChange(event) {
        this.setState({ 
            currentQuestion: event.target.value
        })
    }

    handleSubmit(event) {
        
        axios.get("http://localhost:4000/askq/" + this.state.currentQuestion
            )
        .then((response) => {
            console.log(response.data)
            this.setState({
                currentQuestion: '',
                history: [...this.state.history, { question: this.state.currentQuestion, answer: response.data }]
            })
        })
        
        event.preventDefault();
    }
    
}

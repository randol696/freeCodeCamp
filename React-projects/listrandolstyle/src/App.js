import "./styles.css";
import React from "react";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.listOfMessages = this.listOfMessages.bind(this)
    //this.submitMessage = this.submitMessage.bind(this)
 
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    this.setState({
      input: event.target.value
    });
  }

  addMessage(){
    const newMessages = [...this.state.messages, this.state.input]
    this.setState({
      input: '',
      messages: newMessages
    })
    
  }
    listOfMessages(){
      return this.state.messages.map((messages, index) =>  <li key={index}> {messages}</li>);
    } 

//submitMessage(){
// this.setState({ messages: [this.state.input], input: ''})
//}
  
  render() {

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input value={this.state.input} onChange={this.handleChange} />
         <ul>List:{this.listOfMessages()}</ul>
        <button onClick={this.addMessage}>Add Message</button>
        { /* Change code above this line */ }
      </div>
    );
  }
};

export default DisplayMessages ;

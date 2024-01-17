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
    this.submitMessage = this.submitMessage.bind(this)
 
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event){
    console.log(this.state.messages)
    this.setState({
      input: event.target.value,
      messages: this.state.messages
    });
  }


submitMessage(){
 this.setState({ 
   input: '',
   messages: [...this.state.messages, this.state.input]
   })
}
  
  render() {

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.submitMessage}>Add Message</button>
        <ul>{
          this.state.messages.map((mess, index)=>{
            return <li key={index}>{mess}</li>
          })}
        </ul>
      </div>
    );
  }
};
export default DisplayMessages;


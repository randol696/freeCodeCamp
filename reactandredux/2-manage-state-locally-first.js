/* This Code has been create by: Randol */
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
          { /* Render an input, button, and ul below this line */ }
          <input value={this.state.input} onChange={this.handleChange} />
          <ul>{
            this.state.messages.map((mess, index)=>{
              return <li key={index}>{mess}</li>
            })}
          </ul>
          <button onClick={this.submitMessage}>Add Message</button>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
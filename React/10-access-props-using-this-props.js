/* This Code has been create by: Randol */
class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Jessica"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };
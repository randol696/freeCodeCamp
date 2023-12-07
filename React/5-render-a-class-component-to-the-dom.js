/* This Code has been create by: Randol */
class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        {/* Change code above this line */}
      </div>
    );
  }
}

// Change code below this line
<div id="challenge-node" />;
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

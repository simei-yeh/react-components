var Cucumbers = () => {
  return (
    <li>Cucumbers</li>
  )
}

var Kale = () => {
  return (
    <li>Kale</li>
  )
}

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      done: false
    };
  }

  toggleHover() {
    this.setState({
      done: !this.state.done
    });
  }

   render() {

    var hoverStyle = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
      <li style={hoverStyle} onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}>{this.props.snack}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.snacks.map(snack =>
      <GroceryListItem snack={snack} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h1>Grocery List</h1>
      <GroceryList snacks={['Ice Cream', 'Popsicles', 'Kettle Corn']} />
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
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
  }



  render() {
    return (
      <li>{this.props.snacks}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.snacks.map(snacks =>
      <GroceryListItem snacks={snacks} />
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
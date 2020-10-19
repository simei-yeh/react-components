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

var GroceryListItem = (props) => {
  return (
    <span>
      <li>{props.snacks[0]}</li>
      <li>{props.snacks[1]}</li>
      <li>{props.snacks[2]}</li>
    </span>
  )
}

var GroceryList = () => {
  return (
  <div>
    <ul>
      <Cucumbers />
      <Kale />
      <GroceryListItem snacks={['Ice Cream', 'Popsicles', 'Kettle Corn']}/>
    </ul>
  </div>
  )
}

var App = () => (
  <div>
    <h1>Grocery List</h1>
    <ul>
      <GroceryList />
    </ul>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
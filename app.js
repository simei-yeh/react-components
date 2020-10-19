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


var GroceryList = () => {
  return (
  <div>
    <Cucumbers />
    <Kale />
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
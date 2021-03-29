import './App.css';

function App() {

  function handleClick() {
    console.log('You clicked ME');
    fetch("http://localhost:8080/json-data", {
      method: "GET",
      mode: "cors",
  })
  .then(resp => resp.json())
  .then(data => {
    console.log("json data");
    console.log(data); 
  })
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button> 
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { useState, useEffect} from 'react';
import DataRow from './components/data_row';

function App() {

  const [ serverData, setServerData ] = useState([]);

  useEffect(() => {
    Fetching();
  }, []);

  async function Fetching() {
    console.log('You clicked ME');
    await fetch("http://localhost:8080/json-data", {
      method: "GET",
      mode: "cors",
    })
    .then(resp => resp.json())
    .then(data => {
      setServerData(data);
      console.log("server-data");
      console.log(data); 
    })
  }
  
  // <button onClick={handleClick}>Click Me</button> 
  return (
    <div className="App">
      <header className="App-header">
        {serverData 
          ? serverData.map((item, index) => < DataRow row={item} key={index}/>)
          : <></>
        }
      </header>
    </div>
  );
}

export default App;

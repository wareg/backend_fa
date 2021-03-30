import './App.css';
import { useState, useEffect} from 'react';
import DataRow from './components/data_row';

function App() {

  const [ serverData, setServerData ] = useState([]);
  const [ showFilters, setShowFilters ] = useState(false);
  const [ cityFilter, setCityFilter ] = useState("");
  const [ countryFilter, setCountryFilter ] = useState("");

  useEffect(() => {
    Fetching();
  }, []);

  async function Fetching() {
    console.log('Starting fetch');
    await fetch("http://localhost:8080/json-data", {
      method: "GET",
      mode: "cors",
    })
    .then(resp => resp.json())
    .then(data => {
      setServerData(data);
      console.log("server-data:");
      console.log(data); 
    })
  }
  
  function handleFilterClick(){
    setShowFilters(!showFilters);
    // console.log("showFilters"); 
    // console.log(showFilters); 
    if (showFilters) {
      setCityFilter("");  
      setCountryFilter("");
      // console.log("countryFilter"); 
      // console.logls(countryFilter); 
    }
  }

  function handleCityChange(e){
    setCityFilter(e.target.value);
  }

  function handleCountryChange(e){
    setCountryFilter(e.target.value);
  }

  // <button onClick={handleClick}>Click Me</button> 
  return (
    <div className="App">
      <header className="App-header">
        <h2>CITY LIST</h2>
        <button className="filtering" onClick={handleFilterClick}>
        {showFilters ? "Remove Filters" : "Add Filter"}
        </button>
        {showFilters
          ?
            <div className="filter-inputs">
              <input onChange={handleCityChange} type="text" placeholder="filter city"></input>
              <br></br>
              <input onChange={handleCountryChange} type="text" placeholder="filter country"></input>
            </div>
          : <></>
        }
        
        {serverData 
          ? serverData.map((item, index) => 
            < DataRow 
              row={item} 
              filter1={cityFilter} 
              filter2={countryFilter} 
              key={index}
            />)
          : <></>
        }
      </header>
    </div>
  );
}

export default App;

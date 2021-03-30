import { useState } from 'react';
function DataRow(props) {
  
  const [ showDetails, setShowDetails ] = useState(false);

  function handleClick() {
    setShowDetails (!showDetails);
  }

  // console.log("dbrow");
  // console.log(props);
  // console.log("filter2");
  // console.log(props.filter2);
  return(
    <>
    {(props.filter1 === "" && props.filter2 === "")
      || (props.filter1 !== "" && props.filter2 === "" && props.row.city.includes(props.filter1))
      || (props.filter2 !== "" && props.filter1 === "" && props.row.country.includes(props.filter2))
      || (props.filter1 !== "" && props.filter2 !== "" 
          && props.row.city.includes(props.filter1)
          && props.row.country.includes(props.filter2))
      ? <div className="row">
          <h4>
            {props.row.city} 
            <img src={props.row.country_icon} alt="country flag"/>   
          </h4>
          {showDetails
            ? <>
                <p>{`country: ${props.row.country}`}</p>
                <p>{`province: ${props.row.province}`}</p>
                <p>{`latitude: ${props.row.latitude}`}</p>
                <p>{`longitude: ${props.row.longitude}`}</p>
              </>
            : <></>   }
          <button onClick={handleClick}>Details</button>
        </div>
      : <></>
    }
    </>
  )
}

export default DataRow;
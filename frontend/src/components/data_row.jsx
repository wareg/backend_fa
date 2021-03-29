import { useState } from 'react';
function DataRow(props) {
  
  const [ showDetails, setShowDetails ] = useState(false);

  function handleClick() {
    setShowDetails (!showDetails);
  }

  // console.log("dbrow");
  // console.log(props);
  return(
    <>
    <p>{props.row.city} ({props.row.country})</p>
    {showDetails
      ? <>
          <p>{`province: ${props.row.province}`}</p>
        </>
      : <></>
    }
    <button onClick={handleClick}>Details</button>
    </>
  )
}

export default DataRow;
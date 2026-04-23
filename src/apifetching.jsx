import { useState, useEffect } from "react";

function ApiFetching() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Use Effect Called");
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => setData(user));
  }, []);

  return (
    <>
      <h4>Name : </h4> 
      
      {data.map((value,key) => (
        <h4 key={key}>{value.name}</h4>
      ))}

      <h4>Email: </h4>
{data.map((value,key) => (
        <h4 key={key}>{value.email}</h4>
      ))}

    </>
  );
}
export default ApiFetching;

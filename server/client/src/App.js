import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/json")
      .then(
        res => res.json())
      .then(
        data => {
          setBackendData(data)
        });
    console.log("fetch successful");
  }, []);

  console.log(backendData);

  return (
    <div>
      {
        backendData.map(password => {
          return(
            <p>{password.Titel}</p>
          )
        })
      }
    </div>
  )
}

export default App
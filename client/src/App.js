import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/json")
      .then(
        res => res.json())
      .then(
        data => {
          setBackendData(data)
        });
    console.log("fetch successful");
  }, []);

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
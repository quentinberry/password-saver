import React, { useEffect, useState } from 'react'
import '../App.css';

function PasswordList() {

    const [backendData, setBackendData] = useState([{}]);
    const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/json")
      .then(
        res => res.json())
      .then(
        data => {
          setBackendData(data)
        });
  }, []);

    return (
        <div>
          {
            backendData.map(password => {
              return(
                <div className='entryShower'>
                  <p>Titel: {password.Titel}</p>
                  <p>Username/Email: {password.Username}</p>
                    <div className='passwordField'>
                      <button 
                      onClick={() => setVisible(!visible)}
                      > {visible ? '**********' : <p>{password.Password}</p>} </button>
                    </div>
                </div>
              )
            })
          }
        </div>
      )
}

export default PasswordList
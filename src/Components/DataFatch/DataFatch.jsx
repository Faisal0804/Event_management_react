import React, { Fragment,useState } from 'react'
import Loading from '../Loader/Loader';

const DataFatch = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleFetch = () => {
      setIsLoading(true);
      fetch("https://reqres.in/api/use")
        .then((respose) => respose.json())
        .then((respose) => {
           setUsers(respose.data)
           setIsLoading(false)
           // Optional code to simulate delay
           setTimeout(() => {
          setUsers(respose.data);
            setIsLoading(false);
          }, 3000);
        })
        .catch(() => {
           setErrorMessage("Unable to fetch user list");
           setIsLoading(false);
        });
    };

    const renderUser = (
        <div className="userlist-container">
          {users.map((item, index) => (
            <div className="user-container" key={index}>
              <img src={item.avatar} alt="" />
              <div className="userDetail">
                <div className="first-name">{`${item.first_name}                
                                       ${item.last_name}`}</div>
                <div className="last-name">{item.email}</div>
              </div>
            </div>
          ))}
        </div>
      );


  return (
    <Fragment>
         <div className="App">
      {isLoading ? <Loading /> : renderUser}
      {errorMessage && <div className="error">{errorMessage}</div>}
      <button onClick={handleFetch} disabled={isLoading}>
        Fetch Users
      </button>
    </div>
    </Fragment>
  )
}

export default DataFatch
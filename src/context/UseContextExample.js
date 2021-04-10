import { Input } from "antd";
import React, { useContext, useState } from "react";

const user = {
  id: "1234",
  name: "Ethan Olson",
};

// Create context to provide and consume
const UserContext = React.createContext();


// Consume context via useContext
function Consumer() {
  const consumedUser = useContext(UserContext);
  return (
    <div>
      <h1>User is:</h1>
      <h2>Name: {consumedUser.name}</h2>
      <h2>Id: {consumedUser.id}</h2>
    </div>
  );
}

function UseContextExample() {
  const [providedUser, setProvidedUser] = useState(user);

  const handleNameChange = (e) => {
    setProvidedUser({
      ...providedUser,
      name: e.target.value,
    });
  };

  const handleIdChange = (e) => {
    setProvidedUser({
      ...providedUser,
      id: e.target.value,
    });
  };

  return (
    <UserContext.Provider value={providedUser}>
      <Consumer />
      <Input placeholder="Name" onChange={handleNameChange} />
      <Input placeholder="Id" onChange={handleIdChange} />
    </UserContext.Provider>
  );
}

export default UseContextExample;

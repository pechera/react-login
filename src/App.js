import "./App.css";

import FormInput from "./components/FormInput";
import FormList from "./components/FormList";

import React, { useState } from "react";

function App() {
  let [usersArr, setNewUser] = useState([
    {
      key: "c1",
      name: "Roman",
      age: 28,
    },
    {
      key: "c2",
      name: "Alex",
      age: 23,
    },
  ]);

  const setNewUserHandler = (user) => {
    usersArr = [...usersArr, user];
    setNewUser(usersArr);
  };

  return (
    <div className="App">
      <FormInput addUser={setNewUserHandler} />
      <FormList users={usersArr} />
    </div>
  );
}

export default App;

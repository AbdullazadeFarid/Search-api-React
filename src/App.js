

import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Display from "./components/display/display";
import Input from "./components/input/input";

function App() {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  const [info, setInfo] = useState([]);
  const [filteredInfo, setFilteredInfo] = useState([]);


  const getData = async () => {
    try {
      const response = await axios.get(baseUrl);
      setInfo(response.data);
      setFilteredInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);



  const handleInputChange = (inputValue) => {
    const filteredData = info.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredInfo(filteredData);
  };




  return (
    <div>
      <Input onInputChange={handleInputChange} />
      
      {
      filteredInfo.map((item) => (
        <Display key={item.id} ad={item.name} />

      ))}
    </div>
  );
}

export default App;

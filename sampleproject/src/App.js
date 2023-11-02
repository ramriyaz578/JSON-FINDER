import { useState, useEffect } from "react";
import Form from "./Form";
// import List from "./List";
import Tables from "./Tables";

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  console.log(API_URL);

  const [reqType, setreqType] = useState("users");
  const [items, setitems] = useState([]);

  useEffect(() => {
    const fecthitems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setitems(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fecthitems()


  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setreqType={setreqType} />
      {/* <List items={items} /> */}

      <Tables items={items} />
    </div>
  );
}

export default App;

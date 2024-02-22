import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Norma Gunderson",
         url: "https://a.1stdibscdn.com/archivesE/art/upload/11/913/paget011990.jpg?disable=upscale&auto=webp&quality=60&width=120",
      age: 70,
      note: "Business woman, grand-ma, mother, hard worker",
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

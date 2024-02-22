import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
    people: Props["people"];
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    notes: "",
    img: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void  => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img) return ;
    
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.notes,
      },
    ]);
  
  setInput({
    name: "",
    age: "",
    notes: "",
    img: ""
  });
};

  return (
    <div className="AddToList">
      <input
        className="AddToList-input"
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        className="AddToList-input"
        type="number"
        placeholder="Age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        className="AddToList-input"
        type="text"
        placeholder="Image URL"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="Notes         Do Ctrl+R to clear the form"        
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
        name="notes"
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to list
      </button>
    </div>
  );
};

export default AddToList;

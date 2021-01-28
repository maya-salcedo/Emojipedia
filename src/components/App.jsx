import React from "react";
import Emojipedia from "../emojipedia.js";
import Entry from "./Entry";


function createEntry(entry){
  return(
    <Entry 
      key = {entry.id} //special key
      emoji = {entry.emoji}
      name = {entry.name}
      meaning = {entry.meaning}
    />);
}

function App() {
  return (<div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {Emojipedia.map(createEntry)}
      </dl>
    </div>);
}

export default App;

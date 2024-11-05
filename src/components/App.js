import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


function App() {

  const [isDarkMode, setDarkMode] = useState(false);
 
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  }

  const appClass = isDarkMode ? 'App dark' : 'App.light'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          Toggle {isDarkMode ? 'Dark' : 'Light'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

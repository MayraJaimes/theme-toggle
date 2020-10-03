import React, { useState } from "react";

import ThemeContext from "./Context/ThemeContext";

import Header from "./Header";

import Main from "./MainWithFunction";

function App() {
  const themeHook = useState("light");

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />

        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

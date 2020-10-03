import React from "react";

const ThemeContext = React.createContext(["light", () => {}]);

// The first element in the array is the current theme mode
// and the second element is the function that would be passed
// to update the theme.

export default ThemeContext;

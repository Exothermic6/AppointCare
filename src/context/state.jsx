import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  return (
    <StateContext.Provider value={{ book, setBook }}>
      {children}
    </StateContext.Provider>
  );
}
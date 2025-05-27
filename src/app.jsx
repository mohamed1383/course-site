import { useRoutes, BrowserRouter } from "react-router-dom"
import pageRoutes from "./routes/route"
import { createContext, useState, useEffect, useMemo } from 'react';

export let myContex = createContext()

export default function App() {
  let [pageTheme, setPageTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "dark")

  const Routes = useRoutes(pageRoutes)
  
  useEffect(() => {
    if (pageTheme === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", JSON.stringify(pageTheme));
  }, [pageTheme]);

  const changeTheme = () => {
    const newTheme = pageTheme === "dark" ? "light" : "dark";
    setPageTheme(newTheme);
  }

  const contextValue = useMemo(() => [pageTheme, changeTheme], [pageTheme]);

  return (
    <>
        <myContex.Provider value={contextValue}>
          {Routes}
        </myContex.Provider>
    </>
  )
}

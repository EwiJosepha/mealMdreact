import "./App.css";
import Meals from "./Components/Meals/Meals";
import Detailspage from "./Components/Detailspage/details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const Appcontextt = createContext();

function App() {
  const [mealid, setMealid] = useState("")
  const client = new QueryClient();
  return (
    <>
      <div id="app">
        <Appcontextt.Provider value={{mealid ,setMealid}}>
          <QueryClientProvider client={client}>
            <Router>
              <Routes>
                <Route path="/" element={<Meals />} />
                <Route path="/details" element={<Detailspage />} />
              </Routes>
            </Router>
          </QueryClientProvider>
        </Appcontextt.Provider>
      </div>
    </>
  );
}

export default App;

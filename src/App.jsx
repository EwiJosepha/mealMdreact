import "./App.css";
import Meals from "./Components/Meals/Meals";
import Detailspage from "./Components/Detailspage/details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const client = new QueryClient();
  return (
    <>
      <div id="app">
        <QueryClientProvider client={client}>
         
          <Router>

            <Routes>
              <Route path="/" element={<Meals/>} />
              <Route path="/details" element={<Detailspage />} />
            </Routes>
          </Router>
         
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;

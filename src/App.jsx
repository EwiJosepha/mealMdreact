import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Landingimage from "./Components/Landingpage/Landingimage";
import Popularcat from "./Components/PopularCategory/Popularcategory";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import Meals from "./Components/Meals/Meals";
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
              <Route path="./Components/Meals/Meals" element={Meals} />
            </Routes>
          </Router>
          <Navbar />
          <Landingimage />
          <Popularcat />
          <Meals /> 
          <Form />
          <Footer />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;

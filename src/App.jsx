import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landingimage from './Components/Landingpage/Landingimage'
import Popularcat from './Components/PopularCategory/Popularcategory'
import Meals from './Components/Meals/Meals'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  const client = new QueryClient({})
  return (
    <>
    <div id="app">
   <QueryClientProvider client={client}>
    <Router>
      <Routes>
        <Route path="./Components/Meals/Meals" element={Meals}/>
    <Navbar />
    <Landingimage />
    {/* <Popularcat /> */}
    {/* <Meals /> */}
    </Routes>
    </Router>
    </QueryClientProvider>
    
    </div>
  
    </>
  )
}

export default App

// Import React RouterDOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & Components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
         <div className="pages">
           <Routes>
             <Route
            // Home is being rendered to the root path
               path="/"
               element={<Home />}
            />
          </Routes>
         </div>
      </BrowserRouter>
    </div>
    
    
  );
}

export default App;

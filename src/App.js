
import Homepage from './pages/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
      <Homepage/>
    </div>
  );
}

export default App;

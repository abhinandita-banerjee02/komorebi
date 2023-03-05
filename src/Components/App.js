import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'
import Lander from './Lander'
import Odetect from './Odetect'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander />}/>
          <Route path="/obj_detect" element={<Odetect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

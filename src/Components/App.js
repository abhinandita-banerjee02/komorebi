import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css'
import Lander from './Lander'
import Odetect from './Odetect'
// import TextRead from './TextRead';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Lander />}/>
          <Route path="/obj_detect" exact element={<Odetect />} />
          {/* <Route path="/file_reading" exact element={<TextRead/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

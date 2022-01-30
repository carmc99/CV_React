import 'styles/globals.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'layouts/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import './App.css';
import Sentence from './Components/Sentence';
import Eliza from './Components/Eliza';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Sentence />} />
        <Route path="Eliza" element={<Eliza />} />
        <Route path="Poem" element={<Sentence />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

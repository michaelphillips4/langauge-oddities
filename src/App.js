import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import './App.css';
import Jokes from './Components/Jokes';
import PoemGenerator from './Components/PoemGenerator';    <PoemGenerator />
//import Eliza from './Components/Eliza';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<PoemGenerator/>} />
        <Route path="TimVineJokes" element={<Jokes />} />
        <Route path="PoemGenerator" element={<PoemGenerator />} />
     
      </Route>
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;

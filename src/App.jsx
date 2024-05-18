
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Contacts from './components/Contacts';
import Estimation from './components/Estimation';
import Garant from './components/Garant';
import Ipoteka from './components/Ipoteka';
import Services from './components/Services';
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/estimation" element={<Estimation/>} />
      <Route path="/garant" element={<Garant/>} />
      <Route path="/ipoteka" element={<Ipoteka/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
  );
}

export default App

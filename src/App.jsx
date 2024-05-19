
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Contacts from './components/Contacts';
import Estimation from './components/Estimation';
import Garant from './components/Garant';
import Ipoteka from './components/Ipoteka';
import Services from './components/Services';
import Background from './components/Background';
function App() {
  return (
    <Background>
    <Layout>
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/background" exact element={<Background/>} />
      <Route path="/layout" exact element={<Layout/>} />
      <Route path="/contacts" element={<Contacts/>} />
      <Route path="/estimation" element={<Estimation/>} />
      <Route path="/garant" element={<Garant/>} />
      <Route path="/ipoteka" element={<Ipoteka/>} />
      <Route path="/services" element={<Services/>} />
    </Routes>
    </Layout>
    </Background>
  );
}

export default App

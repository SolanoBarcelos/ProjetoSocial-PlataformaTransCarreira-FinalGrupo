import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index';
import QuemSomos from './Pages/QuemSomos';
import VagasEmprego from './Pages/VagasEmprego';
import Empresas from './Pages/Empresas';
import Cursos from './Pages/Cursos';
import Contato from './Pages/Contato';
import Estaticos from './Componentes/Estaticos'
import './CSS/EstilosTransCarreira.css';


function App() {
  return (

<>
<BrowserRouter>

<Routes>
  <Route element={<Estaticos/>}>

  <Route path="/" element={<Index />} />
  <Route path="/quemSomos" element={<QuemSomos />} />
  <Route path="/vagasEmprego" element={<VagasEmprego />} />  
  <Route path="/empresas" element={<Empresas />} /> 
  <Route path="/cursos" element={<Cursos />} /> 
  <Route path="/contato" element={<Contato />} />

  </Route>
</Routes>

</BrowserRouter>

</>     
      
  );
}

export default App;
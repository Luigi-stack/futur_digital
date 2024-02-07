import './App.css'
import Formulaire_iscription from './Components/Formulaire_iscription'
import NavBar from './Components/NavBar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init();
}, []);

  return (
    <>
      <NavBar />
      <Formulaire_iscription />

    </>
  )
}

export default App

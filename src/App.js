import { useState } from 'react';
import './App.css';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Part5 from './components/Part5';

import Sidebar from './components/Sidebar'
import ButtonNav from './components/ButtonNav';

function App() {

  const [position, setPosition] = useState(1);
  const [DataPerso, setDataPerso] = useState({ name: "", mail: "", phone: "" });
  const [DataTarif, setDataTarif] = useState({ plan: "Arcade", duree: false, Online: false, Storage: false, Custom: false });
  const [Error, setError] = useState({ name: false, mail: false, phone: false });

  function handleVerifForm() {
    let Errors = { name: false, mail: false, phone: false }

    if (DataPerso.name === "") Errors.name = true
    if (DataPerso.mail === "") Errors.mail = true
    if (DataPerso.phone === "") Errors.phone = true

    setError(Errors)

    if (Errors.name === false && Errors.mail === false && Errors.phone === false) setPosition(2)
  }

  function handleChangePersonnal(e) {
    const { name, value } = e.target;
    setDataPerso({ ...DataPerso, [name]: value })
  }
  function handlePlan(p) { setDataTarif({ ...DataTarif, plan: p }) }

  function handleChangeOption(e) {
    const { name, checked } = e.target;
    setDataTarif({ ...DataTarif, [name]: checked })
  }


  function renderSwitch(param) {
    switch (param) {
      case 1: return <Part1 Error={Error} handleVerifForm={handleVerifForm} position={position} Data={DataPerso} setPosition={setPosition} handleChangePersonnal={handleChangePersonnal} />;
      case 2: return <Part2 position={position} Data={DataTarif} setPosition={setPosition} handlePlan={handlePlan} handleChangeOption={handleChangeOption} />
      case 3: return <Part3 position={position} Data={DataTarif} setPosition={setPosition} handleChangeOption={handleChangeOption} />
      case 4: return <Part4 position={position} Data={DataTarif} setPosition={setPosition} />
      case 5: return <Part5 />
      default:
        return null;
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Sidebar position={position} />
        {renderSwitch(position)}
        <ButtonNav phone={true} setPosition={setPosition} position={position} handleVerifForm={handleVerifForm} />
      </div>

    </div>
  );
}

export default App;


import './App.css';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {

  const [modalState, setModalState]  = useState(false);
  function handleClik (e) {
    e.preventDefault()
    setModalState(true)
  }
  return (
    <div className="App">
      <button onClick={(e) => handleClik(e)}>Display modale</button>
      {modalState ? (<Modal setModalState={setModalState} />) : null}
    </div>
  );
}

export default App;

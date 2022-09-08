
import './App.css';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {

  const [modalState, setModalState]  = useState(false);
  function openModal (e) {
    e.preventDefault()
    setModalState(true)
  }
  return (
    <div className="App">
      <button onClick={(e) => openModal(e)}>Display modale</button>
      {modalState ? (<Modal setModalState={setModalState} title={'Je suis un modal'} />) : null}
    </div>
  );
}

export default App;

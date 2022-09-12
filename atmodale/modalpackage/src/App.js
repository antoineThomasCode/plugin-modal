
import './style/App.scss';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {

  const [isDisplayed, setModalDisplay]  = useState(false);
  function openModal (e) {
    e.preventDefault()
    setModalDisplay(true)
  }
  return (
    <div className="App">
      <button onClick={(e) => openModal(e)}>Display modale</button>
      {isDisplayed ? (<Modal setModalState={setModalDisplay} title={'Je suis une modal'} />) : null}
    </div>
  );
}

export default App;

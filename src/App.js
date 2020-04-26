import React from 'react';
import './css/App.css';
import Modal from "./Modal";
import useModal from './hooks/useModal';

const App = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="App">
      <div className="share_page">
        <h2>Share Files</h2>
        <button onClick={toggle}>Share</button>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default App;

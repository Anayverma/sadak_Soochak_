"use client"

import { useState } from 'react';
import "./style.css"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [targetElement, setTargetElement] = useState(null);
  const [color, setColor] = useState('');

  const openModal = (className) => {
    setModalOpen(true);
    setTargetElement(className);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeColor = () => {
    const element = document.querySelector('.' + targetElement);
    if (element) {
      element.style.backgroundColor = color;
    }
    closeModal();
  };

  return (
    <div>
      <style jsx>{`
        /* CSS styles go here */
      `}</style>
      <div className="traffic"></div>
      <div className="circle l1" onClick={() => openModal('l1')}></div>
      <div className="circle l2" onClick={() => openModal('l2')}></div>
      <div className="circle l3" onClick={() => openModal('l3')}></div>
      <div className="circle l4" onClick={() => openModal('l4')}></div>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Enter a color (e.g., red, blue, green):</p>
            <input type="text" id="colorInput" onChange={(e) => setColor(e.target.value)} />
            <button onClick={changeColor}>Change Color</button>
          </div>
        </div>
      )}
    </div>
  );
}

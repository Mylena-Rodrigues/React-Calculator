import React, { useState } from 'react';
import history from '../imgs/history.png';
import close from '../imgs/close.png';

export default function History({ historyList }) {
  const [modal, setModal] = useState(false);
  function closeModal() {
    const historySection = document.getElementsByClassName('history');
    if (historySection) {
      historySection[0].classList.add('slide-down');
      setTimeout(() => setModal(false), 1000);
    }
  }
  return (
    <>
      {modal && (
        <div className="root modal">
          <div className="calc-media history">
            <div className="history-list">
              <button className="btn-history" onClick={() => closeModal()}>
                <img src={close} alt="close" />
              </button>
              {historyList.map((historyItem) => {
                return historyItem.result ? (
                  <div className="history-calc" key={historyItem}>
                    <h2> {historyItem.operation} </h2>
                    <h3> {historyItem.result} </h3>
                  </div>
                ) : (
                  <p> No Items </p>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <button className="btn btn-history" onClick={() => setModal(true)}>
        <img src={history} alt="History" />
      </button>
    </>
  );
}

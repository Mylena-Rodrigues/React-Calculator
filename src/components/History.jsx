import React, { useState } from 'react';
import { useTheme } from '../context/Theme';
import close_icon from '../imgs/close_icon.svg';
import dark_close_icon from '../imgs/dark-mode/dark_close_icon.svg';
import history_icon from '../imgs/history_icon.svg';
import dark_history_icon from '../imgs/dark-mode/dark_history_icon.svg';
import { useCalculus } from '../context/Calculus';

export default function History({ historyList }) {
  const { darkMode } = useTheme();
  const {history} = useCalculus();
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
          <div className="calculator-size history">
            <div className="history-list">
              <button className="btn-history" onClick={() => closeModal()}>
                <img
                  src={darkMode ? dark_close_icon : close_icon}
                  alt="close"
                  color="yellow"
                />
              </button>
              {history[0].result ? (
                history.map((historyItem, index) => {
                  return (
                    <div className="history-calc" key={index}>
                      <h2> {historyItem.operation} </h2>
                      <h3> {historyItem.result} </h3>
                    </div>
                  );
                })
              ) : (
                <p> No Items </p>
              )}
            </div>
          </div>
        </div>
      )}
      <button className="btn" onClick={() => setModal(true)}>
        <img src={darkMode ? dark_history_icon : history_icon} alt="History" />
      </button>
    </>
  );
}

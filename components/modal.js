import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    maxWidth              : '800px'
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: 'rgb(4 4 4 / 75%)'
  }
};

Modal.setAppElement('#root')

function App() {
  const [modalIsOpen, setIsOpen] = useState(true);
 
  function closeModal(){
    setIsOpen(false);
  }
 
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container">
          <h2>Olimpiade.id kini berubah nama menjadi Sibiti Event</h2>
          <p>
            Hai, saat ini Olimpiade.id telah berganti nama menjadi Sibiti Event, platform acara terintegrasi pertama di Indonesia, menawarkan kemudahan bagi siapa saja untuk menyelenggarakan perlombaan atau acara lainnya dalam satu pintu.
          </p> 
          <p>
            Jangan khawatir karena kami tetap merupakan tim dan produk yang sama di bawah naungan PT Surabaya Digital Indie!
          </p>
          <div className="text-right">
            <button onClick={closeModal}>Tutup</button>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        h2 {
          margin-bottom: 20px;
        }
        .text-right {
          margin-top: 25px;
          text-align: right;
        }
        button {
          padding: 10px 25px;
          border-radius: 50px;
          background-color: #6273d9;
          color: white;
          transition: all 0.1s linear;
          border: 0px;
          cursor: pointer;
        }
        button:hover,
        button:focus,
        button:active {
          background-color: #6273d9;
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

export default App;
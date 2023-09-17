import '../flex-img.css';
import Navbar from './Navbar';
import './Header.css';
import Modal from '../components/Modal';

// images
import logo from '../assets/icons/logosite.svg';
import phone from '../assets/icons/Iconly/Light/Call.png';
import Corusel from './corusel';
import { useState } from 'react';
import ModalYuborish from './ModalYuborish';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [anotherModal, setAnotherModal] = useState(false)

  //   const closeModal = () => {
  //   setShowModal(false)
  // }

  const closeAnotherModal = () => {
    setAnotherModal(false)
  }

  const openAnotherModal = () => {
      setAnotherModal(true)
  }

  return (
    <div className='bg-color'>
      <Navbar />
      <div id='header' className='flex-img'>
        <img src={logo} alt='logo' />
        <div className='phone-number'>
          <img className='phone' src={phone} alt='phone' />
          <p className='number'>+998 90 123 45 67</p>
        </div>
        <button className='btn-flex' onClick={()=>setShowModal(true)}>Buyurtma berish</button>
      </div>
      <div className='corusel'>
        <Corusel />
        <>
       {showModal && <Modal  setShowModal = {setShowModal} setAnotherModal={setAnotherModal} set>

         </Modal>}

         {anotherModal && <ModalYuborish closeAnotherModal={closeAnotherModal}>
          
          
          </ModalYuborish>}
        </>
      </div>
    </div>
  );
};

export default Header;

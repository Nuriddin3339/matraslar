import { useState } from 'react';
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';
import ModalYuborish from './ModalYuborish';

const Modal = ({setShowModal, setAnotherModal}) => {

const[count ,setCount] = useState(1)

    const increaseCount = () =>{
        setCount(count + 1)
    }

    const decreaseCount = () =>{
        if(count > 0){
         setCount(count - 1)   
        }
    }
        const handleSubmit = () =>{
            setShowModal(false)
            setAnotherModal(true)
        }
  return (
    <>
      {  <div className='modal-backdrop'>
        <div className='modal'>
          <button className='icon-close' onClick={() => setShowModal(false)} >
            <CloseIcon />
          </button>
          <h1>Buyurtma qilish</h1>
          <form onSubmit={handleSubmit}>
            <div>
            <input className='modal-input' type="text" placeholder='Ismingizni yozing' />
            </div>
            <div className='modal-input-number'>
               <span>+998</span>
                <input type="text" placeholder='Raqamingizni yozing' />
            </div>
            <div>
                <h4 className='modal-select-title'>Mahsulotlarni toifasini tanlang</h4>
                <select className='modal-select' name="name" id="name">
                    <option value=""></option>
                    <option value="Model A">Model A</option>
                    <option value="Model B">Model B</option>
                    <option value="Model C">Model C</option>
                    <option value="Model D">Model D</option>
                </select>
            </div>
            <div className='modal-count'>
                <h4>Miqdorni tanlang</h4>
                <div className='incr'>
                <button  className='decrement' onClick={decreaseCount}>-</button>
                <td />
                <th></th>
                    <h3>{count}</h3>
                <button className='increment' onClick={increaseCount}>+</button>
                </div>
                <div className='modalBtn'>
                    <button >Yuborish</button>
                </div>
                {/* <ModalYuborish /> */}
            </div>
          </form>
        </div>
      </div>}
    </>
  );
};

export default Modal;

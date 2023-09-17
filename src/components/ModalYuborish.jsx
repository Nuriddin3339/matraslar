import './ModalYuborish.css'
import CloseIcon from '@mui/icons-material/Close';
import anotherModal from '../assets/images/another-modal.png'


const ModalYuborish = ({closeAnotherModal}) => {
  return (
    <div className='moodal-backdrop'>
        <div className='moodal'>
            <button className='another-close' onClick={closeAnotherModal}>   <CloseIcon /></button>
        <div className='another-title'>
            <h1>Arizangiz muvaffaqiyatli yuborildi</h1>
        </div>
        <div>
            <img className='another-modal-img' src={anotherModal} alt="img" />
        </div>
        <div className='another-modal-title'>
            <p>Tez orada operatorlarimiz siz bilan bog’lanishadi</p>
        </div>
        <div >
            <button className='another-btn' onClick={closeAnotherModal}>Ok</button>
        </div>
        </div>
    </div>
  )
}

export default ModalYuborish
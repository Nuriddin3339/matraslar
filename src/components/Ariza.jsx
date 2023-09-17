import CloseIcon from '@mui/icons-material/Close';
import './Ariza.css'
const Ariza = ({setAriza}) => {
  return (
    <div className='ariza-container'>
        <h1>Arizangiz muvaffaqiyatli qabul qilindi ✅</h1>
        <p>Siz bilan tez orada bog’lanamiz 😊</p>

            <div className='close-icon' onClick={()=>setAriza(false)}>
                <CloseIcon />
            </div>

    </div>
  )
}

export default Ariza
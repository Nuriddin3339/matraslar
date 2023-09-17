import { useState } from 'react';
import Ariza from './Ariza';
import './Telefon.css';

const Telefon = () => {
  const [ariza, setAriza] = useState(false)

const handleClick = (e)=> {
  e.preventDefault()
  setAriza(true)
}

  return (
    <div id='aloqa' className='telefon-bg'>
      { !ariza && <div className='telefon-all'>
        <div>
          <h2 className='telefon-title'>Sizni qiziqtirdimi?</h2>
          <p className='telefon-p'>
            Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
          </p>
        </div>

        <form>
          <div className='input-number'>
            +998 |
            <input autoComplete='off' type='text' placeholder='Raqamingizni yozing'  pattern="[0-9]" maxLength="9"  />
          </div>
          <button className='telefon-btn' onClick={handleClick}>Yuborish</button>
        </form>
      </div>}
      {ariza && <Ariza setAriza ={setAriza} /> }
    </div>
  );
};

export default Telefon;

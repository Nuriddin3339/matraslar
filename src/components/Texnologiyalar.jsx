import { useEffect, useState } from 'react';
import './Texnologiyalar.css'
import CloseIcon from '@mui/icons-material/Close';
import { Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';




const Texnologiyalar = () => {
  const [data,setData] = useState([])
  const [addModal, setShowAddModal] = useState(false);
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [link, setLink] = useState('') 
  const [immg , setImmg] = useState('')
  const [deleteTexnId,setDeleteTexnId] = useState()

  const urrl = 'http://localhost:1212/admin/technology'

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    fetch(urrl, {
      headers: {
        Authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [deleteTexnId]);



  const handleAddTechnology = (e) => {
      e.preventDefault()

      const token = JSON.parse(localStorage.getItem('token'));
      const urlTexn = 'http://localhost:1212/admin/technology'

      const requestData = {
        name:name,
        description:description,
        link:link,
        immg:immg
      }

      fetch(urlTexn, {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json',
             Authorization: token.token,
          },
          body: JSON.stringify(requestData)
      })
      .then((res)=>{
        if(res.ok){
          console.log('tori zapros');
          setShowAddModal(false)
        }else{
          console.error('notori ketti zapros',res.status);
        }
      })
      .catch((error)=>{
        console.error('xatooo' , error)
      })
  }





  const  texnDel = (id) => {
    const  texnDell = `http://localhost:1212/admin/technology/${id}`


    fetch(texnDell,{
      method: 'DELETE',
      headers: {
        'Content-type' : 'Application/json',
        Authorization: 
       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0'
      }
    })
    .then((res)=>res.json())
    .then((text)=>setDeleteTexnId(text) )
}



  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    margin: '200px',
    marginTop: '30px',
    marginLeft: '60px',
    width: '1000px',
  };

  const thStyle = {
    backgroundColor: '#01384D',
    color: '#FFF',
    fontSize: '14px',
    padding: '20px',
    height: '30px',
    width: '1200px',
  };

  const achki = {
    width: '1000px',
    paddingLeft: '30px',
    margin: '0 auto',
  };

  const kepka = {
    paddingRight: '35px',
    height: '30px',
    width: '1100px',
    backgroundColor: '#01384D',
    color: '#FFF',
    fontSize: '14px',
    padding: '20px',
    paddingLeft: '0px',
  };
  return (
      <div>
        <table className='orders-table' style={tableStyle}>
          <thead>
            <tr className='orders-tr'>
              <th className='texn-th' style={kepka}>
                Nomlari
              </th>
              <th className='texn-th' style={kepka}>
                Matn
              </th>
              <th className='texn-th' style={kepka}>
                Video
              </th>
              <th className='orders-th' style={thStyle}></th>
              <th className='orders-th' style={thStyle}></th>
              <th className='orders-th' style={thStyle}></th>
              <th className='orders-th' style={kepka}></th>
              <th className='orders-th' style={kepka}></th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr className='trr'>
                <td style={achki}>{item.name}</td>
                <td style={achki}>{item.description}</td>
                <td style={achki}>{item.link}</td>
                <td style={achki}></td>
                <td
                  className='deletee'
                  onClick={()=> texnDel(item.id)}
                >
                  <DeleteIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className='orders-btn' onClick={() => setShowAddModal(true)}>
          Qo'shish
        </button>
        {addModal && (
          <div className='texn-backdrop'>
            <div className='texn-modal'>
              <div className='texn-close' onClick={() => setShowAddModal(false)}>
                <CloseIcon />
              </div>
              <h3 className='texn-title'>Qo'shish</h3>
              <form>
                <div>
                 <h3 className='texn-name'>Nomi</h3>
                 <input type="text" placeholder='masalan:' className='texn-input' value={name} onChange={(e)=> setName(e.target.value)}/>
                 <h3 className='texn-name2'>Nomi</h3>
                 <input type="text" placeholder='masalan:' className='texn-input2' value={description} onChange={(e) => setDescription(e.target.value)}/>
               <div className='switchc'>
               <p className='switch-p'>Navinla</p>
                  <Switch className='switch-icon' />
               </div>
                </div>
                <div>
                  <h3 className='rasmm'>Rasm</h3>
                  <input type="text" className='rasm-input'value={immg} onChange={(e)=> setImmg(e.target.value)} />
                  <h3 className='rasmm2'>Video</h3>
                  <input type="text" className='rasm-input2' value={link} onChange={(e)=> setLink(e.target.value)} />
                </div>
                <div className='modal-texn'>
                  <button type='submit' onClick={handleAddTechnology}>Qo'shish</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  
}

export default Texnologiyalar
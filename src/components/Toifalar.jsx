import { useEffect, useState } from 'react';
import './Toifalar.css';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

const Toifalar = () => {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const [addModal, setShowAddModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const url = 'http://localhost:1212/admin/categories';

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    fetch(url, {
      headers: {
        Authorization: token.token,
      },
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [deleteId]);

  let obj = {
    category: newCategory,
    isActive: true,
  };
  console.log(obj);

  const uurl = 'http://localhost:1212/admin/categories';

  const handleAddCategory = (e) => {
    e.preventDefault();
    setShowAddModal(false);

    fetch(uurl, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0',
        'Content-type': 'Application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((error) => console.log('Xatolik', error));
  };

  const handleDelCategory = (id) => {
    const delUrl = `http://localhost:1212/admin/categories/${id}`;

    fetch(delUrl, {
      method: 'DELETE',
      headers: {
        'Content-type': 'Application/json',
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0',
      },
    })
      .then((res) => res.json())
      .then((data) => setDeleteId(data));
    // .then((json)=> console.log(json))
    // .catch((error)=> console.log('Xatolik', error))
  };

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
            <th className='orders-th' style={kepka}>
              Toifalar
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
              <td style={achki}>{item.category}</td>
              <td style={achki}></td>
              <td style={achki}></td>
              <td style={achki}></td>
              <td
                className='deletee'
                onClick={() => handleDelCategory(item.id)}
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
        <div className='order-backdrop'>
          <div className='order-modal'>
            <div className='close' onClick={() => setShowAddModal(false)}>
              <CloseIcon />
            </div>
            <h3>Qo'shish</h3>
            <p>Kategoriya nomi</p>
            <form onSubmit={handleAddCategory}>
              {/* <input type="text" placeholder='masalan: Model B' ref={inputValue} onChange={(e)=> setNewCategory(e.target.value)} value={newCategory} /> */}

              <select
                placeholder='Model A'
                onChange={(e) => setNewCategory(e.target.value)}
              >
                <option value='Model A'>Model A</option>
                <option value='Model B'>Model B</option>
                <option value='Model C'>Model C</option>
                <option value='Model D'>Model D</option>
                <option value='Model E'>Model E</option>
                <option value='Model F'>Model F</option>
              </select>
              <div className='modal-order'>
                <button type='submit'>Qo'shish</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toifalar;

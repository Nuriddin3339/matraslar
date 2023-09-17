import { Switch } from '@mui/material';
import './Mahsulotlar.css'
import { useEffect, useRef, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';


const Mahsulotlar = () => {
  const [data,setData] = useState([])
  const [productModal, setProductModal] = useState(false)
  const [delProductId,setDelProductId] = useState()

  const urlProduct = 'http://localhost:1212/admin/products'

  useEffect(()=> {
    const token = JSON.parse(localStorage.getItem('token'));

    fetch(urlProduct,{ 
      headers : {
        Authorization: token.token,
      },
    })
    .then((res)=>res.json())
    .then((jsonn)=> setData(jsonn));
  },[delProductId])
  console.log(delProductId);
  // console.log(datas);
  const datas = data.products



  const name = useRef('')
  const category = useRef('')
  const weight = useRef('')
  const warranty = useRef('')
  const size = useRef('')
  const capacity = useRef('')
  const body = useRef('')
  const cost = useRef('')
  const newCost = useRef('')
  const discount = useRef('')
  const [img, setImg] = useState("");
   const handleImg = (e) => {
     setImg(e.target.files[0]);
   };



const handlePost = (e) => {
  e.preventDefault();
  // setOpenProductAdd(false);


  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
  );

  var formdata = new FormData();
  formdata.append("name", name.current.value);
  formdata.append("category", category.current.value);
  formdata.append("weight", weight.current.value);
  formdata.append("images", img);
  formdata.append("isActive", true );
  formdata.append("warranty", warranty.current.value);
  formdata.append("size", size.current.value);
  formdata.append("capacity", capacity.current.value);
  formdata.append("body", body.current.value);
  formdata.append("cost", cost.current.value);
  formdata.append("newCost", newCost.current.value);
  formdata.append("discount", newCost.current.value ? true : false);
  formdata.append("new", true);


  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    "http://localhost:1212/admin/products/1",
    requestOptions,
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

};



const  productDel = (id) => {
    const  productDell = `http://localhost:1212/admin/products/${id}`

    fetch(productDell,{
      method: 'DELETE',
      headers: {
        'Content-type' : 'Application/json',
        Authorization: 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0'
      }
    })
    .then((res)=>res.json())
    .then((text)=>setDelProductId(text) )
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
        <table className='mahsulot-table' style={tableStyle}>
          <thead>
            <tr className='mahuslot-tr'>
              <th className='mahsulot-th' style={kepka}>
                Mahsulot nomlari
              </th>
              <th className='mahsulot-th' style={thStyle}>
                Toifalar
              </th>
              <th className='mahsulot-th' style={thStyle}>
                Narxi
              </th>
              <th className='mahsulot-th' style={thStyle}>
                Yuklama
              </th>
              <th className='mahsulot-th' style={kepka}>
                Razmeri
              </th>
              <th className='mahuslot-th' style={kepka}>
                Status
              </th>
              <th className='mahsulot-bgc'></th>
            </tr>
          </thead>
          <tbody>
          {datas && datas.map((item) => ( 
              <tr className='mahsulot-trr'>
              <td className='mahsulotlar' style={achki}>{item.name}</td>
              <td className='mahsulotlar' style={achki}>{item.category}</td>
              <td className='mahsulotlar' style={achki}>{item.cost} so'm</td>
              <td className='mahsulotlar' style={achki}>{item.weight} kg</td>
              <td className='mahsulotlar' style={achki}>{item.size}</td>
              <td className='swich'>
                <Switch />
              </td>
              <td className='mahsulot-delete' onClick={()=> productDel(item.id)}>
                <DeleteIcon />
              </td>
              
            </tr>

          )) }
          </tbody>
        </table>
        <button className='mahsulotlar-btn' onClick={()=> setProductModal(true)}>Qo'shish</button>
        {productModal && <div className='mahsulotlar-backdrop'>
            <div className='mahsulotlar-modal'>
               <button className='mahsulot-closeIcon' onClick={()=> setProductModal(false)}>
                <CloseIcon />
               </button>
                  <h1 className='mahsulot-title'>Qo'shish</h1>
                  <div>
                    <form onSubmit={handlePost}>
                            <input type="file" onChange={handleImg} required/>
                         <div>
                              <h3 className='mahsulot-type'>Toifalar</h3>
                              <select className='mahsulot-select' ref={category}>
                                <option value="Model A">Model A</option>
                                <option value="Model B">Model B</option>
                                <option value="Model C">Model C</option>
                                <option value="Model D">Model D</option>
                                <option value="Model E">Model E</option>
                                <option value="Model F">Model F</option>
                              </select>
                              <h3 className='mahsulot-type-name'>Tovar nomi</h3>
                              <input className='mahsulot-type-name-input' type="text" placeholder='Lux Soft Memory'  ref={name} />
                              <h3 className='mahsulot-cost ' >Narxi</h3>
                              <input className='mahsulot-cost-input' type="text" placeholder='20 000' ref={cost} />
                              <h3 className='mahsulot-weight'>Yuklama</h3>
                              <input className='mahsulot-weight-input' type="text" placeholder='200 kg' ref={weight} />
                         </div>
                         <div>
                          <h3 className='mahsulot-size'>Razmeri</h3>
                          <input type="text" className='mahsulot-size-input ' placeholder='200 x 140 x 40' ref = {size}/>
                          <h3 className='mahsulot-kafolat'>Kafolat</h3>
                          <input type="text" className='mahsulot-kafolat-input' placeholder='1 yil' ref={warranty} />
                          <h3 className='mahsulot-sigm'>Sig'm</h3>
                          <input type="text" className='mahsulot-sigm-input' placeholder='2'  ref={capacity}/>
                          <h3 className='mahsulot-sale'>Aksiya</h3>
                          <input type="text" className='mahsulot-sale-input' placeholder='1 200 000' ref={newCost} />
                         </div>
                         <div>
                          <h3 className='mahsulot-info'>Ma'lumot</h3>
                            <textarea className='mahsulot-info-input' cols="30" rows="10" placeholder='info...' ref={body}></textarea>
                            <p className='mahsulot-switch'>Navinla<Switch className='switch-icon' /></p>
                            <p className='mahsulot-switch'>Active<Switch className='switch-iconn' /></p>
                              <button className='mahsulot-btn'>Qo'shish</button>
                         </div>
                    </form>
                  </div>
            </div>
        </div>}
      </div>
  )
}

export default Mahsulotlar
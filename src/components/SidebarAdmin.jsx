import './SidebarAdmin.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Zakaz from '../assets/icons/home.svg';
import Customer from '../assets/icons/sidebarImg2.svg';
import Tooifalar from '../assets/icons/view_column (1).svg';
import Maahsulotlar from '../assets/icons/shopping_cart.svg';
import Teexnologiyalar from '../assets/icons/texnologiyalar.svg';
import Maanzil from '../assets/icons/room.svg';
import { useState } from 'react';
import Buyurtmalar from '../pages/admin/Buyurtmalar';
import Customers from '../components/Customers';
import Toifalar from '../components/Toifalar';
import Mahsulotlar from '../components/Mahsulotlar';
import Texnologiyalar from '../components/Texnologiyalar';
import Manzil from '../components/Manzil';
import AdminNavbar from './AdminNavbar';
const SidebarAdmin = () => {
  const baseData = [
    {
      id: 1,
      href: '/admin/buyurtmalar',
      image: Zakaz,
      name: 'Buyurtmlar',
      page: <Buyurtmalar />,
    },
    {
      id: 2,
      href: '/admin/customers',
      image: Customer,
      name: 'Customers',
      page: <Customers />,
    },
    {
      id: 3,
      href: '/admin/toifalar',
      image: Tooifalar,
      name: 'Toifalar',
      page: <Toifalar />,
    },
    {
      id: 4,
      href: '/admin/mahsulotlar',
      image: Maahsulotlar,
      name: 'Mahsulotlar',
      page: <Mahsulotlar />,
    },
    {
      id: 5,
      href: '/admin/texnologiyalar',
      image: Teexnologiyalar,
      name: 'Texnologiyalar',
      page: <Texnologiyalar />,
    },
    {
      id: 6,
      href: '/admin/manzil',
      image: Maanzil,
      name: 'Manzil',
      page: <Manzil />,
    },
  ];

  const [showPage, setShowPage] = useState(<Buyurtmalar />);
  const handlePage = (id) => {
    baseData.filter((item) => {
      if (id == item.id) {
        setShowPage(item.page);
      }
    });
  };

  return (

    <>
    {/* <AdminNavbar /> */}
  <div className='fleeex'>
    <div className='admin-all'>
      <ul className='aadmin'>
        {baseData?.map((item, index) => (
          <li key={index}>
            <div className='navlink-container'>
            <NavLink  className='admin-link' onClick={() =>handlePage(item.id)} to={item.href}>
              {' '}
              <img src={item.image} alt='' /> <p className='admin-p-title'>{item.name}</p>{' '}
            </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div>{showPage}</div>
  </div>
    </>
);
    
};

export default SidebarAdmin;

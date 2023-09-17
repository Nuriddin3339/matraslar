import React from 'react';
import './Buyurtmalar.css';
import Switch from '../admin/Switch';

const Table = () => {
  
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
              ID
            </th>
            <th className='orders-th' style={thStyle}>
              Ismi
            </th>
            <th className='orders-th' style={thStyle}>
              Telfon Raqami
            </th>
            <th className='orders-th' style={thStyle}>
              Mahsulot Nomlari
            </th>
            <th className='orders-th' style={kepka}>
              Miqdor
            </th>
            <th className='orders-th' style={kepka}>
              Qayta aloqa
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='trr'>
            <td style={achki}>6</td>
            <td style={achki}>Jenny Wilson</td>
            <td style={achki}>+998 90 123 45 67</td>
            <td style={achki}>Ortopedik Eko matras</td>
            <td style={achki}>5</td>
            <td className='swich'>
              <Switch />
            </td>
          </tr>
          <tr className='trr'>
            <td style={achki}>7</td>
            <td style={achki}>Jenny Wilson</td>
            <td style={achki}>+998 90 123 45 67</td>
            <td style={achki}>Ortopedik Eko matras</td>
            <td style={achki}>5</td>
            <td className='swich'>
              <Switch />
            </td>
          </tr>
          <tr className='trr'>
            <td style={achki}>8</td>
            <td style={achki}>Jenny Wilson</td>
            <td style={achki}>+998 90 123 45 67</td>
            <td style={achki}>Ortopedik Eko matras</td>
            <td style={achki}>5</td>
            <td className='swich'>
              <Switch />
            </td>
          </tr>
          <tr className='trr'>
            <td style={achki}>9</td>
            <td style={achki}>Jenny Wilson</td>
            <td style={achki}>+998 90 123 45 67</td>
            <td style={achki}>Ortopedik Eko matras</td>
            <td style={achki}>5</td>
            <td className='swich'>
              <Switch />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

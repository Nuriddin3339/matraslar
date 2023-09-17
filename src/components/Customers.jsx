import Switch from '../../src/pages/admin/Switch'
import DeleteIcon from '@mui/icons-material/Delete';
import './Customers.css'
const Customers = () => {
 



    const tableStyle = {
      borderCollapse: 'collapse',
      width: '100%',
      margin: '200px',
      marginTop: '30px',
      marginLeft: '80px',
      width: '1000px',
    }
  
    const thStyle = {
      backgroundColor: '#01384D',
      color: '#FFF',
      fontSize: '14px',
      padding: '20px',
      height: '30px',
      width: '1200px',
    }
  
    const achki = {
      width: '1000px',
      paddingLeft: '30px',
      margin: '0 auto',
    }
  
    const kepka = {
      paddingRight: '35px',
      height: '30px',
      width: '1100px',
      backgroundColor: '#01384D',
      color: '#FFF',
      fontSize: '14px',
      padding: '20px',
      paddingLeft: '0px',
    }
    return (
      <div>
        <table className='orders-table' style={tableStyle}>
          <thead>
            <tr className='orders-tr'>
              <th className='orders-th' style={kepka}>
                ID
              </th>
              <th className='orders-th' style={thStyle}>
                Sana
              </th>
              <th className='orders-th' style={thStyle}>
                Telfon Raqami
              </th>
              <th className='orders-th' style={kepka}>
                Qayta aloqa
              </th>
              <th className='delete'></th>
            </tr>
          </thead>
          <tbody>
            <tr className='trr'>
              <td style={achki}>6</td>
              <td style={achki}>12:13-12.05.2021</td>
              <td style={achki}>+998 90 123 45 67</td>
              <td className='swich'>
                <Switch />
              </td>
               <td className='delete-icon'>
                  <DeleteIcon />
              </td>
             
            </tr>
            <tr className='trr'>
              <td style={achki}>6</td>
              <td style={achki}>12:13-12.05.2021</td>
              <td style={achki}>+998 90 123 45 67</td>
              <td className='swich'>
                <Switch />
              </td>
              <td className='delete-icon'>
                  <DeleteIcon />
              </td>
            </tr>
            <tr className='trr'>
              <td style={achki}>6</td>
              <td style={achki}>12:13-12.05.2021</td>
              <td style={achki}>+998 90 123 45 67</td>
              <td className='swich'>
                <Switch />
              </td>
              <td className='delete-icon'>
                  <DeleteIcon />
              </td>
            </tr>
            <tr className='trr'>
              <td style={achki}>6</td>
              <td style={achki}>12:13-12.05.2021</td>
              <td style={achki}>+998 90 123 45 67</td>
              <td className='swich'>
                <Switch />
              </td>
              <td className='delete-icon'>
                  <DeleteIcon />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

export default Customers
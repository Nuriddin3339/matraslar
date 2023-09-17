import './AdminNavbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Profile from '../assets/icons/Profile.svg'


const AdminNavbar = () => {
  return (
    <div className='admin-navbar-bg'>
        <div className='admin-navbar-input'>
            <input type="search"  placeholder='User'/>
            <div className='admin-search'>
                <SearchIcon/>
            </div>
            <div className='flex-div'>
            <div className='admin-profile'>
                    <img src={Profile} alt="" />
            </div>
                    <div className='profile-name' >
                    <p>John Doe</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar
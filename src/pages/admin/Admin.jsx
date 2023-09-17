import SidebarAdmin from "../../components/SidebarAdmin";
import './Admin.css'
import  logooo from '../../assets/icons/bed 1.svg'
import AdminNavbar from "../../components/AdminNavbar";

const Admin = () => {
  return (
    <div className="container-admin">
        <AdminNavbar />
    <div className="nmadr">
      <div className="admin-img">
        <img src={logooo} alt="" />
      <h1 className="admin-title">Matrassue</h1>
        </div>
      <SidebarAdmin />

    </div>

    </div>
  );
};

export default Admin;

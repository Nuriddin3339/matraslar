import { NavLink } from "react-router-dom"
import './NotFound.css'
const NotFound = () => {
  return (
    <div className="pageNotFound">
        <h1>Not Found</h1>
        <p>Unaqa sahifa topilmadi</p>
        <NavLink to="/">Bosh Sahifa</NavLink>
    </div>
  )
}

export default NotFound
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useClient } from "../../components/client"
import Booking from "../Booking"

const Layout = ({user}) => {
  const client = useClient()
  return (
    <div>
      <Booking />
      
    <Link to="#" onClick={() => client.logout()}>Logout</Link>
    </div>
    
  )
}

export default Layout

//jika ingin mengubah nama
//{user.firstname}
//Selamat Datang, {user.username}
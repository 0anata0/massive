import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useClient } from "../../components/client"

const Layout = ({user}) => {
  const client = useClient()
  return (
    <>
    <h2>
      Selamat Datang, {user.username}
    </h2>
    <p>anda login sebagai administrator</p>
    
    <Link to="#" onClick={() => client.logout()}>Logout</Link>
    </>
    
  )
}

export default Layout

//jika ingin mengubah nama
//{user.firstname}
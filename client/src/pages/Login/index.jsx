import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Layout from "./Layout"
import { useEffect } from "react"
import Helmet from "react-helmet"

const Login = () => {
  const history = useHistory()

  useEffect(() => {
    //jika sudah login, maka
    if(sessionStorage.getItem('token') !== null){
      history.push(`/${sessionStorage.getItem('role')}`)
    }
  }, [history])

  return (
    <div>
      <Helmet>
        <title>
          Login Dashboard
        </title>
      </Helmet>
      <Layout/>
    </div>
  )
}

export default Login
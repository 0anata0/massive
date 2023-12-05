import { useClient } from "../../components/client"
import Layout from "./Layout"

const VisiMisi = () => {
  const client = useClient()
  return (
    <div>
      <Layout user={client.account}/>
    </div>
  )
}

export default VisiMisi
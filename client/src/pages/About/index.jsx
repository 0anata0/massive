import { useClient } from "../../components/client"
import Layout from "./Layout"

const About = () => {
  const client = useClient()
  return (
    <div>
      <Layout user={client.account}/>
    </div>
  )
}

export default About
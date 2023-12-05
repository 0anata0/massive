import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useClient } from "../../components/client"

const Layout = ({user}) => {
  const client = useClient()
  return (
    <>
    <h2>
      Selamat Datang, {user.username}
    </h2>
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            backgroundColor: "#f3f3f3",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander Vernof</p>
            <div className="bid">
              <a href="#" className="button">
                Bid Now
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button2">
                Popular
              </a>
            </div>
          </div>

          <main>
            {/* <CardMain imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} /> */}
            <h3>Selamat Datang di Portal Admin</h3>
          </main>
        </div>
      </div>
    </div>
    
    <Link to="#" onClick={() => client.logout()}>Logout</Link>
    </>
    
  )
}

export default Layout

//jika ingin mengubah nama
//{user.firstname}
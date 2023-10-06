import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <nav>
            <a href="http://www.area2.co.uk">Home</a> || <Link to="/TimVineJokes">Tim Vine Jokes</Link> || <Link to="/PoemGenerator">Poem Generator</Link>
      </nav>
       <main>
      <Outlet />
      </main>
    </>
  )
};

export default Layout;
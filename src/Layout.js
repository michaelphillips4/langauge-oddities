import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <nav>
            <Link to="/TimVineJokes">Tim Vine Jokes</Link> || <Link to="/PoemGenerator">Poem Generator</Link>
      </nav>
      <h3 id="header">Junk</h3>
      <main>
      <Outlet />
      </main>
    </>
  )
};

export default Layout;
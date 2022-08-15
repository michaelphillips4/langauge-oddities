import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/poem">Poem Generator</Link> || <a href ={process.env.PUBLIC_URL + '/eliza.html'}>Eliza</a> 
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
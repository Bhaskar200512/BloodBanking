import { Outlet, Link } from "react-router-dom";
import Blood3 from "./Blood3.png";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={Blood3} alt="Logo" style={{ height: "50px" }} />
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;

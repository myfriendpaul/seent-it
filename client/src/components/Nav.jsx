import { Link, Route } from "react-router-dom";
import CreateaMovie from "./CreateaMovie";
import "./Nav.css";
import WatchList from "./WatchList";

function Nav() {
  return (
    <>
      <header className="nav-container">
        <div className="logo-container">
          <div className="logo-title-container">
            <Link to="/" className="nav-links">
              <p className="logo-title">SEENT IT</p>
            </Link>
          </div>
        </div>
        <ul className="text-temp">
          <li className="nav-links-container">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/watchlist" className="nav-links">
              Watchlist
            </Link>
            <Link to="/createamovie" className="nav-links">
              Create
            </Link>
          </li>
        </ul>
      </header>
      <Route path="/watchlist">
        <WatchList />
      </Route>
      <Route path="/createamovie">
        <CreateaMovie />
      </Route>
    </>
  );
}

export default Nav;

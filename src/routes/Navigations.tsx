import { render } from "react-dom";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import logo from '../logo.svg';

export const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layaut">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''}>Aboout</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="about" element={ <h1>about</h1> }/>
          <Route path="users" element={ <h1>user page</h1> }/>
          <Route path="home" element={ <h1>Home</h1> }/>
          <Route path="*" element={<Navigate  to="/home" replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
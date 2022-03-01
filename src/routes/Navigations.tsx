import { render } from "react-dom";
import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="react logo" />
          <ul>
            <li>
              <NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''}>ShoppingPage</NavLink>
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
          <Route path="/" element={ <ShoppingPage /> }/>
          <Route path="*" element={<Navigate  to="/" replace />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
import NavItems from "./NavItems";
import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <>
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="swiggy-logo"
            src= {LOGO_URL}
          />
          <div className="location">
            <p>Bengaluru</p>
          </div>
        </div>
        <div>
          <NavItems />`
        </div>
      </div>
    </>
  );

export default Header
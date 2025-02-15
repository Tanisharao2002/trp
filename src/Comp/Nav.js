import "./Nav.css";
import logo from "./Logo.png";
function Nav() {
  return (
    <div className="NavContainer">
      <div className="NavRow">
        <img src={logo} className="navLogo" title="Explore Menu"/>
        <p className="NavHead">The <span className="yellowtxt">Re</span>Tail Project</p>
        <button className="signInBtn">Sign In</button>
      </div>
    </div>
  );
}

export default Nav;

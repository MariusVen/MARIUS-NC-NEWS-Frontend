import { Link } from "react-router-dom";
import ToggleUser from "./ToggleUser";

export default function Header() {
  return (
    <div className="Header">
      <div className="header-left-side">
        <Link to="/">
          <h1 className="logo">NC NEWS </h1>
        </Link>
      </div>
      <ToggleUser />
    </div>
  );
}

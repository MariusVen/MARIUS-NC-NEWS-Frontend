import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";
import ToggleUser from "./ToggleUser";

export default function Header() {
  return (
    <div className="Header">
      <div className="ToggleUser">
        <ToggleUser />
      </div>
      <div className="title">
        <Link to="/">
          <h1>NC NEWS </h1>
        </Link>
      </div>
      <NavigationBar />
    </div>
  );
}

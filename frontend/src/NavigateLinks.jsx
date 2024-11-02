import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Link to="/about" className="text-white">About</Link>
      <Link to="/pricing" className="text-white">Pricing</Link>
      <Link to="/login" className="text-white">Login</Link>
    </div>
  );
}

export default NavLink;

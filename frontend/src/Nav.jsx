import Logo from "./Logo";
import NavLink from "./NavigateLinks";
// import { BrowserRouter as Router } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className=" flex bg-custom-blue sticky top-0 z-20 mx-auto w-full justify-between h-[60px] items-center px-4">
        <Logo />
        <NavLink />

      </header>
    </>
  );
}

export default Nav;

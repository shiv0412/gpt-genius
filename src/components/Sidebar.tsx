import { SiOpenaigym } from "react-icons/si";
import Link from "next/link";

import MemberProfile from "./MemberProfile";
import "./components.css";
import { navLinks } from "@/constants";
import { NavLink } from "@/modals";

export const Sidebar = () => {
  return (
    <div className="container">
      <div className="header">
        <SiOpenaigym className="logo-icon" />
        <span>GPT Genius</span>
      </div>
      <div className="navLinks-container">
        {navLinks.map((navLink: NavLink) => {
          return (
            <Link href={navLink.href} className="nav-link">
              <span>{navLink.icon}</span>
              {navLink.title}
            </Link>
          );
        })}
      </div>
      <MemberProfile />
    </div>
  );
};

export default Sidebar;

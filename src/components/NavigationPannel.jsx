import React, { useContext } from "react";
import { Link } from "@reach/router";
import { useLocation, redirectTo } from "@reach/router";
import classnames from "classnames";
import { navigate } from '@reach/router'
import lockr from 'lockr';

//style
import "./NavigationPannel.css";

// https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import { ReactComponent as IconCustomer } from "./navIcon/home.svg";
import { ReactComponent as IconMen } from "./navIcon/men.svg";
import { ReactComponent as IconSpy } from "./navIcon/spy.svg";
import { ReactComponent as IconFolder } from "./navIcon/folder.svg";
import { ReactComponent as IconUser } from "./navIcon/user.svg";
import { ReactComponent as IconSettings } from "./navIcon/settings.svg";
import { ReactComponent as IconSignout } from "./navIcon/signout.svg";

const menuItems = [
  {
    src: IconCustomer,
    to: "/",
  },
  {
    src: IconSpy,
    to: "/Inspection",
  },
  {
    src: IconFolder,
    to: "/networkinformation",
  },
  {
    src: IconUser,
    to: "/yiyungate",
  },
  // {
  //   src: IconSettings,
  //   to: "/settings",
  // },
];

export default function NavigationPannel(props) {
  const location = useLocation();

  const signout = () => {
    lockr.rm("last_login_time");
    lockr.rm("current_tenant");
    lockr.rm("pin_set");
    navigate('/login')
  }

  return (
    <div className="container_nav">
      <div className="menu_basic">
        {menuItems.map((menuItem) => {
          const active = location.pathname === menuItem.to;
          return (
            <Link to={menuItem.to} style={{ textDecoration: "none" }}>
              <li
                className={classnames("menu_basic_li", {
                  active: active,
                })}
                key={menuItem.to}
              >
                <div className="icon_nav_basic_container">
                  <menuItem.src
                    className="icon_nav_basic"
                    fill={active ? undefined : "white"}
                  />
                </div>
              </li>
            </Link>
          );
        })}

        <div style={{ flexGrow: 1 }}></div>

        <li className={"menu_basic_li"} onClick={signout}>
          <div className="icon_nav_basic_container">
            <IconSignout className="icon_nav_basic" fill={"white"} />
          </div>
        </li>
      </div>
    </div>
  );
}

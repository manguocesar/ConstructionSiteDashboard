import React, { useContext } from "react";
import { Link } from "@reach/router";
import { useLocation } from "@reach/router";
import classnames from "classnames";

//style
import "./NavigationPannel.css";

// https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
import { ReactComponent as IconCustomer } from "./navIcon/home.svg";

import { ReactComponent as IconMen } from "./navIcon/men.svg";
import { ReactComponent as IconFolder} from "./navIcon/folder.svg";
import { ReactComponent as IconUser } from "./navIcon/user.svg";
import { ReactComponent as IconSettings } from "./navIcon/settings.svg";
import { ReactComponent as IconSignout } from "./navIcon/signout.svg";
// import { ReactComponent as IconSchedule} from "./navIcon/calandar.svg";
// import { ReactComponent as IconSafety } from "./navIcon/shield.svg";
import IconEquipment from "./navIcon/digger.svg";
import IconSetting from "./navIcon/settings.svg";
import IconEnvironment from "./navIcon/tree.svg";
import logoutIcon from "./navIcon/logout.svg";

const menuItems = [
  {
    src: IconCustomer,
    to: "/",
  },
  {
    src: IconMen,
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
  {
    src: IconSettings,
    to: "/settings",
  },
];

export default function NavigationPannel(props) {
  const location = useLocation();

  return (
    <div className="container_nav">
      <div className="menu_basic">
        {menuItems.map((menuItem) => {
          const active = location.pathname === menuItem.to;
          return (
            <li
              className={classnames("menu_basic_li", {
                active: active,
              })}
              key={menuItem.to}
            >
              <Link
                style={{ display: "flex", height: "100%", width: "100%" }}
                to={menuItem.to}
              >
                <menuItem.src
                  className="icon_nav_basic"
                  fill={active ? undefined : "white"}
                />
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}

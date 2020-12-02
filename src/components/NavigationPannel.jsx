import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { useLocation, redirectTo } from "@reach/router";
import classnames from "classnames";
import { Modal } from "antd";
import PinMessage from "./PinMessage";
import { navigate } from "@reach/router";
import lockr from "lockr";

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
import { ReactComponent as KeypadIcon } from "./navIcon/keypad.svg";

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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const pinSet = lockr.get("pin_set");
    setModalVisible(!pinSet);
  }, [0]);
  const location = useLocation();

  const signout = () => {
    lockr.rm("last_login_time");
    lockr.rm("current_tenant");
    lockr.rm("pin_set");
    navigate("/login");
  };

  return (
    <div className="container_nav">
      <div className="menu_basic">
        {menuItems.map((menuItem) => {
          const active = location.pathname === menuItem.to;
          return (
            <Link key={menuItem.to} to={menuItem.to} style={{ textDecoration: "none" }}>
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

        <li
          className="menu_basic_li"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          <div className="icon_nav_basic_container">
            <KeypadIcon
              className="icon_nav_basic"
              // fill={active ? undefined : "white"}
            />
          </div>
        </li>

        <div style={{ flexGrow: 1 }}></div>

        <li className={"menu_basic_li"} onClick={signout}>
          <div className="icon_nav_basic_container">
            <IconSignout className="icon_nav_basic" fill={"white"} />
          </div>
        </li>
      </div>

      <Modal
        visible={modalVisible}
        maskClosable={true}
        footer={null}
        closable={false}
        width="40%"
        onCancel={() => {
          setModalVisible(false);
        }}
      >
        <PinMessage
          onClose={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
    </div>
  );
}

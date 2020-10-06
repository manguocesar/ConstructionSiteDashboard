import React, { useContext } from "react";
import { Link } from "@reach/router";

//image
import exPlan from "./img/exPlan.png";
import positionSmall from "./img/positionSmall.svg";
import SearchIcon from "./img/SearchIcon.png";

//context
import { ListSitesContext } from "../contexts/ListSitesContext";

//styles
import "./ListOfSites.css";

export default function ListOfSites() {
  const { setHasChosenSite, list, addTrue } = useContext(ListSitesContext);

  let nbrMap = 8 - list.stateList.length;
  let arrIcon = [];
  for (let i = 0; nbrMap > i; i++) {
    arrIcon.push(i);
  }

  return (
    <div className="container_info_leftBottom">
      <div className="container_info_leftTop_searchBar">
        <span style={{ marginLeft: "2%" }}>请输入工地名称/编号。。。</span>{" "}
        <img style={{ marginRight: "2%" }} alt="" src={SearchIcon} />
      </div>
      <div className="container_info_leftTop_sitesList">
        <div className="container_home_list_of_sites">
          {list.stateList.map((nbr, key) => (
            <div
              key={key}
              className={
                nbr.selected
                  ? "site_item_activeBasic"
                  : "site_item_inactiveBasic"
              }
            >
              <div
                style={{
                  // border: "solid blue 1px",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <img
              style={{ border: "solid blue 1px" }}
              src={nbr.img}
              alt="customerLogo"
              className="sites_customer_logo"

              .sites_customer_logo {
  width: 90%;
  height: 80%;
  margin: 0px;
}
            /> */}
                <div className="site_device_name_site">
                  <span>
                    复旦大学项目
                    <br /> 二建集团第六分公司
                  </span>
                </div>
                <div className="site_device_numBasic">
                  <img
                    className="sites_icon_localisation"
                    src={positionSmall}
                    alt="positionSmall"
                  />
                  <span
                    style={{ width: "90%", height: "50%", fontSize: "1.5em" }}
                  >
                    {nbr.text}{" "}
                  </span>
                </div>

                <Link to="/Equipment">
                  <div
                    onClick={() => {
                      addTrue(nbr.order);
                      setHasChosenSite(true);
                    }}
                    className="site_enterBasic_home"
                  >
                    进入工地
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {arrIcon.map(() => (
            <div className="container_emptyIcons_home">
              <img alt="emptySite" src={exPlan} className="emptyIcons_home" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

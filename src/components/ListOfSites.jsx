import React, { useContext } from "react";
import { Link } from "@reach/router";

//image
import exPlan from "./exPlan.png";
import positionSmall from "./positionSmall.svg";

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
        <span style={{ marginLeft: "5%" }}>请输入工地名称/编号。。。</span>
      </div>
      <div className="container_info_leftTop_sitesList">
        <div className="container_list_of_sites">
          {list.stateList.map((nbr, key) => (
            <div
              key={key}
              className={
                nbr.selected
                  ? "site_item_activeBasic"
                  : "site_item_inactiveBasic"
              }
            >
              <div style={{ border: "solid red 1px" }}>
                {/* <img
              style={{ border: "solid blue 1px" }}
              src={nbr.img}
              alt="customerLogo"
              className="sites_customer_logo"
            /> */}

                <span>复旦大学项目 二建集团第六分公司</span>

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

                {/* <Link to="/"> */}
                <div
                  onClick={() => {
                    addTrue(nbr.order);
                    setHasChosenSite(true);
                  }}
                  className="site_enterBasic"
                >
                  进入工地
                </div>
                {/* </Link> */}
              </div>
            </div>
          ))}

          {arrIcon.map(() => (
            <div
              className="container_emptyIcons"
              style={{ border: "solid blue 1px" }}
            >
              <img
                style={{ border: "solid red 1px" }}
                alt="emptySite"
                src={exPlan}
                className="emptyIcons"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

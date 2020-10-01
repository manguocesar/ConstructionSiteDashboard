import React, { useContext } from "react";
import { Link } from "@reach/router";

//image
import exPlan from "./exPlan.png";
import positionSmall from "./positionSmall.svg";

//context
import { ListSitesContext } from "./ListSitesContext";

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
    <div className="container-list-of-sites">
      {list.stateList.map((nbr, key) => (
        <div
          key={key}
          className={
            nbr.selected ? "site-item-activeBasic" : "site-item-inactiveBasic"
          }
        >
          <div>
            <img
              src={nbr.img}
              alt="customerLogo"
              className="sites-customer-logo"
            />

            <div className="site-device-numBasic">
              <img
                className="sites-icon-localisation"
                src={positionSmall}
                alt="positionSmall"
              />
              <span style={{ fontSize: "10px" }}> {nbr.text} </span>
            </div>

            {/* <Link to="/"> */}
            <div
              onClick={() => {
                addTrue(nbr.order);
                setHasChosenSite(true);
              }}
              className="site-enterBasic"
            >
              进入工地
            </div>
            {/* </Link> */}
          </div>
        </div>
      ))}

      {arrIcon.map(() => (
        <div className="container-emptyIcons">
          <img alt="emptySite" src={exPlan} className="emptyIcons" />
        </div>
      ))}
    </div>
  );
}

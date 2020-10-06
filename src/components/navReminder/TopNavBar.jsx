import React from "react";
import { Link } from "@reach/router";

import "./TopNavBar.css";

export const HomeNav = () => (
  <table className="TopNavBar_Table_container">
    <tbody>
      <tr>
        <td>
          <div className="triangle-right" />
        </td>
        <td>
          <Link to="/" style={{ color: "#82cdbf" }}>
            首页
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
);

export const OperatorsNav = () => (
  <table className="TopNavBar_Table_container">
    <tbody>
      <tr>
        <td>
          <div className="triangle-right" />
        </td>
        <td>
          <Link to="/" style={{ color: "#82cdbf" }}>
            首页
          </Link>
        </td>
        <td>
          <div className="triangle-right" />
        </td>

        <td>
          <Link to="/Operators" style={{ color: "#82cdbf" }}>
            人员
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
);

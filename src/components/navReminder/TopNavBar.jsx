import React from "react";
import { Link } from "@reach/router";

import "./TopNavBar.css";

export const HomeNav = () => (
  <table style={{ fontSize: "13.5px", color: "#82cdbf" }}>
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

export const EquipmentNav = () => (
  <table style={{ fontSize: "13.5px", color: "#82cdbf" }}>
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
          <Link to="/sites/1" style={{ color: "#82cdbf" }}>
            人员
          </Link>
        </td>
      </tr>
    </tbody>
  </table>
);

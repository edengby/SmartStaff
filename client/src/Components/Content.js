import React from "react";
import StaffStatus from "./StaffStatus";
import "./Content.css";

export default class Content extends React.Component {
  render() {
    return (
        <div>
          <StaffStatus />
        </div>
    );
  }
}

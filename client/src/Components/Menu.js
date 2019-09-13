import React from "react";
import "./Menu.css";

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="corp-icon">Check Point</div>
                <div className="main-menu">
                    <div className="button">StaffStatus</div>
                    <div className="button-inactive">SandBlast</div>
                    <div className="button-inactive">Management</div>
                    <div className="button-inactive">About</div>
                </div>
            </div>
        );
    }
}

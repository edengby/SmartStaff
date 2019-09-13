import React from "react";
import Content from "./Content";
import "./Nav.css";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="nav-bar">
                    <div className="nav-item">StaffStatus</div>
                </div>
                <div className="content">
                    <Content />
                </div>
            </div>
        );
    }
}

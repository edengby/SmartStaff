import React from "react";
import Menu from "./Menu";
import Nav from "./Nav";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Nav />
            </div>
        );
    }
}

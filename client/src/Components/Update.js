import React from 'react';
import Table from "./Table";
import Status from "./Status";
import './Update.css';

export default class Update extends React.Component {
    render() {
        const {id, name, status} = this.props.location.state.response[0];

        return (
            <React.Fragment>
                <div className="greeting">
                Hello {name} , you are {status}.
                </div>
                <Status status={status} id={id}/>
                <Table />
            </React.Fragment>
        );
    }
}
import React from 'react';
import './Status.css';
import axios from "axios";

export default class Status extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: props.status,
            id: props.id
        };
        this.updateNewStatus = this.updateNewStatus.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    async updateNewStatus(newStatus) {
        const newData = {
            newStatus: newStatus,
            id: this.state.id
        };

        await axios.post('/update', {},{params: newData})
            .then(function (response) {
                //todo add indication for save successfully (green V)
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    handleChange(event){
        this.setState({
            status: event.target.value
        });
        this.updateNewStatus(event.target.value);
    };

    render() {
        const statusList = ["Working","OnVacation","LunchTime","BusinessTrip"];

        return (
            <React.Fragment>
                <div className="curr-status">
                    Update my current status:
                    <br/><br/>
                    <select className="select-status"
                            value={this.state.status}
                            onChange={this.handleChange}>
                        {statusList.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </React.Fragment>
        );
    }

}
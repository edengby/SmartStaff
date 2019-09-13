import React from 'react';
import "./Table.css";
import axios from "axios";

export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            origStaff: [],
            staff: [],
            searchString: ''
        };

        this.getStaffList = this.getStaffList.bind(this);
        this.filter = this.filter.bind(this);
    }

    getStaffList() {
        axios.get('/getStaff')
            .then(response => {
                this.setState({
                    staff: response.data,
                    origStaff: response.data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getStaffList();
    }

    filter(event){
        if (event.target.value) {
            const filtered = this.state.staff.filter(row => {
                return (
                    row.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
                    row.status.toLowerCase().includes(event.target.value.toLowerCase())
                );
            });
            this.setState({
                staff: filtered
            });
        }
        else{
            this.setState({
                staff: this.state.origStaff
            });
        }
    }

    render() {
        const statusList = ["Filter By Status..","Working","OnVacation","LunchTime","BusinessTrip"];

        return (
            <React.Fragment>
                <div className="table-title">
                List of employees:
                </div>
                <div className="table-component">
                <input
                    type="search"
                    value={this.searchString}
                    onChange={this.filter}
                    className="search-input"
                    placeholder="Search by name..."
                />

                <select className="filter-dropdown"
                    onChange={this.filter}>
                    {statusList.map(status => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>

                <div>
                    <table className="table">
                        <tbody>
                        {(this.state.staff.map((employee) => {
                                const {id, name, status} = employee;
                                return (
                                    <tr key={id} className="table-row">
                                        <td style={{ background: status === 'OnVacation' ? 'red': ''}}>
                                            {name} ({status})
                                        </td>
                                    </tr>
                                );
                            }))}
                        </tbody>
                    </table>
                </div>
                </div>
            </React.Fragment>
        );
    }

}
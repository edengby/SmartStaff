import React from 'react';
import axios from 'axios';
import './Welcome.css';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            errorMassageVisible: false
        };

        this.updateUserName = this.updateUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    showErrorMessage(){
        this.setState({
            errorMassageVisible: true
        });
    }

    updateUserName(event) {
        this.setState({
            username: event.target.value
        });
    }

    async handleSubmit() {
        const username = {username: this.state.username};
        await axios.get('/getUser', {params: username})
            .then(function (response) {
                this.handleResponse(response);
            }.bind(this))
            .catch(function (err) {
                console.log(err);
            });
    }

    handleResponse(response){
        if(response.data.length === 0){
            this.showErrorMessage();
        }
        else
        {
            this.props.history.push({
                pathname: '/update',
                state: { response: response.data }
            });
        }
    }

    render() {
        return (
            <div className="welcome">
                Welcome to MyWorkStatus
                <br/><br/>
                <input
                    type="text"
                    placeholder="My Username"
                    value={this.state.username}
                    onChange={event => this.updateUserName(event)}
                />

                <button
                    onClick={this.handleSubmit}
                    className="login-button"
                    type="Login">
                    Login
                </button>

                <br/>
                {
                    this.state.errorMassageVisible?
                        <div className="error-massage">
                            Sorry, we don't recognize this username. Please try again.
                        </div>
                        :
                        <div></div>
                }
            </div>
        );
    }
}
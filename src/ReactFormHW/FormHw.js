import React, { Component } from "react";
import Users from "./Users";
import Modal from "./Modal";
import "./style.scss";
import data from "./data.json";

export default class FormHw extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: data,
        };
    }

    handleDeleteUser = (msv) => {
        console.log(msv);
        const newData = [...this.state.userData];
        const newDataFilter = newData.filter((item) => {
            return item.msv != msv;
        });
        this.setState({
            userData: newDataFilter,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="hContainer mt-2">
                    <h1 className="text-light ps-3 pt-2">
                        Thông Tin Sinh Viên
                    </h1>
                </div>
                <Modal />
                <Users
                    dataUser={this.state.userData}
                    deleteUser={this.handleDeleteUser}
                />
            </div>
        );
    }
}

import React, { Component } from "react";
import Users from "./Users";
import Modal from "./Modal";
import "./style.scss";
import data from "./data.json";
import Search from "./Search";

export default class FormHw extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: data,
            editUser: null,
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

    // Tìm vị trí theo msv
    findIndex = (msv) => {
        const index = this.state.userData.findIndex((item) => {
            return item.msv == msv;
        });
        return index;
    };

    handleSubmit = (user) => {
        // Tồn tại msv thì cập nhật còn không thì thêm mới
        // Thêm mới sinh viên
        const newUser = { ...user };

        // push user mới vô data
        const userClone = [...this.state.userData];
        userClone.push(newUser);

        // Set lại state
        this.setState({
            userData: userClone,
        });
    };

    // EditUser
    handleEditUser = (user) => {
        this.setState({
            editUser: user,
        });
    };
    handleUpdateUser = (user) => {
        // console.log(user);
        // Cập nhật sinh viên
        // Tìm vị trí
        const index = this.findIndex(user.msv);
        console.log(index);
        // clone userData
        const userDataClone = [...this.state.userData];
        // cập nhật thông tin sinh viên thông qua index
        if (index != -1) {
            userDataClone[index] = user;
        }
        console.log(userDataClone);
        // Set lại state
        this.setState({
            userData: userDataClone,
        });
    };

    // Search
    handleOnSearch = (msv) => {
        const newData = [...this.state.userData];
        const dataSearch = newData.filter((item) => {
            return item.msv == msv;
        });
        this.setState({
            userData: dataSearch,
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
                <Modal
                    onSubmit={this.handleSubmit}
                    dataEditUser={this.state.editUser}
                    upDateUser={this.handleUpdateUser}
                />
                <Search onSearch={this.handleOnSearch} />
                <Users
                    dataUser={this.state.userData}
                    deleteUser={this.handleDeleteUser}
                    on
                    editUser={this.handleEditUser}
                />
            </div>
        );
    }
}

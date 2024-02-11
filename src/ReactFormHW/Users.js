import React, { Component } from "react";
import UsersItem from "./UsersItem";

export default class Users extends Component {
    render() {
        const { dataUser, deleteUser, editUser } = this.props;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Mã SV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataUser.map((item) => {
                            return (
                                <tr key={item.msv}>
                                    <UsersItem
                                        dataUser={item}
                                        deleteUser={deleteUser}
                                        editUser={editUser}
                                    />
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

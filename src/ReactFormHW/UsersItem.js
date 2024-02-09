import React, { Component } from "react";

export default class UsersItem extends Component {
    handleDeleteUser = (msv) => {
        const { deleteUser } = this.props;
        deleteUser(msv);
    };

    render() {
        const { dataUser } = this.props;
        // console.log(dataUser);
        return (
            <>
                <th scope="row">{dataUser.msv}</th>
                <td>{dataUser.name}</td>
                <td>{dataUser.phone}</td>
                <td>{dataUser.email}</td>
                <td>
                    <button
                        className="btn btn-danger me-2"
                        onClick={() => {
                            this.handleDeleteUser(dataUser.msv);
                        }}
                    >
                        Delete
                    </button>
                    <button className="btn btn-primary">Edit</button>
                </td>
            </>
        );
    }
}

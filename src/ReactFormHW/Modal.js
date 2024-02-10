import React, { Component } from "react";

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msv: "",
            name: "",
            phone: "",
            email: "",
        };
    }

    handleOnChange = (event) => {
        console.log(event.target.value);
        const { name, value } = event.target;
        console.log(name, value);
        this.setState(
            {
                [name]: value,
            },
            () => {
                console.log(this.state);
            }
        );
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <div className="mt-3">
                <form
                    onSubmit={(event) => {
                        this.handleOnSubmit(event);
                    }}
                >
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label className="form-label">Mã SV</label>
                            <input
                                type="text"
                                className="form-control"
                                name="msv"
                                onChange={(event) => {
                                    this.handleOnChange(event);
                                }}
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Họ Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={(event) => {
                                    this.handleOnChange(event);
                                }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-3 col-6">
                            <label className="form-label">Số điện thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                name="phone"
                                onChange={(event) => {
                                    this.handleOnChange(event);
                                }}
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={(event) => {
                                    this.handleOnChange(event);
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">
                        Thêm sinh viên
                    </button>
                </form>
            </div>
        );
    }
}

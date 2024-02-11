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

    // componentWillReceiveProps chạy khi nhận props có sự thay đổi
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.dataEditUser) {
            this.setState({
                msv: nextProps.dataEditUser.msv,
                name: nextProps.dataEditUser.name,
                phone: nextProps.dataEditUser.phone,
                email: nextProps.dataEditUser.email,
            });
        } else {
            this.setState({
                msv: "",
                name: "",
                phone: "",
                email: "",
            });
        }
    }

    render() {
        // const { dataEditUser } = this.props;
        // console.log(dataEditUser);
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
                                value={this.state.msv}
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
                                value={this.state.name}
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
                                value={this.state.phone}
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
                                value={this.state.email}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">
                        {this.props.dataEditUser
                            ? "Cập nhật sinh viên"
                            : "Thêm sinh viên"}
                    </button>
                </form>
            </div>
        );
    }
}

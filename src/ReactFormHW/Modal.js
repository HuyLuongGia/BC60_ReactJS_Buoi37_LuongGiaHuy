import React, { Component } from "react";

export default class Modal extends Component {
    render() {
        return (
            <div className="mt-3">
                <form>
                    <div className="row">
                        <div className="mb-3 col-6">
                            <label className="form-label">Mã SV</label>
                            <input
                                type="text"
                                className="form-control"
                                name="msv"
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Họ Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
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
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <label className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
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

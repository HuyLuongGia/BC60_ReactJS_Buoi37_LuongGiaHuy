import React, { Component } from "react";

export default class extends Component {
    handleOnchangeSearch = (event) => {
        const { onSearch } = this.props;
        onSearch(event.target.value);
    };

    render() {
        return (
            <div className="mt-5 mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm theo Mã sinh viên"
                    onChange={(event) => {
                        this.handleOnchangeSearch(event);
                    }}
                />
            </div>
        );
    }
}

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
    const [account, setAccount] = useState({});
    const handleOnClick = () => {
        alert("Bạn có muốn đăng xuất?");
    };
    useEffect(() => {
        const body = document.querySelector("body");
        body.onclick = () => {
            const toggle = document.querySelector("#collapseExample");
            toggle.classList.remove("show");
        };
        const user = JSON.parse(localStorage.getItem("account"));
        setAccount({ ...user });
    }, []);

    return (
        <div>
            <div className="header">
                <div className="header-left">
                    <div className="logo">
                        <img
                            src={window.location.origin + "/img/logo.svg"}
                            alt="#"
                        />
                        <span className="title-header">IPTC</span>
                    </div>
                </div>
                <div className="header-right">
                    <div className="profile-div">
                        <img
                            src={account.Images}
                            className="profile-pic-icon"
                            alt=""
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        />
                        <img
                            className="vector-icon"
                            alt=""
                            src={window.location.origin + "/img/vector.svg"}
                        />
                    </div>
                    <img
                        className="notificatios-icon"
                        alt=""
                        src={window.location.origin + "/img/notificatios.svg"}
                    />
                    <div className="button-div">
                        <img
                            className="plus-circle-icon"
                            alt=""
                            src={window.location.origin + "/img/pluscircle.svg"}
                        />

                        <div className="ask-a-question">Ask a question</div>
                    </div>
                </div>

                <div
                    className="collapse"
                    id="collapseExample"
                    style={{ marginTop: "180px" }}
                >
                    <div
                        className=""
                        style={{
                            width: "250px",
                            background: "rgba(255, 255, 255, 1)",
                            borderRadius: "6px",
                            marginTop: 30,
                            marginRight: 10,
                            marginLeft: 10,
                            fontSize: "16px",
                            color: "#606060",
                            textAlign: "center",
                        }}
                    >
                        <ul
                            style={{
                                borderBottom: "1px solid rgb(235, 228, 228)",
                                paddingTop: 30,
                            }}
                        >
                            Xin Chào
                            <p>
                                <strong>{account.Names}</strong>
                            </p>
                        </ul>
                        <a
                            href="/personal"
                            style={{
                                textDecoration: "none",
                                color: "#606060",
                            }}
                        >
                            <ul
                                style={{
                                    borderBottom:
                                        "1px solid rgb(235, 228, 228)",
                                }}
                            >
                                Xem thông tin
                            </ul>
                        </a>
                        <ul
                            style={{
                                borderBottom: "1px solid rgb(235, 228, 228)",
                            }}
                        >
                            Đóng góp ý kiến
                        </ul>
                        <a
                            onClick={handleOnClick}
                            href="/"
                            style={{
                                textDecoration: "none",
                                color: "#606060",
                            }}
                        >
                            <ul
                                style={{
                                    borderBottom:
                                        "1px solid rgb(235, 228, 228)",
                                }}
                            >
                                Đăng xuất
                            </ul>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

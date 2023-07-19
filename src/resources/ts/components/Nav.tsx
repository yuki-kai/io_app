import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [user, setUser] = useState({name: ''})

    useEffect(() => {
        (
            async () => {
                // ログインは成功してるぽいがapiが叩けない
                const {data} = await axios.get('http://localhost:8082/api/user')
                setUser(data)
            }
        )()
    }, [])

    const logout = async () => {
        // await axios.get('http://localhost:8082/api/logout', {})
        await axios.post('http://localhost:8082/logout', {})
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>

            <ul className="my-2 my-md-0 mr-md-3">
                <Link to="/profile" className="p-2 text-white text-decoration-none">
                    {user?.name}
                </Link>
                <Link to="/login" className="p-2 text-white text-decoration-none" onClick={logout}>
                    ログアウト
                </Link>
            </ul>
        </nav>
    )
}

export default Nav

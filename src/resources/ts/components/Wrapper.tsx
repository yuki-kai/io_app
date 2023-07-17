import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";
import { Navigate } from "react-router-dom";

const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (
            async () => {
                // 認証していなければログイン画面にリダイレクト
                try {
                    const {data} = await axios.get('http://localhost:8082/api/user')
                } catch (e) {
                    setRedirect(true)
                }
            }
        )()
    }, [])

    if (redirect) {
        return <Navigate to={'/login'} />
    }

    return (
        <>
            <Nav />

            <div className="container-fluid">
                <div className="row">
                    <Menu />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Wrapper

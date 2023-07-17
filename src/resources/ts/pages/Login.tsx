import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.post('http://localhost:8082/api/login', {
            email, password
        }, {withCredentials: true})

        setRedirect(true)
    }

    if (redirect) {
        return  <Navigate to={'/'} />
    }

    return (
        <FormWrapper>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal text-center">ログイン</h1>

                <Input type="email" className="form-control mb-2" id="email"
                    placeholder="Email" required autoFocus
                    onChange={e => setEmail(e.target.value)}
                />

                <Input type="password" className="form-control mb-2" id="password"
                    placeholder="Password" required autoFocus
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="text-center">
                    <Link to="/register">新規登録</Link>
                </div>
                <Button className="w-100 btn btn-lg btn-primary" type="submit">Submit</Button>
            </form>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
`;

const Input = styled.input`
    border-radius: 4px;
`;

const Button = styled.button`
    background: #0d6efd;
`;

export default Login

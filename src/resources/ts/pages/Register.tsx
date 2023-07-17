import axios from 'axios';
import React, { Component, SyntheticEvent } from "react";
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import styled from 'styled-components';

class Register extends Component {
    state = {
        redirect: false
    }

    submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        // TODO: 登録機能は未完成
        await axios.post('http://localhost:8082/api/register',
            {
                name: '',
                email: '',
                password: '',
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log('エラー')
        })

        this.setState({redirect: true})

    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={'/login'} />
        }

        return(
            <FormWrapper>
                <form onSubmit={this.submit}>
                    <h1 className="h3 mb-3 fw-normal text-center">登録</h1>

                    <Input type="text" className="form-control mb-2" id="name"
                        placeholder="Name" required autoFocus
                        onChange={e => e.target.value}
                    />

                    <Input type="email" className="form-control mb-2" id="email"
                        placeholder="Email" required autoFocus
                        onChange={e => e.target.value}
                    />

                    <Input type="password" className="form-control mb-2" id="password"
                        placeholder="Password" required autoFocus
                        onChange={e => e.target.value}
                    />

                    <Input type="password" className="form-control mb-2" id="password-confirm"
                        placeholder="PasswordConfirm" required autoFocus
                        onChange={e => e.target.value}
                    />

                <div className="text-center">
                    <Link to="/login">ログイン画面に戻る</Link>
                </div>
                    <Button className="w-100 btn btn-lg btn-primary" type="submit">Submit</Button>
                </form>
            </FormWrapper>
        );
    }
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

export default Register

import React, {Component} from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import BackendClient from "./BackendClient";
import {User} from 'shared'

type AppState = {
    isLoggedIn: boolean
    user: User | null
}

export default class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLoggedIn: false,
            user: null
        }
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this)
    }

    async handleLoginFormSubmit(username: string, password: string) {
        let user: User|null = null
        try {
            user = await BackendClient.login(username, password)
        } catch (err) {
            console.log(err)
            return
        }
        this.setState(_ => ({
            isLoggedIn: true,
            user: user
        }))
    }

    render() {
        let row = <Row className="justify-content-center">
            <LoginForm onSubmit={this.handleLoginFormSubmit}/>
        </Row>;
        if(this.state.isLoggedIn) {
            row = <Row className="justify-content-center">
                <span>Logged in as {this.state.user?.email}</span>
            </Row>
        }
        return (
            <Container style={{padding: "10px"}}>
                {row}
            </Container>
        );
    }
}

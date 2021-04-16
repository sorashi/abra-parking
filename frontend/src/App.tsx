import React, {Component} from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";
import User from './shared/models/User'

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
    handleLoginFormSubmit(username: string, password: string) {
        console.log('logging in as', username, password)
        this.setState(state => ({
            isLoggedIn: true,
            user: new User(0, username, password, "role")
        }))
    }

    render() {
        let row = <Row className="justify-content-center">
            <LoginForm onSubmit={this.handleLoginFormSubmit}/>
        </Row>;
        if(this.state.isLoggedIn) {
            row = <Row className="justify-content-center">
                <span>Logged in as {this.state.user?.email ?? ""}</span>
            </Row>
        }
        return (
            <Container style={{padding: "10px"}}>
                {row}
            </Container>
        );
    }
}

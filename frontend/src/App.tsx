import React, {Component} from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";

type AppState = {
    isLoggedIn: boolean
    username: string | null,
    password: string | null
}

export default class App extends Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isLoggedIn: false,
            username: null,
            password: null
        }
        this.handleLoginFormSubmit = this.handleLoginFormSubmit.bind(this)
    }
    handleLoginFormSubmit(username: string, password: string) {
        console.log('logging in as', username, password)
        this.setState(_ => ({
            isLoggedIn: true,
            username: username,
            password: password
        }))
    }

    render() {
        let row = <Row className="justify-content-center">
            <LoginForm onSubmit={this.handleLoginFormSubmit}/>
        </Row>;
        if(this.state.isLoggedIn) {
            row = <Row className="justify-content-center">
                <span>Logged in as {this.state.username}</span>
            </Row>
        }
        return (
            <Container style={{padding: "10px"}}>
                {row}
            </Container>
        );
    }
}

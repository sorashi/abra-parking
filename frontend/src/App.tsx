import React, {Component} from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row} from "react-bootstrap";

export default class App extends Component {
    handleLoginFormSubmit(username: string, password: string) {
        console.log('logging in as', username, password)
    }

    render() {
        return (
            <Container style={{padding: "10px"}}>
                <Row className="justify-content-center">
                    <LoginForm onSubmit={this.handleLoginFormSubmit}/>
                </Row>
            </Container>
        );
    }
}

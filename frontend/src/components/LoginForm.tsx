import { Form, Button } from "react-bootstrap";
import {ChangeEvent, Component, FormEvent} from "react";

type LoginFormState = {
    username: string
    password: string
}

type LoginFormProps = {
    onSubmit: any
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    handleSubmit(event: FormEvent) {
        event.preventDefault()
        this.props.onSubmit(this.state.username, this.state.password)
    }

    handleChangeUsername(event: ChangeEvent<HTMLInputElement>) {
        this.setState(state => ({
            username: event.target.value ?? "",
            password: state.password
        }))
    }

    handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
        this.setState(state => ({
            username: state.username,
            password: event.target.value ?? ""
        }))
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId='loginFormUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type='plain' placeholder='username' onChange={this.handleChangeUsername} />
                </Form.Group>
                <Form.Group controlId='loginFormPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='password' onChange={this.handleChangePassword} />
                </Form.Group>
                <Button variant='primary' type='submit'>Submit</Button>
            </Form>
        )
    }
}
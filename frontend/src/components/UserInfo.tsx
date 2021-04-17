import {Component} from "react";
import {User} from "shared";
import {Table} from "react-bootstrap";

type UserInfoProps = {
    user: User | null
}

export default class UserInfo extends Component<UserInfoProps> {
    constructor(props: UserInfoProps) {
        super(props);
    }
    render() {
        return (<Table>
                <thead>
                    <th>id</th>
                    <th>email</th>
                    <th>role</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.user?.id}</td>
                        <td>{this.props.user?.email}</td>
                        <td>{this.props.user?.role}</td>
                    </tr>
                </tbody>
        </Table>)
    }
}
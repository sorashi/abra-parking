export default class User {
    public id: number;
    public email: string;
    public password: string;
    public role: string;
    constructor(id, email, password, role) {
        this.id = id
        this.email = email
        this.password = password
        this.role = role
    }
}

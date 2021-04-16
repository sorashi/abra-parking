import {User} from 'shared'

export default class BackendClient {
    private static readonly baseUrl = 'http://localhost:3001'
    static async login(username: string, password: string) : Promise<User> {
        return await fetch(`${BackendClient.baseUrl}/login`, {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (!data.ok) throw data.error
                let user = new User(0, null, null, null)
                Object.assign(user, data.data)
                return user
            })
    }
}
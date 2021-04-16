import User from './shared/models/User'

export default class BackendClient {
    private static readonly baseUrl = 'https://rezervace.flexibee.eu:5434'
    static async getUser(username: string, password: string) : Promise<User> {
        let headers = new Headers()
        headers.set('Authorization', BackendClient.getBasicAuthHeaderValue(username, password))
        return await fetch(`${BackendClient.baseUrl}/v2/c/rezervace6/uzivatel/(id=me()).json?detail=custom:kod,jmeno,prijmeni,role`, {
            method: "GET",
            headers: headers
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.ok) throw data.error
                return new User(data.id, data.jmeno, password, data.role)
            })
    }

    private static getBasicAuthHeaderValue(username: string, password: string) {
        let base64 = btoa(`${username}:${password}`) // switch to a library, btoa understands only ASCII
        return `Basic ${base64}`
    }
}
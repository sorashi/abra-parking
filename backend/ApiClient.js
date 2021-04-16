const axios = require('axios')
const User = require('../shared/models/User')

class ApiClient {
    static fetch = axios.create({
        baseURL: "https://rezervace.flexibee.eu:5434",
        headers: {
            'Accept': 'application/json'
        }
    })
    static baseUrl = "https://rezervace.flexibee.eu:5434"
    static async getMe(username, password) {
        let requestUrl = `${ApiClient.baseUrl}/v2/c/rezervace6/uzivatel/(id=me()).json?detail=custom:kod,jmeno,prijmeni,role`
        // { "winstrom": {"@version": "1.0", "success": "false", "message": "Bylo zadáno chybné uživatelské jméno či heslo." } }
        return await ApiClient.fetch.get(requestUrl, {
            headers: {
                'Authorization': ApiClient.getBasicAuthHeader(username, password)
            }
        })
            .then(res => res.data)
            .then(data => {
                let uzivatel = data.winstrom.uzivatel[0]
                let id = uzivatel.id
                let kod = uzivatel.kod
                let role = uzivatel.role
                return new User(id, kod, password, role)
            })
    }

    static getBasicAuthHeader(username, password) {
        let base64 = Buffer.from(`${username}:${password}`).toString('base64')
        return `Basic ${base64}`
    }
}

module.exports = ApiClient

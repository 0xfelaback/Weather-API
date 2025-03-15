const bcrypt = require('bcryptjs')

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {this.users = data}
}

const verifyUser = async function (apikey) {
    if (!apikey) return res.send('Please register for an API key')
    
    const matchAPIKey = async function (api_key, usersDB) {
        for (const person of usersDB.users) {
            const match = await bcrypt.compare(api_key, person.apiKey)
            if (match) {
                return person
            }
        }
        return null
    }
    const user = await matchAPIKey(apikey, usersDB)
    if (user) {
        return true
    } else {
        return false
    }


}

module.exports = {verifyUser}
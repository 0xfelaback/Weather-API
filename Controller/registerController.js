const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const fsPromises = require('fs').promises
const path = require('path')

const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) {this.users = data}
}

const handleNewUsers = async (req,res) => {
    const {user,email} = req.body
    if (!user || !email) return res.status(401).json({"message": "Either field is empty"})
    const duplicate = usersDB.users.find(person => person.username === user)
    if (duplicate) return res.status(401).json({"message": "user already exist"})
    try {
        const apiKey = crypto.randomBytes(32).toString('hex')
        const hashedKey = await bcrypt.hash(apiKey, 10)
        const newUser = {"username": user, "apiKey": hashedKey}
        usersDB.setUsers([...usersDB.users,newUser])
        await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'), JSON.stringify(usersDB.users))
        console.log(usersDB.users)
        res.status(200).json({"message": `New user ${user} created your API key is ${apiKey}`})
    } catch (e) {
        res.status(409).json({"error": e.message})
    }
}

module.exports = {handleNewUsers}
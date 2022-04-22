const userService = require("./../services/userService");

class userView{
    static createUser(payload){
        payload.username = this.username
        payload.name = this.name
        payload.id = this.id
        userService.create(this.id,this.username,this.name)
    }
}

module.exports = userView
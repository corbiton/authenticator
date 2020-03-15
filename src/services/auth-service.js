class AuthService {
    login (username="", password="") {
        // TODO: Implement login
        if(username && password){
            return `${username}` // TODO - logic for lgin
        }
        return true;
    }
}

module.exports = new AuthService();
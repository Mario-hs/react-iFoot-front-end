class Auth {
    async login(data, type_user) {
        await localStorage.setItem("type_user", type_user)
        await localStorage.setItem("user", JSON.stringify(data))
        await localStorage.setItem("status", true)
    }

    async updateUser(data) {
        await localStorage.setItem("user", JSON.stringify(data))
    }

    getUser() {
        let data = localStorage.getItem('user')
        return JSON.parse(data)
    }

    getStatus() {
        let status = localStorage.getItem('status')
        return status
    }

    getTypeUser() {
        let type_user = localStorage.getItem('type_user')
        return type_user
    }

    async logout() {
        await localStorage.clear()
        await localStorage.setItem("status", false)
    }

}

export default new Auth()
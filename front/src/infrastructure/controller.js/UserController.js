import apiHandler from "../APIHandler"

class UserController {

    async getAll() {
        var response = await apiHandler.get({query:'/users'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/users/' + props.id})
        return response;
    }

    async add(props) {
        var response = await apiHandler.post({query:'/users', body: props })
        return response;
    }

    async update(props) {
        var response = await apiHandler.patch({query:'/users/' + props.id, body: props.body })
        return response;
    }

    async delete(props) {
        var response = await apiHandler.patch({query:'/users/' + props.id })
        return response;
    }

    async login(props) {
        console.log(props.body)
        var response = await apiHandler.post({query:'/users/login', body: JSON.stringify(props.body)})
        return response;
    }
}

const userController = new UserController();
export default userController;
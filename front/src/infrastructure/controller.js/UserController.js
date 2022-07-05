import apiHandler from "../APIHandler"

class UserController {

    async getAll() {
        var response = await apiHandler.get({query:'/projects'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/projects/' + props.id})
        return response;
    }
}

const userController = new UserController();
export default userController;
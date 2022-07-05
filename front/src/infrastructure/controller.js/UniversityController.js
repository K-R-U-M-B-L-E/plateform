import apiHandler from "../APIHandler"

class UniversityController {

    async getAll() {
        var response = await apiHandler.get({query:'/universities'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/universities/' + props.id})
        return response;
    }

    async add(props) {
        var response = await apiHandler.post({query:'/universities', body: props })
        return response;
    }

    async update(props) {
        var response = await apiHandler.patch({query:'/universities/' + props.id, body: props.body })
        return response;
    }

    async delete(props) {
        var response = await apiHandler.patch({query:'/universities/' + props.id })
        return response;
    }
}

const universityController = new UniversityController();
export default universityController;
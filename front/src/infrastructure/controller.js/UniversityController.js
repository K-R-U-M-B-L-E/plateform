import apiHandler from "../APIHandler"

class UniversityController {

    async getAll() {
        var response = await apiHandler.get({query:'/projects'})
        return response;
    }

    async getById(props) {
        var response = await apiHandler.get({query:'/projects/' + props.id})
        return response;
    }
}

const universityController = new UniversityController();
export default universityController;
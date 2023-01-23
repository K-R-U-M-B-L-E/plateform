
class Success {
    constructor(data) {
        this.data = data
    }
}

class Error {
    constructor(message, data) {
        this.message=message,
        this.data=data
    }
}

export default class Resource {

    constructor(success, data) {
        this.succeed = success
        this.data = null
        
        if (data == null && success == false)
            this.data = "An unknown error occurred."
        else
            this.data = data
    }

    isSuccess() {
        return this.succeed
    }

    getData() {
        return this.data;
    }

    getMessage() {
        return this.data;
    }
}
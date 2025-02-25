class ApiResponse {
    constructor(stateCode, data, message = "Status"){
        this.stateCode = stateCode
        this.data = data
        this.message = message
        this.success = stateCode < 400
    }
}

export { ApiResponse }
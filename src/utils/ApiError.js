class ApiError extends Error {
    constructor(
        statusCode,
        Message= "Something wend wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = this.message
        this.success = false
        this.errors = errors

        if(statck){
            this.stack = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export{ApiError}
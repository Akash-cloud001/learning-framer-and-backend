const asyncHandler = (requestHandler) => {
    // here next is the middleware, there could be other parameter called as error, we can handle this using try catch block too
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }

}

export { asyncHandler }
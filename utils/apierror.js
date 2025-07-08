class ApiError extends Error {
  constructor(
    statusCode,
    message=" Something went wrong",
    errors=[],
    stactk = ""


  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.success = false;
    this.errors = errors;
    

    if(stack)
{
    this.stack = stack;

} 
else{
    Error.captureStackTrace(this, this.constructor);
    this.stack = new Error().stack;
    
} }
}

export { ApiError};

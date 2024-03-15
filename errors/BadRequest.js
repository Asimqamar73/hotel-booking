import CustomError from "./customError.js";

class BadRequest extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

export default BadRequest;

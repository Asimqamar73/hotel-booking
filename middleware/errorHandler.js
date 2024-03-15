const errorHandlerMiddleware = async (err, req, res, next) => {
  const errorResponse = {
    errorMessage:
      err.message || "Something went wrong. Please try again later.",
    errorStatusCode: err.statusCode || 500,
  };
  if (err.name === "ValidationError") {
    errorResponse.errorStatusCode = 400;
    errorResponse.errorMessage = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
  }
  return res
    .status(errorResponse.errorStatusCode)
    .send({ msg: errorResponse.errorMessage });
};

export default errorHandlerMiddleware;

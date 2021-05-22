class HTTPError extends Error {
  statusCode;

  constructor(statusCode, message) {
    super(message);
    this.name = "HTTPError";
    this.statusCode = statusCode;
  }
}

class BadRequestError extends HTTPError {
  constructor(message) {
    super(400, message || "Bad Request");
    this.name = "BadRequestError";
  }
}

class UnauthorizedError extends HTTPError {
  constructor(message) {
    super(401, message || "Unauthorized");
    this.name = "UnauthorizedError";
  }
}

class NotFoundError extends HTTPError {
  constructor(message) {
    super(404, message || "Not Found");
    this.name = "NotFoundError";
  }
}

class InternalServerError extends HTTPError {
  constructor(message) {
    super(404, message || "Internal Server Error");
    this.name = "InternalServerError";
  }
}

const ErrorHandler = (error, request, response, next) => {
  const { message, statusCode } = error;
  error.statusCode = statusCode || 500;
  if (!response.headersSent) response.status(error.statusCode);
  response.json({ message, status: error.statusCode });
  next();
};

const NotFoundHandler = (request, response, next) => {
  if (!response.headersSent) {
    response.status(404);
    response.json({ message: "Not Found", status: 404 });
  }
  next();
};

module.exports = {
  BadRequestError,
  UnauthorizedError,
  NotFoundError,
  InternalServerError,
  ErrorHandler,
  NotFoundHandler,
};

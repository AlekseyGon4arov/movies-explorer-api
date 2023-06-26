const BadRequest = require('./BadRequestErr');
const NotFound = require('./NotFoundErr');
const Unauthorized = require('./UnauthorizedErr');
const Conflict = require('./ConflictErr');
const Forbidden = require('./ForbiddenErr');

module.exports = {
  BadRequest,
  NotFound,
  Unauthorized,
  Conflict,
  Forbidden,
};

const Movie = require('../models/movie');
const customError = require('../errors');

module.exports = (req, res, next) => {
  Movie.findById({ _id: req.params._id })
    .then((movie) => {
      if (!movie) {
        return next(new customError.NotFound('Фильма с указанным id не существует'));
      }
      if (movie.owner.toHexString() !== req.user._id) {
        return next(new customError.Forbidden('У вас нет прав на удаление чужого фильма'));
      }
      return next();
    })
    .catch(next);
};

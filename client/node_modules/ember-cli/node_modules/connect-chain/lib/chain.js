module.exports = function () {
  // Empty chain
  if (arguments.length < 1)
    return function (req, res, next) {
      next();
    };

  var middlewares = Array.prototype.slice.call(arguments, 0);
  return function(req, res, next) {
    function createNext(middleware, i) {
      return function(err) {
        if (err) return next(err);

        var nextIndex = i + 1,
            nextMiddleware = middlewares[nextIndex] ? createNext(middlewares[nextIndex], nextIndex) : next;
        try {
          middleware(req, res, nextMiddleware);
        }
        catch (e) {
          next(e);
        }
      };
    }
    return createNext(middlewares[0], 0)();
  };
};

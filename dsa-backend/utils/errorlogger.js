const errorLogger = (err, req, res, next) => {
  if (err) {
    if (err.status) {
      res.status(err.status);
    } else {
      res.status(500);
    }
  }
  res.json({
    message: err.message,
    code: err.status ? err.status : 500,
  });
};

module.exports = errorLogger;

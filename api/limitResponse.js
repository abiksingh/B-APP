/* eslint-disable no-underscore-dangle */

module.exports = (req) => {
  const parsedLimit = parseInt(req.query._limit, 10);
  if (!parsedLimit || parsedLimit < 0 || parsedLimit > 10) {
    req.query = {
      ...req.query,
      _limit: '10',
    };
  }

  setTimeout(() => {
    req.next();
  }, Math.max(400, Math.random() * 1000));
};

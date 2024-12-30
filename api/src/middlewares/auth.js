export const auth = (req, res, next) => {
  const access_token =
    req.cookies &&
    req.cookies.access_token &&
    typeof req.cookies.access_token === 'string' &&
    encodeURIComponent(req.cookies.access_token);

  if (!access_token) {
    return res.status(401).send({ message: 'Access token is missing' });
  }

  req.access_token = access_token;

  return next();
};

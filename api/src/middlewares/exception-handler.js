import { isAxiosError } from 'axios';
import { ApiError } from '../common/exceptions/ApiError.js';

export const exceptionHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (isAxiosError(err) && err.response && err.response.status) {
    return res
      .status(err.response.status)
      .send({ message: err.response.data.message });
  }

  if (err instanceof ApiError) {
    return res.status(err.httpCode).send({ message: err.message });
  }

  return res.status(500).send({ message: err.message });
};

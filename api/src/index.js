import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { CLIENT_URL } from './common/constants/constants.js';
import { EXPRESS_PORT } from './config/config.js';
import { exceptionHandler } from './middlewares/exception-handler.js';
import { reposRouter } from './routes/repos.js';
import { userRouter } from './routes/users.js';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NODE_ENV === 'development' ? CLIENT_URL : null,
  })
);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'img-src': ["'self'", 'avatars.githubusercontent.com'],
      },
    },
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/repos', reposRouter);

app.use(exceptionHandler);

app.listen(EXPRESS_PORT, () =>
  console.log('We are listening port %d', EXPRESS_PORT)
);

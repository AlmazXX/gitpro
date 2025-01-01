import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import path from 'node:path';
import { CLIENT_URL } from './common/constants/constants.js';
import { getClientDir } from './common/utils/get-client-dir.js';
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
app.use('/api/users', userRouter);
app.use('/api/repos', reposRouter);

const clientDir = getClientDir();
app.use(express.static(clientDir));
app.get('*', (_, res) => {
  res.sendFile(path.join(clientDir, 'index.html'));
});
app.use(exceptionHandler);

app.listen(EXPRESS_PORT, () =>
  console.log('We are listening port %d', EXPRESS_PORT)
);

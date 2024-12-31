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
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', userRouter);
app.use('/api/repos', reposRouter);
app.use(exceptionHandler);

app.listen(EXPRESS_PORT, () =>
  console.log('We are listening port %d', EXPRESS_PORT)
);

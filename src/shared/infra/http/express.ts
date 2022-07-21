import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

import { AppError } from '../../errors/AppError';
import { router } from './routes';

export const app = express();

app.use(express.json());

const log = fs.createWriteStream(path.join(__dirname, 'logs.txt'), {
  flags: 'a',
});

export function load() {
  const fiBuffer = fs.readFileSync(path.join(__dirname, 'logs.txt'));
  const contentJson = fiBuffer.toString();
  return contentJson;
}

export function del() {
  const dele = fs.writeFile(
    path.join(__dirname, 'logs.txt'),
    '',
    function (err) {
      if (err) throw err;
      console.log('Salvo!');
    }
  );

  return dele;
}

app.use(morgan(':method :url :status', { stream: log }));
app.use(cors());

app.use(router);
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      statues: 'error',
      message: `Internal Server error - ${err.message}`,
    });
  }
);

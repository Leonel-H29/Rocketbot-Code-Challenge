import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import pkg from 'lodash';
const { get } = pkg;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

const jwtSecret = get(process.env, 'JWT_SECRET');
const port = Number(get(process.env, 'PORT', 3000));

export { jwtSecret, port };

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import CryptoJS from 'crypto-js/core';

import { encrypt } from './index';

dotenv.config();

const { ENCRYPT_HASH_KEY, ENCRYPT_IV_KEY } = process.env;

const KEY = CryptoJS.enc.Hex.parse(ENCRYPT_HASH_KEY);
const IV = CryptoJS.enc.Hex.parse(ENCRYPT_IV_KEY);
const FILE_PATH = path.resolve(process.cwd(), 'appConfig.json');

const json = fs.readFileSync(FILE_PATH, 'utf8');
const outputData = JSON.parse(json);

fs.writeFileSync(
  FILE_PATH,
  JSON.stringify({
    ...outputData,
    __DM_API_KEY__: encrypt(json, KEY, IV),
  }, null, 2),
);

console.log('Your __DM_API_KEY__ is success generated 🎉🎉🎉');

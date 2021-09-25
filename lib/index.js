import CryptoJS from 'crypto-js/core';
import 'crypto-js/aes';

export const encrypt = (string, key, iv) => CryptoJS.AES
  .encrypt(string, key, { iv })
  .toString();

export const decrypt = (encrypted, key, iv) => CryptoJS.AES
  .decrypt(encrypted, key, { iv })
  .toString(CryptoJS.enc.Utf8);

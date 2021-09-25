import CryptoJS from 'crypto-js/core';
import 'crypto-js/aes';

export const encrypt = (string, key, iv) => CryptoJS.AES
  .encrypt(
    string,
    CryptoJS.enc.Hex.parse(key),
    { iv: CryptoJS.enc.Hex.parse(iv) },
  )
  .toString();

export const decrypt = (encrypted, key, iv) => CryptoJS.AES
  .decrypt(
    encrypted,
    CryptoJS.enc.Hex.parse(key),
    { iv: CryptoJS.enc.Hex.parse(iv) },
  )
  .toString(CryptoJS.enc.Utf8);

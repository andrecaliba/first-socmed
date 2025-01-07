import CryptoJS from 'crypto-js';

export const encrypt = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
}

export const decrypt = (data, key) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
    if(bytes.sigBytes > 0) {
      return bytes.toString(CryptoJS.enc.Utf8);
    }
  } catch(err) {
    throw new Error("Failed to decrypt data");
  }
}

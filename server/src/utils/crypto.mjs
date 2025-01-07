import CryptoJS from 'crypto-js';

export const encrypt = (data, key) => {
  return CryptoJS.AES.encrypt(data, key).toString();
}

export const decrypt = (data, key) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, key);
    if(bytes.sigBytes > 0) {
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    }
  } catch(err) {
    console.log(err.message);
    throw new Error("Failed to decrypt data");
  }
}

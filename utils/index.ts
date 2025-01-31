import JSEncrypt from 'jsencrypt';


export function encryptText(plainText: string) {

    if(!plainText) return plainText
    const encryptor = new JSEncrypt();
    const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY 
    if(!key) throw new Error('key no found')
    encryptor.setPublicKey(key);
    const encrypted = encryptor.encrypt(plainText);
  
    if (!encrypted) {
      throw new Error('Encryption failed. Check your public key format and the message.');
    }
  
    return encrypted;
  }
export async function encryptWithPublicKey(publicKeyPem: string, data: string | undefined) {

    const publicKeyBuffer = await window.crypto.subtle.importKey(
        "spki",
        pemToArrayBuffer(publicKeyPem),
        { name: "RSA-OAEP", hash: "SHA-256" },
        false,
        ["encrypt"]
    );


    const encodedData = new TextEncoder().encode(data);


    const encryptedData = await window.crypto.subtle.encrypt(
        { name: "RSA-OAEP" },
        publicKeyBuffer,
        encodedData
    );


    return arrayBufferToBase64(encryptedData);
}


export function pemToArrayBuffer(pem: string) {
    const base64 = pem.replace(/(-----(BEGIN|END) PUBLIC KEY-----|\n)/g, "");
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}


export function arrayBufferToBase64(buffer: ArrayBuffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

export  const publicKey = process.env.NEXT_PUBLIC_BACKEND_PUBLIC_KEY as string


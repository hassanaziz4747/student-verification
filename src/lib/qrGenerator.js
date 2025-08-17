// Utility to generate QR codes with secure URLs: src/lib/qrGenerator.js
import { generateSecureUrl } from './urlSecurity.js';

export function generateQRData(serial, baseUrl = 'https://your-domain.com') {
  const secureUrl = generateSecureUrl(serial);
  return `${baseUrl}${secureUrl}`;
}

// Example usage:
// const qrData = generateQRData('12345');
// console.log(qrData); // https://your-domain.com/certificate/12345-a1b2c3d4e5f6g7h8
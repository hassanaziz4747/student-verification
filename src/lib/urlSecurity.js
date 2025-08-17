// src/lib/urlSecurity.js
import { createHash } from 'crypto';

// Generate a secure token from serial number
export function generateSecureToken(serial) {
  const secret = process.env.URL_SECRET || 'your-secret-key-here'; // Add this to your .env
  const hash = createHash('sha256');
  hash.update(serial + secret);
  return hash.digest('hex').substring(0, 16); // Use first 16 chars
}

// Verify if a token matches the serial
export function verifyToken(serial, token) {
  return generateSecureToken(serial) === token;
}

// Generate complete secure URL
export function generateSecureUrl(serial) {
  const token = generateSecureToken(serial);
  return `/certificate/${serial}-${token}`;
}

// Parse secure URL to extract serial and token
export function parseSecureUrl(urlParam) {
  const parts = urlParam.split('-');
  if (parts.length < 2) return null;
  
  const serial = parts[0];
  const token = parts.slice(1).join('-'); // In case serial has hyphens
  
  return { serial, token };
}


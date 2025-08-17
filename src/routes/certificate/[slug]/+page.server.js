// Updated routes/certificate/[slug]/+page.server.js
import { error } from '@sveltejs/kit';
import { getStudentBySerial } from '$lib/studentData.js';
import { parseSecureUrl, verifyToken } from '$lib/urlSecurity.js';

export async function load({ params }) {
  const { slug } = params;
  
  if (!slug) {
    throw error(400, 'Certificate URL is required');
  }
  
  // Parse the secure URL
  const parsed = parseSecureUrl(slug);
  if (!parsed) {
    throw error(404, 'Invalid certificate URL format');
  }
  
  const { serial, token } = parsed;
  
  // Verify the token
  if (!verifyToken(serial, token)) {
    throw error(403, 'Invalid or expired certificate link');
  }
  
  // Get student data
  const student = getStudentBySerial(serial);
  
  if (!student) {
    throw error(404, 'Student certificate not found');
  }
  
  return {
    student
  };
}


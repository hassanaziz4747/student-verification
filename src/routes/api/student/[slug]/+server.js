// Updated API endpoint: routes/api/student/[slug]/+server.js
import { json } from '@sveltejs/kit';
import { getStudentBySerial } from '$lib/studentData.js';
import { parseSecureUrl, verifyToken } from '$lib/urlSecurity.js';

export async function GET({ params }) {
  const { slug } = params;

  if (!slug) {
    return json({ error: 'Certificate URL is required' }, { status: 400 });
  }

  // Parse the secure URL
  const parsed = parseSecureUrl(slug);
  if (!parsed) {
    return json({ error: 'Invalid certificate URL format' }, { status: 400 });
  }

  const { serial, token } = parsed;

  // Verify the token
  if (!verifyToken(serial, token)) {
    return json({ error: 'Invalid or expired certificate link' }, { status: 403 });
  }

  // Get student data
  const student = getStudentBySerial(serial);

  if (!student) {
    return json({ error: 'Student certificate not found' }, { status: 404 });
  }

  return json(student);
}


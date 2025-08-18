import { json } from '@sveltejs/kit';
import { getStudentBySerial } from '$lib/studentData.js';

export async function GET({ params }) {
    const { serial } = params;

    if (!serial) {
        return json({ error: 'Serial number is required' }, { status: 400 });
    }

    const student = getStudentBySerial(serial);

    if (!student) {
        return json({ error: 'Student not found' }, { status: 404 });
    }

    return json(student);
}
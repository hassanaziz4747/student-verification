import { json } from '@sveltejs/kit';
import { getStudentByRegistrationNumber } from '$lib/studentData.js';

export async function GET({ params }) {
    const { registration } = params;

    if (!registration) {
        return json({ error: 'Registration number is required' }, { status: 400 });
    }

    const student = getStudentByRegistrationNumber(registration);

    if (!student) {
        return json({ error: 'Student not found' }, { status: 404 });
    }

    return json(student);
}
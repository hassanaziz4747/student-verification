import { error } from '@sveltejs/kit';
import { getStudentBySerial } from '$lib/studentData.js';

export async function load({ params }) {
    const { serial } = params;

    if (!serial) {
        throw error(400, 'Serial number is required');
    }

    const student = getStudentBySerial(serial);

    if (!student) {
        throw error(404, 'Student not found');
    }

    return {
        student
    };
}
import { readFileSync } from 'fs';
import { join } from 'path';

let studentsCache = null;

export function loadStudentData() {
    if (studentsCache) return studentsCache;

    try {
        const csvPath = join(process.cwd(), 'static', 'qr-data.csv');
        const csvContent = readFileSync(csvPath, 'utf-8');

        // Simple CSV parsing - split by lines and then by tabs
        const lines = csvContent.trim().split('\n');
        const headers = lines[0].split('\t').map(h => h.trim());

        console.log('Headers found:', headers); // Debug log

        studentsCache = new Map();

        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split('\t').map(v => v?.trim() || '');

            if (values.length >= headers.length) {
                const student = {
                    serial: values[0],
                    registrationNumber: values[1],
                    studentName: values[2],
                    fatherName: values[3],
                    course: values[4],
                    courseContent: values[5]?.replace(/"/g, ''), // Remove quotes
                    age: values[6],
                    grade: values[7]
                };

                if (student.serial) {
                    studentsCache.set(student.serial, student);
                    console.log(`Added student ${student.serial}: ${student.studentName}`); // Debug log
                }
            }
        }

        console.log(`Loaded ${studentsCache.size} students`); // Debug log
        return studentsCache;
    } catch (error) {
        console.error('Error loading student data:', error);
        return new Map();
    }
}

export function getStudentBySerial(serial) {
    const students = loadStudentData();
    const student = students.get(serial.toString());
    console.log(`Looking for serial ${serial}, found:`, student); // Debug log
    return student || null;
}

// src/routes/api/student/[serial]/+server.js
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
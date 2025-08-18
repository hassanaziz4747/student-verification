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

export function getStudentByRegistrationNumber(registrationNumber) {
    const students = loadStudentData();
    for (const student of students.values()) {
        if (student.registrationNumber === registrationNumber) {
            console.log(`Found student by registration ${registrationNumber}:`, student);
            return student;
        }
    }
    console.log(`No student found with registration ${registrationNumber}`);
    return null;
}


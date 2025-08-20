import { readFileSync } from 'fs';
import { join } from 'path';

let studentsCache = null;

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    result.push(current.trim());
    return result;
}

export function loadStudentData() {
    if (studentsCache) return studentsCache;

    try {
        const csvPath = join(process.cwd(), 'static', 'qr-data.csv');
        const csvContent = readFileSync(csvPath, 'utf-8');

        // Simple CSV parsing - split by lines and then by commas (handling quoted fields)
        const lines = csvContent.trim().split('\n');
        const headers = parseCSVLine(lines[0]);

        console.log('Headers found:', headers); // Debug log

        studentsCache = new Map();

        for (let i = 1; i < lines.length; i++) {
            const values = parseCSVLine(lines[i]);

            if (values.length >= headers.length) {
                const student = {
                    serial: values[0],
                    registrationNumber: values[1],
                    studentName: values[2],
                    fatherName: values[3],
                    course: values[4],
                    courseContent: values[5], // Quotes already handled by parseCSVLine
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


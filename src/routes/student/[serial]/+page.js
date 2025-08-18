import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const { serial } = params;
    
    try {
        const response = await fetch(`/api/student/${serial}`);
        
        if (response.ok) {
            const student = await response.json();
            return { student };
        } else {
            throw error(404, 'Student not found');
        }
    } catch (err) {
        throw error(404, 'Student not found');
    }
}
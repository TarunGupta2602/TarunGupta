import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        const filePath = path.join(process.cwd(), 'formData.txt');

        const dataToSave = { name, email, message };

        fs.appendFile(filePath, JSON.stringify(dataToSave) + '\n', (err) => {
            if (err) {
                return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
            }
        });

        return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to save data' }, { status: 500 });
    }
}

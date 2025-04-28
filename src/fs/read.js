import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    try{
        const fileData = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(fileData);
    } catch {
        throw new Error('FS operation failed');
    }
};

await read();
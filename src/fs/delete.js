import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try{
        await fs.rm(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();
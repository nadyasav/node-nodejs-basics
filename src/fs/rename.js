import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldFilePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const newFilePath = path.resolve(__dirname, 'files', 'properFilename.md');

    try{
        await fs.rename(oldFilePath, newFilePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
    const FILE_TEXT = 'I am fresh and young';
    const filePath = path.resolve(__dirname, 'files', 'fresh.txt');

    try{
        await fs.writeFile(filePath, FILE_TEXT, { flag: 'wx', encoding: 'utf-8' });
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();
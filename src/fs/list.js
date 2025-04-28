import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const filesFolderPath = path.resolve(__dirname, 'files');

    try{
        const filesArr = await fs.readdir(filesFolderPath);
        filesArr.forEach((fileName) => {
            console.log(fileName);
        })
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();
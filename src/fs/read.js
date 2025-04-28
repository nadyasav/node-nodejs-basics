import path from 'node:path';
import fs from 'node:fs/promises';
import { FS_ERROR_TEXT } from '../constants.js';
import { getDirName } from '../utils.js';

const __dirname = getDirName(import.meta.url);

const read = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

    try{
        const fileData = await fs.readFile(filePath, { encoding: 'utf8' });
        console.log(fileData);
    } catch {
        throw new Error(FS_ERROR_TEXT);
    }
};

await read();